import Files from "../../../../pages/Rooms/Files/Files";
import AddFile from "@/pages/Rooms/Files/AddFile";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {RoomProps} from "@/consts/room";

async function Room ({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const cookieStore = await cookies()
    const user = cookieStore.get('user')
    const username = await JSON.parse(user?.value ||'').name
    if(isNaN(+id)) {
        redirect('/rooms')
    }
    const res = await fetch(`http://localhost:3000/api/rooms/${id}`)
    if(!res.ok){
        return  redirect('/rooms')
    }
    const room: RoomProps | unknown = await res.json()
    if(!room) {
        return redirect('/rooms')
    }

    return (
        <div>

            <Files files={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                room.files
            } />
            <AddFile user={username!} roomId={id}/>

        </div>
    )

}

export  default  Room