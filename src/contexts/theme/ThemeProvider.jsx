import React, { useMemo, useState } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const theme = useMemo(() => (isDark ? themes.dark : themes.light), []);

  const ToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
