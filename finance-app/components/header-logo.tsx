import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="../public/logo.jpg" alt="logo" height={28} width={28} />
        <p className="font-bold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
