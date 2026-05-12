export async function GET() {
    const res = await fetch("http://localhost:3001/user");
    const data =  await res.json()

    console.log(data)
    return Response.json(data)
}