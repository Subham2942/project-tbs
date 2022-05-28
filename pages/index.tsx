import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

     <div style={{height: "100vh", widht:  "100vw", background: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px", fontWeight: "900"}}>This is the Home page of Project TBS</div>
    </div>
  )
}