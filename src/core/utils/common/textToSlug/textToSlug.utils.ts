const textToSlug = (text: string): string => {
    return text.replace(/\s+/g, '-').toLowerCase()
}
export default textToSlug
