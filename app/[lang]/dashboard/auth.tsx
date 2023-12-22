'use client'

import Polyglot from 'node-polyglot'
import { useAuth } from '@/app/context/authContext'
import { getTranslations } from '@/app/[lang]/translations'

export default function Authenticated(props: { lang: string }) {
    const polygot: Polyglot = getTranslations(props.lang)
    const { authUser, loading, signOut } = useAuth()

    return (
        <>
            <h1>
                {polygot.t('welcome')} {authUser?.email}
            </h1>
            <button onClick={() => signOut()}>{polygot.t('signout')}</button>
        </>
    )
}
