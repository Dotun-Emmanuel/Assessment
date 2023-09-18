import { Button, Group, InputBase } from "@mantine/core";
import { usePost } from "@/libs/post";
import { useForm } from "@mantine/form";
import TextInput from "@/components/form/textInput";
import { MouseEventHandler } from "react";

interface PayForCartTabProps {
  prevStep: () => void;
}

export default function PayForCartTab({ prevStep }: PayForCartTabProps) {
  const { mutate, isLoading } = usePost({
    url: "/api/make_payment/",
    callback,
    invalidateQuery: [],
  });

  const form = useForm({
    initialValues: {
      card_number: "",
      card_holder_name: "",
      expiry_date: "",
      security_code: "",
    },
  });

  function submit(values: {
    card_number: string;
    card_holder_name: string;
    expiry_date: string;
    security_code: string;
  }) {
    const payload = {
      ...values,
      card_number: values.card_number,
      card_holder_name: values.card_holder_name,
      expiry_date: values.expiry_date,
      security_code: values.security_code,
    };
    mutate(payload);
    // console.log(payload, "yporuba");
  }

  function callback() {
    close();
    form.reset();
  }
  return (
    <form
      onSubmit={form.onSubmit(submit as () => void)}
      className="w-[50%] mx-auto mt-10"
    >
      <div className="flex flex-col gap-6 mb-4">
        <InputBase label="" placeholder="Contact" size="lg" />{" "}
        <InputBase label="" placeholder="Address" size="lg" />
        <InputBase label="" placeholder="Shipping method" size="lg" />
      </div>
      <div className="flex flex-col gap-6 pb-5 text-center">
        <p className="text-2xl mt-5">Payment</p>
        <p>All transactions are secure and encrypted</p>

        {/* <InputBase label="  " placeholder="Credit Card" size="md" /> */}
        <TextInput name="card_number" form={form} placeholder="Card number" />
        <TextInput
          name="card_holder_name"
          form={form}
          placeholder="Name on card"
        />
        <TextInput name="expiry_date" form={form} placeholder="Expiry date" />
        <TextInput
          name="security_code"
          form={form}
          placeholder="Security code"
        />
      </div>
      <Group position="center" className="mt-12">
        <Button
          variant="default"
          className="border-[#771132] text-[#771132]"
          onClick={prevStep}
        >
          Return to Information
        </Button>
        <Button className="bg-[#771132] hover:bg-[#771132] h-12" type="submit">
          Continue to payment
        </Button>
      </Group>
    </form>
  );
}
