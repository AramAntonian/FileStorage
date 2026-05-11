export async function GET() {
    const res = await fetch("http://localhost:3001/user");
    return await res.json()

}