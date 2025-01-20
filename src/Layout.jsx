import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer';
// import Order from './components/Order';

function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout