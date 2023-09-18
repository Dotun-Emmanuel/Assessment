import { Button } from "@mantine/core";
import cup from "../../public/cup.png";
import plate from "../../public/plate.png";
import { useFetch } from "@/libs/specialFetch";
import { usePost } from "@/libs/post";

function SecondSection({ id, type, food, price, total }: any) {
  const { mutate, isLoading } = usePost({
    url: "/api/add_to_cart/",
    callback: close,
    invalidateQuery: [],
  });

  function addToCart() {
    const payLoad = {
      product_id: id,
      quantity: 1,
    };
    mutate(payLoad);
  }
  return (
    <div className="bg-[#EFECE5] px-4 pt-4 md:my-20 pb-14">
      <div className="flex flex-col gap-5">
        <img src={plate.src} className="w-[183px] mx-auto" alt={""} />
        <p className="text-[#000000] text-xs font-medium mt-8 text-center">
          {type}
        </p>
        <p className="text-[20px] font-extrabold">{food}</p>
        <p className="text-[#A30551] text-2xl font-black mt-6 text-center">
          {price}
        </p>
        <p className="text-[#A30551] text-xs font-normal text-center">
          {total}
        </p>
        <Button
          onClick={() => {
            addToCart();
          }}
          className="bg-[#771132] hover:bg-[#771132] w-max justify-center self-center"
          type="submit"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
export default function SecondSectionCard() {
  const { data } = useFetch({ url: "/api/best_seller/" });
  return (
    <div className="md:flex md:gap-28 min-[300px]:grid md:flex-row self-center items-center gap-10">
      {data?.map(
        (item: {
          id: number;
          image: any;
          product_type: any;
          new_price: any;
          name: any;
          svg_image: any;
          origin_type: any;
        }) => (
          <SecondSection
            key={item.id}
            type={item.origin_type}
            food={item.name}
            Icon={item.svg_image}
            price={item.new_price}
            total={item.product_type}
            id={item.id}
          />
        )
      )}
    </div>
  );
}

export function MiniWord() {
  return (
    <div className="flex flex-col gap-4 justify-center min-[300px]:text-center md:text-start mb-8">
      <p className="text-[32px] font-normal leading-normal">BESTSELLERS</p>
      <p className="text-base font-normal w-96 text-center items-center self-center">
        Featuring our best products sourced from the best locations all around
        the world.
      </p>
      <Button className="bg-[#771132] hover:bg-[#771132] w-max min-[300px]:hidden md:block">
        Check it out
      </Button>
    </div>
  );
}
