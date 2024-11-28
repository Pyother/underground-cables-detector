// * React:
import { ReactNode } from "react";

// * React icons:
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaLanguage } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa";

interface HeaderItem {
    Icon: ReactNode;
    SecondaryIcon?: ReactNode;
    marginRight?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const createHeaderItemsArray = (
    theme: string, 
    dispatch: (action: any) => void, 
    setThemeAction: (theme: string) => any
): HeaderItem[] => [
    {
        Icon: <MdOutlineDarkMode className="appbar-icon" />, 
        SecondaryIcon: <MdOutlineLightMode className="appbar-icon" />,
        marginRight: true,
        onClick: () => {
            const newTheme = theme === "light" ? "dark" : "light";
            dispatch(setThemeAction(newTheme));
        }
    },
    {
        Icon: <FaLanguage className="appbar-icon" />,
        SecondaryIcon: <FaFlagUsa className="appbar-icon" />,
        marginRight: false,
        onClick: () => {}
    }
];
