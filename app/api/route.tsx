export async function GET() {
    const res = await fetch('https://restcountries.com/v3.1/all', { next: {revalidate: 3600}})
    const data = await res.json()
    return;
}