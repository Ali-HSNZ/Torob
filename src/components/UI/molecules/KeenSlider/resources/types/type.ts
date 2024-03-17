import { type ReactNode } from 'react'
import { type KeenSliderOptions } from 'keen-slider'

interface IExtraProps {
    children: ReactNode
    activeSlide?: number
    isHiddenArrow?: boolean
    setActiveSlide?: (arg: number) => void
}

type IKeenSliderProps = IExtraProps & KeenSliderOptions

export default IKeenSliderProps
