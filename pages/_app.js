import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import Layout from './templates/Layout'
import ThemeContext from '../contexts/ThemeContext'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    // set theme based on time of day
    const startTime = '08:00:00'
    const endTime = '20:00:00'

    const currentDate = new Date()

    const startDate = new Date(currentDate.getTime())
    startDate.setHours(startTime.split(':')[0])
    startDate.setMinutes(startTime.split(':')[1])
    startDate.setSeconds(startTime.split(':')[2])

    const endDate = new Date(currentDate.getTime())
    endDate.setHours(endTime.split(':')[0])
    endDate.setMinutes(endTime.split(':')[1])
    endDate.setSeconds(endTime.split(':')[2])

    if (startDate < currentDate && endDate > currentDate) {
      setTheme('light')
    }

    const context = { theme, setTheme }
  })
    
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  )
}