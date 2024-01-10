import { forwardRef } from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'

const CTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = '', ...rest }, ref) => {
    return <Textarea className={`w-full relative  ${className}`} {...rest} ref={ref} />
})

CTextarea.displayName = 'CTextarea'

export default CTextarea
