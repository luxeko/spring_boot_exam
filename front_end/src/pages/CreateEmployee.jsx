import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import image_add from "../assets/image_add.png"
import moment from "moment";
import {postCreateEmployee} from "../services/API.jsx";
import { toast } from 'react-toastify';
import Breadcrumb from "../components/Breadcrumb.jsx";

const CreateEmployee = () => {
    const [name, setName] = useState("")
    const [wage, setWage] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const navigate = useNavigate()
    const inputAvatarRef = useRef(null);
    const [avatarName, setAvatarName] = useState(null)
    const [avatar, setAvatar] = useState(image_add)

    const handleResetForm = () => {
        setName("")
        setWage("")
        setCreatedAt("")
    }
    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setWage(e.target.value);
        }
    };
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        if (!validate()) {
            return
        }
        const createdAt = moment(new Date()).format()
        const res = await postCreateEmployee(name, wage, createdAt)
        if (res && res.code === 200) {
            toast.success(res.message);
            navigate(`/`)
        }
    }
    const handleChangeAvatar = (e) => {
        setAvatar(window.URL.createObjectURL(e.target.files[0]))
        setAvatarName(e.target.files[0])
    }
    const validate = () => {
        if (name === "") {
            toast.error("Name can be null")
            return false;
        } else if (wage === "") {
            toast.error("Wage can be null")
            return false;
        }
        return true
    }
    const dataBreadcumb = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Employees",
            path: "/"
        },
        {
            name: "Create employee",
            path: ""
        }
    ]

    return (
        <>
            <div className={`max-w-screen-xl mx-auto lg:max-w-7xl sm:pt-6 pt-6`}>
                <Breadcrumb data={dataBreadcumb}/>
                <h1 className={`font-semibold text-3xl sm:pt-6 pt-6`}>Create employee</h1>
                <div className={`max-w-screen-xl mx-auto py-12 sm:py-12 lg:max-w-7xl grid grid-cols-2 gap-10`}>
                    <form className="col-span-1">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="name">
                                    Employee Name
                                </label>
                                <input
                                    value={name ? name : ""}
                                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="name" name={`name`} type="text"
                                    onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="wage">
                                    Wage
                                </label>
                                <input
                                    value={wage ? wage : ""}
                                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                                    id="wage" name={`wage`}
                                    onChange={handleChange}
                                    type="text"/>
                            </div>
                        </div>
                        <div className={`flex items-end justify-end`}>
                            <button type="submit"
                                    onClick={(e) => handleSubmitForm(e)}
                                    className="mr-2 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Save
                            </button>
                            <button type="reset"
                                    onClick={handleResetForm}
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black border bg-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:text-white hover:bg-red-700">
                                Reset
                            </button>
                        </div>
                    </form>
                    {/*<div className={`col-span-1`}>*/}
                    {/*    <label className="block">*/}
                    {/*        <span className="sr-only">Choose profile photo</span>*/}
                    {/*        <input className={`block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100`} onChange={(e) => handleChangeAvatar(e)} accept="image/png" ref={inputAvatarRef}*/}
                    {/*               type={`file`}/>*/}
                    {/*    </label>*/}
                    {/*    <div className={`w-full aspect-square mt-4`}>*/}
                    {/*        <img style={{*/}
                    {/*            backgroundSize: "cover",*/}
                    {/*            backgroundPosition: "center",*/}
                    {/*            objectFit: "cover"*/}
                    {/*        }} className="rounded w-full h-full" src={avatar}*/}
                    {/*             alt="Extra large avatar"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default CreateEmployee;