import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type FullBannerProps = {
    className?: string;
    children: ReactNode
}

const FullBanner = ({
    className,
    children
}: FullBannerProps) => {
    return (
        <div className={cn('w-full py-8 bg-main-400', className)}>
            {children}
        </div>
    )
}

export default FullBanner