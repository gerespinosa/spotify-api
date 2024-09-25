declare type DoughnoutChartProps = {
    artist1: Artist | null,
    artist2: Artist | null
}

declare type ArtistFormProps = {
    onArtistHandle: (artistId: string) => void;
}

declare type BattleFormProps = {
    onArtistHandle: (artistId: Artist | null) => void;
}

declare type ArtistBattleCounterProps = {
    artist: Artist | null
}

declare type ArtistDiscographyProps = {
    artistId: string
}

declare type ArtistInfoProps = {
    artistId: string
}

declare type Album = {
    name: string,
    release_date: string,
    id: string,
    images: { url: string }[]
}

declare type Tracklist = {
    track_number: number
    name: string,
    duration_ms: number
}

declare type Track = {
    name: string,
    url: string
    album: Album,
    preview_url: string,
    duration_ms: number
}

declare type Artist = {
    images: { url: string }[];
    followers: { total: number },
    name: string

}