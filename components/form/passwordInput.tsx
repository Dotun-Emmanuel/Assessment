import {
  Box,
  PasswordInput as MantinePasswordInput,
  Popover,
  Progress,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { AddCircle, Eye, EyeSlash, TickCircle } from "iconsax-react";
import { GetInputProps } from "@mantine/form/lib/types";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  form: { getInputProps: GetInputProps<string> };
  name: string;
  removePopOver?: boolean;
}

export default function PasswordInput({
  label,
  placeholder,
  form,
  name,
  removePopOver,
}: PasswordInputProps) {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState(form.getInputProps(name).value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  useEffect(() => {
    setValue(form.getInputProps(name).value);
  }, [form.getInputProps(name).value]);

  return (
    <Popover
      opened={removePopOver ? false : popoverOpened}
      position="bottom"
      width="target"
      transitionProps={{ transition: "pop" }}
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <MantinePasswordInput
            {...form.getInputProps(name)}
            id={name}
            name={name}
            label={label}
            data-testid="PasswordInput"
            placeholder={placeholder || "Enter Password"}
            radius={8}
            visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <EyeSlash size={size} /> : <Eye size={size} />
            }
            classNames={{
              innerInput: "h-full",
              input:
                "border border-payment-grey-primary/25 text-xs bg-transparent focus:border-payment-red1 mt-2 placeholder:text-payment-grey-primary placeholder:text-xs h-[48px] h-[46px]",
              label: "text-sm leading-7 text-payment-black-primary",
            }}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement
          label="Includes at least 6 characters"
          meets={value?.length > 5}
        />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <TickCircle size="0.9rem" />
      ) : (
        <AddCircle className="rotate-45" size="0.9rem" />
      )}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

function getStrength(password: string) {
  let multiplier = password?.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special case character" },
];
