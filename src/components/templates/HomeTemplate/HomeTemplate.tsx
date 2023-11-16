import { type FC } from 'react'

import { HomeOrganismsSearchInput } from '@organisms/HomeOrganisms/SearchInput'

const HomeTemplate: FC = () => {
    return (
        <main className='bg-white px-6 absolute inset-0 z-0 flex items-center justify-center'>
            <HomeOrganismsSearchInput />
        </main>
    )
}

export default HomeTemplate
