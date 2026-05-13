import AddRoom from "@/pages/Rooms/AddRoom";
import {UserProps} from "@/consts/users";

async function  AddRoomPage() {
    const res = await fetch('http://localhost:3000/api/user')
    const users = (await res.json()) as UserProps[];


    return (
        <AddRoom users = {users}/>
    )
}

export default AddRoomPage