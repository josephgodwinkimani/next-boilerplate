import Polyglot from 'node-polyglot'

export function getTranslations(id: string) {
    const phrases = {
        en: {
            hello: 'Hello',
            goodbye: 'Goodbye',
            welcome: 'Hello, Dashboard Page!',
            user: 'User',
            username: 'Username',
            name: 'Name',
            email: 'E-mail',
            password: 'Password',
            signin: 'Sign In',
            add: 'Add',
            signout: 'Add',
        },
        fr: {
            hello: 'Bonjour',
            goodbye: 'Au revoir',
            welcome: 'Bonjour, page de tableau de bord!',
            user: 'Utilisatrice',
            username: "Nom d'utilisateur",
            name: 'Nom',
            email: 'E-mail',
            password: 'Mot de passe',
            signin: 'Se connecter',
            add: 'Ajouter',
            signout: 'Se déconnecter',
        },
        es: {
            hello: 'Hola',
            goodbye: 'Adiós',
            welcome: '¡Hola, página del panel!',
            user: 'Usuaria',
            username: 'Nombre de usuario',
            name: 'Nombre',
            email: 'E-mail',
            password: 'Contraseña',
            signin: 'Iniciar sesión',
            add: 'Agregar',
            signout: 'Desconectar',
        },
    }

    const polygot: Polyglot = new Polyglot({ locale: id, phrases: phrases[id] })

    return polygot
}
