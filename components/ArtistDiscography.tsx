import { getDiscography, getTrackList } from "@/api/api.actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { formatSeconds } from "@/lib/utils";

const ArtistDiscography = ({ artistId }: ArtistDiscographyProps) => {

    const token = localStorage.getItem('storedToken')

    const [discography, setDiscography] = useState<Album[]>([])
    const [tracklist, setTracklist] = useState<Tracklist[]>([])

    useEffect(() => {
        const fetchDiscography = async () => {
            const discographyArray = await getDiscography(token, artistId)
            setDiscography(discographyArray || [])
            console.log(discography)
        }
        fetchDiscography()
    }, [artistId, discography, token])

    async function handleHover(id: string) {
        const res = await getTrackList(token, id)
        const hoveredTracklist = res.items
        setTracklist(hoveredTracklist)
    }

    return (
        <section>
            <h1 className="section_title">Albums</h1>
            <div className="discography">
                {discography && discography.length > 0
                    ? (
                        discography.map((album, index) => {
                            return (
                                <div key={index} className="album_card">
                                    
                                    {/* Album cover */}
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Image src={album.images[0].url}
                                                    alt="album-cover"
                                                    width={60}
                                                    height={60}
                                                    onMouseOver={() => handleHover(album.id)} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <ul>
                                                    {tracklist.map((track, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {track.track_number} {track.name} {formatSeconds(track.duration_ms)}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    {/* Album name */}
                                    <h1 className="text-[12px]">
                                        {album?.name}
                                    </h1>
                                    {/* Release year */}
                                    <h2 className="text-[10px]">
                                        {(album.release_date).slice(0, 4)}
                                    </h2>
                                </div>
                            )
                        })
                    )
                    : (
                        <h1>No albums found</h1>
                    )}
            </div>
        </section>
    );
};

export default ArtistDiscography;
