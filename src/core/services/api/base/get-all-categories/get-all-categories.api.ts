import { Http } from '@core/services/interceptor'

const baseGetAllCategoriesApi = async () => {
    try {
        const response = await Http.get('public/categories')
        response.data
    } catch (error) {
        return error
    }
}

export default baseGetAllCategoriesApi
