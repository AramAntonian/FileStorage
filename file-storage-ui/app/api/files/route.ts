import {NextRequest} from "next/server";

export async function POST(req: NextRequest) {
    const body = await  req.formData();
    const params = req.nextUrl.searchParams;
    const user = params.get('user');
    const roomId = params.get('roomId');
    console.log(body);
    if(!roomId || !user) {
        return Response.json({
            statusCode: 400,
            message: 'roomId or user not found'
        })
    }
    const res = await fetch(`http://localhost:3001/file?user=${user}&roomId=${roomId}`, {
        method: 'POST',
        body
    })


    const data = await res.json();
    return Response.json(
        data
    );
}