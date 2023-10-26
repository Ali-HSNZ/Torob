const clearCookieStorage = () => {
    // Retrieve all cookies as a single string and split them into an array.
    const cookies = document.cookie.split(';')

    // Iterate through each cookie in the array.
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')

        // Extract the cookie name (and value if present).
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie

        // Expire the cookie by setting its expiration date to the past.
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    }
}
export default clearCookieStorage
