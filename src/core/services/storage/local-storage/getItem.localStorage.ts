// Get an item from the local storage. Returns the item if found, otherwise false.
const getLocalStorageItem = (key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : false
}

export default getLocalStorageItem
