import { _axios } from "@/libs/axios";
import { usePost } from "@/libs/post";
import TextInput from "@/components/form/textInput";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AxiosResponse } from "axios";
import { CallCalling, Facebook, Instagram, Sms, Whatsapp } from "iconsax-react";

function Footer() {
  const { mutate, isLoading } = usePost({
    url: "/api/subscribe/",
    callback,
    invalidateQuery: [],
  });

  const form = useForm({
    initialValues: {
      email: "",
    },
  });
  function submit(values: { email: string }) {
    const payload = {
      ...values,
      email: values.email,
    };
    mutate(payload);
  }

  function callback(response: AxiosResponse) {
    const res = response?.data;
    close();
    form.reset();
  }

  return (
    <div className="mt-12">
      <div className="bg-[#F1E7EB] py-8">
        <div className="w-[80%] flex items-center mx-auto gap-28">
          <p className="text-[#121212] text-base font-normal">
            Sign up for our newsletter to receive discounts, events and more.
          </p>
          <form className="flex" onSubmit={form.onSubmit(submit)}>
            <TextInput
              name="email"
              form={form}
              placeholder="Enter your e-mail"
            />
            <Button
              className="bg-[#771132] hover:bg-[#771132] ml-[-8px] h-[46px]"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="bg-[#FCF9FB] py-10">
        <div className="flex justify-between w-[80%] mx-auto">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <CallCalling size="32" color="#121212" variant="Outline" />
              <div>
                <p>070000CALLSNACKHOUSE</p>
                <p>(+2349065835111)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sms size="32" color="#121212" variant="Outline" />
              <p>contact-us@snackhouse.com.ng</p>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size="32" color="#121212" variant="Outline" />
              <Facebook size="32" color="#121212" variant="Outline" />
              <Whatsapp size="32" color="#121212" variant="Outline" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <strong>Links</strong>
            <p>Shops</p>
            <p>About us</p>
            <p>Wholesales</p>
            <p>Delivery and shipping</p>
          </div>
          <div className="flex flex-col gap-5">
            <strong>More Info</strong>
            <p>Giftcards</p>
            <p>Careers</p>
            <p>Privacy policy</p>
            <p>Updates</p>
            <p>Security policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
