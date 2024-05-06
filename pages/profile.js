import styles from "@/styles/profile.module.css";
import Head from "next/head";
import NavBar from "@/components/NavigationBar";
import Link from "next/link";
import Postcard from "@/components/Postcard";
import reviewData from '../data/ReviewData';

export default function StatsPage() {
    const postcards = reviewData.map((review, index) => (
        <Postcard key={review.id || index} {...review} />
      ));
    

    return (
        <>
            <Head>
                <title>GROOVE - PROFILE</title>
                <meta name="description" content="Profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.parentContainer}>
                    <div className={styles.headerContainer}>
                        <div className={styles.textContainer}>
                        <h1 className={styles.grooveLogo}>GROOVE</h1>
                        <h2 className={styles.profileHeader}>Profile</h2>
                        </div>
                        <Link href="/settings">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.4611 16.47C26.5227 15.99 26.569 15.51 26.569 15C26.569 14.49 26.5227 14.01 26.4611 13.53L29.7148 11.055C30.0078 10.83 30.0849 10.425 29.8999 10.095L26.8157 4.905C26.6307 4.575 26.2143 4.455 25.8751 4.575L22.0353 6.075C21.2334 5.475 20.3698 4.98 19.4292 4.605L18.8432 0.63C18.7969 0.27 18.4731 0 18.0876 0H11.9192C11.5337 0 11.2099 0.27 11.1636 0.63L10.5776 4.605C9.63697 4.98 8.7734 5.49 7.97152 6.075L4.13174 4.575C3.77706 4.44 3.37612 4.575 3.19107 4.905L0.106915 10.095C-0.0935556 10.425 -0.00103058 10.83 0.291965 11.055L3.54575 13.53C3.48407 14.01 3.43781 14.505 3.43781 15C3.43781 15.495 3.48407 15.99 3.54575 16.47L0.291965 18.945C-0.00103058 19.17 -0.0781348 19.575 0.106915 19.905L3.19107 25.095C3.37612 25.425 3.79249 25.545 4.13174 25.425L7.97152 23.925C8.7734 24.525 9.63697 25.02 10.5776 25.395L11.1636 29.37C11.2099 29.73 11.5337 30 11.9192 30H18.0876C18.4731 30 18.7969 29.73 18.8432 29.37L19.4292 25.395C20.3698 25.02 21.2334 24.51 22.0353 23.925L25.8751 25.425C26.2297 25.56 26.6307 25.425 26.8157 25.095L29.8999 19.905C30.0849 19.575 30.0078 19.17 29.7148 18.945L26.4611 16.47ZM15.0034 20.25C12.0272 20.25 9.60613 17.895 9.60613 15C9.60613 12.105 12.0272 9.75 15.0034 9.75C17.9796 9.75 20.4007 12.105 20.4007 15C20.4007 17.895 17.9796 20.25 15.0034 20.25Z" fill="white"/>
                            </svg>
                        </Link>
                    </div>
                    <div className={styles.profileimagePlaceholder}>
                        <img className={styles.profileImage} src="/images/profilepicture.jpg"/>
                        <h3 className={styles.usernameHeader}>@rockpaper.sza</h3>
                        <h3 className={styles.reviewHeader}>Your Review</h3>
                    </div>
                    <div className={styles.cards}>{postcards}</div>
                    <div className={styles.nav}><NavBar/></div>
                </div>
            </main>
        </>
    );
}