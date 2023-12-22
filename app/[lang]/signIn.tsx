'use client'

import { Formik, Field, Form, FormikHelpers } from 'formik'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'
import { getTranslations } from '@/app/[lang]/translations'
import { useEffect } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Polyglot from 'node-polyglot'

interface Values {
    email: string
    password: string
}

export default function SignIn(props: { page: string; lang: string }) {
    const router: AppRouterInstance = useRouter()

    const polygot: Polyglot = getTranslations(props.lang)
    const { authUser, loading, signOut, signInWithEmailAndPassword } = useAuth()

    useEffect(() => {
        if (authUser) {
            router.push(`${props.lang}/dashboard`)
        }
    }, [
        authUser,
        loading,
        signOut,
        signInWithEmailAndPassword,
        props.lang,
        router,
    ])

    return (
        <div>
            <h1>{polygot.t('signin')}</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    try {
                        signInWithEmailAndPassword(
                            values.email,
                            values.password
                        )
                            .then((authUser) => {
                                console.log('Hooray! The user is logged in.')
                                router.push(props.page)
                                setSubmitting(false)
                            })
                            .catch((error) => {
                                console.log(error.message)
                                setSubmitting(false)
                            })
                    } catch (error) {
                        console.log(error.message)
                        setSubmitting(false)
                    }
                }}
            >
                <Form>
                    <label htmlFor="email">{polygot.t('email')}</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="josephgodwinke@gmail.com"
                        type="email"
                    />

                    <label htmlFor="password">{polygot.t('password')}</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="~`P>v|~&o$s5l8>(NJ"
                    />

                    <button type="submit">{polygot.t('signin')}</button>
                </Form>
            </Formik>
        </div>
    )
}
