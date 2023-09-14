import { showNotification } from "@mantine/notifications";
import { ShieldTick } from "iconsax-react";

export function handleSuccessNotification({
  message,
  callback,
}: {
  message: string;
  callback: (() => void) | undefined;
}) {
  showNotification({
    autoClose: 3000,
    title: (
      <div className="flex items-center justify-between !w-full">
        <p>Success!</p>
        {/* <Add className="text-payment-grey-primary rotate-45 h-6 w-6 cursor-pointer" /> */}
      </div>
    ),
    message: message || "Request was successfully made",
    classNames: {
      icon: "h-9 w-9 bg-[#0DBF66]",
      title: "text-[#49474D] text-xl font-semibold !w-full",
      description: "text-[#49474D] mt-1",
      root: "border border-[#0DBF66] shadow-none !pl-7 py-7 rounded-lg relative",
    },
    closeButtonProps: {
      style: {
        position: "absolute",
        top: 35,
        right: 25,
      },
    },
    icon: <ShieldTick variant="Bold" className="h-6 w-6" />,
    onClose: callback,
  });
}
export function handleErrorNotification({
  title,
  message,
  autoClose,
  callback,
}: {
  title: string;
  message: string;
  autoClose?: number;
  callback?: (() => void) | undefined;
}) {
  showNotification({
    autoClose: autoClose || 5000,
    title: (
      <div className="flex items-center justify-between !w-full">
        <p>Error!</p>
        {/* <Add className="text-payment-grey-primary rotate-45 h-6 w-6 cursor-pointer" /> */}
      </div>
    ),
    message: message || "Connect to the internet",
    classNames: {
      icon: "h-9 w-9 bg-[#ED5556]",
      title: "text-[#49474D] text-xl font-semibold !w-full",
      description: "text-[#49474D] mt-1 pr-8",
      root: "border-none shadow-lg !pl-7 py-7 rounded-lg relative",
    },
    closeButtonProps: {
      style: {
        position: "absolute",
        top: 35,
        right: 25,
      },
    },
    icon: <ShieldTick variant="Bold" className="h-6 w-6" />,
    onClose: callback,
  });
}
