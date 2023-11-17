import { type FC } from 'react'
import Link from 'next/link'
import { ActionIcon } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconShoppingBag } from '@tabler/icons-react'

const HeaderCardButton: FC = () => {
    // tailwind -> sm media query
    const smMatchesMediaQuery = useMediaQuery('(min-width: 640px)')

    return (
        <ActionIcon
            size={'auto'}
            variant='white'
            href={'#'}
            color='dark'
            component={Link}
            className='rounded-md px-3 py-1.5 flex gap-x-2 text-sm font-medium '
        >
            <IconShoppingBag size='1.3rem' stroke={1.5} />
            {smMatchesMediaQuery && <span>Card</span>}
        </ActionIcon>
    )
}

export default HeaderCardButton
