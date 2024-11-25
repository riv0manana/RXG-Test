import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ReactNode } from "react";

export type TimeLineItemProps = {
    checked?: boolean;
    title: string;
    children?: ReactNode;
}

const TimeLineItem = ({
    checked,
    title,
    children
}: TimeLineItemProps) => {
  return (
    <div className="flex flex-col items-center gap-5 w-[100px]">
        <div className={cn("grid place-items-center w-[80px] aspect-square rounded-full  relative bg-white text-main-500", { "bg-main-600 text-white": checked})}>
            {checked && <div className="absolute w-6 aspect-square rounded-full border-[2px] border-white bg-custom-green text-white right-0 top-0 grid place-items-center">
                <Check className="w-4 absolute" />
            </div>}
            {children}
        </div>
        <span className={cn("font-bold text-lg text-center text-main-700", { "text-main-600": checked})}>
            {title}
        </span>
    </div>
  )
}

export default TimeLineItem