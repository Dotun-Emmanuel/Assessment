import Header from "../landing-page/header";
import TextInput from "@/components/form/textInput";
import PasswordInput from "@/components/form/passwordInput";
import { usePost } from "@/libs/post";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { CallCalling, Facebook, Instagram, Sms, Whatsapp } from "iconsax-react";

function SignUp() {
  const { mutate, isLoading } = usePost({
    url: "/accounts/api/sign_up/",
    callback,
    invalidateQuery: [],
  });

  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      email: "",
    },
  });
  function submit(values: {
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
    email: string;
  }) {
    const payload = {
      ...values,
      first_name: values.first_name.split(" ").slice(1).join(""),
      last_name: values.first_name.split(" ").slice(0, -1).join(""),
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
    };
    mutate(payload);
  }

  function callback() {
    close();
    form.reset();
  }

  return (
    <div className="h-screen grid grid-rows-[auto_auto_1fr] overflow-auto">
      <Header />
      <form
        className="pt-12 pb-20 main bg-no-repeat bg-cover"
        onSubmit={form.onSubmit(submit as () => void)}
      >
        <div className="w-[30%] bg-[#F1F1F1] px-16 py-20 mx-auto text-center rounded-lg">
          <p className="text-2xl font-black mb-4">Create your account</p>
          <p className="mb-24">
            Already have an account?{" "}
            <Link className="text-[#771132]" href="/auth/sign-in">
              Sign up here
            </Link>
          </p>
          <TextInput name="first_name" form={form} placeholder="Full name" />
          <TextInput
            name="email"
            form={form}
            placeholder="E-mail address"
          />{" "}
          <PasswordInput name="password" form={form} placeholder="password" />
          <PasswordInput
            name="confirm_password"
            form={form}
            placeholder="Confirm Password"
          />
          <Link href="/">
            <p className="mb-12 text-end">Forgot password?</p>
          </Link>
          <Button
            className="bg-[#771132] hover:bg-[#771132] w-full h-14"
            type="submit"
          >
            Sign up
          </Button>
        </div>
      </form>
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
      </div>{" "}
    </div>
  );
}

export default SignUp;
