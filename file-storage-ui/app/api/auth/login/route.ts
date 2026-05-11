import {NextRequest} from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)
    const res = await fetch('http://192.168.0.82:3001/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return Response.json(await res.json());
}