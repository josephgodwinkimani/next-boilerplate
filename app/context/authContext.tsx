'use client'

import { createContext, useContext } from 'react'
import useFirebaseAuth from '@/app/firebase/useFirebaseAuth'

const authUserContext = createContext({
    authUser: null,
    loading: true,
    signInWithEmailAndPassword: async () => {},
    createUserWithEmailAndPassword: async () => {},
    signOut: async () => {},
})

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth()
    return (
        <authUserContext.Provider value={auth}>
            {children}
        </authUserContext.Provider>
    )
}

export const useAuth = () => useContext(authUserContext)
