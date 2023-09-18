import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../landing-page/header";
import TextInput from "@/components/form/textInput";
import PasswordInput from "@/components/form/passwordInput";
import { COOKIE_STORAGE_KEY } from "@/libs/fetch";
import { _axios } from "@/libs/axios";
import { setCookie } from "typescript-cookie";
import { AxiosError, AxiosResponse } from "axios";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CallCalling, Facebook, Instagram, Sms, Whatsapp } from "iconsax-react";
import { usePost } from "@/libs/post";

export function loginCallback({ res }: { res: { access: string } }) {
  setCookie(COOKIE_STORAGE_KEY, res.access, {
    expires: 1,
    path: "/",
  });
}

function SignIn() {
  const { replace } = useRouter();

  const { mutate, isLoading } = usePost({
    url: "/accounts/api/sign_in/",
    callback,
    invalidateQuery: [],
  });

  // const { mutate, isLoading } = useMutation({
  //   mutationFn: (data: { email: string; password: string }) =>
  //     _axios.post("/accounts/api/sign_in/", data),
  //   onSuccess: callback,
  //   onError: (error: AxiosError) => {
  //     console.log(error.response?.data);
  //   },
  // });

  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },
  });
  function submit(values: { password: string; email: string }) {
    const payload = {
      ...values,
      email: values.email,
      password: values.password,
    };
    mutate(payload);
  }

  function callback(response: AxiosResponse) {
    const res = response?.data;
    loginCallback({ res });
    close();
    replace("/");
    form.reset();
  }

  return (
    <div className="h-screen grid grid-rows-[auto_auto_1fr] overflow-auto">
      <Header />
      <form
        className="pt-12 pb-20 main bg-no-repeat bg-cover"
        onSubmit={form.onSubmit(submit)}
      >
        <div className="w-[30%] bg-[#F1F1F1] px-16 py-20 mx-auto text-center rounded-lg">
          <p className="text-2xl font-black mb-4">
            Returning customer? Sign in
          </p>
          <p className="mb-24">
            Don’t have an account?{" "}
            <Link className="text-[#771132]" href="/auth/sign-up">
              Sign up here
            </Link>
          </p>
          <TextInput name="email" form={form} placeholder="E-mail address" />{" "}
          <PasswordInput name="password" form={form} placeholder="password" />
          <Link href="/">
            <p className="mb-12 text-end">Forgot password?</p>
          </Link>
          <Button
            className="bg-[#771132] hover:bg-[#771132] w-full h-14"
            type="submit"
          >
            Log in
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
      </div>
    </div>
  );
}

export default SignIn;
