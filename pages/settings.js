import styles from "@/styles/Settings.module.css"
import Link from "next/link";
import Head from "next/head";

export default function Settings() {

  return (
    <>
    <Head>
                <title>GROOVE - SETTINGS</title>
                <meta name="description" content="See your Top Spotify Genres!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
      <main className={styles.main}>
        <Link
          className={styles.backbuttonLink}
          href="https://groove-music-app.vercel.app/profile">
          <svg className={styles.backButton} width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.8291 3.2017L0.999935 9.03087L6.8291 14.7983" stroke="#D9D9D9" strokeWidth="1.28165" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.3241 14.1438C19.9982 14.1438 19.6724 14.091 19.3466 13.9856C19.0303 13.8802 18.738 13.7412 18.4697 13.5687C18.2109 13.3866 17.9905 13.1902 17.8084 12.9793C17.6359 12.7589 17.5209 12.5385 17.4634 12.3181L17.8371 12.1168V13.9569H16.3565V3.36217H17.8371V8.17794L17.6071 8.04856C17.655 7.82814 17.7605 7.6173 17.9234 7.41604C18.0863 7.2052 18.2924 7.01832 18.5415 6.8554C18.8003 6.6829 19.0782 6.54872 19.3753 6.45289C19.6724 6.34747 19.9743 6.29476 20.281 6.29476C20.9614 6.29476 21.5652 6.46247 22.0923 6.7979C22.6194 7.13333 23.0363 7.59813 23.3429 8.19232C23.6496 8.77692 23.8029 9.44777 23.8029 10.2049C23.8029 10.962 23.6496 11.6376 23.3429 12.2318C23.0458 12.826 22.6337 13.2956 22.1066 13.6406C21.5795 13.976 20.9854 14.1438 20.3241 14.1438ZM20.0797 12.7925C20.5205 12.7925 20.9135 12.6823 21.2585 12.4618C21.6035 12.2318 21.8766 11.9251 22.0779 11.5418C22.2791 11.1489 22.3798 10.7032 22.3798 10.2049C22.3798 9.71612 22.2791 9.28006 22.0779 8.89672C21.8862 8.50379 21.6179 8.19711 21.2729 7.97669C20.9279 7.75626 20.5301 7.64605 20.0797 7.64605C19.6293 7.64605 19.2316 7.75626 18.8865 7.97669C18.5415 8.19711 18.2684 8.50379 18.0671 8.89672C17.8659 9.28006 17.7653 9.71612 17.7653 10.2049C17.7653 10.7032 17.8659 11.1489 18.0671 11.5418C18.2684 11.9251 18.5415 12.2318 18.8865 12.4618C19.2316 12.6823 19.6293 12.7925 20.0797 12.7925ZM28.3152 14.1438C27.6922 14.1438 27.122 13.9712 26.6045 13.6262C26.0965 13.2812 25.6892 12.8116 25.3826 12.2174C25.0759 11.6233 24.9225 10.9524 24.9225 10.2049C24.9225 9.44777 25.0759 8.77692 25.3826 8.19232C25.6988 7.59813 26.1205 7.13333 26.6476 6.7979C27.1843 6.46247 27.7833 6.29476 28.4445 6.29476C28.8375 6.29476 29.1968 6.35226 29.5227 6.46726C29.8485 6.58227 30.1312 6.74519 30.3708 6.95603C30.62 7.15729 30.8213 7.39209 30.9746 7.66043C31.1375 7.92877 31.2382 8.21628 31.2765 8.52295L30.9459 8.40795V6.45289H32.4409V14H30.9459V12.2031L31.2909 12.1024C31.2334 12.3612 31.1136 12.6152 30.9315 12.8643C30.759 13.1039 30.5338 13.3196 30.2558 13.5112C29.9875 13.7029 29.6856 13.8562 29.3502 13.9712C29.0243 14.0863 28.6793 14.1438 28.3152 14.1438ZM28.7033 12.7781C29.1537 12.7781 29.5514 12.6679 29.8964 12.4475C30.2415 12.227 30.5098 11.9251 30.7015 11.5418C30.9027 11.1489 31.0034 10.7032 31.0034 10.2049C31.0034 9.71612 30.9027 9.28006 30.7015 8.89672C30.5098 8.51337 30.2415 8.21149 29.8964 7.99106C29.5514 7.77064 29.1537 7.66043 28.7033 7.66043C28.2624 7.66043 27.8695 7.77064 27.5245 7.99106C27.1891 8.21149 26.9207 8.51337 26.7195 8.89672C26.5278 9.28006 26.432 9.71612 26.432 10.2049C26.432 10.7032 26.5278 11.1489 26.7195 11.5418C26.9207 11.9251 27.1891 12.227 27.5245 12.4475C27.8695 12.6679 28.2624 12.7781 28.7033 12.7781ZM37.714 14.1438C37.0144 14.1438 36.3867 13.9712 35.8308 13.6262C35.2845 13.2812 34.8485 12.8116 34.5226 12.2174C34.2064 11.6233 34.0483 10.9572 34.0483 10.2193C34.0483 9.48132 34.2064 8.81525 34.5226 8.22107C34.8485 7.62688 35.2845 7.15729 35.8308 6.81228C36.3867 6.46726 37.0144 6.29476 37.714 6.29476C38.3849 6.29476 38.9934 6.43372 39.5397 6.71165C40.0955 6.97999 40.5172 7.34896 40.8047 7.81856L39.9853 8.82484C39.832 8.60441 39.6355 8.40316 39.3959 8.22107C39.1563 8.03898 38.9024 7.89523 38.634 7.78981C38.3657 7.68439 38.1069 7.63168 37.8578 7.63168C37.3977 7.63168 36.9856 7.74668 36.6215 7.97669C36.2669 8.19711 35.9842 8.50379 35.7733 8.89672C35.5625 9.28964 35.4571 9.73049 35.4571 10.2193C35.4571 10.708 35.5673 11.1489 35.7877 11.5418C36.0081 11.9251 36.3004 12.2318 36.6646 12.4618C37.0288 12.6918 37.4313 12.8068 37.8721 12.8068C38.1309 12.8068 38.3801 12.7637 38.6197 12.6775C38.8688 12.5912 39.1084 12.4618 39.3384 12.2893C39.5684 12.1168 39.7841 11.906 39.9853 11.6568L40.8047 12.6631C40.498 13.0943 40.0572 13.4489 39.4822 13.7269C38.9167 14.0048 38.3274 14.1438 37.714 14.1438ZM43.5527 11.6424L43.4808 10.0324L47.089 6.45289H49.0872L43.5527 11.6424ZM42.2014 14V3.36217H43.6821V14H42.2014ZM47.2903 14L44.444 10.6793L45.4934 9.71612L49.1879 14H47.2903Z" fill="#D9D9D9" />
          </svg>
        </Link>
        <div className={styles.headerContainer}>
          <h1 className={styles.grooveLogo}>GROOVE</h1>
          <h2 className={styles.settingsHeader}>Settings</h2>
        </div>
        <div className={styles.appearanceContainer}>
          <h5 className={styles.appearanceHeader}>Appearance</h5>
          <div className={styles.appearanceselectionContainer}>
            <div className={styles.darkselectionContainer}>
              <svg width="119" height="92" viewBox="0 0 119 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer 1">
                  <g id="Group">
                    <path id="Vector" d="M118.862 4.95323V86.5517C118.862 89.276 116.633 91.5049 113.908 91.5049H4.94971C2.2292 91.5049 0 89.276 0 86.5517V4.95323C0 2.22896 2.2292 0 4.94971 0H113.908C116.633 0 118.862 2.22896 118.862 4.95323Z" fill="#242527" />
                    <g id="Group_2">
                      <path id="Vector_2" d="M118.862 20.4706V86.5517C118.862 89.2759 116.633 91.5049 113.908 91.5049H18.2598V25.4239C18.2598 22.6996 20.489 20.4706 23.2095 20.4706H118.862Z" fill="#363739" />
                      <path id="Vector_3" d="M23.2096 18.8467C19.5836 18.8467 16.6357 21.7983 16.6357 25.4239V91.505H19.8841V25.4239C19.8841 23.5888 21.3743 22.0947 23.2096 22.0947H118.862V18.8467H23.2096Z" fill="#141414" />
                    </g>
                    <g id="Group_3">
                      <path id="Vector_4" d="M26.6812 39.3457L30.6442 29.1144H32.2521L36.1826 39.3457H34.5016L32.1628 33.1785C32.1344 33.1095 32.0775 32.943 31.9963 32.6832C31.9151 32.4193 31.8176 32.127 31.7121 31.8062C31.6065 31.4855 31.509 31.1891 31.4197 30.9212C31.3304 30.6532 31.2735 30.4786 31.2451 30.4015L31.5821 30.3852C31.5253 30.5517 31.4522 30.7588 31.371 31.0145C31.2898 31.2663 31.2005 31.5342 31.1071 31.8184C31.0137 32.1026 30.9243 32.3665 30.835 32.6142C30.7457 32.8618 30.6726 33.0689 30.6157 33.2354L28.2932 39.3457H26.6852H26.6812ZM28.4353 36.8001L29.02 35.2816H33.6692L34.3433 36.8001H28.4393H28.4353Z" fill="white" />
                      <path id="Vector_5" d="M40.2634 39.4919C39.63 39.4919 39.0534 39.3173 38.5296 38.9641C38.0098 38.6149 37.5916 38.1359 37.279 37.5309C36.9663 36.926 36.812 36.2439 36.812 35.4847C36.812 34.7254 36.9704 34.0312 37.2871 33.4303C37.6038 32.8294 38.0342 32.3625 38.5743 32.0215C39.1143 31.6804 39.7234 31.5099 40.3933 31.5099C40.7913 31.5099 41.1567 31.5667 41.4897 31.6845C41.8226 31.8022 42.1109 31.9646 42.3586 32.1757C42.6063 32.3869 42.8134 32.6264 42.9717 32.8984C43.1342 33.1704 43.2316 33.4628 43.2722 33.7754L42.9352 33.6576V31.6682H44.4538V39.3417H42.9352V37.5147L43.2844 37.4132C43.2275 37.6771 43.1057 37.9329 42.9271 38.1805C42.7484 38.4282 42.517 38.6515 42.2409 38.8464C41.9647 39.0412 41.6561 39.1955 41.3191 39.3133C40.9821 39.431 40.6289 39.4878 40.2593 39.4878L40.2634 39.4919ZM40.6573 38.1034C41.1161 38.1034 41.5181 37.9897 41.8714 37.7664C42.2206 37.5431 42.4967 37.2345 42.6956 36.8366C42.8946 36.4428 42.9961 35.9922 42.9961 35.4847C42.9961 34.9772 42.8946 34.5427 42.6956 34.153C42.4967 33.7632 42.2206 33.4546 41.8714 33.2313C41.5222 33.008 41.1161 32.8944 40.6573 32.8944C40.1984 32.8944 39.8127 33.008 39.4676 33.2313C39.1224 33.4546 38.8504 33.7632 38.6473 34.153C38.4484 34.5427 38.3469 34.9853 38.3469 35.4847C38.3469 35.984 38.4484 36.4428 38.6473 36.8366C38.8463 37.2305 39.1184 37.539 39.4676 37.7664C39.8127 37.9897 40.2106 38.1034 40.6573 38.1034Z" fill="white" />
                    </g>
                  </g>
                </g>
              </svg>
              <p className={styles.darkHeader}>Dark</p>
            </div>
            <div className={styles.lightselectionContainer}>
              <svg width="119" height="92" viewBox="0 0 119 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1972_3555)">
                  <path d="M118.862 4.95323V86.5517C118.862 89.276 116.633 91.5049 113.908 91.5049H4.94971C2.2292 91.5049 0 89.276 0 86.5517V4.95323C0 2.22896 2.2292 0 4.94971 0H113.908C116.633 0 118.862 2.22896 118.862 4.95323Z" fill="#F4F4F4" />
                  <path d="M118.862 20.4706V86.5517C118.862 89.2759 116.633 91.5049 113.908 91.5049H18.2598V25.4239C18.2598 22.6996 20.489 20.4706 23.2095 20.4706H118.862Z" fill="white" />
                  <path d="M23.2096 18.8467C19.5836 18.8467 16.6357 21.7983 16.6357 25.4239V91.505H19.8841V25.4239C19.8841 23.5888 21.3743 22.0947 23.2096 22.0947H118.862V18.8467H23.2096Z" fill="#E5E5E5" />
                  <path d="M26.6812 39.3457L30.6442 29.1144H32.2521L36.1826 39.3457H34.5016L32.1628 33.1785C32.1344 33.1095 32.0775 32.943 31.9963 32.6832C31.9151 32.4193 31.8176 32.127 31.7121 31.8062C31.6065 31.4855 31.509 31.1891 31.4197 30.9212C31.3304 30.6532 31.2735 30.4786 31.2451 30.4015L31.5821 30.3852C31.5253 30.5517 31.4522 30.7588 31.371 31.0145C31.2898 31.2663 31.2005 31.5342 31.1071 31.8184C31.0137 32.1026 30.9243 32.3665 30.835 32.6142C30.7457 32.8618 30.6726 33.0689 30.6157 33.2354L28.2932 39.3457H26.6852H26.6812ZM28.4353 36.8001L29.02 35.2816H33.6692L34.3433 36.8001H28.4393H28.4353Z" fill="black" />
                  <path d="M40.2595 39.4919C39.6261 39.4919 39.0495 39.3173 38.5257 38.9641C38.0059 38.6149 37.5877 38.1359 37.2751 37.5309C36.9624 36.926 36.8081 36.2439 36.8081 35.4847C36.8081 34.7254 36.9665 34.0312 37.2832 33.4303C37.5999 32.8294 38.0303 32.3625 38.5703 32.0215C39.1104 31.6804 39.7195 31.5099 40.3894 31.5099C40.7874 31.5099 41.1528 31.5667 41.4858 31.6845C41.8187 31.8022 42.107 31.9646 42.3547 32.1757C42.6024 32.3869 42.8095 32.6264 42.9678 32.8984C43.1262 33.1704 43.2277 33.4628 43.2683 33.7754L42.9313 33.6576V31.6682H44.4499V39.3417H42.9313V37.5147L43.2805 37.4132C43.2236 37.6771 43.1018 37.9329 42.9232 38.1805C42.7445 38.4282 42.5131 38.6515 42.2369 38.8464C41.9608 39.0412 41.6522 39.1955 41.3152 39.3133C40.9782 39.431 40.6249 39.4878 40.2554 39.4878L40.2595 39.4919ZM40.6574 38.1034C41.1163 38.1034 41.5182 37.9897 41.8715 37.7664C42.2207 37.5431 42.4968 37.2345 42.6958 36.8366C42.8947 36.4428 42.9963 35.9922 42.9963 35.4847C42.9963 34.9772 42.8947 34.5427 42.6958 34.153C42.4968 33.7632 42.2207 33.4546 41.8715 33.2313C41.5223 33.008 41.1163 32.8944 40.6574 32.8944C40.1986 32.8944 39.8128 33.008 39.4677 33.2313C39.1226 33.4546 38.8505 33.7632 38.6475 34.153C38.4485 34.5427 38.347 34.9853 38.347 35.4847C38.347 35.984 38.4485 36.4428 38.6475 36.8366C38.8465 37.2305 39.1185 37.539 39.4677 37.7664C39.8128 37.9897 40.2108 38.1034 40.6574 38.1034Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1972_3555">
                    <rect width="118.862" height="91.5049" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className={styles.lightHeader}>Light</p>
            </div>
            <div className={styles.systemselectionContainer}>
              <svg width="119" height="92" viewBox="0 0 119 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1972_3557)">
                  <path d="M118.862 4.95323V86.5517C118.862 89.276 116.633 91.5049 113.908 91.5049H4.94971C2.2292 91.5049 0 89.276 0 86.5517V4.95323C0 2.22896 2.2292 0 4.94971 0H113.908C116.633 0 118.862 2.22896 118.862 4.95323Z" fill="#F4F4F4" />
                  <path d="M107.188 20.4706V86.5517C107.188 89.2759 104.959 91.5049 102.234 91.5049H6.58594V25.4239C6.58594 22.6996 8.81513 20.4706 11.5356 20.4706H107.188Z" fill="white" />
                  <path d="M11.5358 18.8467C7.90981 18.8467 4.96191 21.7983 4.96191 25.4239V91.505H8.21029V25.4239C8.21029 23.5888 9.70048 22.0947 11.5358 22.0947H107.188V18.8467H11.5358Z" fill="#E5E5E5" />
                  <path d="M12.5752 39.3457L16.5382 29.1144H18.1462L22.0767 39.3457H20.3957L18.0568 33.1785C18.0284 33.1095 17.9716 32.943 17.8903 32.6832C17.8091 32.4193 17.7117 32.127 17.6061 31.8062C17.5005 31.4855 17.4031 31.1891 17.3138 30.9212C17.2244 30.6532 17.1676 30.4786 17.1392 30.4015L17.4762 30.3852C17.4193 30.5517 17.3462 30.7588 17.265 31.0145C17.1838 31.2663 17.0945 31.5342 17.0011 31.8184C16.9077 32.1026 16.8184 32.3665 16.7291 32.6142C16.6397 32.8618 16.5666 33.0689 16.5098 33.2354L14.1872 39.3457H12.5793H12.5752ZM14.3293 36.8001L14.914 35.2816H19.5633L20.2373 36.8001H14.3334H14.3293Z" fill="black" />
                  <path d="M26.1575 39.4919C25.524 39.4919 24.9474 39.3173 24.4236 38.9641C23.9039 38.6149 23.4857 38.1359 23.173 37.5309C22.8604 36.926 22.7061 36.2439 22.7061 35.4847C22.7061 34.7254 22.8644 34.0312 23.1811 33.4303C23.4978 32.8294 23.9283 32.3625 24.4683 32.0215C25.0083 31.6804 25.6174 31.5099 26.2874 31.5099C26.6853 31.5099 27.0508 31.5667 27.3837 31.6845C27.7167 31.8022 28.005 31.9646 28.2527 32.1757C28.5003 32.3869 28.7074 32.6264 28.8658 32.8984C29.0282 33.1704 29.1257 33.4628 29.1663 33.7754L28.8292 33.6576V31.6682H30.3479V39.3417H28.8292V37.5147L29.1784 37.4132C29.1216 37.6771 28.9998 37.9329 28.8211 38.1805C28.6425 38.4282 28.411 38.6515 28.1349 38.8464C27.8588 39.0412 27.5502 39.1955 27.2132 39.3133C26.8762 39.431 26.5229 39.4878 26.1534 39.4878L26.1575 39.4919ZM26.5513 38.1034C27.0102 38.1034 27.4121 37.9897 27.7654 37.7664C28.1146 37.5431 28.3907 37.2345 28.5897 36.8366C28.7886 36.4428 28.8901 35.9922 28.8901 35.4847C28.8901 34.9772 28.7886 34.5427 28.5897 34.153C28.3907 33.7632 28.1146 33.4546 27.7654 33.2313C27.4162 33.008 27.0102 32.8944 26.5513 32.8944C26.0925 32.8944 25.7067 33.008 25.3616 33.2313C25.0165 33.4546 24.7444 33.7632 24.5414 34.153C24.3424 34.5427 24.2409 34.9853 24.2409 35.4847C24.2409 35.984 24.3424 36.4428 24.5414 36.8366C24.7403 37.2305 25.0124 37.539 25.3616 37.7664C25.7067 37.9897 26.1047 38.1034 26.5513 38.1034Z" fill="black" />
                  <path d="M118.862 4.95323V86.5517C118.862 89.276 116.633 91.5049 113.908 91.5049H56.0752V0H113.908C116.633 0 118.862 2.22896 118.862 4.95323Z" fill="#242527" />
                  <path d="M118.862 20.5193V86.5516C118.862 89.2759 116.633 91.5049 113.908 91.5049H65.1504V25.6147C65.1504 24.3033 65.6986 23.0934 66.6081 22.188C66.6406 22.1555 66.6731 22.1231 66.7056 22.0946C67.7207 21.1243 69.154 20.5193 70.7295 20.5193H118.862Z" fill="#363739" />
                  <path d="M70.7292 18.8467C68.8979 18.8467 67.221 19.4557 65.9257 20.4707C65.9054 20.4869 65.881 20.5032 65.8607 20.5194C65.2882 20.9741 64.8009 21.5019 64.407 22.0947C64.3867 22.1231 64.3664 22.1556 64.3461 22.1881C63.6924 23.1909 63.3188 24.3602 63.3188 25.6147V91.505H66.9814V25.6147C66.9814 23.7268 68.6624 22.1881 70.7292 22.1881H118.862V18.8467H70.7292Z" fill="#141414" />
                  <path d="M71.7769 39.3457L75.7399 29.1144H77.3478L81.2783 39.3457H79.5973L77.2585 33.1785C77.2301 33.1095 77.1732 32.943 77.092 32.6832C77.0108 32.4193 76.9133 32.127 76.8078 31.8062C76.7022 31.4855 76.6047 31.1891 76.5154 30.9212C76.4261 30.6532 76.3692 30.4786 76.3408 30.4015L76.6778 30.3852C76.621 30.5517 76.5479 30.7588 76.4667 31.0145C76.3855 31.2663 76.2962 31.5342 76.2028 31.8184C76.1094 32.1026 76.02 32.3665 75.9307 32.6142C75.8414 32.8618 75.7683 33.0689 75.7114 33.2354L73.3889 39.3457H71.7809H71.7769ZM73.531 36.8001L74.1157 35.2816H78.7649L79.439 36.8001H73.535H73.531Z" fill="white" />
                  <path d="M85.3552 39.4919C84.7218 39.4919 84.1452 39.3173 83.6214 38.9641C83.1016 38.6149 82.6834 38.1359 82.3708 37.5309C82.0581 36.926 81.9038 36.2439 81.9038 35.4847C81.9038 34.7254 82.0622 34.0312 82.3789 33.4303C82.6956 32.8294 83.126 32.3625 83.666 32.0215C84.2061 31.6804 84.8152 31.5099 85.4851 31.5099C85.8831 31.5099 86.2485 31.5667 86.5815 31.6845C86.9144 31.8022 87.2027 31.9646 87.4504 32.1757C87.6981 32.3869 87.9052 32.6264 88.0635 32.8984C88.226 33.1704 88.3234 33.4628 88.364 33.7754L88.027 33.6576V31.6682H89.5456V39.3417H88.027V37.5147L88.3762 37.4132C88.3193 37.6771 88.1975 37.9329 88.0189 38.1805C87.8402 38.4282 87.6088 38.6515 87.3327 38.8464C87.0565 39.0412 86.7479 39.1955 86.4109 39.3133C86.0739 39.431 85.7206 39.4878 85.3511 39.4878L85.3552 39.4919ZM85.7531 38.1034C86.212 38.1034 86.6139 37.9897 86.9672 37.7664C87.3164 37.5431 87.5925 37.2345 87.7915 36.8366C87.9904 36.4428 88.092 35.9922 88.092 35.4847C88.092 34.9772 87.9904 34.5427 87.7915 34.153C87.5925 33.7632 87.3164 33.4546 86.9672 33.2313C86.618 33.008 86.212 32.8944 85.7531 32.8944C85.2943 32.8944 84.9085 33.008 84.5634 33.2313C84.2183 33.4546 83.9462 33.7632 83.7432 34.153C83.5442 34.5427 83.4427 34.9853 83.4427 35.4847C83.4427 35.984 83.5442 36.4428 83.7432 36.8366C83.9422 37.2305 84.2142 37.539 84.5634 37.7664C84.9085 37.9897 85.3065 38.1034 85.7531 38.1034Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1972_3557">
                    <rect width="118.862" height="91.5049" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className={styles.systemHeader}>System</p>
            </div>
          </div>
        </div>
        <div className={styles.textsizeContainer}>
          <h5 className={styles.textsizeHeader}>Text Size</h5>
          <div className={styles.textsizeselectionContainer}>
            <div className={styles.smalltextContainer}>
              <p className={styles.smalltextHeader}>Small</p>
            </div>
            <div className={styles.mediumtextContainer}>
              <p className={styles.mediumtextHeader}>Medium</p>
            </div>
            <div className={styles.largetextContainer}>
              <p className={styles.largetextHeader}>Large</p>
            </div>
          </div>
        </div>
        <div className={styles.languageContainer}>
          <h5 className={styles.languageHeader}>Language</h5>
        </div>
        <div className={styles.otherContainer}>
          <h5 className={styles.otherHeader}>Other</h5>
          <Link
            className={styles.teamButton}
            href="https://groove-music-app.vercel.app/team">
            <div className={styles.icontextContainer}>
              <svg className={styles.icon} width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7227 12.9221C15.6535 12.4044 15.5328 10.4097 14.4541 8.46357C13.9914 7.6256 13.4224 6.94703 12.8535 6.47263C12.1731 6.97782 11.349 7.2518 10.5018 7.25443C9.65327 7.25255 8.82771 6.97855 8.14631 6.47263C7.57736 6.94703 7.00992 7.62636 6.54565 8.46357C5.46616 10.409 5.34706 12.4044 6.28014 12.9221C6.69586 13.1589 7.13433 12.9813 7.58646 12.5456C7.50182 13.015 7.45942 13.4911 7.45977 13.968C7.45977 16.1981 8.32458 18 9.38891 18C10.0307 18 10.3485 17.3434 10.501 16.3392C10.6527 17.3366 10.9714 18 11.6086 18C12.6684 18 13.54 16.1973 13.54 13.968C13.54 13.4671 13.493 12.9889 13.4125 12.5464C13.8677 12.9828 14.3047 13.1635 14.7219 12.9236L14.7227 12.9221ZM10.5003 6.4954C10.9307 6.50184 11.3581 6.42255 11.7576 6.26216C12.157 6.10177 12.5207 5.86349 12.8273 5.56117C13.1338 5.25885 13.3773 4.89854 13.5434 4.5012C13.7095 4.10386 13.795 3.67744 13.7948 3.24674C13.7947 2.81605 13.7089 2.38969 13.5425 1.99247C13.3761 1.59525 13.1324 1.23511 12.8256 0.933002C12.5188 0.630898 12.155 0.392866 11.7554 0.232758C11.3558 0.0726496 10.9284 -0.00633625 10.498 0.000396946C9.64577 0.013729 8.83299 0.361894 8.23514 0.969711C7.6373 1.57753 7.30236 2.39623 7.30266 3.24902C7.30296 4.10182 7.63847 4.92028 8.23674 5.52768C8.83501 6.13508 9.64804 6.48267 10.5003 6.4954ZM17.0197 8.55541C17.7129 8.53514 18.371 8.24536 18.8541 7.74758C19.3373 7.2498 19.6076 6.58322 19.6076 5.88932C19.6076 5.19542 19.3373 4.52884 18.8541 4.03106C18.371 3.53328 17.7129 3.2435 17.0197 3.22323C16.3128 3.22333 15.6349 3.5044 15.1351 4.0046C14.6354 4.5048 14.3546 5.18317 14.3547 5.89046C14.3548 6.59775 14.6357 7.27603 15.1357 7.77609C15.6356 8.27615 16.3136 8.55703 17.0205 8.55693L17.0197 8.55541ZM20.2665 10.1721C19.8857 9.48294 19.4199 8.92581 18.9526 8.53643C18.3937 8.95083 17.7169 9.17556 17.0212 9.17781C16.4477 9.17781 15.9137 9.02069 15.4464 8.76035C15.8226 9.58996 16.0555 10.4302 16.0988 11.1816C16.1701 12.3323 15.8105 13.1855 15.0913 13.584C14.9372 13.6687 14.7696 13.7262 14.596 13.754C14.5527 14.0515 14.5231 14.3612 14.5231 14.6876C14.5231 16.5191 15.2324 17.9985 16.1071 17.9985C16.6336 17.9985 16.8961 17.4596 17.0205 16.6353C17.1441 17.455 17.4058 17.9985 17.9308 17.9985C18.7994 17.9985 19.5163 16.5184 19.5163 14.6891C19.5163 14.277 19.4761 13.8845 19.4101 13.5202C19.7833 13.8792 20.1429 14.0272 20.4858 13.8299C21.2497 13.4048 21.1511 11.7669 20.2658 10.1714L20.2665 10.1721ZM3.98081 8.55541C4.50768 8.55511 5.02263 8.39851 5.46056 8.10542C5.89849 7.81232 6.23973 7.39589 6.44115 6.90877C6.64256 6.42165 6.69511 5.88571 6.59214 5.36872C6.48917 4.85172 6.2353 4.37688 5.86265 4.00422C5.48999 3.63157 5.01527 3.37784 4.4985 3.2751C3.98173 3.17237 3.44612 3.22525 2.95939 3.42705C2.47265 3.62886 2.05665 3.97053 1.76397 4.40887C1.47129 4.84721 1.31507 5.36254 1.31507 5.8897C1.31527 6.59703 1.59619 7.27533 2.09607 7.77549C2.59595 8.27565 3.27387 8.55672 3.98081 8.55693V8.55541ZM5.90387 13.5817C4.69617 12.91 4.58542 10.9069 5.55795 8.75883C5.07724 9.03189 4.53434 9.17645 3.98157 9.17857C3.25634 9.17857 2.5918 8.93568 2.04712 8.53643C1.58058 8.92505 1.11556 9.48218 0.733221 10.1706C-0.152072 11.7676 -0.249173 13.4056 0.515501 13.8291C0.856874 14.025 1.21721 13.8785 1.58817 13.521C1.52003 13.9064 1.48576 14.297 1.48576 14.6884C1.48576 16.5191 2.19505 17.9977 3.06972 17.9977C3.5962 17.9977 3.85867 17.4588 3.98309 16.6353C4.10826 17.455 4.36997 17.9985 4.89341 17.9985C5.76353 17.9985 6.4789 16.5184 6.4789 14.6891C6.4789 14.3605 6.44855 14.05 6.40531 13.7525C6.22974 13.7248 6.06032 13.6667 5.90463 13.5809L5.90387 13.5817Z" fill="#7D7E80" />
              </svg>
              <p className={styles.teamText}>Meet the Team</p>
            </div>
            <svg className={styles.arrow} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 1.75567L8.2443 8.99996L1 16.2443" stroke="#7D7E80" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
          <Link
            className={styles.statsButton}
            href="https://groove-music-app.vercel.app/stats">
            <div className={styles.icontextContainer}>
              <svg className={styles.icon} width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27499 0.000287393C6.04038 0.00594006 5.81734 0.103367 5.65377 0.271647C5.49021 0.439927 5.39915 0.66564 5.40016 0.900313V11.2821C4.71386 10.8859 3.916 10.7272 3.1303 10.8306C2.34461 10.934 1.61499 11.2938 1.05459 11.8541C0.494201 12.4144 0.134348 13.144 0.030844 13.9297C-0.0726604 14.7154 0.085967 15.5133 0.482126 16.1996C0.878284 16.8859 1.48984 17.4224 2.22194 17.7258C2.95405 18.0291 3.7658 18.0825 4.5313 17.8775C5.2968 17.6725 5.97328 17.2207 6.45583 16.5921C6.93838 15.9634 7.20004 15.1932 7.20021 14.4007V5.56245L11.5527 6.28787C11.6816 6.3093 11.8136 6.30241 11.9396 6.26768C12.0655 6.23296 12.1824 6.17123 12.2821 6.08678C12.3818 6.00234 12.4619 5.8972 12.5168 5.77868C12.5718 5.66016 12.6003 5.53109 12.6004 5.40044V1.80034C12.6003 1.5873 12.5246 1.3812 12.3868 1.2187C12.2491 1.05621 12.0581 0.947853 11.8479 0.912914L6.46489 0.0155878C6.40231 0.00380997 6.33865 -0.00131864 6.27499 0.000287393Z" fill="#7D7E80" />
              </svg>

              <p className={styles.statsText}>Personal Statistics</p>
            </div>
            <svg className={styles.arrow} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 1.75567L8.2443 8.99996L1 16.2443" stroke="#7D7E80" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
      </main>
    </>
  );
}
