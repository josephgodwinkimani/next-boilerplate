// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
// https://github.com/vercel/next.js/issues/53717

import Link from 'next/link'
import { Suspense } from 'react'
import { getTranslations } from '@/app/[lang]/translations'
import TodoList from '@/app/[lang]/dashboard/todolist'
import Authenticated from '@/app/[lang]/dashboard/auth'
import Polyglot from 'node-polyglot'

export default function Page({ params }: { params: { lang: string } }) {
    const id = params.lang

    const polygot: Polyglot = getTranslations(id)

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Authenticated lang={id} />
                <p>{id}</p>
                <p>{polygot.t('hello')}</p>
                <p>{polygot.t('goodbye')}</p>
                <hr />
                <ul>
                    <li>
                        <Link href="dashboard/users/1">User 1</Link>
                    </li>
                    <li>
                        <Link href="dashboard/users/2">User 2</Link>
                    </li>
                </ul>
                <TodoList add={polygot.t('add')} />
            </Suspense>
        </div>
    )
}
