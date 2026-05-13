import RoomsHeader from "../../../pages/Rooms/RoomsHeader";
import {cookies} from "next/headers";
import {RoomProps} from "@/consts/room";

interface  RoomLayoutProps {
    children: React.ReactNode;
}

async function Rooms({children}: RoomLayoutProps) {
    const cookieStore = await cookies()

    const user = cookieStore.get("user");
    const {name} = JSON.parse(user?.value || '{}')

    const res = await fetch('http://localhost:3000/api/user/rooms?name=' + name);
    const rooms = (await res.json()) as RoomProps[]


    return (
        <div>
            <RoomsHeader rooms = {rooms} />
            {children}
        </div>
    );
}

export default Rooms;