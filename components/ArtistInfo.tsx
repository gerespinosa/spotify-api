'use client'

import { getTopTracks } from "@/api/api.actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { useRouter } from "next/navigation";
import { formatSeconds } from "@/lib/utils";

const ArtistInfo = ({ artistId }) => {

    const [topTracksArray, setTopTracksArray] = useState([])

    const router = useRouter()

    const token = localStorage.getItem('storedToken')

    useEffect(() => {
        const fetchTopTracks = async () => {
            const topTracksArray = await getTopTracks(token, artistId)
            setTopTracksArray(topTracksArray || [])
            console.log(topTracksArray)

        }

        fetchTopTracks()
    }, [artistId])

    function handlePreview(uri: string) {
        router.push(uri)
    }

    return (
        <section>
            <h1 className="section_title">Top 10 Songs</h1>
            <Table className="w-full">
                <TableHeader className="w-full">
                    <TableRow>
                        <TableHead className="text-green-light">Title</TableHead>
                        <TableHead className="text-green-light">Album</TableHead>
                        <TableHead className="mx-auto">
                            <Image src={'/icons/play.svg'}
                                alt="play-icon"
                                width={20}
                                height={20} />
                        </TableHead>
                        <TableHead className="mx-auto">
                            <Image src={'/icons/time.svg'}
                                alt="play-icon"
                                width={20}
                                height={20} />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {topTracksArray.map((track, index) => {
                        return (
                            <TableRow key={index}>

                                {/* Name */}
                                <TableCell className="font-medium">
                                    {track.name}
                                </TableCell>

                                {/* Album cover */}
                                <TableCell className="font-medium">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Image src={track.album.images[0].url}
                                                    alt="album-cover"
                                                    height={20}
                                                    width={20} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{track.album.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </TableCell>

                                {/* Play sample */}
                                <TableCell>
                                    <Image src={'/icons/play.svg'}
                                        alt="play-icon"
                                        width={20}
                                        height={20}
                                        onClick={() => handlePreview(track.preview_url)} />
                                </TableCell>

                                {/* Duration */}
                                <TableCell>
                                    {formatSeconds(track.duration_ms)}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    );
};

export default ArtistInfo;
