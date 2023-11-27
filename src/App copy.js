import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bgm from './img/bg2.png';
import { useState } from 'react';
import data from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/detail.js';
import About from './pages/about';
import axios from 'axios';

function App() {

  let [lps,setLps] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/detail">Pricing</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>back</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>forward</Nav.Link>
          </Nav>
        </Container>
      </Navbar><br></br>

      <Routes>
        <Route path = "/" element = {
          <>
              <div className = "main-bg" style = 
              {{backgroundImage : 'url(' + bgm + ')'}}></div>

              <br></br>
              <div className="container text-center">
              <div className="row">          
                {
                  shoes.map((a, i)=>{
                    return(
                      <Card lpss = {lps[i]} i = {i+1}></Card>
                    )
                  })
                }
               
              </div>
            </div>
            <button className = "btn btn-warning" onClick={()=>{
                axios.get('https://jamsuham75.github.io/image/data2.json')
                .then((result)=>{
                  console.log(result.data);
                })
            }}>상품 더보기</button>
          </>
        }></Route>
        <Route path = "/detail/:id" element = {<Detail lps = {lps} ></Detail>}></Route>
      

        <Route path = "/about" element = {<About></About>}>
          <Route path = "member" element = {<div>멤버들 리스트</div>}></Route>
          <Route path = "location" element = {<div>회사 위치</div>}></Route>
        </Route>

        <Route path = "*" element = {<div><h1>404 에러</h1><br></br>없는 페이지입니다.</div>}></Route>
      </Routes>

    </div>
  );
}

function Card(props){
  let navigate = useNavigate();

  return(
      <div className="col-md-4">
        <button className='btn btn-light' onClick={
          ()=>{
            navigate('/detail/'+ (props.i-1));
            console.log(props.i);
          }
        }>
          <img src = {process.env.PUBLIC_URL + '/lp' + props.i+ '.jpg'} width="80%"></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </button>
      </div>
  )
}

export default App;
