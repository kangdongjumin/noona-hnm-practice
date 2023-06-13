
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import ProductDetail  from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';

import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PrivateRoute from './Route/PrivateRoute';


// 1. 전체상품 페이지, 로그인, 상품상세 페이지
// 1-1 Navbar 만들기
// 2. 전체 상품페이지에서 전체상품 볼수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품디테일으 눌렀으나, 로그인이 안됐을 경우 로그인 페이지가 나온다
// 5. 로그인이 되어 있을 경우에는 상품 디테일을 볼 수 있다
// 6. 로그 아웃 버튼을 클릭하면 로그아웃이 된다
// 7. 로그아웃이 되면 상품 디테일을 볼 수 없다. 다시 로그인을 해야한다
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있따


function App() {
  const [authenticate, setAuthenticate] = useState(false)

  useEffect(()=>{
    console.log("AAAA",authenticate)
  },[authenticate ])


  return <div>
    <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate}/> 

      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate}  />} />

      </Routes>
       </div>
}

export default App;
