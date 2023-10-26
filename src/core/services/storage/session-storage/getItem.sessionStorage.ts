// Get an item from the session storage. Returns the item if found, otherwise false.
const getSessionStorageItem = (key: string) => {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : false
}

export default getSessionStorageItem
