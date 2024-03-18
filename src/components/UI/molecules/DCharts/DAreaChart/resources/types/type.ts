import { type TCriticalAny } from '@core/types/critical-any'

interface IDAreaChartProps {
    seriesData: TCriticalAny[]
    xAxisData: string[]
    height?: number
    chartType?: 'area' | 'areaspline' | 'arearange' | 'streamgraph'
    isLegend?: boolean
    fillOpacity?: number
    minWidth?: number
    lineWidth?: number
    isShowNameTooltip?: boolean
    isShowValueTooltip?: boolean
    isAxisGridLine?: boolean
    isCustomMarker?: boolean
    isMarker?: boolean
    xAxisTitle?: string
    colors?: string[]
}
export default IDAreaChartProps
