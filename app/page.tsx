"use client"
import Testimonials from '@/components/Testimonials';
import HeroSection from '@/components/HeroSection';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase/firebase';
import usePremiumStatus from '@/stripe/usePremiumStatus';

export default function Home() {

  const [user, setuser] = useAuthState(auth);

  return (
   <>
   <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <HeroSection />
    {/* <Features /> */}
    <Testimonials />
   </>
  )
}
