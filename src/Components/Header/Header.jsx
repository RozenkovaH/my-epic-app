import React from 'react'
import styles from './HeaderStyles.module.css'

const Header = ({ userProfile }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#0073F7" />
          <circle cx="22" cy="22" r="12" stroke="white" strokeWidth="2" />
          <path d="M32.04 9.78623L20.5239 22.0655L18.0515 19.6491C17.259 18.6096 15.7924 18.4164 14.7939 19.3552C13.8615 20.2319 13.7486 21.733 14.4663 22.7644L18.6408 28.7644C19.0484 29.3502 19.6702 29.7102 20.3512 29.7469C21.0339 29.7838 21.6925 29.4908 22.1544 28.9405C22.1545 28.9403 22.1547 28.9401 22.1548 28.94L35.3988 13.1909L35.3996 13.19C36.2132 12.2202 36.1997 10.7161 35.3605 9.76463C34.4496 8.73193 32.9308 8.75128 32.04 9.78623Z" fill="white" stroke="#0073F7" strokeWidth="2" />
        </svg>
        <h1 className={styles.headerTitleNameApp}>The Best Planner Ever</h1>
      </div>

      <div className={styles.headerInfo}>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.headerInfoBell} d="M10.8667 5C10.8667 4.44772 11.3144 4 11.8667 4H12.1333C12.6856 4 13.1333 4.44772 13.1333 5V5.94346C15.7591 6.49172 17.75 8.93342 17.75 11.8099V15.3653C17.75 16.5503 18.8573 16.6244 18.8573 16.6244L19.2581 16.7315C19.6956 16.8484 20 17.2448 20 17.6976V18.5577C20 18.7786 19.8209 18.9577 19.6 18.9577H4.4C4.17909 18.9577 4 18.7786 4 18.5577V17.6976C4 17.2448 4.30437 16.8484 4.74192 16.7315L5.14275 16.6244C6.28575 16.6244 6.25 15.3653 6.25 15.3653L6.28675 11.6987C6.28675 8.97622 8.2595 6.52316 10.8667 5.95291V5ZM14.4286 19.6297C14.4286 20.9259 13.3425 22 12 22C10.6575 22 9.57139 20.9259 9.57139 19.6297H14.4286Z" fill="#747E8A" />
          </svg>
        </div>
        <h2 className={styles.headerInfoName}>{userProfile.given_name}</h2>
        <img className={styles.ava} src={userProfile.picture} />
      </div>
    </header>
  )
}
export default Header
