import { Button, Tabs, TextInput } from "@mantine/core";
import order from "../../public/order.png";
import { useFetch } from "@/libs/specialFetch";
import plate from "../../public/plate.png";

export default function ProfileTab() {
  const { data } = useFetch({ url: "/api/list-wishlist-items/" });
  return (
    <div>
      <p className="text-2xl">PROFILE</p>
      <img src={plate.src} className="w-[150px]" />
      <Tabs defaultValue="gallery" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="profile">
            <Button variant="default">Profile Information</Button>
          </Tabs.Tab>
          <Tabs.Tab value="order">
            <Button variant="default">Order History</Button>
          </Tabs.Tab>
          <Tabs.Tab value="wish">
            <Button variant="default">Wish List</Button>
          </Tabs.Tab>{" "}
          <Tabs.Tab value="password">
            <Button variant="default">Change Password</Button>
          </Tabs.Tab>
          <Tabs.Tab value="log">
            <Button variant="default">Log out</Button>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="profile">
          <div>
            <p className="text-2xl">Profile Info</p>
            <TextInput className="w-[30%] mt-6 mb-6" />{" "}
            <TextInput className="w-[30%] mb-6" />{" "}
            <TextInput className="w-[30%] mb-6" />{" "}
            <TextInput className="w-[30%] mb-12" />
            <Button
              className="bg-[#771132] hover:bg-[#771132] w-[30%]"
              type="submit"
            >
              Update Profile
            </Button>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="order">
          <div className="flex flex-col gap-6">
            <img src={order.src} className="w-[200px]" />
            <p className="text-2xl">You don’t have any orders yet.</p>
            <p className="text-base">
              Please explore our catalogues to see our current offers.
            </p>
            <Button className="bg-[#771132] hover:bg-[#771132] w-max ml-12">
              Explore
            </Button>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="wish">
          {data?.results.map((item: { product: any; item_price: any }) => {
            return (
              <div className="text-center">
                <img src={plate.src} className="w-[100px] mx-auto" />
                <p>{item.product.name}</p>
                <p>{item.item_price}</p>
              </div>
            );
          })}
        </Tabs.Panel>
        <Tabs.Panel value="password">
          <div>
            <p className="text-2xl">Update Password</p>
            <TextInput
              className="w-[30%] mt-6 mb-6"
              placeholder="Old Password"
            />{" "}
            <TextInput className="w-[30%] mb-6" placeholder="New Password" />{" "}
            <TextInput
              className="w-[30%] mb-6"
              placeholder="Confirm New Password"
            />{" "}
            <Button
              className="bg-[#771132] hover:bg-[#771132] w-[30%]"
              type="submit"
            >
              Update Password
            </Button>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="log">Settings tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
}
