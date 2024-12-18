import Image from "next/image";

import logo from "@/assets/logo.jpg";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">
          <Image src={logo} width={50} height={50} alt="logo" priority /> Next
          News
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>

          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
