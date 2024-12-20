/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */


import Footer from '@/components/molecules/Footer/Footer'
import Header from '@/components/molecules/Header/Header'
import TimelineBanner from '@/components/molecules/TimelineBanner/TimelineBanner'
import { ReactNode } from 'react'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <TimelineBanner />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout