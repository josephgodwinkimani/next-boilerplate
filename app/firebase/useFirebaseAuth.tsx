import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import firebase from '@/app/firebase/index'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const formatAuthUser = (user: firebase.User) => ({
    uid: user.uid,
    email: user.email,
})

export default function useFirebaseAuth() {
    const router: AppRouterInstance = useRouter()
    const [authUser, setAuthUser] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const clear = () => {
        setAuthUser(null)
        setLoading(true)
        router.push('/')
    }

    const signInWithEmailAndPassword: (
        email: any,
        password: any
    ) => Promise<firebase.auth.UserCredential> = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password)

    const createUserWithEmailAndPassword: (
        email: any,
        password: any
    ) => Promise<firebase.auth.UserCredential> = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)

    const signOut: () => Promise<void> = () =>
        firebase.auth().signOut().then(clear)

    useEffect(() => {
        const authStateChanged: (authState: any) => Promise<void> = async (
            authState
        ) => {
            if (!authState) {
                setLoading(false)
                router.push('/')
                return
            }
            setLoading(true)
            var formattedUser = formatAuthUser(authState)
            setAuthUser(formattedUser)
            setLoading(false)
        }

        const unsubscribe: firebase.Unsubscribe = firebase
            .auth()
            .onAuthStateChanged(authStateChanged)

        return () => unsubscribe()
    }, [router])

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
    }
}
