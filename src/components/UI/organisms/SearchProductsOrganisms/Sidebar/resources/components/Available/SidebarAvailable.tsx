import { useQueryParam } from 'use-query-params'

import { CCheckbox } from '@atoms/Checkbox'

const SidebarAvailable = () => {
    const [query, setQuery] = useQueryParam<string>('available')

    const isDefaultChecked: boolean = query && query === 'true' ? true : false

    const handleCheckbox = (status: boolean) => {
        setQuery(status ? 'true' : 'false')
    }

    return (
        <section className='px-4 select-none'>
            <CCheckbox
                checked={isDefaultChecked}
                onChange={(checkbox) => handleCheckbox(checkbox.target.checked)}
                label='Display available products'
            />
        </section>
    )
}

export default SidebarAvailable
