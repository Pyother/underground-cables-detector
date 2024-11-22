import { RiBroadcastFill } from "react-icons/ri";
import { ReactNode } from "react";

interface HomeViewItem {
    title: string;
    subtitle: string;
    Icon: ReactNode;  
    children: ReactNode; 
    subtitleFirst: boolean;
}

const homeViewItemsArray: HomeViewItem[] = [
    {
        title: 'Połączenie',
        subtitle: 'Status połączenia z serwerem i urządzeniem.',
        Icon: <RiBroadcastFill />, 
        children: <div>Content</div>, 
        subtitleFirst: false,
    },
];

export default homeViewItemsArray;