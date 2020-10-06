import React from 'react'
import styles from './SigninStyles.module.css'

const SignIn = props => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logoAndTitle}>
          <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.5 67C52.0015 67 67 52.0015 67 33.5C67 14.9985 52.0015 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 52.0015 14.9985 67 33.5 67Z" fill="#0073F7" />
            <path d="M33.5 53.2329C44.3982 53.2329 53.2329 44.3982 53.2329 33.5C53.2329 22.6018 44.3982 13.7671 33.5 13.7671C22.6018 13.7671 13.7671 22.6018 13.7671 33.5C13.7671 44.3982 22.6018 53.2329 33.5 53.2329Z" stroke="white" strokeWidth="2" />
            <path d="M52.6295 20.1676C53.4484 19.3185 53.4316 17.958 52.5922 17.13C51.7546 16.3041 50.4153 16.3197 49.597 17.1641L31.4377 34.0088L26.7039 29.9841C25.9645 29.0759 24.639 28.939 23.7333 29.6799C22.8218 30.4255 22.68 31.7783 23.4179 32.7008L29.6593 40.505C30.4584 41.5042 31.9399 41.5736 32.8267 40.6539L52.6295 20.1676Z" fill="white" stroke="#0073F7" strokeWidth="2" />
          </svg>
          <h1>THE BEST PLANNER EVER</h1>
        </div>
        <form action='https://garage-best-team-ever.tk/google-auth'>
          <button className={styles.googleBtn}>
            <svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="53" fill="white" />
              <path d="M15.427 29.5251L14.4176 33.2935L10.728 33.3715C9.62543 31.3264 9 28.9865 9 26.5C9 24.0955 9.58476 21.8281 10.6213 19.8316L13.9068 20.4338L15.3457 23.6988C15.0445 24.5768 14.8804 25.5193 14.8804 26.5C14.8805 27.5644 15.0733 28.5842 15.427 29.5251Z" fill="#FBBB00" />
              <path d="M37.7466 23.7912C37.9132 24.6684 38 25.5742 38 26.5C38 27.5381 37.8909 28.5507 37.6829 29.5275C36.9771 32.8514 35.1327 35.7537 32.5777 37.8076L32.5769 37.8068L28.4396 37.5957L27.8541 33.9404C29.5494 32.9462 30.8744 31.3902 31.5723 29.5275H23.8188V23.7912H31.6854H37.7466Z" fill="#518EF8" />
              <path d="M32.5768 37.8068L32.5776 37.8076C30.0927 39.8049 26.9362 41 23.5 41C17.978 41 13.1771 37.9136 10.728 33.3716L15.427 29.5251C16.6515 32.7932 19.8041 35.1196 23.5 35.1196C25.0886 35.1196 26.5769 34.6901 27.854 33.9404L32.5768 37.8068Z" fill="#28B446" />
              <path d="M32.7553 15.3382L28.0579 19.1838C26.7362 18.3577 25.1738 17.8804 23.5 17.8804C19.7204 17.8804 16.5089 20.3135 15.3457 23.6988L10.6221 19.8316H10.6213C13.0345 15.1788 17.896 12 23.5 12C27.0182 12 30.2441 13.2532 32.7553 15.3382Z" fill="#F14336" />
            </svg>
            <p>Войти через Google</p>
          </button>
        </form>
      </div>
      {/* применить overflow: hidden к данной конкретной странице, чтобы размер векторной графики не вызывал появление скролла */}
      <svg className={styles.abstractShapes} position="fixed" top="0" bottom="0" left="0" right="0" viewBox="0 0 1440 780" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 760.678V60C33.5288 69.7493 127.541 199.033 122.281 405.464C118.074 570.609 39.0073 711.084 0 760.678Z" fill="#EE00AB" fill-opacity="0.6" />
        <path d="M129.623 452.676C115.738 248.198 37.4225 135.523 0 104.746V780C48.9927 756.091 143.507 657.154 129.623 452.676Z" fill="#EE00AB" fill-opacity="0.4" />
        <path d="M1440 0H889.898C989.023 210.93 1297.93 228.919 1440 227.275V0Z" fill="#0073F7" fill-opacity="0.6" />
        <path d="M1440 0H784.854C861.041 13.0355 994.258 130.205 1045.35 155.254C1123.98 193.804 1208.72 206.189 1274.6 206.52C1342.31 206.859 1419.02 202.644 1440 199.046V0Z" fill="#0073F7" fill-opacity="0.6" />
        <path d="M1440 0H985.891H631.894C813.177 0 872.251 73.2642 1022.42 146.528C1142.55 205.14 1350.86 190.303 1440 175.558V0Z" fill="#0073F7" fill-opacity="0.5" />
      </svg>
    </div>
  )
}

export default SignIn
