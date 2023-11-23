export async function GetData() {
    const res = await fetch('https://restcountries.com/v3.1/all', { next: {revalidate: 3600}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}