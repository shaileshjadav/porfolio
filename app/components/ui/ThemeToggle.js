"use client";

import { BsFillSunFill,  BsFillMoonFill} from "react-icons/bs";;
import { useThemeContext } from "../../Theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useThemeContext();

  const isDark = theme === "dark";

  return (
    <div>
        {isDark?
        <BsFillMoonFill
              onClick={() => setTheme("light")}
              className=" cursor-pointer text-2xl text-white"
            />
            :
            <BsFillSunFill
              onClick={() => setTheme("dark")}
              className=" cursor-pointer text-2xl "
            />
        }
    </div>
  );
}
