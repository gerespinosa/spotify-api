'use client';

import Comparator from "@/components/Comparator";
import React, { useEffect, useState } from "react";

const BattlePage = () => {
    const [isTokenAvailable, setIsTokenAvailable] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('spotify_token');
            setIsTokenAvailable(!!token);
        }
    }, []);

    return (
        <section className="w-100%">
            {isTokenAvailable ? (
                <Comparator />
            ) : (
                <p>Please connect to Spotify to access the battle page.</p>
            )}
        </section>
    );
};

export default BattlePage;
