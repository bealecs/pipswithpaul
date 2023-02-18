import { useState, useEffect } from 'react';
import firebase from 'firebase/compat';
import isUserPremium from './isUserPremium';
import { Auth } from 'firebase/auth';

export default function usePremiumStatus(user: Auth) {
    const [premiumStatus, setPremiumStatus] = useState<boolean>(false);

    useEffect(() => {
        if(user) {
            const checkPremiumStatus = async function() {
                setPremiumStatus(await isUserPremium());
            };
            checkPremiumStatus();
        }
    }, [user]);

    return premiumStatus;
}