import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;

    const name = params.get('name');
    console.log(name);
    if(!name){
        return  Response.json({message: 'name is not defined'})
    }
    const res = await fetch('http://192.168.0.82:3001/user/rooms?name=' + name)
    return Response.json(await res.json());
}