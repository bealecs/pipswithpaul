import firebase from 'firebase/compat/app';
import initializeStripe from "./initializeStripe";
import getStripe from './initializeStripe';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export async function createCheckoutSession3(uid: string) {
    const firestore = firebase.firestore();
    
    //Create a new checkout session in the subcollection inside this users document
    const CheckoutSessionRef = await firestore
        .collection("users")
        .doc(uid)
        .collection("checkout_sessions")
        .add({
            price: "price_1Manv8GB7Jr1yIFoCiJYpipe", 
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        //Wait for the Checkout Session to get attached by the extension
        CheckoutSessionRef.onSnapshot(async (snap) => {
            const { sessionId } = snap.data();
            if(sessionId) {
                const stripe = await initializeStripe();
                stripe?.redirectToCheckout({ sessionId });
            }
        });
}