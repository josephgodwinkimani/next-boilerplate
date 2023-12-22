import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Authenticate the user',
}

export async function generateStaticParams() {
    const locales = ['en', 'fr', 'es']
    return locales.map((lang: any) => ({
        lang: lang.toString(),
    }))
}

export default async function Layout({ children }) {
    return <section>{children}</section>
}
