// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import { Suspense } from 'react'
//import Link from 'next/link'
import { getTranslations } from '@/app/[lang]/translations'
import SignIn from '@/app/[lang]/signIn'
import Polyglot from 'node-polyglot'

export default function Page({ params }: { params: { lang: string } }) {
    const id: string = params.lang

    const polygot: Polyglot = getTranslations(id)

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <h1>{polygot.t('welcome')}</h1>
                <SignIn page={`${id}/dashboard`} lang={id} />
                {/*<ul>
                    <li>
                        <Link href={`${id}/dashboard`}>Dashboard</Link>
                    </li>
    </ul>*/}
            </Suspense>
        </div>
    )
}
