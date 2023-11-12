import { Http } from '@core/services/interceptor'

const getBaseCategoriesListQueryFn = async () => {
    try {
        const endpoint = 'public/categories'
        const response = await Http.get(endpoint)
        return response.data
    } catch (error) {
        return error
    }
}

export default getBaseCategoriesListQueryFn
