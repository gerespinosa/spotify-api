'use client'

import React, { useState } from "react";
import ArtistBattleCounter from "./ArtistBattleCounter";
import BattleForm from "./BattleForm";
import { DoughnoutChart } from "./DoughnoutChart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Comparator = () => {

    const [artist1, setArtist1] = useState<Artist | null>(null);
    const [artist2, setArtist2] = useState<Artist | null>(null);
    const router = useRouter()

    return (
        <section className="w-100% flex">
            {/* Artist 1 - Left side */}
            <div className='h-[100vh] w-[45vw] flex flex-col items-center justify-center gap-4'>
                <BattleForm onArtistHandle={setArtist1} />
                {artist1 !== null ? (
                    <Image
                        src={artist1.images[0]?.url}
                        alt="artist-cover"
                        width={400}
                        height={400}
                    />
                ) : (
                    <h1>No pic</h1>
                )}
                <ArtistBattleCounter artist={artist1} />
            </div>
            {/* VS */}
            <div className="h-[100vh] w-[10vw] flex flex-col justify-center items-center gap-16">
                {/* Return btn */}
                <Button
                    className="bg-green-darker hover:bg-green-light w-fit flex gap-2"
                    onClick={() => router.push('/')}>
                    Back
                </Button>
                <h1 className="text-2xl md:text-5xl lg:text-8xl">VS</h1>
                {/* Doughnout */}
                <DoughnoutChart artist1={artist1} artist2={artist2} />
            </div >

            {/* Artist 2 - Right side */}
            <div className='h-[100vh] w-[45vw] flex flex-col items-center justify-center gap-4'>
                <BattleForm onArtistHandle={setArtist2} />
                {artist2 !== null ? (
                    <Image
                        src={artist2.images[0]?.url}
                        alt="artist-cover"
                        width={400}
                        height={400}
                    />
                ) : (
                    <h1>No pic</h1>
                )}
                <ArtistBattleCounter artist={artist2} />
            </div>
        </section >
    );
};

export default Comparator;
