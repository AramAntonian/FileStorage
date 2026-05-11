'use client'
import {useEffect, useState} from "react";
import {redirect} from "next/navigation";

function  HomeHeader() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        (async function () {
            const data = await cookieStore.get("user")
            const user = JSON.parse(typeof data?.value === 'string' ? data?.value : '')

            if(user && typeof  user.name === 'string'){
                setUsername(user.name)
            }
        })()
    }, []);

    async function logout() {
        await cookieStore.delete("user")
        redirect('/login')
    }


    return (
        <div className='border-b p-3 flex justify-between'>
            <div>{username}</div>
            <div className = 'cursor-pointer' onClick={logout}>logout</div>
        </div>
    )
}

export default HomeHeader;