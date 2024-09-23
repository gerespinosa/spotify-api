'use client'

import { getToken } from "@/api/api.actions";
import Artist from "@/components/Artist";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {



  return (
    <main>

      {/* Get access token btn */}
      <Button
        className="bg-green-darker hover:bg-green-light w-fit flex gap-2"
        onClick={getToken}>
        <Image src={'/icons/spotify.svg'}
          alt={'spotify-icon'}
          height={20}
          width={20} />
        <p>Connect to Spotify</p>
      </Button>

      {/* Artist info */}
      <Artist />

    </main>


  );
}
