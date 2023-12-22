import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Home Page',
    description: 'Index Page',
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'fr-FR': '/fr',
            'es-ES': '/es',
        },
    },
}

export default function Page() {
    return (
        <>
            <h1>Home Page</h1>
            <hr />
            <ul>
                <li className="lang">
                    <Link href="en">English</Link>
                </li>
                <li className="lang">
                    <Link href="fr">French</Link>
                </li>
                <li className="lang">
                    <Link href="es">Spanish</Link>
                </li>
            </ul>
        </>
    )
}
