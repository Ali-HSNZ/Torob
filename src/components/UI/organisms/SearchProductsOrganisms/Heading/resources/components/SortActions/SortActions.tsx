import { type FC } from 'react'
import { Button, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

import { type ISortActionsProps, STATIC_SORT_LIST } from './resources'

const SortActions: FC<ISortActionsProps> = ({ setQuery, query }) => {
    const [opened, { close, open }] = useDisclosure(false)

    const defaultSort = query?.sort || STATIC_SORT_LIST[0].label

    return (
        <Menu width={170} withArrow arrowSize={10} opened={opened} position='bottom' onClose={close} shadow='md'>
            <Menu.Target>
                <Button
                    onClick={open}
                    classNames={{ label: 'text-left w-full' }}
                    rightSection={<IconChevronDown stroke={1.4} size={20} />}
                    className='capitalize min-w-[155px] sm:min-w-[170px] text-sm'
                >
                    {STATIC_SORT_LIST.find((sort) => sort.label.includes(defaultSort))?.label || 'Unknown'}
                </Button>
            </Menu.Target>
            <Menu.Dropdown className='p-1'>
                <Menu.Label className='text-xs'>Sort by</Menu.Label>
                {STATIC_SORT_LIST.map((sort, index) => (
                    <Menu.Item
                        className={`capitalize text-sm  ${sort.label.includes(defaultSort) ? 'bg-gray-100' : ''}`}
                        key={index}
                        onClick={() => {
                            setQuery({ sort: sort.value })
                        }}
                    >
                        {sort.label}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    )
}

export default SortActions
