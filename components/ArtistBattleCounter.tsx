'use client'

import CountUp from 'react-countup';

const ArtistBattleChart = ({ artist }: ArtistBattleCounterProps) => {

    return (
        <div className="flex flex-col justify-start text-left">
            <CountUp
                className="text-3xl"
                end={artist.followers?.total}
                duration={2.75}
                separator=" "
            />

        </div>
    );
};

export default ArtistBattleChart;
