"use client"
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export default function forgot() {

    const [email, setEmail] = useState("");

    const forgotPassword = async () => {
        try {
          await sendPasswordResetEmail(auth, email);
          console.log("hello");
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div>
        <form>
            <label htmlFor="email"  style={{display: 'block', textAlign: 'center', marginTop:'10%'}}>Enter your email to retrieve your reset password link</label>
            <input onChange={(e) => {
                  setEmail(e.target.value)
                }} id='email' type='email' required minLength={5} style={{display: 'block', textAlign: 'center', border: '2px solid black', margin:'auto', marginTop:'1%', marginBottom:'1%', width: '30%'}}></input>
                <button onClick={forgotPassword} style={{display: 'block', alignItems: 'center', border: '2px solid black', margin:'auto', padding:'1%'}} type='submit'>Send me the link</button>
        </form>
        </div>
    )
}