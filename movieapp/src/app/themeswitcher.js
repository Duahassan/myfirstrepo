// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import useDarkMode from "use-dark-mode";

import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const darkMode = useDarkMode(false);

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <>
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
     <div>
     <button onClick={darkMode.disable}>Light Mode</button>
     <button onClick={darkMode.enable}>Dark Mode</button>
   </div>
   </>
  )
};


