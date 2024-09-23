'use client';

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip)

export const DoughnoutChart = ({ artist1, artist2 }: DoughnoutChartProps) => {

    const data = {
        datasets: [{
            label: ["Followers"],
            data: [artist1.followers?.total, artist2.followers?.total],
            backgroundColor: ['#1DB954', '#ffffff']
        }],
        labels: [artist1.name, artist2.name]
    }
    return < Doughnut
        data={data}
        options={{
            cutout: '60%'
        }
        }
    />;
};