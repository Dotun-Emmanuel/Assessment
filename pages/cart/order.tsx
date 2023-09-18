import { useEffect, useState } from "react";
import { useFetch } from "@/libs/specialFetch";
import bowl from "../../public/bowl.png";
import { Button } from "@mantine/core";
import { usePost } from "@/libs/post";
import Link from "next/link";

interface CartItem {
  quantity: number;
  product: any;
  id: number;
}

export default function Order() {
  const { data } = useFetch({ url: "/api/list-cart-items/" });
  const [cartItems, setCartItem] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const { mutate, isLoading } = usePost({
    url: "/api/remove_from_cart/",
    // callback: close,
    invalidateQuery: [],
  });

  function removeFromCart(id: number) {
    const payLoad = {
      product_id: id,
    };
    mutate(payLoad);
  }

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
    const total = cartItems?.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item?.product?.new_price) * item?.quantity,
      0
    );
    setTotalPrice(total?.toFixed(2));
  }, [cartItems]);

  return (
    <div className="pt-14">
      <div className="mx-auto w-[80%]">
        <p className="text-[40px] font-extrabold border-b-[0.5px] pb-4">
          YOUR CART
        </p>
        {cartItems?.map((item: CartItem, index: number) => {
          // console.log(cartItems, "show me")
          return (
            <div
              className=" pt-4 pb-14 text-center border-b-[0.5px]"
              key={index}
            >
              <div className="flex justify-between items-center">
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
                    onClick={() => {
                      removeFromCart(item?.id);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-2xl text-end mr-12 mt-8">SUB TOTAL:${totalPrice}</p>
      <div className="flex gap-3 justify-end mr-8 mt-8">
        <Link href="/shop">
          <Button variant="default" size="lg">
            Continue Shopping
          </Button>
        </Link>
        <Link href="/payment">
          <Button
            className="bg-[#771132] hover:bg-[#771132] h-12"
            type="submit"
          >
            Check out
          </Button>
        </Link>
      </div>
    </div>
  );
}
