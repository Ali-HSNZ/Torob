import { type FC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { type IDChartProps } from './resources'

const DChart: FC<IDChartProps> = ({ options }) => {
    if (typeof Highcharts === 'object') {
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'var(--font-dana)',
                },
            },
            title: {
                text: '',
            },
            tooltip: {
                outside: true,
            },
            credits: {
                enabled: false,
            },
            accessibility: {
                enabled: false,
            },
        })
    }
    return (
        <div className='grid grid-cols-1'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default DChart
