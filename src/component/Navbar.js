import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({setAuthenticate, authenticate}) => {
    const menuList = [
        '여성',
     'Divided',
      '남성',
       '신생아/유아',
       '아동',
       'H&M Home',
       '지속가능성']
    const navigate = useNavigate()
    const [sideMenu, setSideMenu] = useState(false)
    const goToLogin=() => {
        navigate("/login")
        setAuthenticate(false)
    } 

    const goToHome=()=> {
        navigate("/")
    }
    const search =(event)=> {
        if(event.key === "Enter") {
            // 입력한 검색어를 읽어와서 url을 바꿔준다
        let keyword = event.target.value
        console.log(keyword)
        navigate(`/?q=${keyword}`)
        }
        
    }


  return (
    <div>
      <div className="navbar-top"> 
      <div className="menuForMobile" >
        <FontAwesomeIcon onClick={()=> setSideMenu(!sideMenu)} icon={faBars} />
        </div>
        <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>{`${authenticate?"로그아웃":"로그인"}`}</div>
        </div>
      </div>
       
      <div className="nav-section">
      <img onClick={goToHome} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"></img>
      </div>

      <div className="menu-area">
        <div className="menu-bar" style= {{ display : `${sideMenu?"block":"none"}`}}>
        <ul className="menu-list">
            {menuList.map((menu) => (
                <li>{menu} </li>
            ))}
        </ul></div>
        <div className="search-area">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" onKeyPress={(event)=>search(event)} />
        </div>
      </div>


    </div>
  )
}

export default Navbar

