import TextInput from "@/components/form/textInput";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { usePut } from "@/libs/put";

export default function ChangePassword() {
  const { mutate, isLoading } = usePut({
    url: "/accounts/api/change_password/",
    callback,
    invalidateQuery: [],
  });

  const form = useForm({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });
  function submit(values: {
    old_password: string;
    confirm_password: string;
    new_password: string;
  }) {
    const payload = {
      ...values,
      old_password: values.old_password,
      new_password: values.new_password,
      confirm_password: values.confirm_password,
    };
    mutate(payload);
    // console.log(payload);
  }

  function callback() {
    close();
    form.reset();
  }
  return (
    <div>
      <form
        onSubmit={form.onSubmit(submit as () => void)}
        className="flex flex-col gap-6 px-4"
      >
        <p className="text-2xl">Update Password</p>
        <TextInput
          form={form}
          name="old_password"
          label=""
          placeholder="Old Password"
        />{" "}
        <TextInput
          label=""
          placeholder="New Password"
          form={form}
          name="new_password"
        />{" "}
        <TextInput
          form={form}
          label=""
          placeholder="Confirm New Password"
          name="confirm_password"
        />{" "}
        <Button
          className="bg-[#771132] hover:bg-[#771132] w-[30%] h-12 self-center"
          type="submit"
          style={{
            marginTop: "30px",
          }}
        >
          Update Password
        </Button>
      </form>
    </div>
  );
}
