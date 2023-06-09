import Link from "next/link";
import React from "react";

type Props = {
  children: JSX.Element;
};

const AboutLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center mt-10">
      <h2>About us</h2>
      <ul className="flex gap-10">
        <li>
          <Link href="/about/team">Team</Link>
        </li>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
