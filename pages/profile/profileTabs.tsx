import { Button, Tabs, TextInput } from "@mantine/core";
import order from "../../public/order.png";
import man from "../../public/man.png";
import ChangePassword from "./changePasswordTab";
import { useLogout } from "@/libs/logOut";
import Link from "next/link";
import WishList from "./wishList";

export default function ProfileTab() {
  const logout = useLogout();
  return (
    <div className="mx-auto w-[80%] ">
      <div className="md:mx-auto w-[94%] flex md:flex-col min-[300px]:flex-row gap-4 my-10">
        <img src={man.src} className="w-[140px]" />
        <div className="self-center">
          <p>Ogunnaike Iswat</p>
          <p className="mb-4">ogunnaikeiswat@gmail.com</p>
        </div>
      </div>
      <Tabs
        defaultValue="password"
        orientation="vertical"
        className="flex justify-between"
      >
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
            <Button variant="default" onClick={logout}>
              Log out
            </Button>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="profile">
          <div>
            <p className="text-2xl">Profile Info</p>
            <TextInput className=" my-6" />
            <TextInput className=" mb-6" />
            <TextInput className=" mb-6" />
            <TextInput className=" mb-12" />
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
            <img src={order.src} className="w-[200px] mx-auto" />
            <p className="text-2xl text-center">
              You don’t have any orders yet.
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
        </Tabs.Panel>
        <Tabs.Panel value="wish">
          <WishList />
        </Tabs.Panel>
        <Tabs.Panel value="password">
          <ChangePassword />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
