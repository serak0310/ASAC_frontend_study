import React, { useState, useEffect } from 'react';

export default function Clock () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("setTimeout");
            setTime(new Date());
        }, 1000);

    return () => {
        console.log("clearTimeout");
            clearTimeout(timer);
        };
    }, [time]);

    return (
        <div>
            <h2>{time.toLocaleString()}</h2>
        </div>
    )
}