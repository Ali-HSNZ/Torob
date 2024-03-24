import { memo } from 'react'

import { DAreaChart } from '@molecules/DCharts/DAreaChart'

import { STATIC_CHART_DATA } from './resources'

const ProductPriceChanges = () => {
    return (
        <div className='w-full shrink-0 p-2 bg-white'>
            <p className='px-2 pt-2 text-sm font-medium'>Price changes</p>
            <DAreaChart
                height={300}
                xAxisData={STATIC_CHART_DATA.xAxisData}
                seriesData={STATIC_CHART_DATA.seriesData}
            />
        </div>
    )
}

export default memo(ProductPriceChanges)
