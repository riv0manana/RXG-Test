import { ReactNode } from "react";
import Logo from "@/components/atoms/Logo/Logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type HeaderProps = {
    className?: string;
    children?: ReactNode;
}

const Header = ({
    className,
    children
}: HeaderProps) => {
  return (
    <header className={cn('container pt-[35px] mb-[50px] flex flex-col gap-4 md:flex-row items-center md:justify-between', className)}>
        <Logo className="w-52" />
        {children}
    </header>
  )
}

export default Header