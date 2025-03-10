import Image from "next/image";
import styles from "./page.module.css";
import LogoCarousel from "@/components/logo-carousel/logoCarousel";
import Header from "@/components/header/header";
import PageList from "@/components/pageList/pageList";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <PageList/>
    </div>
  );
}
