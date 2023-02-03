import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}
