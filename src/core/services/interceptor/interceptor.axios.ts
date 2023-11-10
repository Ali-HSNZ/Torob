import axios from 'axios'

import { type TCriticalAny } from '@core/types/critical-any'

import { getCookieStorageItem } from '../storage/cookie-storage'

// base Url
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

// set token
axios.interceptors.request.use((config: TCriticalAny) => {
    if (!config.url?.includes('public')) {
        config.headers.Authorization = 'bearer ' + getCookieStorageItem('token')
    }
    return config
})

export default axios
