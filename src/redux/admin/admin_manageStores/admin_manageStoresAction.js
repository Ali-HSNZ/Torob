import axios from "axios"
import { toast } from "react-toastify";
import Cookies from "universal-cookie"

const { 
    ADMIN_INSERT_STORE_REQUEST, 
    ADMIN_INSERT_STORE_SUCCESS, 
    ADMIN_INSERT_STORE_FAILURE,

    ADMIN_FETCH_STORE_REQUEST, 
    ADMIN_FETCH_STORE_SUCCESS, 
    ADMIN_FETCH_STORE_FAILURE,

    ADMIN_FETCH_ONE_STORE_REQUEST, 
    ADMIN_FETCH_ONE_STORE_SUCCESS, 
    ADMIN_FETCH_ONE_STORE_FAILURE,
} = require("./admin_manageStoresTypes")


const insertStoreRequest = () => {
    return {type : ADMIN_INSERT_STORE_REQUEST}
}
const insertStoreSuccess = (payload) => {
    return {type : ADMIN_INSERT_STORE_SUCCESS , payload}
}
const insertStoreFailure = (payload) => {
    return {type : ADMIN_INSERT_STORE_FAILURE , payload}
}

const fetchStoreRequest = () => {
    return {type : ADMIN_FETCH_STORE_REQUEST}
}
const fetchStoreSuccess = (payload) => {
    return {type : ADMIN_FETCH_STORE_SUCCESS , payload}
}
const fetchStoreFailure = (payload) => {
    return {type : ADMIN_FETCH_STORE_FAILURE , payload}
}

const fetchOneStoreRequest = () => {
    return {type : ADMIN_FETCH_ONE_STORE_REQUEST}
}
const fetchOneStoreSuccess = (payload) => {
    return {type : ADMIN_FETCH_ONE_STORE_SUCCESS , payload}
}
const fetchOneStoreFailure = (payload) => {
    return {type : ADMIN_FETCH_ONE_STORE_FAILURE , payload}
}

const token = new Cookies().get("userToken");

export const fetchStores = ({state,page,limit,order,economic_code,number,name,province,city}) => dispatch => {
    dispatch(fetchStoreRequest())
    axios.get(encodeURI(`https://market-api.iran.liara.run/api/admin/stores?state=${state || "all"}&province=${province || ""}&city=${city || ""}&name=${name || ""}&number=${number || ""}&order=${order || "desc"}&economic_code=${economic_code || ""}&page=${page || 1}&limit=${limit || 12}`) , {headers : {authorization : `Bearer ${token}`}})
    .then(({data}) => dispatch(fetchStoreSuccess(data)))
    .catch(error => {
        const message = error?.response?.data?.message || "خطای سرور در بخش گرفتن لیست فروشگاه‌ها";
        dispatch(fetchStoreFailure(message))
        toast.error(message)
    })
}
export const fetchOneStore = (storeId) => dispatch => {
    dispatch(fetchOneStoreRequest())
    axios.get(encodeURI(`https://market-api.iran.liara.run/api/admin/stores?id=${storeId}`) , {headers : {authorization : `Bearer ${token}`}})
    .then(({data}) => dispatch(fetchOneStoreSuccess(data.store)))
    .catch(error => {
        const message = error?.response?.data?.message || "خطای سرور در بخش گرفتن اطلاعات یک فروشگاه";
        dispatch(fetchOneStoreFailure(message))
        toast.error(message)
    })
}

export const deleteStore = (storeId) => dispatch => {
    dispatch(fetchOneStoreRequest())
    axios.put(`https://market-api.iran.liara.run/api/admin/stores/${storeId}/state` ,{}, {headers : {authorization : `Bearer ${token}`}})
    .then(({data}) => dispatch(fetchOneStoreSuccess(data.store)))
    .catch(error => {
        const errorMessage = error?.response?.data?.message || "خطای سرور در بخش  تغییر وضعیت فروشگاه";
        toast.error(errorMessage)
        dispatch(fetchOneStoreFailure(errorMessage))
    })
}

export const confirmStore = (storeId) => dispatch => {
    dispatch(fetchOneStoreRequest())
    axios.put(`https://market-api.iran.liara.run/api/admin/stores/${storeId}/confirm` ,{}, {headers : {authorization : `Bearer ${token}`}})
    .then(({data}) => {
        toast.success("فروشگاه با موفقیت تایید شد")
        dispatch(fetchOneStoreSuccess(data.store))
    })
    .catch(error => {
        const errorMessage = error?.response?.data?.message || "خطای سرور در بخش  تغییر وضعیت فروشگاه";
        toast.error(errorMessage)
        dispatch(fetchOneStoreFailure(errorMessage))
    })
}


