import { type FC, memo } from 'react'

import { DChart } from '@atoms/DChart'

import { type IDAreaChartProps } from './resources'

const DAreaChart: FC<IDAreaChartProps> = ({
    xAxisData,
    chartType = 'areaspline',
    seriesData,
    height = 350,
    isAxisGridLine = false,
    colors = ['#18cf00', '#0635cf'],
}) => {
    const getGradientColor = (index: number) => {
        const color = colors[index]
        return {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
            },
            stops: [
                [0, `${color}88`],
                [1, `rgba(255, 255, 255, 0.0)`],
            ],
        }
    }

    return (
        <DChart
            options={{
                chart: {
                    type: chartType,
                    height,
                },

                // title of chart
                title: {
                    text: '',
                    style: {
                        fontWeight: '500',
                        fontSize: '16px',
                    },
                    align: 'left',
                },
                xAxis: {
                    /**
                     * Chart categories is showed under the chart
                     * It can be months of the year
                     * You should note that the number of categories and series data should be equal
                     */
                    gridLineWidth: 0,
                    title: {
                        text: '',
                    },
                    lineColor: '#D9D9D9',
                    categories: xAxisData,
                    labels: {
                        enabled: false,
                        // change color of xAxis text
                        style: {
                            color: '#706E6E',
                            fontSize: '12',
                            fontWeight: '400',
                        },
                    },
                },
                yAxis: [
                    {
                        gridLineWidth: isAxisGridLine ? 1 : 0,
                        gridLineDashStyle: 'LongDashDot',
                        lineWidth: 1,
                        lineColor: '#D9D9D9',

                        // change color of yAxis text
                        allowDecimals: false,

                        labels: {
                            style: {
                                color: '#706E6E',
                                fontSize: '12',
                                fontWeight: '400',
                            },
                        },
                        /**
                         * set yAxis title to empty
                         * this title showed left of chart - to show type of chart value
                         */
                        title: {
                            text: '',
                        },
                    },
                ],
                plotOptions: {
                    series: {
                        pointPlacement: 'on',
                    },
                    areaspline: {
                        // fill opacity color
                        fillOpacity: 0.1,
                        lineWidth: 3,
                        marker: {
                            enabled: false, // Enable markers
                        },
                    },
                },

                tooltip: {
                    useHTML: true,
                    headerFormat: `
                            <div class="border rounded-md p-2">
                                <div class="font-semibold  text-sm text-center w-full">
                                    {point.key}
                                </div>
                    `,

                    pointFormat: `
                                <div class="flex mt-1 items-center justify-between gap-x-2">
                                    <p class="font-semibold text-sm" style="color:{series.color};">
                                        {series.name}:
                                    </p>
                                    <p class="font-semibold text-sm flex gap-x-1">
                                        {point.y}$
                                    </p>
                                </div>
                    `,
                    footerFormat: `
                            </div>
                    `,

                    shared: true,
                    shadow: false,

                    padding: 0,
                },

                legend: {
                    align: 'left',
                    verticalAlign: 'top',
                    layout: 'horizontal', // Set the legend layout to horizontal
                    itemStyle: {
                        color: '#373737',
                        fontSize: '14',
                        fontWeight: '500',
                    },
                },

                series: seriesData.map((item, index) => ({
                    ...item,
                    color: colors[index],
                    fillColor: getGradientColor(index), // Apply different gradient to each series
                })),
            }}
        />
    )
}

export default memo(DAreaChart)
