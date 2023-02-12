import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
    if(!stripePromise) {
        stripePromise = await loadStripe(
            "pk_test_51ManDyGB7Jr1yIFobtUl4LeoNym4HjjiUqYjuiLF7HIUL0Z1eoDe2zKIbiHfmmexsbeSD4ahMpaH2lbkoOZKqAq500DENVEw1c"
        );
    }
    return stripePromise;
};

export default initializeStripe;
