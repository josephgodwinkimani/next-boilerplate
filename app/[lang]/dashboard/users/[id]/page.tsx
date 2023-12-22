import { Suspense } from 'react'
import { getUser } from './api'
import { Photo } from './photo'
import { getTranslations } from '@/app/[lang]/translations'

export async function generateStaticParams() {
    const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then((res) => res.json())

    return users.map((user: any) => ({
        id: user.id.toString(),
    }))
}

export default async function Page({
    params,
}: {
    params: { id: string; lang: string }
}) {
    const lang = params.lang

    const polygot = getTranslations(lang)

    const { id, name, username, email, address, phone, website, company } =
        await getUser(params.id)

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <h1>
                    {polygot.t('user')}: {params.id}
                </h1>
                <p>
                    {polygot.t('username')}: {username}
                </p>
                <p>
                    {polygot.t('name')}: {name}
                </p>
                <p>
                    {polygot.t('email')}: {email}
                </p>
                <Photo />
            </Suspense>
        </div>
    )
}
