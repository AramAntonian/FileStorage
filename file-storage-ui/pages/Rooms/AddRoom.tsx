'use client'
import Input from "@/components/Input/Input";
import {useState} from "react";
import AddUserList from "@/pages/Rooms/AddUserList";
import {UserProps} from "@/consts/users";

function AddRoom({users} : { users: UserProps[] }) {
    const [roomName, setRoomName] = useState('')

    async function addRoom (names: string[]) {
        if(!roomName) {
            alert('Please enter a name');
        } else if (!names.length) {
            alert('Add at least one user')
        } else {
            const body = {
                name: roomName,
                users: names
            }
            const res = await fetch('/api/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            const data = await res.json()
            console.log(data)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center mt-30'>
            <div>
                <Input placeholder='room name' value={roomName} setValue={setRoomName} />
                <AddUserList users ={users} handler = {addRoom} />
            </div>
        </div>
    )
}

export default AddRoom