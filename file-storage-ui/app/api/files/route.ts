import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    const body = await  req.formData();
    const params = req.nextUrl.searchParams;
    const user = params.get('user');
    const roomId = params.get('roomId');
    if(!roomId || !user) {
        return Response.json({
            statusCode: 400,
            message: 'roomId or user not found'
        })
    }
    const res = await fetch(`http://192.168.0.82:3001/file?user=${user}&roomId=${roomId}`, {
        method: 'POST',
        body
    })


    const data = await res.json();
    return Response.json(
        data
    );
}



export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id');

    const res = await fetch(`http://192.168.0.82:3001/file?id=${id}`);

    if (!res.ok || !res.body) {
        return new Response('Error fetching file', { status: 500 });
    }

    const contentDisposition = res.headers.get('content-disposition');

    return new Response(res.body, {
        headers: {
            'Content-Type':
                res.headers.get('content-type') || 'application/octet-stream',

            'Content-Disposition':
                contentDisposition || 'attachment; filename="downloaded-file"',
        },
    });
}