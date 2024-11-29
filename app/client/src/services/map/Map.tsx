import React from 'react';
import './map.css';

interface MapProps {
    margin: [number, number, number, number]; 
}

const Map: React.FC<MapProps> = ({ margin }) => {

    const [top, right, bottom, left] = margin;

    return (
        <div
            className="map-container center"
            style={{
                margin: `
                    calc(${top} * var(--padding)) 
                    calc(${right} * var(--padding)) 
                    calc(${bottom} * var(--padding)) 
                    calc(${left} * var(--padding))
                `,
            }}
        >
            Map
        </div>
    );
};

export default Map;
