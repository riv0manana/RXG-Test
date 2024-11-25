import { cn } from "@/lib/utils";
import Link from "next/link";

export type BreadcrumbProps = {
    link: string;
    className?: string;
    label: string;
}

const Breadcrumb = ({
    link,
    className,
    label
}: BreadcrumbProps) => {
  return (
    <Link className={cn('text-main-600 text-sm mb-8', className)} href={link} aria-label={label}>
        {`< ${label}`}
    </Link>
  )
}

export default Breadcrumb