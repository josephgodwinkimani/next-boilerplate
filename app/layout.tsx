import { AuthUserProvider } from '@/app/context/authContext'
import ReduxProvider from '@/app/provider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json"></link>
                <script src="/serviceWorker.js" defer></script>
                <script
                    type="module"
                    src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js"
                ></script>
                <script
                    noModule
                    src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.js"
                ></script>
            </head>
            <body>
                <AuthUserProvider>
                    <ReduxProvider>{children}</ReduxProvider>
                </AuthUserProvider>
            </body>
        </html>
    )
}
