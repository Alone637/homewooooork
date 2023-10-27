import React from "react"

const themes = {
    dark: {
        background: 'black',
        color: '#fff',
    },
    light: {
        background: 'white',
        color: '#000',
    },
};

const initialState = {
    theme: themes.light,
    ToggleTheme: () => {},
};

export const ThemeContext
