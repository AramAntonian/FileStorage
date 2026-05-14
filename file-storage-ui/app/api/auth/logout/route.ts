import {cookies} from "next/headers";

export async function GET() {

    try {
    const cookieStore = await cookies()
    cookieStore.delete('user')
        return Response.json({
            message: 'logged out'
        })
    } catch {
        return Response.json({
            message: 'cant log out'
        })
    }

}