"use client";
import React from "react";
import "./style.css";
import Navigation from "../Navigation/Navigation";
import { useBearStore } from "@/app/store/store";

type Props = {};

const Header = (props: Props) => {
  const links = [
    { href: "/", label: "Main" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="flex justify-center pt-10 gap-10">
      <Navigation links={links} />
    </header>
  );
};

export default Header;
