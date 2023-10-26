// Set an item in the session storage.
const setSessionStorageItem = (key: string, value: unknown) => {
    const stringifyValue = JSON.stringify(value)
    sessionStorage.setItem(key, stringifyValue)
}
export default setSessionStorageItem
