import { useEffect, useState } from "react";
import { useFetch } from "@/libs/specialFetch";
import bowl from "../../public/bowl.png";
import { Button } from "@mantine/core";

interface CartItem {
  quantity: number;
  product: any;
}

export default function Order() {
  const { data } = useFetch({ url: "/api/list-cart-items/" });
  const [cartItems, setCartItem] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<any>(0);

  useEffect(() => {
    if (data) {
      const items = data.results || data.items;
      setCartItem(items);
    }
  }, [data]);

  const increment = (index: number) => {
    setCartItem((prev) =>
      prev.map((item: CartItem, i: number) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1,
              product: {
                ...item.product,
                new_price: (
                  parseFloat(item.product.new_price) *
                  (item.quantity + 1)
                ).toFixed(2),
              },
            }
          : item
      )
    );
  };

  const decrement = (index: number) => {
    setCartItem((prev) =>
      prev.map((item: CartItem, i: number) =>
        i === index && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              product: {
                ...item.product,
                new_price: (
                  parseFloat(item.product.new_price) / item.quantity
                ).toFixed(2),
              },
            }
          : item
      )
    );
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item.product.new_price) * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2)); 
  }, [cartItems]);

  return (
    <div className="pt-14">
      <div className="">
        {cartItems.map((item: CartItem, index: number) => {
          return (
            <div className=" pt-4 pb-14 text-center" key={index}>
              <div className="flex w-[80%] mx-auto justify-between items-center">
                <img
                  src={bowl.src}
                  className="w-[183px]"
                  alt={`Product ${index}`}
                />
                <div>
                  <p className="text-[20px] font-extrabold">
                    {item?.product?.name}
                  </p>
                  <div className="flex gap-3 border-[1px] mx-auto w-max px-2 mt-2">
                    <button
                      onClick={() => {
                        increment(index); 
                      }}
                    >
                      +
                    </button>
                    <p>{item?.quantity}</p>
                    <button
                      onClick={() => {
                        decrement(index); 
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-black mt-6">
                    {item?.product?.new_price}
                  </p>
                  <Button
                    variant="subtle"
                    className="text-[#CA1818] hover:bg-transparent"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-2xl text-end mr-12">SUB TOTAL:${totalPrice}</p>
      <div className="flex gap-3 justify-end mr-8">
        <Button variant="default">Continue Shopping</Button>
        <Button className="bg-[#771132] hover:bg-[#771132]" type="submit">
          Check out
        </Button>
      </div>
    </div>
  );
}
