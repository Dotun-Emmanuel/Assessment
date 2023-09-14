import { Button } from "@mantine/core";
import bowl from "../../public/bowl.png";
import { useFetch } from "@/libs/specialFetch";
import { usePost } from "@/libs/post";

function ThirdSection({ id, food, price, total }: any) {
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
    <div className="bg-[#EFECE5] px-4 pt-4 pb-14 w-max mb-14">
      <div className="flex flex-col gap-5">
        <img src={bowl.src} className="w-[183px] mx-auto" />
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
function ThirdSectionCard() {
  const { data } = useFetch({ url: "/api/featured_product/" });

  return (
    <div className=" w-[80%] mx-auto">
      <p className="text-[#121212] text-[32px] font-extrabold pt-14 pb-[74px]">
        FEATURED PRODUCTS
      </p>
      <div className=" grid grid-cols-3">
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
            <ThirdSection
              key={item.id}
              type={item?.origin_type}
              food={item?.name}
              Icon={item?.svg_image}
              price={item?.new_price}
              total={item?.product_type}
              id={item.id}
            />
          )
        )}
      </div>
    </div>
  );
}
export default ThirdSectionCard;
