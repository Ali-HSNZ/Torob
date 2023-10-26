// Define options for setting cookies, including expiration, security, and same-site settings.
interface CookieOptions {
    // Expiry time in milliseconds from the current time.
    expires?: number

    // Flag indicating whether the cookie should only be sent over secure (HTTPS) connections.
    secure?: boolean

    // Control whether cookies are sent with cross-origin requests.
    sameSite?: 'Lax' | 'Strict'
}

const setCookieStorageItem = (name: string, value: string | object, options?: CookieOptions) => {
    const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value

    let cookieString = `${name}=${encodeURIComponent(cookieValue)}; path=/`

    if (options?.expires) {
        const expiresDate = new Date(Date.now() + options.expires).toUTCString()
        cookieString += `; Expires=${expiresDate}`
    }

    if (options?.secure) cookieString += '; Secure'
    if (options?.sameSite) cookieString += `; SameSite=${options.sameSite}`

    document.cookie = cookieString
}

export default setCookieStorageItem
