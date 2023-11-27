import { type FC, useState } from 'react'
import { Button, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

import { STATIC_SORT_LIST } from './resources'

const SortActions: FC = () => {
    const [sortStatus, setSortStatus] = useState(STATIC_SORT_LIST[0])
    const [opened, { close, open }] = useDisclosure(false)

    return (
        <Menu width={170} withArrow arrowSize={10} opened={opened} position='bottom' onClose={close} shadow='md'>
            <Menu.Target>
                <Button
                    onClick={open}
                    classNames={{ label: 'text-left w-full' }}
                    rightSection={<IconChevronDown stroke={1.4} size={20} />}
                    className='capitalize min-w-[155px] sm:min-w-[170px] text-[13px] sm:text-sm'
                >
                    {sortStatus.title}
                </Button>
            </Menu.Target>
            <Menu.Dropdown className='p-1'>
                <Menu.Label className='text-[10px] sm:text-xs'>Sort by</Menu.Label>
                {STATIC_SORT_LIST.map((sort) => (
                    <Menu.Item
                        className={`capitalize  text-xs sm:text-sm  ${
                            sort.title === sortStatus.title ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => {
                            setSortStatus(sort)
                        }}
                        key={sort.id}
                    >
                        {sort.title}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    )
}

export default SortActions
