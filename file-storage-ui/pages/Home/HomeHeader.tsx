"use client"
import {redirect} from "next/navigation";

interface HomeHeaderProps {
    username: string;
}

function  HomeHeader({username}: HomeHeaderProps) {

    async function logout() {
        const res = await fetch('/api/auth/logout')
        const data = (await res.json()) as {message: string}

        if(data?.message === 'logged out') {
            redirect("/login")
        } else {
            console.log(data.message)
        }

    }

    return (
        <div className='border-b p-3 flex justify-between'>
            <div>{username}</div>
            <div className = 'cursor-pointer' onClick={logout}>logout</div>
        </div>
    )
}

export default HomeHeader;