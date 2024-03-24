type TSingleSeriesDataType = {
    name: string
    data: number[]
    color: string
}

interface IDAreaChartProps {
    seriesData: TSingleSeriesDataType[]
    xAxisData: string[]
    height?: number
    chartType?: 'area' | 'areaspline'
}
export type { IDAreaChartProps, TSingleSeriesDataType }
