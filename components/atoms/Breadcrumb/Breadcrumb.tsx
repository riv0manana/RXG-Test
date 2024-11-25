import { cn } from "@/lib/utils";
import Link from "next/link";

export type BreadcrumbProps = {
  link?: string;
  className?: string;
  label: string;
  onClick?: () => void;
}

const Breadcrumb = ({
  link,
  className,
  label,
  onClick,
}: BreadcrumbProps) => {

  const item = (
    <span role="button" onClick={() => onClick?.()} className={cn('text-main-600 text-sm mb-8', className)}>
      {`< ${label}`}
    </span>
  )

  if (link) return (
    <Link href={link} aria-label={label}>
      {item}
    </Link>
  );

  return item;
}

export default Breadcrumb