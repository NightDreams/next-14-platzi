import Link from "next/link";

interface HeaderProps {}

export const Header = ({ }:HeaderProps) => {
  return (<header>
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/store">
          <li>Store</li>
        </Link>
      </ul>
    </nav>
  </header>)
};

