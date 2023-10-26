const getCookieStorageItem = (name: string) => {
    // Split and process cookies to find the desired one by name.
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim().split('='))
    const cookie = cookies.find((cookie) => cookie[0] === name)

    if (cookie) {
        const value = decodeURIComponent(cookie[1])
        try {
            return JSON.parse(value) // Attempt to parse JSON, if applicable.
        } catch (error) {
            return value // Return as-is if parsing fails.
        }
    }

    return null // Return null if the cookie doesn't exist.
}
export default getCookieStorageItem
