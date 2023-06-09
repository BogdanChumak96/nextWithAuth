"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSession, signOut } from "next-auth/react";
interface LinkProps {
  href: string;
  label: string;
}

interface NavProps {
  links: LinkProps[];
}

const Navigation = ({ links }: NavProps) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {links.map((link, i) => (
        <Link
          key={i}
          className={pathname === link.href ? "active" : "none"}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}{" "}
      {session?.data && <Link href={"/profile"}>Profile</Link>}
      {session?.data ? (
        <Link
          href={"#"}
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Logout
        </Link>
      ) : (
        <Link href={"/api/auth/signin"}>Login</Link>
      )}
    </>
  );
};

export default Navigation;
