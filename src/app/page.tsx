import Image from "next/image";
import Header from "./components/header/Header";
import SystemCheck from "./components/systemCheck/SystemCheck";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <SystemCheck />
    <Footer />
    </>
  )
}