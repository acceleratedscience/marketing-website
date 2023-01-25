import { Header, HeaderName } from "@carbon/react";
import Link from "next/link";
const Nav = () => {
  return (
    <Header aria-label="IBM Platform Name">
      <Link href="/" prefix="">
        <a href="/" className="cds--header__name">Accelerate.Science</a>
      </Link>
      <HeaderName href="https://pages.github.ibm.com/Accelerated-Discovery/Discovery-Platform/user-guide/user-guide/" prefix="">
        Docs
      </HeaderName>
    </Header>
  );
};

export default Nav;
