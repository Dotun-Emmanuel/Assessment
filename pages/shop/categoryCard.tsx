import { Select } from "@mantine/core";
import { Button } from "@mantine/core";
import { useFetch } from "@/libs/specialFetch";
import { usePost } from "@/libs/post";

function ThirdSection({ id, Icon, type, old, food, price, total }: any) {
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
    <div className="bg-[#EFECE5] pt-4 pb-14 text-center">
      <div className="flex flex-col gap-5">
        <img src={Icon.src} className="w-[183px] mx-auto" />
        <p className="text-[#000000] text-xs font-medium mt-8 text-center">
          {type}
        </p>
        <p className="text-[20px] font-extrabold">{food}</p>
        <p className="font-black mt-6 text-center line-through">{old}</p>
        <p className="text-[#A30551] text-2xl font-black mt-3 text-center">
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
    <div className="mx-auto pt-14 w-[80%]">
      <div className=" grid grid-cols-3 gap-5">
        {data?.map(
          (item: {
            id: number;
            image: any;
            product_type: any;
            new_price: any;
            old_price: any;
            name: any;
            svg_image: any;
            origin_type: any;
          }) => (
            <ThirdSection
              type={item?.origin_type}
              food={item?.name}
              Icon={item?.svg_image}
              old={item?.old_price}
              price={item?.new_price}
              total={item?.product_type}
              id={item?.id}
              key={item.id}
            />
          )
        )}
      </div>
    </div>
  );
}

function CategoryCard() {
  return (
    <div className="mt-12">
      <div className="w-[80%] flex mx-auto justify-between">
        <Select
          label="CATEGORY"
          placeholder="All products"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />{" "}
        <Select
          label="SORT BY"
          placeholder="New products"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
      </div>
      <ThirdSectionCard />
    </div>
  );
}

export default CategoryCard;
