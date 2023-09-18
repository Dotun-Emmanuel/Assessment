import { useFetch } from "@/libs/specialFetch";
import plate from "../../public/plate.png";
import Link from "next/link";
import { Button } from "@mantine/core";
import order from "../../public/order.png";
import { usePost } from "@/libs/post";

export default function WishList() {
  const { data } = useFetch({ url: "/api/list-wishlist-items/" });
  const { mutate, isLoading } = usePost({
    url: "/api/add_to_cart/",
    invalidateQuery: [],
  });

  function addToCart(id: number) {
    const payLoad = {
      product_id: id,
      quantity: 1,
    };
    mutate(payLoad);
  }

  return (
    <div>
      {data === 0 ? (
        <div className="flex flex-col gap-6">
          <img src={order.src} className="w-[200px] mx-auto" />
          <p className="text-2xl text-center">
            You don’t have any item in your wish lists.
          </p>
          <p className="text-base text-center">
            Please explore our catalogues to see our current offers.
          </p>
          <Link href="/" className="self-center items-center">
            <Button className="bg-[#771132] hover:bg-[#771132] h-10">
              Explore
            </Button>
          </Link>
        </div>
      ) : (
        data?.results?.map(
          (item: { id: number; product: any; item_price: any }) => {
            // console.log(data, "done");
            return (
              <div
                className="grid grid-cols-4 items-center"
                key={item.product.name}
              >
                <img src={plate.src} className="w-[80px] mx-auto" />
                <p>{item.product.name}</p>
                <p className="text-[#121212] text-base font-extrabold">
                  ${item.item_price}
                </p>
                <Button
                  className="bg-[#771132] hover:bg-[#771132]"
                  type="submit"
                  onClick={() => {
                    addToCart(item?.id);
                  }}
                >
                  Order
                </Button>
              </div>
            );
          }
        )
      )}
    </div>
  );
}
