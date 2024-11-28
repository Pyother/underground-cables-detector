// * React:
import { ReactNode } from 'react';

// * React icons:
import { TfiGame } from 'react-icons/tfi';
import { TfiHome } from 'react-icons/tfi';
import { TfiMapAlt } from 'react-icons/tfi';
import { TfiSettings } from 'react-icons/tfi';

interface NavigationItem {
    sectionName: string;
    title: string;
    subtitle: string;
    Icon: ReactNode;
    onClick: () => void;
}

export const createNavigationItemsArray = (
    handleSectionClick: (name: string, title: string, subtitle: string) => void
): NavigationItem[] => [
    {
        sectionName: "home",
        title: "Home",
        subtitle: "Welcome to the home page.",
        Icon: <TfiHome />,
        onClick: () => handleSectionClick("home", "Home", "Welcome to the home page."),
    },
    {
        sectionName: "drive",
        title: "Drive",
        subtitle: "Welcome to the drive page.",
        Icon: <TfiGame />,
        onClick: () => handleSectionClick("drive", "Drive", "Welcome to the drive page."),
    },
    {
        sectionName: "visualization",
        title: "Visualization",
        subtitle: "Welcome to the visualization page.",
        Icon: <TfiMapAlt />,
        onClick: () => handleSectionClick("visualization", "Visualization", "Welcome to the visualization page.")
    },
    {
        sectionName: "settings",
        title: "Settings",
        subtitle: "Welcome to the settings page.",
        Icon: <TfiSettings />,
        onClick: () => handleSectionClick("settings", "Settings", "Welcome to the settings page.")
    }
];