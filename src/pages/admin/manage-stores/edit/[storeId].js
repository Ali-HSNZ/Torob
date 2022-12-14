import AdminPageAside from "@/components/adminPage/Aside";
import Layout from "@/layout/Layout";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { Modal } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup'
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { confirmStore, deleteStore, fetchOneStore,updateStore } from "@/redux/admin/admin_manageStores/admin_manageStoresAction";
import { provinces } from "@/common/admin/provinces";
import SelectBox from "@/common/admin/SelectBox";
import { useEffect } from "react";
import { allCities } from "@/common/admin/cities";
import ReactLoading from 'react-loading';
import Cookies from "universal-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import FormikInput from "@/common/admin/FormikInput";
import { ONLY_DIGIT_REGIX, ONLY_PERSIAN_ALPHABET, PASSWORD_REGIX, PHONE_NUMBER_REGIX } from "@/utils/Regex";


const InsertStore = () => {

    const dispatch = useDispatch()
    const {store} = useSelector(state => state.admin_stores.oneStore)
    const {loading} = useSelector(state => state.admin_stores)

    const router = useRouter()
    const storeId = router.query.storeId
    const [isAsideModal,setIsAsideModal] = useState(false)
    const [provienceQuery,setProvienceQuery] = useState('')
    const [cities,setCities] = useState(null)    
    const [cityQuery , setCityQuery] = useState("")
    const [selectedProvience,setSelectedProvience] = useState("")
    const [selectedCity,setSelectedCity] = useState("")

    useEffect(()=>{
        dispatch(fetchOneStore(storeId))
    },[storeId])


    const filteredProvinces = provienceQuery === '' ? provinces : provinces && provinces.filter((province) => province.name.toLowerCase().replace(/\s+/g, '').includes(provienceQuery.toLocaleLowerCase().replace(/\s+/g, '')))
    const filteredCities = cityQuery === '' ? cities : cities && cities.filter((city) => city.name.toLowerCase().replace(/\s+/g, '').includes(cityQuery.toLocaleLowerCase().replace(/\s+/g, '')))


    const [isImage_license_Modal,setIsImage_license_Modal] = useState(false)
    const [isImage_logo_Modal,setIsImage_logo_Modal] = useState(false)
    const [isImage_storeBanner_Modal,setIsImage_storeBanner_Modal] = useState(false)

    const [onChangeFile_license , setOnChangeFile_license] = useState({imageUrl : null , selectedFile : null})
    const [onChangeFile_logo , setOnChangeFile_logo] = useState({imageUrl : null , selectedFile : null})
    const [onChangeFile_storeBanner , setOnChangeFile_storeBanner] = useState({imageUrl : null , selectedFile : null})

    const image_license_Input_ref = useRef()
    const image_logo_Input_ref = useRef()
    const image_storeBanner_Input_ref = useRef()

    const checkImageFormat = (fileName) => {
        const type =  fileName.split('.').pop();
        const valid = ['png','jpg','jpeg','webp']
        if(!valid.includes(type.toLocaleLowerCase())){
            return false
        }
        return true
    }
 
    const changeFIleAction_input = (input,min,max,setOnChangeFile,title,minTitle,maxTitle,ref) => {
        const image = input.target.files[0]
        if(input.target.files && image){
            if(!checkImageFormat(image.name)){
                toast.error(`?????????? ${title} ?????????? ????????`)
                ref.current.value = null
                return false
            }
            if(Number(image.size) < (min*1000)){
                toast.error(`?????????? ${title} ?????? ?????????? ???????? ???? ${toPersianDigits(minTitle)} ????????`)
                ref.current.value = null
                return false
            } 
            if(Number(image.size) > (max*1000)){
                toast.error(`?????????? ${title} ?????? ?????????? ?????????? ???? ${toPersianDigits(maxTitle)}  ????????`)
                ref.current.value = null
                return false
            }
            
            setOnChangeFile({selectedFile : image , imageUrl : URL.createObjectURL(image)})
        }
    }    

    useEffect(()=>{
        if(store){
            const currentProvince = provinces.find(province => province.name == store.province);
            const currentCity = allCities.find(city => city.name == store.city);
            setSelectedCity(currentCity)
            setSelectedProvience(currentProvince)
        }
        setOnChangeFile_logo(store && store.is_logo_image && {selectedFile : null , imageUrl : store.logo_image} || "") 
        setOnChangeFile_license(store && store.is_license_image && {selectedFile : null , imageUrl : store.license_image} || "") 
        setOnChangeFile_storeBanner(store && store.is_store_banner_image && {selectedFile : null , imageUrl : store.banner_image} || "") 
    },[store])

    useEffect(()=>{
        const id = selectedProvience && selectedProvience.id || null;
        if(id){
            const cities = allCities.filter(city => city.province_id === selectedProvience.id)
            setCities(cities)
        }else{
            setCities(null)
        }
    },[selectedProvience])
    

    const onSubmit = (values) => {
        const city = selectedCity && selectedCity.name || null
        const province = selectedProvience && selectedProvience.name || null
        if(!province){
            toast.error('???????? ???????????? ???????? (??????????) ???? ???????? ????????'); return false
        } 
        if(!city){
            toast.error('???????? ???????????? ???????? (??????) ???? ???????? ????????'); return false
        }
        dispatch(updateStore({storeId,values,onChangeFile_logo,onChangeFile_license,onChangeFile_storeBanner,city,province}))
    }



    const validationSchema = Yup.object({
        warehouse_number : Yup.string()
            .required('?????????? ???????? ???????? ?????????? ?????????? ???????????? ??????.')
            .test('warehouse_number_checkRequire' , "?????????? ???????? ???????? ?????????? ?????????? ???????????? ??????." , (value = "") => {
                const warehouseNumber = value.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, '')
                if(warehouseNumber.length === 0) return false;
                return true
            })
            .test('warehouse_number_checkLength' , "?????????? ???????? ???????? ?????????? ?????????? ?????????? ????????." , (value = "") => {
                const warehouseNumber = value.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, '')
                if(warehouseNumber.length < 11) return false;
                return true
            }),
        bank_card_number : Yup.string()
            .required("?????????? ???????? ???????????? ???? ????????.")
            .trim()
            .test('bank_card_number_checkRequire' , "?????????? ???????? ???????????? ??????." , (value = "") => {
                const cartNumber = value.replace(/\s/g, '').replace(/-/g, '')
                if(cartNumber.length === 0) return false;
                return true
            })
            .test('bank_card_number_checkLength' , "?????????? ???????? ?????????? ????????." , (value = "") => {
                const cartNumber = value.replace(/\s/g, '').replace(/-/g, '')
                if(cartNumber.length < 16) return false;
                return true
            }),
        office_number : Yup.string()
            .required("?????????? ???????? ???????? ???????? ?????????? ???????????? ??????.") 
            .test('office_number_checkRequire' , "?????????? ???????? ???????? ???????? ?????????? ???????????? ??????." , (value = "") => {
                const phoneNumber = value.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, '');
                if(phoneNumber.length === 0) return false;
                return true
            })
            .test('office_number_checkLength' , "?????????? ???????? ???????? ???????? ?????????? ?????????? ????????." , (value = "") => {
                const phoneNumber = value.replace(/["'()]/g,"").replace(/\s/g, '').replace(/-/g, '');
                if(phoneNumber.length < 11) return false;
                return true
            }),
        name : Yup.string()
            .required('?????? ?????????????? ???????????? ??????.')
            .min(3, "?????? ?????????????? ?????? ?????????? ???? ???? ???? ?? ?????????? ????????.")
            .max(50,"?????? ?????????????? ?????? ?????????? ?????????? ???? ???? ?????????? ????????.")
            .trim(),
        economic_code : Yup.string()
            .length(12,"???? ?????????????? ???????? ???? ?????? ????????.")
            .required("???? ?????????????? ???????????? ??????.")
            .matches(ONLY_DIGIT_REGIX,"???? ?????????????? ???????? ???? ?????? ?????? ????????.")
            .trim(),
        owner_full_name : Yup.string()
            .required('?????? ?? ?????? ???????????????? ???????? ?????????????? ???????????? ??????.')
            .min(3,"?????? ?? ?????? ???????????????? ?????? ?????????? ???? ???? ???? ?? ?????????? ????????.")
            .max(50,"?????? ?? ?????? ???????????????? ?????? ?????????? ?????????? ???? ???? ?????????? ????????.")
            .matches(ONLY_PERSIAN_ALPHABET , "?????? ?? ?????? ???????????????? ???? ???? ?????????? ???????? ????????.")
            .trim(),
        owner_phone_number : Yup.string()
            .required('?????????? ?????????? ???????? ?????????????? ???????????? ??????.')
            .matches(PHONE_NUMBER_REGIX,"?????????? ?????????? ???????? ?????????????? ?????????? ????????.")
            .trim(),
        secend_phone_number : Yup.string()
            .matches(PHONE_NUMBER_REGIX,"?????????? ?????????? ?????? ???????? ?????????????? ?????????? ????????.")
            .trim(),
        office_address : Yup.string()
            .required('???????? ???????? ?????????? ???????????? ??????.')
            .trim(),
        warehouse_address : Yup.string().trim(),

        bank_name: Yup.string()
            .required("?????? ???????? ???????????? ??????.")
            .min(3,"?????? ???????? ?????? ?????????? ???? ???? ???? ?? ?????????? ????????.")
            .max(50 , "?????? ???????? ?????? ?????????? ???????? ???? ???? ?????????? ????????.")
            .matches(ONLY_PERSIAN_ALPHABET , "?????? ???????? ???? ???? ?????????? ???????? ????????.")
            .trim(),
        bank_code : Yup.string()
            .required("???? ???????? ???????????? ??????.")
            .length(4,'???? ???????? ???????? ???????? ?? ???????? ????????.')
            .matches(ONLY_DIGIT_REGIX,"???? ???????? ???????? ???? ??????  ?????? ????????.")
            .trim(),
        bank_sheba_number : Yup.string()
            .required("?????????? ?????? ???????????? ??????.")
            .length(24,"?????????? ?????? ???????? ???? ?????? ????????.")
            .matches(ONLY_DIGIT_REGIX,"?????????? ?????? ???????? ???? ?????? ?????? ????????.")
            .trim(),
        owner_national_code : Yup.string()
            .required("???? ?????? ???????? ?????????????? ???????????? ??????.")
            .length(10 , "???? ?????? ?????????????? ??????.")
            .matches(ONLY_DIGIT_REGIX , "???? ?????? ?????????????? ??????.")
            .trim(),
        owner_password : Yup.string()
            .min(6 , "?????? ???????? ?????? ?????????? ???????? ???? ?? ?????????????? ????????")
            .max(24 , "?????? ???????? ?????? ?????????? ?????????? ???? ???? ?????????? ????????")
            .matches(PASSWORD_REGIX,"?????? ???????? ?????????? ???????? | ?????? ???????? ?????????????? ???????????? ???? ?????? ?? ???????? ?????????????? ????????"),
    })
    const formik = useFormik({
        onSubmit,
        validateOnMount : true,
        validationSchema,
        enableReinitialize : true,
        initialValues : {
            name : store && store.name || "",
            economic_code :  store && store.economic_code || "",
            owner_full_name :  store && store.owner_full_name || "",
            owner_phone_number :  store && store.owner_phone_number || "",
            secend_phone_number :  store && store.secend_phone_number || "",
            office_address : store && store.office_address || "",
            office_number :  store && store.office_number || "",
            warehouse_address :  store && store.warehouse_address || "",
            warehouse_number : store && store.warehouse_number || "",
            bank_name : store && store.bank_name || "",
            bank_code : store && store.bank_code || "",
            bank_card_number :  store && store.bank_card_number || "",
            bank_sheba_number : store && store.bank_sheba_number || "",
            owner_national_code :  store && store.owner_national_code || "",
        }
    })


    return (  
        <Layout isFooter={true} pageTitle={"?????? ???????????? | ???????????? ??????????????"}>
            <div className="w-full flex flex-col lg:flex-row  justify-between">
                <AdminPageAside/>
                <section className="w-full lg:w-4/5 flex-0 h-max px-4 "> 
                    <Modal open={isAsideModal} onClose={()=>setIsAsideModal(false)} className="lg:hidden">
                        <><AdminPageAside isMobileScreen={true} setIsMobileScreen={setIsAsideModal} mobileScreenClassName={'sm:w-1/2 w-full'}/></>
                    </Modal>
                    <Modal open={isImage_license_Modal} onClose={() => setIsImage_license_Modal(false)} className="p-4 h-full w-full flex justify-center items-center">
                        <section className=" bg-white sm:w-1/2 h-1/2 rounded-md  flex justify-center items-center p-4 relative">
                            <img className="max-h-full w-auto" src={onChangeFile_license && onChangeFile_license.imageUrl || ""}/>
                            <button onClick={() => setIsImage_license_Modal(false)} className="absolute top-2 right-2 hover:bg-gray-100 bg-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </section>
                    </Modal>
                    <Modal open={isImage_logo_Modal} onClose={() => setIsImage_logo_Modal(false)} className="p-4 h-full w-full flex justify-center items-center">
                        <section className=" bg-white sm:w-1/2 h-1/2 rounded-md  flex justify-center items-center p-4 relative">
                            <img className="max-h-full w-auto" src={onChangeFile_logo && onChangeFile_logo.imageUrl || ""}/>
                            <button onClick={() => setIsImage_logo_Modal(false)} className="absolute top-2 right-2 hover:bg-gray-100 bg-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </section>
                    </Modal>
                    <Modal open={isImage_storeBanner_Modal} onClose={() => setIsImage_storeBanner_Modal(false)} className="p-4 h-full w-full flex justify-center items-center">
                        <section className=" bg-white sm:w-1/2 h-1/2 rounded-md  flex justify-center items-center p-4 relative">
                            <img className="max-h-full w-auto" src={onChangeFile_storeBanner && onChangeFile_storeBanner.imageUrl || ""}/>
                            <button onClick={() => setIsImage_storeBanner_Modal(false)} className="absolute top-2 right-2 hover:bg-gray-100 bg-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </section>
                    </Modal>
                    <div className="flex justify-between w-full items-center mt-4">
                        <div  className="flex items-center">
                            <button onClick={() => setIsAsideModal(!isAsideModal)} className="lg:hidden p-2 bg-white ml-4 rounded-md cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > 
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            <h1 className="font-sans font-bold text-lg">???????????? ??????????????</h1>
                        </div>
                        <div className="flex gap-x-2 items-center">
                        <Link href={'/admin/manage-stores'}>
                            <a className=" items-center hover:bg-orange-200 bg-orange-100 flex border border-orange-800 text-orange-800 rounded-md py-2 px-7">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>
                            </a>
                        </Link>
                            <Link href={'/admin'}>
                                <a className=" items-center hover:bg-blue-200 bg-blue-100 flex border border-[#184e77] text-[#184e77] rounded-md py-2 px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        {/*  ???????? ?????????????? */}
                        <div className="p-5 mt-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <p className="font-sans font-bold"> ???????? ??????????????</p>
                            <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                                <FormikInput  isRequired={true} name={"owner_full_name"} title={"?????? ?? ?????? ???????????????? ???????? ??????????????"} formik={formik} placeholder={"?????? ?? ?????? ???????????????? ???????? ??????????????"} parentClassName="flex flex-col relative"/>
                                <FormikInput maxLength={11} isRequired={true} name={"owner_phone_number"} title={"?????????? ?????????? ???????? ??????????????" } formik={formik} placeholder={"?????????? ?????????? ???????? ??????????????"} parentClassName="flex flex-col relative"/>
                                <FormikInput maxLength={10} isRequired={true} name={"owner_national_code"}title={"???? ?????? ???????? ??????????????" } formik={formik} placeholder={"???? ?????? ???????? ??????????????"} parentClassName="flex flex-col relative"/>
                                <FormikInput maxLength={11} isRequired={false} name={"secend_phone_number"} title={"?????????? ?????????? ?????? ???????? ??????????????"} formik={formik} placeholder={"?????????? ?????????? ?????? ???????? ??????????????"} parentClassName="flex flex-col relative"/>
                            </section>
                        </div>
                        {/*  ?????????????? | ???????? */}
                        <div className="p-5 mt-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <p className="font-sans font-bold"> ?????????????? | ????????</p>
                            <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                                <FormikInput isRequired={true} name={"name"} title={"?????? ??????????????"} formik={formik} placeholder={"?????? ??????????????"} parentClassName="flex flex-col relative"/>
                                <FormikInput isRequired={true} name={"office_address"} title={"???????? ???????? ?????????? ????????"} formik={formik} placeholder={"???????? ???????? ?????????? ????????"} parentClassName="flex flex-col relative"/>
                                
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800 before:content-['*'] before:text-red-600">?????????? ???????? ???????? ???????? ??????????:</p>
                                    <InputMask dir="ltr"  type={"text"} value={formik.values.office_number} onChange={formik.handleChange} onBlur={formik.handleBlur} mask="(999) 9999 9999" name="office_number"  maskPlaceholder="-" className={`${formik.errors.office_number && formik.touched.office_number ? "border-red-400 hover:border-red-600  focus:border-red-600" : "border-gray-300 hover:border-gray-600 px-2 focus:border-gray-600"} border  py-[6px] text-[13px] mt-2 rounded-md  focus:ring-0`} maskchar={null}/>
                                    {formik.errors.office_number && formik.touched.office_number && <p className="mt-2 font-sans text-xs text-red-700">{formik.errors.office_number}</p>}
                                </div>
                                
                                <FormikInput isRequired={false} name={"warehouse_address"} title={"???????? ?????????? ?????????? ????????"} formik={formik} placeholder={"???????? ?????????? ?????????? ????????"} parentClassName="flex flex-col relative"/>
                                
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800 before:content-['*'] before:text-red-600">?????????? ???????? ???????? ?????????? ?????????? ????????:</p>
                                    <InputMask dir="ltr"  type={"text"} value={formik.values.warehouse_number} onChange={formik.handleChange} onBlur={formik.handleBlur} mask="(999) 9999 9999" name="warehouse_number"  maskPlaceholder="-" className={`${formik.errors.warehouse_number && formik.touched.warehouse_number ? "border-red-400 hover:border-red-600  focus:border-red-600" : "border-gray-300 hover:border-gray-600 px-2 focus:border-gray-600"} border  py-[6px] text-[13px] mt-2 rounded-md  focus:ring-0`} maskchar={null}/>
                                    {formik.errors.warehouse_number && formik.touched.warehouse_number && <p className="mt-2 font-sans text-xs text-red-700">{formik.errors.warehouse_number}</p>}
                                </div>
                                
                                <FormikInput maxLength={12} isRequired={true} name={"economic_code"} title={"???? ??????????????"} formik={formik} placeholder={"???? ??????????????"} parentClassName="flex flex-col relative"/>
                                
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800 before:content-['*'] before:text-red-600">???????? ???????????? ???????? - ?????????? :</p>
                                    <div className="mt-2">
                                        <SelectBox 
                                            notFoundTitle="?????????? ???????? ?????? ???????? ??????." 
                                            query={provienceQuery} 
                                            setQuery={setProvienceQuery} 
                                            filteredData={filteredProvinces} 
                                            selected={selectedProvience} 
                                            setSelected={setSelectedProvience}
                                        />
                                    </div>
                                </div>
    
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800 before:content-['*'] before:text-red-600">???????? ???????????? ???????? - ?????? :</p>
                                    <div className="mt-2">
                                        <SelectBox 
                                            isDisabled={selectedProvience ? false : true}
                                            notFoundTitle="?????? ???????? ?????? ???????? ??????." 
                                            query={cityQuery} 
                                            setQuery={setCityQuery} 
                                            filteredData={filteredCities} 
                                            selected={selectedCity} 
                                            setSelected={setSelectedCity}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/*  ???????? ?????????? */}
                        <div className="p-5 mt-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <p className="font-sans font-bold"> ???????? ??????????</p>
                            <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800 before:content-['*'] before:text-red-600">?????????? ???????? :</p>
                                    <InputMask dir="ltr"  type={"text"} value={formik.values.bank_card_number} onChange={formik.handleChange} onBlur={formik.handleBlur} mask="9999 9999 9999 9999" name="bank_card_number" maskPlaceholder="-" className={`${formik.errors.warehouse_number && formik.touched.warehouse_number ? "border-red-400 hover:border-red-600  focus:border-red-600" : "border-gray-300 hover:border-gray-600 px-2 focus:border-gray-600"} border  py-[6px] text-[13px] mt-2 rounded-md  focus:ring-0`} maskchar={null}/>
                                    {formik.errors.bank_card_number && formik.touched.bank_card_number && <p className="mt-2 font-sans text-xs text-red-700">{formik.errors.bank_card_number}</p>}
                                </div>
                                <FormikInput maxLength={24} isRequired={true} name={"bank_sheba_number"} title={"?????????? ??????"} formik={formik} placeholder={"?????????? ??????"} parentClassName="flex flex-col relative"/>
                                <FormikInput isRequired={true} name={"bank_name"} title={"?????? ????????"} formik={formik} placeholder={"?????? ????????"} parentClassName="flex flex-col relative"/>
                                <FormikInput maxLength={4} isRequired={true} name={"bank_code"} title={"???? ????????"} formik={formik} placeholder={"???? ????????"} parentClassName="flex flex-col relative"/>
                            </section>
                        </div>
                        {/* ???????????? ?? ???????? ???? */}
                        <div className="p-5 mt-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <p className="font-sans font-bold">???????????? ?? ???????? ????</p>
                            <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                                {/* License Image */}
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800"> ?????????? ???????? :</p>
                                    <input type={'file'} id="chooseImage_license" name="license" ref={image_license_Input_ref} accept=".jpg,.png,.jpeg,.webp" className="hidden" onChange={event => changeFIleAction_input(event,64,2048,setOnChangeFile_license,"????????","64 ????????????????","2 ??????????????",image_license_Input_ref)}/>
                                    {onChangeFile_license.imageUrl? (
                                        <section className="flex justify-between items-center mt-2 h-[38px] ">
                                            <button type={"button"} onClick={()=>setIsImage_license_Modal(true)} className="flex items-center justify-between w-full rounded-r-md bg-green-50 h-full border-l-0 pr-2 hover:bg-green-100 hover:border-green-600 border border-green-500">
                                                <span className="text-[13px] font-sans text-green-700 "> ?????????? ?????????? ????????</span>
                                            </button>
                                            <button onClick={()=> {setOnChangeFile_license({imageUrl : null , selectedFile : null}) ; image_license_Input_ref.current.value = null}}  type={"button"} className="bg-red-50 hover:bg-red-100 border h-full px-4 rounded-l-md border-red-500 hover:border-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  text-red-800">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </section>
                                    ) : (
                                        <label htmlFor="chooseImage_license" className="flex justify-between items-center px-2 mt-2 cursor-pointer text-[13px] font-sans rounded-md h-[38px] bg-blue-50 hover:bg-blue-100 hover:border-blue-700 border border-blue-400 ">
                                            <span className="text-blue-700">???????????? ?????????? ????????</span>
                                            <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                            </svg>
                                        </label>
                                    )}
                                </div>

                                {/* Logo Image */}
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800">?????????? ???????? :</p>
                                    <input type={'file'} id="chooseImage_logo"  ref={image_logo_Input_ref} accept=".jpg,.png,.jpeg,.webp" className="hidden" onChange={event => changeFIleAction_input(event,32,2048,setOnChangeFile_logo,"???? ???? ??????????????","32 ????????????????","2 ??????????????",image_logo_Input_ref)}/>
                                    {onChangeFile_logo.imageUrl ?  (
                                        <section className="flex justify-between items-center mt-2 h-[38px] ">
                                            <button type={"button"} onClick={()=>setIsImage_logo_Modal(true)} className="flex justify-between items-center pr-2 w-full h-full rounded-r-md bg-green-50  border-l-0 hover:bg-green-100 hover:border-green-600 border border-green-500">
                                                <span className="text-[13px] font-sans text-green-800 ">?????????? ???????? </span>
                                            </button>
                                            <button onClick={()=> {setOnChangeFile_logo({imageUrl : null , selectedFile : null}) ; image_logo_Input_ref.current.value = null}}  type={"button"} className="h-full bg-red-50 hover:bg-red-100 border px-4 rounded-l-md border-red-500 hover:border-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  text-red-800">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </section>
                                    ) : (
                                        <label htmlFor="chooseImage_logo" className="flex justify-between items-center px-2 h-[38px] mt-2 cursor-pointer text-[13px] font-sans rounded-md  bg-blue-50 hover:bg-blue-100 hover:border-blue-700 border border-blue-400 ">
                                            <span className="text-blue-700">???????????? ????????</span>
                                            <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                            </svg>
                                        </label> 
                                    )}
                                </div>

                                {/* Store Banner Image */}
                                <div className="flex flex-col relative ">
                                    <p className="font-sans text-[13px] text-gray-800"> ?????????? ???? ???? ?????????????? :</p>
                                    <input type={'file'} id="chooseImage_storeBanner"  ref={image_storeBanner_Input_ref} accept=".jpg,.png,.jpeg,.webp" className="hidden" onChange={event => changeFIleAction_input(event,64,2048,setOnChangeFile_storeBanner,"???? ???? ??????????????","64 ????????????????","2 ??????????????",image_storeBanner_Input_ref)}/>
                                    {onChangeFile_storeBanner.imageUrl ? (
                                        <section className="flex justify-between items-center mt-2 h-[38px] ">
                                            <button type={"button"} onClick={()=>setIsImage_storeBanner_Modal(true)} className="flex justify-between items-center pr-2 w-full h-full rounded-r-md bg-green-50  border-l-0 hover:bg-green-100 hover:border-green-600 border border-green-500">
                                                <span className="text-[13px] font-sans text-green-800 ">?????????? ?????????? ???? ???? ?????????????? </span>
                                            </button>
                                            <button onClick={()=> {setOnChangeFile_storeBanner({imageUrl : null , selectedFile : null}) ; image_storeBanner_Input_ref.current.value = null}}  type={"button"} className="h-full bg-red-50 hover:bg-red-100 border px-4 rounded-l-md border-red-500 hover:border-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  text-red-800">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </section>
                                    ) : (
                                        <label htmlFor="chooseImage_storeBanner" className="flex justify-between items-center px-2 h-[38px] mt-2 cursor-pointer text-[13px] font-sans rounded-md  bg-blue-50 hover:bg-blue-100 hover:border-blue-700 border border-blue-400 ">
                                            <span className="text-blue-700">???????????? ?????????? ???? ???? ??????????????</span>
                                            <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                            </svg>
                                        </label>
                                    )}
                                </div>
                            </section>
                        </div>

                        {/*  ???????? ?????????????? */}
                        <div className="p-5 mt-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <p className="font-sans font-bold"> ?????? ????????</p>
                            <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                                <FormikInput maxLength={11} isRequired={false} name={"owner_password"} title={"?????? ???????? ????????"} formik={formik} placeholder={"?????????? ?????????? ?????? ???????? ??????????????"} parentClassName="flex flex-col relative"/>
                            </section>
                        </div>

                        <section className="w-full flex justify-end gap-x-2 my-4 items-center ">
                            {loading === true ? (
                                <ReactLoading type="spinningBubbles" className="ml-2" height={30} width={30} color="red" />
                            ) : (
                                <>
                                    {store && store.is_pending ? (
                                        <button type={"button"} onClick={()=> dispatch(confirmStore(storeId))} className={`items-center ${store && store.is_show ? "bg-yellow-50 hover:bg-yellow-100  border-yellow-600 text-yellow-600 " : "bg-red-50 hover:bg-red-100  border-red-600 text-red-600 "}  flex border text-sm rounded-md py-[6px] px-5 font-sans`}>?????????? ??????</button>
                                        ) : (
                                        <button type={"button"} onClick={()=> dispatch(deleteStore(storeId))} className={`items-center ${store && store.is_show ? "bg-green-50 hover:bg-green-100  border-green-600 text-green-600 " : "bg-red-50 hover:bg-red-100  border-red-600 text-red-600 "}  flex border text-sm rounded-md py-[6px] px-5 font-sans`}>?????????? ??????????</button>
                                    )}
                                </>
                            )}
                            <button disabled={loading} type={"submit"} className={`flex items-center ${formik.isValid ? " hover:bg-blue-200 bg-blue-100 border border-blue-600 text-blue-800 cursor-pointer " : "cursor-not-allowed hover:bg-gray-800 bg-gray-700 border border-gray-600 text-gray-100"}  py-[6px] px-6 font-sans  text-sm rounded-md`}> ?????????? ??????????????</button>
                        </section>
                    </form>


                </section>
            </div>
        </Layout>
    );
}
 
export default InsertStore;

export const getServerSideProps = async(ctx) => {
    // Check Permission
    const token =  new Cookies( ctx.req.headers.cookie).get("userToken");
    let ErrorCode = 0;
    if(!token) return{notFound : true}
    await axios.get("https://market-api.iran.liara.run/api/user", {headers : {Authorization : `Bearer ${token}`}})
    .then(({data}) =>  {
        if(data.user.account_type !== 'admin') ErrorCode = 403
    })
    .catch( () => ErrorCode = 403)
    if(ErrorCode === 403){
        return{notFound : true}
    }
    return { props : {}}
}

