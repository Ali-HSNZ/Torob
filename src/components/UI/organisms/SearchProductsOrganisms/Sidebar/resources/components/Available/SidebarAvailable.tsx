import { type FC } from 'react'
import { Checkbox } from '@mantine/core'

import { type ISidebarAvailableProps } from './resources'

const SidebarAvailable: FC<ISidebarAvailableProps> = ({ setQuery, query }) => {
    const isDefaultChecked: boolean = query && query === 'true' ? true : false

    const handleCheckbox = (status: boolean) => {
        setQuery({ available: status })
    }

    return (
        <section className='px-4 select-none'>
            <Checkbox
                defaultChecked={isDefaultChecked}
                onChange={(checkbox) => handleCheckbox(checkbox.target.checked)}
                label='Display available products'
            />
        </section>
    )
}

export default SidebarAvailable
