// Set an item in the local storage.
const setLocalStorageItem = (key: string, value: unknown) => {
    const stringifyValue = JSON.stringify(value)
    localStorage.setItem(key, stringifyValue)
}
export default setLocalStorageItem
