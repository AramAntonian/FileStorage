import AddRoom from "@/pages/Rooms/AddRoom";

async function  AddRoomPage() {
    const res = await fetch('http://localhost:3000/api/user')
    const users = await res.json()

    return (
        <AddRoom users = {users}/>
    )
}

export default AddRoomPage