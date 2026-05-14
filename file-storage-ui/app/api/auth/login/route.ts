import {NextRequest} from "next/server";
import {cookies} from "next/headers";

export async function POST(req: NextRequest) {
    const cookieStore = await cookies()
    const body = await req.json()
    console.log(body)
    const res = await fetch('http://192.168.0.82:3001/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await res.json()

    cookieStore.set('user', JSON.stringify(data))
    return Response.json(data);
}