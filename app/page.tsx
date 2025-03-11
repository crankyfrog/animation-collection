import Image from "next/image";
import styles from "./page.module.css";
import LogoCarousel from "@/components/logo-carousel/logoCarousel";
import Header from "@/components/header/header";
import PageList from "@/components/pageList/pageList";
import Aside from "@/components/aside/aside";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <div className="main-area">
        <Aside/>
        <main>
          <PageList/>
        </main>
      </div>
    </div>
  );
}
