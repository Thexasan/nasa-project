import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Layout(){
  useEffect(() => { 
    AOS.init(); 
    AOS.refresh(); 
  }, []);
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}