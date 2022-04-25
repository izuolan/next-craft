import '@/styles/globals.css'
import Scripts from '@/components/Scripts'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Scripts />
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
