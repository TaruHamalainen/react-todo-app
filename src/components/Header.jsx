import React from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header>
      <div className="flex  justify-end   px-2 mb-14">
        <ThemeButton />
      </div>
    </header>
  );
}
