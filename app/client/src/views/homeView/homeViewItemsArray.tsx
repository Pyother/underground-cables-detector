// * React:
import { ReactNode } from "react";

// * Items: 
import ConnectionItem from './items/ConnectionItem';
import EnergyItem from './items/EnergyItem';
import WiFiItem from './items/WiFiItem';

// * React icons:
import { SlEnergy } from "react-icons/sl";
import { RiBroadcastFill } from "react-icons/ri";
import { IoIosWifi } from "react-icons/io";

interface HomeViewItem {
    title: string;
    subtitle?: string;
    Icon: ReactNode;
    children: ReactNode;
    subtitleFirst: boolean;
}

const homeViewItemsArray: HomeViewItem[] = [
    {
        title: 'Połączenie',
        Icon: <RiBroadcastFill />, 
        children: <ConnectionItem />, 
        subtitleFirst: false,
    },
    {
        title: 'Energia',
        subtitle: 'Status zasilania i zużycia baterii.',
        Icon: <SlEnergy />,
        children: <EnergyItem />,
        subtitleFirst: false,
    },
    {
        title: 'WiFi',
        subtitle: 'Jakość sygnału sieci WiFi.',
        Icon: <IoIosWifi />,
        children: <WiFiItem />,
        subtitleFirst: true,
    }
];

export default homeViewItemsArray;