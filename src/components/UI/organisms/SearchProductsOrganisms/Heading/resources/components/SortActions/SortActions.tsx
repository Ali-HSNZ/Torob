import { type FC, useState } from 'react'
import { Button, Popover } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

import { STATIC_SORT_LIST } from './resources'

const SortActions: FC = () => {
    const [sortStatus, setSortStatus] = useState(STATIC_SORT_LIST[0])
    const [opened, { close, open }] = useDisclosure(false)

    return (
        <Popover
            arrowSize={10}
            classNames={{ arrow: 'z-10 absolute' }}
            opened={opened}
            position='bottom'
            onClose={close}
            shadow='md'
        >
            <Popover.Target>
                <Button onClick={open} className='capitalize' rightSection={<IconChevronDown />}>
                    {sortStatus.title}
                </Button>
            </Popover.Target>
            <Popover.Dropdown className='p-0'>
                <Button.Group orientation='vertical'>
                    {STATIC_SORT_LIST.map((sort) => (
                        <Button
                            color='dark'
                            className='capitalize z-20'
                            variant='subtle'
                            onClick={() => {
                                setSortStatus(sort)
                                close()
                            }}
                            key={sort.id}
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
