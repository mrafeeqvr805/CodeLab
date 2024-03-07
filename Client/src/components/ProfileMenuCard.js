import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

const ProfileMenuCard = ({icon,title}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [cookies, removeCookie] = useCookies([]);
  const handleLogout = () =>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      console.log("logot successfully");
      removeCookie("token");
      navigate('/login')
    }).catch((error) => {
      console.log(error);
    });
  }
  const handlePages = () =>{
    if(title === "My Projects"){
      navigate('/myprojects')
    }
  }
  return (
    <div onClick={title === 'Logout' ? handleLogout : handlePages} className='flex items-center gap-8'>
        <div className=' rounded-full bg-light h-12 w-12 flex justify-center items-center'>
            <i className={" text-primary text-xl "+icon}></i>
        </div>
        <span className={title === "Logout" ? "text-red-500":"text-black"}>{title}</span>
    </div>
  )
}

export default ProfileMenuCard