import { type FC, useState } from 'react'
import { Button, Popover } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

import { STATIC_SORT_LIST } from './resources'

const SortActions: FC = () => {
    const [sortStatus, setSortStatus] = useState(STATIC_SORT_LIST[0])

    return (
        <Popover position='bottom' withArrow shadow='md'>
            <Popover.Target>
                <Button color='gray' variant='filled' className='text-gray-500' rightSection={<IconChevronDown />}>
                    {sortStatus.title}
                </Button>
            </Popover.Target>
            <Popover.Dropdown className=' '>
                <Button.Group orientation='vertical'>
                    {STATIC_SORT_LIST.map((sort) => (
                        <Button
                            onClick={() => setSortStatus(sort)}
                            key={sort.id}
                            color='gray'
                            className='text-gray-500 '
                        >
                            {sort.title}
                        </Button>
                    ))}
                </Button.Group>
            </Popover.Dropdown>
        </Popover>
    )
}

export default SortActions
