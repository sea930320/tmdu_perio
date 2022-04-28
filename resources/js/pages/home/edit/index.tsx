import React, { useEffect, useState } from "react";
import {Route,Routes,NavLink,useLocation} from 'react-router-dom';
import { BiArrowBack,BiCalendar} from "react-icons/bi";
import Main from "./main";
import Login from "../../auth/login";
import Calender from "./calender";
const Editer = () => {
    const [flag, setFlag]=useState(false);
    const location = useLocation();
    const path=location.pathname.split("/");
    useEffect(() => {
        if(path.length>=4&&path[3]!=""){
            setFlag(true);
        }else{
            setFlag(false);
        }
    }, [location])
    return (
        <div>
            <div className="flex justify-between pt-8 pb-2">
                <NavLink to="" className={flag?"":"invisible"}>
                    <div className="bg-mainColor text-white rounded-md">
                        <BiArrowBack className="text-2xl"/>
                    </div>
                </NavLink>
                <p className="text-base text-mainColor  font-semibold text-center">松田 聖子 さん</p>
                <NavLink to="calender" className={flag?"invisible":""}>
                    <div className="bg-mainColor text-white rounded-md">
                        <BiCalendar className="text-2xl"/>
                    </div>
                </NavLink>
            </div>
            <div className="text-xl bg-btnbgColor h-0.5 mx-2"></div>
            <Routes >
                <Route  path="/" element={ <Main />}/>
                <Route  path="/calender" element={ <Calender />}/>
            </Routes>
        </div>
    );
};
export default Editer;