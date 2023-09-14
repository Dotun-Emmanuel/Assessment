import {
  Button,
  Checkbox,
  Group,
  InputBase,
  Select,
  Stepper,
} from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";

export default function PaymentTab() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Information">
          <div className="flex flex-col gap-6">
            <p>Delivery Details</p>
            <Select
              size="md"
              placeholder="Country"
              data={["Female", "Male"]}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: "none" } }}
              rightSection={<ArrowDown2 color="#8f9198" className="w-[18px]" />}
            />
            <div className=" flex gap-6">
              <InputBase placeholder="First Name" size="md" />
              <InputBase placeholder="Last Name" size="md" />
            </div>
            <InputBase label="  " placeholder="Addresss" size="md" />
            <InputBase
              label=""
              placeholder="Apartment Suite"
              withAsterisk
              size="md"
            />
          </div>
        </Stepper.Step>

        <Stepper.Step label="Shipping">
          <div className=" mt-8 mb-14 ">
            <div className="flex flex-col gap-6 mb-4">
              <InputBase
                label=""
                placeholder="Contact"
                withAsterisk
                size="md"
              />{" "}
              <InputBase
                label=""
                placeholder="Address"
                withAsterisk
                size="md"
              />
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
          </div>
        </Stepper.Step>
        <Stepper.Step label="Payment">
          <div>
            <div className="flex flex-col gap-6 mb-4">
              <InputBase
                label=""
                placeholder="Contact"
                withAsterisk
                size="md"
              />{" "}
              <InputBase
                label=""
                placeholder="Address"
                withAsterisk
                size="md"
              />
              <InputBase
                label=""
                placeholder="Shipping method"
                withAsterisk
                size="md"
              />
            </div>
            <div className="flex flex-col gap-6 pb-5">
              <p className="text-2xl">Payment</p>
              <p>All transactions are secure and encrypted</p>

              <InputBase label="  " placeholder="Credit Card" size="md" />
              <InputBase
                label=""
                placeholder="Card number"
                withAsterisk
                size="md"
              />
              <InputBase
                label=""
                placeholder="Name on card"
                withAsterisk
                size="md"
              />
              <div className=" flex gap-6">
                <InputBase placeholder="Expiry date" size="md" />
                <InputBase placeholder="Security code" size="md" />
              </div>
            </div>
          </div>
        </Stepper.Step>
      </Stepper>

      {active === 0 ? (
        <Group position="right" mt="xl">
          <Button
            className="bg-[#BF2018] hover:bg-[#BF2018]"
            onClick={nextStep}
          >
            Assign Location
          </Button>
        </Group>
      ) : active === 1 ? (
        <div className="flex justify-between">
          <Button onClick={prevStep} variant="default">
            Details
          </Button>
          <Button
            onClick={nextStep}
            className="bg-[#BF2018] hover:bg-[#BF2018]"
          >
            Confirm Entries
          </Button>
        </div>
      ) : active === 2 ? (
        <div className="flex justify-between">
          <Button onClick={prevStep} variant="default">
            Details
          </Button>
          <Button
            onClick={nextStep}
            className="bg-[#BF2018] hover:bg-[#BF2018]"
          >
            Confirm Entries
          </Button>
        </div>
      ) : (
        <div className="flex justify-between">
          <Button onClick={prevStep} variant="default">
            Assign Location
          </Button>
          <Button className="bg-[#BF2018] hover:bg-[#BF2018]">
            Save Entries
          </Button>
        </div>
      )}
    </div>
  );
}
