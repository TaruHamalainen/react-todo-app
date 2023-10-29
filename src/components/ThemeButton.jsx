import { useEffect, useState } from "react";
import "../styles/ThemeButton.css";

export default function ThemeButton() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return (
    <div className="flex   items-center gap-2 self-end p-3 bg-light_gray dark:bg-very_dark_gray mb-2 rounded-md ">
      <p className="text-lg text-medium_gray dark:text-white">
        {theme === "dark" ? "Switch to lightmode" : "Switch to Darkmode"}
      </p>
      <input
        className="themebutton_input"
        onChange={() => setTheme(colorTheme)}
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="themebutton_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
}
