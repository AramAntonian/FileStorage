export async function POST(req: Request) {
    const body = await  req.json()

    const res = await fetch('http://192.168.0.82:3001/room/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const data = await res.json()
    console.log(data)
    return Response.json(data)
}