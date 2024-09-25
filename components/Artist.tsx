import React, { useState } from "react";
import ArtistForm from "./ArtistForm";
import ArtistInfo from "./ArtistInfo";
import ArtistDiscography from "./ArtistDiscography";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Artist = () => {
    const [artistId, setArtistId] = useState<string>('');
    const router = useRouter();

    return (
        <section className="flex w-full flex-col gap-8">
            <ArtistForm onArtistHandle={setArtistId} />
            <div className="flex gap-16">
                <div className="artist">
                    <ArtistInfo artistId={artistId} />
                    <Button
                        className="bg-green-darker hover:bg-green-light w-fit flex gap-2"
                        onClick={() => router.push('/battle')} >
                        <p>Compare</p>
                    </Button>
                </div>
                <div className="rightSide">
                    <ArtistDiscography artistId={artistId} />
                </div>
            </div>
        </section>
    );
};

export default Artist;
