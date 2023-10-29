import React from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-end max-w-5xl mx-auto px-2 mb-14">
        <ThemeButton />
      </div>
    </header>
  );
}
