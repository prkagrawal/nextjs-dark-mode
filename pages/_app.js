import '../styles/globals.css'

import MainLayout from "../components/layouts/mainLayout"

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
