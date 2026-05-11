import RoomsHeader from "@/pages/Home/Rooms/RoomsHeader";
import {cookies} from "next/headers";

interface  RoomLayoutProps {
    children: React.ReactNode;
}

async function Rooms({children}: RoomLayoutProps) {
    const cookieStore = await cookies()

    const user = cookieStore.get("user");
    const {name} = JSON.parse(user?.value || '{}')

    const res = await fetch('http://localhost:3000/api/user/rooms?name=' + name);
    const rooms = await res.json()


    return (
        <div>
            <RoomsHeader rooms = {rooms} />
            {children}
        </div>
    );
}

export default Rooms;