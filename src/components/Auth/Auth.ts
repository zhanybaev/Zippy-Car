import { useState, useMemo } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../fire';

export const signUp =  async(email: string, password: string) => {
    console.log(email, password);
        try {
            await createUserWithEmailAndPassword(auth, email, password) 
        } catch (error) {
            console.error(error)
        }
} 

export const signIn =  async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error)
        }
} 

export const Logout = () => {
    return signOut(auth)
}

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<any>()
    useMemo(() => {
        const onsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return onsub
    }, [])
    return currentUser;
}