export const insertStore = ({values,onChangeFile_logo,onChangeFile_license,onChangeFile_storeBanner,city,province}) => dispatch => {
    const logo_image = onChangeFile_logo.selectedFile ? onChangeFile_logo.selectedFile : onChangeFile_logo.imageUrl ? 0 : 1;
    const banner_image = onChangeFile_storeBanner.selectedFile ? onChangeFile_storeBanner.selectedFile : onChangeFile_storeBanner.imageUrl ? 0 : 1;
    const license_image = onChangeFile_license.selectedFile ? onChangeFile_license.selectedFile : onChangeFile_license.imageUrl ? 0 : 1;

    const {
        name,
        economic_code,
        owner_full_name,
        owner_phone_number,
        secend_phone_number,
        office_address,
        warehouse_address,
        bank_name,
        bank_code,
        bank_sheba_number,
        owner_national_code,
        bank_card_number,
        office_number,
        warehouse_number,
    } = values
    dispatch(insertStoreRequest())
    axios.post(`https://market-api.iran.liara.run/api/admin/stores` ,{
        name ,
        economic_code ,
        owner_full_name ,
        owner_phone_number ,
        secend_phone_number ,
        office_address ,
        office_number : office_number.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, ''),
        warehouse_address ,
        warehouse_number : warehouse_number.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, ''),
        bank_name ,
        bank_code ,
        bank_card_number : bank_card_number.replace(/\s/g, '').replace(/-/g, ''),
        bank_sheba_number,
        province,
        owner_national_code,
        city,
        license_image,
        banner_image,
        logo_image,
    } , {headers : {'content-type' : 'multipart/form-data' ,authorization : `Bearer ${token}`,}})
    .then(() => {
        if(window){
            window.location.href="/admin/manage-stores"
        }
    })
    .catch(error => {
        const serverMessage_list = error?.response?.data?.errors
        if(serverMessage_list && serverMessage_list.length > 0) serverMessage_list.forEach(error => toast.error(error));
        if(!serverMessage_list) toast.error("خطا در ثبت فروشگاه")
        dispatch(insertStoreFailure("خطا در ثبت فروشگاه"))
    })
}

export const updateStore = ({storeId,values,onChangeFile_logo,onChangeFile_license,onChangeFile_storeBanner,city,province}) => dispatch => {
    const logo_image = onChangeFile_logo.selectedFile ? onChangeFile_logo.selectedFile : onChangeFile_logo.imageUrl ? 0 : 1;
    const banner_image = onChangeFile_storeBanner.selectedFile ? onChangeFile_storeBanner.selectedFile : onChangeFile_storeBanner.imageUrl ? 0 : 1;
    const license_image = onChangeFile_license.selectedFile ? onChangeFile_license.selectedFile : onChangeFile_license.imageUrl ? 0 : 1;
    const {
        name,
        economic_code,
        owner_full_name,
        owner_phone_number,
        secend_phone_number,
        office_address,
        owner_national_code,
        warehouse_address,
        bank_name,
        bank_code,
        bank_sheba_number,
        office_number,
        warehouse_number,
        bank_card_number,
        owner_password,
    } = values
    dispatch(fetchOneStoreRequest())
    axios.post(`https://market-api.iran.liara.run/api/admin/stores/${storeId}/update` ,{
        name ,
        economic_code ,
        owner_full_name ,
        owner_phone_number ,
        secend_phone_number ,
        owner_national_code,
        office_address ,
        office_number : office_number.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, ''),
        warehouse_address ,
        warehouse_number : warehouse_number.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, ''),
        bank_name ,
        bank_code ,
        bank_card_number : bank_card_number.replace(/\s/g, '').replace(/-/g, ''),
        bank_sheba_number,
        owner_password,
        province :province,
        city,
        license_image,
        banner_image,
        logo_image,
    } , {headers : {'content-type' : 'multipart/form-data' ,authorization : `Bearer ${token}`,}})
    .then(() => {
        if(window){
            window.location.href="/admin/manage-stores"
        }
    } )
    .catch(error => {
        const serverMessage_list = error?.response?.data?.errors
        if(serverMessage_list && serverMessage_list.length > 0) serverMessage_list.forEach(error => toast.error(error));
        if(!serverMessage_list) toast.error("خطا در ثبت تغییرات")
        dispatch(fetchOneStoreFailure("خطا در ثبت تغییرات"))
    })
}