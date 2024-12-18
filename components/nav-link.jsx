"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const currentPath = usePathname();
  const linkStyles = getStyle(currentPath, href);

  return (
    <Link href={href} className={linkStyles}>
      {children}
    </Link>
  );
}

const getStyle = (currentPath, path) => {
  if (currentPath === "/" && path === "/") {
    return "active";
  } else if (path.length > 2) {
    if (currentPath.startsWith(path)) {
      return "active";
    }
  } else {
  }
  return undefined;
};
