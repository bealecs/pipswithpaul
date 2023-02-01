"use client"
import { Inter } from '@next/font/google'
import Testimonials from '@/components/Testimonials'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Features from '@/components/Features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <HeroSection />
    <Features />
    <Testimonials />
    <Footer />
   </>
  )
}
