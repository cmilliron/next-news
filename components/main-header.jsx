import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.jpg";

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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
