import { type FC, memo } from 'react'

import { DChart } from '@atoms/DChart'

import { type TCriticalAny } from '@core/types/critical-any'

import type { IDAreaChartProps, TSingleSeriesDataType } from './resources'

const DAreaChart: FC<IDAreaChartProps> = ({ xAxisData, chartType = 'area', seriesData, height = 350 }) => {
    const renderSeries = seriesData.map((item: TSingleSeriesDataType) => {
        // set custom marker in last of series item
        const customSeriesData = item.data.map((singleData, index: number) => {
            // find last item
            const isLastItem: boolean = index === item.data.length - 1
            // set custom marker if item is last of data
            const customMarker = isLastItem ? { enabled: true, radius: 7, fillColor: item.color } : undefined
            // return modified series data
            return {
                y: singleData,
                marker: customMarker,
            }
        })

        return {
            ...item,
            data: customSeriesData,
            /*
                fillColor is type Error in -TypeScript-
                used TCriticalAny type in line:151
            */
            fillColor: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1,
                },
                stops: [
                    [0, `${item.color}88`],
                    [1, `rgba(255, 255, 255, 0.0)`],
                ],
            },
            // default marker
            marker: {
                enabled: false,
                lineColor: item.color,
                radius: 4,
            },
        }
    })

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
                    lineColor: '#00000000',
                    categories: xAxisData,
                    labels: {
                        enabled: false,
                    },
                },
                yAxis: [
                    {
                        gridLineWidth: 1,
                        gridLineDashStyle: 'LongDashDot',
                        lineWidth: 1,
                        lineColor: '#D9D9D900',
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
                         * this title showed bottom-center of chart
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
                    area: {
                        // fill opacity color
                        fillOpacity: 0.1,
                        lineWidth: 3,
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
                        fontSize: '14px',
                        fontWeight: '500',
                    },
                },

                // append type in series
                series: renderSeries.map((e) => ({ ...e, type: chartType })) as TCriticalAny,
            }}
        />
    )
}

export default memo(DAreaChart)
