'use client';

import { getToken } from "@/api/api.actions";
import Artist from "@/components/Artist";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('spotify_token');
      setIsTokenAvailable(!!token);
    }
  }, []);

  const handleGetToken = () => {
    getToken();

  };

  return (
    <main>
      <Button
        className="bg-green-darker hover:bg-green-light w-fit flex gap-2"
        onClick={handleGetToken}>
        <Image src={'/icons/spotify.svg'} alt={'spotify-icon'} height={20} width={20} />
        <p>Connect to Spotify</p>
      </Button>

      {isTokenAvailable && <Artist />}
    </main>
  );
}
