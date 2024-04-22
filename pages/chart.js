import styles from "@/styles/Chart.module.css";
import PieChart from "@/components/PieChart";
import Head from "next/head";

export default function Chart() {
  return (
    <>
    <Head>
        <title>GROOVE - CHART</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <h1 className={`${styles.grooveHeader}`}>GROOVE</h1>
        <p className={`${styles.paragraph}`}>Get ready to groove through the decades with our chart showcasing the top music genres that have shaped the soundtracks of our lives. From the swinging jazz of the 1920s to the rock 'n' roll revolution of the 1950s, and from the disco fever of the 1970s to the digital beats of the 21st century, explore how music has evolved and enchanted audiences across generations.</p>
        <h3 className={`${styles.grooveHeader}`}>Top 3 Music Genres</h3>
        <PieChart/>
        <p className={`${styles.paragraph}`}>Whether you're vibing to the soulful melodies of Motown or getting down to the infectious rhythms of hip-hop, our chart highlights the timeless hits that have stood the test of time and continue to resonate with music lovers worldwide. So tune in, and let the music take you on your own journey through the greatest genres of all time with Groove.</p>
      </main>
    </>
  );
}