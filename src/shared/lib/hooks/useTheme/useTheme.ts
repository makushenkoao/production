import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.BROWN;
                break;
            case Theme.BROWN:
                newTheme = Theme.RED;
                break;
            case Theme.RED:
                newTheme = Theme.BLUE;
                break;
            case Theme.BLUE:
                newTheme = Theme.PURPLE;
                break;
            case Theme.PURPLE:
                newTheme = Theme.YELLOW;
                break;
            case Theme.YELLOW:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);

        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
