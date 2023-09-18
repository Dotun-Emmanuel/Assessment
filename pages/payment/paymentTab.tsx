import {
  Button,
  Checkbox,
  Group,
  InputBase,
  Select,
  Stepper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { usePost } from "@/libs/post";
import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";
import TextInput from "@/components/form/textInput";
import PayForCartTab from "./payForCartTab";
import Link from "next/link";

export default function PaymentTab() {
  const { mutate, isLoading } = usePost({
    url: "/api/delivery_details/",
    callback,
    invalidateQuery: [],
  });

  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      country: "",
      address: "",
      apartment: "",
    },
  });

  function submit(values: {
    first_name: string;
    last_name: string;
    country: string;
    address: string;
    apartment: string;
    card_number: string;
    card_holder_name: string;
    expiry_date: string;
    security_code: string;
  }) {
    const payload = {
      ...values,
      first_name: values.first_name,
      last_name: values.last_name,
      country: values.country,
      address: values.address,
      apartment: values.apartment,
      card_number: values.card_number,
      card_holder_name: values.card_holder_name,
      expiry_date: values.expiry_date,
      security_code: values.security_code,
    };
    mutate(payload);
    console.log(payload, "yesbaby");
  }

  function callback() {
    close();
    form.reset();
  }

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div className="w-[80%] mx-auto mt-12">
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Information">
          <form
            className="flex flex-col gap-6 w-[50%] mx-auto mt-10"
            onSubmit={form.onSubmit(submit as () => void)}
          >
            <p className="text-[32px]">Delivery Details</p>
            <TextInput name="first_name" form={form} placeholder="First Name" />
            <TextInput name="last_name" form={form} placeholder="Last name" />
            <TextInput name="country" form={form} placeholder="country" />
            <TextInput name="address" form={form} placeholder="address" />
            <TextInput
              name="apartment"
              form={form}
              placeholder="Apartment Suite"
            />
            <Group position="center" mt="xl">
              <Link href="/cart">
                <Button
                  variant="default"
                  className="border-[#771132] text-[#771132]"
                >
                  Return to Cart
                </Button>
              </Link>
              <Button
                className="bg-[#771132] hover:bg-[#771132] h-12"
                onClick={nextStep}
                type="submit"
              >
                Continue to shipping
              </Button>
            </Group>
          </form>
        </Stepper.Step>
        <Stepper.Step label="Shipping">
          <div className=" mt-8 mb-14 w-[50%] mx-auto">
            <div className="flex flex-col gap-6 mb-4">
              <InputBase label="" placeholder="Contact" size="lg" />{" "}
              <InputBase label="" placeholder="Address" size="lg" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-center mt-11">Shipping method</p>
              <div className="flex justify-between border-[1px] rounded-lg p-4">
                <Checkbox label="Free Shipping" radius="lg" />
                <p>5/7 business days</p>
                <p>Free</p>
              </div>{" "}
              <div className="flex justify-between border-[1px] rounded-lg p-4">
                <Checkbox label="Priority mail" radius="lg" />
                <p>3/5 business days</p>
                <p>$8</p>
              </div>{" "}
              <div className="flex justify-between border-[1px] rounded-lg p-4">
                <Checkbox label="Second day air" radius="lg" />
                <p>1/2 business days</p>
                <p>$15</p>
              </div>{" "}
              <div className="flex justify-between border-[1px] rounded-lg p-4">
                <Checkbox label="Same day priority" radius="lg" />
                <p>Same day</p>
                <p>$25</p>
              </div>
            </div>
            <Group position="center" className="mt-12">
              <Button
                variant="default"
                className="border-[#771132] text-[#771132]"
                onClick={prevStep}
              >
                Return to Information
              </Button>
              <Button
                className="bg-[#771132] hover:bg-[#771132] h-12"
                onClick={nextStep}
                type="submit"
              >
                Continue to payment
              </Button>
            </Group>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Payment">
          <PayForCartTab prevStep={prevStep} />
        </Stepper.Step>
      </Stepper>
    </div>
  );
}
