// /* import React from 'react'
// import {  Link, Route, Routes } from 'react-router-dom';
// import { Layout, Typography, Space } from 'antd';

// import './App.css'
// import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components';

// const App = () => {
//   return (
//     <div className='app'>
//          <div className='navbar'>
//                 <Navbar/>
//          </div>
//          <div className='main'>
//                 <Layout>
//                     <div className='routes'>
//                     <Routes>
//               <Route exact path="/" element={<Homepage />} />
//               <Route exact path="/exchanges" element={<Exchanges />} />
//               <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
//               <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
//           {/*     <Route exact path="/news" element={<News />} /> */}
//             </Routes>
//                     </div>
//                 </Layout>
         
//          <div className='footer' style={{marginTop:'8rem'}}>
//                     <Typography.Title level={3} style={{color: 'white', textAlign:'center'}}>
//                        UptoDate-Crypto <br/>
//                         <span style={{fontSize:'0.8rem'}}>All rights reserved</span>
//                     </Typography.Title>
//                     <Space>
//                         <Link to="/">Home</Link>
//                         <Link to="/exchanges">Exchanges</Link>
//                        {/*  <Link to="/news">News</Link> */}
//                     </Space>
//                     </div>
//          </div>
//     </div>
//   );
// }

// export default App */



import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
       <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

       <Container className="footer" >
          <Typography.Title level={3} style={{ color: 'white', textAlign: 'center' }}>
            UptoDate-Crypto <br />
            <span style={{ fontSize: '0.8rem' }}>All rights reserved</span>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </Container> 
      
      </div> 
      
    </div>
     
  );
};

export default App;
