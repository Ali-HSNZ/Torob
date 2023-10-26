const removeCookieStorageItem = (name: string) => {
    // Set the cookie's expiration date to an earlier time to effectively remove it.
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
}

export default removeCookieStorageItem
