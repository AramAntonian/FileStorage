export async function GET() {
    const res = await fetch("http://192.168.0.82:3001/user");
    const data =  await res.json()

    console.log(data)
    return Response.json(data)
}