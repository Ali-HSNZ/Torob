const getTextWidth = (text: string, font?: string): number => {
    const span = document.createElement('span')
    span.style.font = font ? font : '14px Arial'
    span.style.visibility = 'hidden'
    span.style.position = 'absolute'
    span.style.top = '-9999px'
    span.style.left = '-9999px'
    span.textContent = text

    document.body.appendChild(span)

    const width = span.getBoundingClientRect().width

    document.body.removeChild(span)

    return width
}

export default getTextWidth
