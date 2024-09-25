import CountUp from 'react-countup'

const ArtistBattleCounter = ({ artist }: ArtistBattleCounterProps) => {
    const followersCount = artist ? artist.followers.total : 0;

    return (
        <div>
            <CountUp
                className="text-3xl"
                end={followersCount}
                duration={2.75}
                separator=" "
            />
        </div>
    );
};

export default ArtistBattleCounter;
