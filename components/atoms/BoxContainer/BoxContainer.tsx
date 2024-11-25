import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type BoxContainerProps = {
    title: string;
    className?: string;
    children?: ReactNode
    step?: number;
}

const BoxContainer = ({
    title,
    className,
    children,
    step = 1
}: BoxContainerProps) => {
  return (
    <div className={cn("px-6 md:px-[80px] py-11 border border-custom-lightgray rounded-[20px]", className)}>
        <div className="flex items-center gap-[10px] mb-8">
            <span className="grid place-items-center w-8 aspect-square rounded-full bg-main-600 text-white text-[22px]">{step}</span>
            <h2 className="text-main-700 text-[22px] leading-[26px]">{title}</h2>
        </div>
        {children}
    </div>
  )
}

export default BoxContainer