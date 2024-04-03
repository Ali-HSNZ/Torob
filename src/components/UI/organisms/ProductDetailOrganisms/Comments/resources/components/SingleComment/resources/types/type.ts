type TUserType = {
    first_name: string
    last_name: string
}

type TProductType = {
    store: string
    color: TColorType
}

type TColorType = {
    name: string
    hex: string
}

type TImageType = {
    id: number
    url: string
}

interface ISingleCommentProps {
    comment: {
        id: number
        user: TUserType
        tags?: string[]
        description: string
        created_at: string
        title: string
        weaknesses: string[]
        product: TProductType
        like: number
        dislike: number
        strengths: string[]
        images: TImageType[]
    }
}

export default ISingleCommentProps
