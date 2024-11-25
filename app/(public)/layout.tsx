/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */


import Footer from '@/components/molecules/Footer/Footer'
import { ReactNode } from 'react'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout