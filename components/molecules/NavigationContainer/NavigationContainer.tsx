import Breadcrumb from "@/components/atoms/Breadcrumb/Breadcrumb"
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type NavigationContainerProps = {
    className?: string;
    children: ReactNode;
}

const NavigationContainer = ({
    className,
    children
}: NavigationContainerProps) => {
  return (
    <div className={cn('container mb-[50px] pt-7', className)}>
        {children}
    </div>
  )
}

NavigationContainer.BackLink = Breadcrumb;

export default NavigationContainer