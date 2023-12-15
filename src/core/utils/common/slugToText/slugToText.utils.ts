const slugToText = (text: string): string => {
    return text.replace(/-/g, ' ').toLowerCase()
}
export default slugToText
