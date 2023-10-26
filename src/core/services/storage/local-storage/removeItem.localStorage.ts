// Remove an item from the local storage. Returns true if removed, otherwise false.
const removeLocalStorageItem = (key: string) => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
        return true
    }
    return false
}
export default removeLocalStorageItem
