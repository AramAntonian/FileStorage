import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    const url = req.nextUrl.pathname.split('/');
    const roomId = url[url.length - 1];

    if(roomId){
        const res = await fetch(`http:192.168.0.82:3001/room/${roomId}`)
        const data = await res.json();
        console.log('a',data);
        return Response.json(data)
    } else {
        return Response.json({message: 'wrong'})
    }
}