import { TextInput as MantineTextInput } from "@mantine/core";
import { GetInputProps } from "@mantine/form/lib/types";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  rightSection?: JSX.Element;
  form: { getInputProps: GetInputProps<string> };
  name: string;
  disabled?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  rightSection,
  form,
  name,
  disabled,
}: TextInputProps) {
  return (
    <MantineTextInput
      {...form.getInputProps(name)}
      label={label}
      id={name}
      name={name}
      data-testid="TextInput"
      placeholder={placeholder || `Enter ${label}`}
      radius={8}
      rightSection={rightSection}
      disabled={disabled}
      classNames={{
        input:
          "border border-payment-grey-primary/25 text-xs px-4 bg-transparent focus:border-payment-red1  placeholder:text-payment-grey-primary placeholder:text-xs h-[46px]",
        label: "text-sm leading-7 text-payment-black-primary",
      }}
    />
  );
}
