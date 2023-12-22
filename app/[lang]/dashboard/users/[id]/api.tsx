import { CapacitorHttp } from '@capacitor/core'

export async function getUser(id: string) {
    const options = {
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        // headers: { 'X-Fake-Header': 'Fake-Value' },
        // params: { size: 'XL' },
    }

    const response = await CapacitorHttp.request({ ...options, method: 'GET' })

    return response.data
}
