import getSessionStorageItem from './getItem.sessionStorage'

// Remove an item from the session storage. Returns true if removed, otherwise false.
const removeSessionStorageItem = (key: string) => {
    if (getSessionStorageItem(key)) {
        sessionStorage.removeItem(key)
        return true
    }
    return false
}
export default removeSessionStorageItem
