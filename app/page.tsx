"use client"
import { Inter } from '@next/font/google';
import Testimonials from '@/components/Testimonials';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase/firebase';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [user, setuser] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
   <>
    <HeroSection />
    {/* <Features /> */}
    <Testimonials />
    <Footer />
   </>
  )
}
