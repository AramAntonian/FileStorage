'use client'

import {useState} from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Space from "@/components/Space/Space";
import {useRouter} from "next/navigation";

function LoginForm () {
    const route = useRouter();
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [view,setView] = useState(false);

    async function handleLogin() {
        if(name && password) {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, password})
            })
            const data = await res.json();
            if(!data.message){
                await cookieStore.set("user", JSON.stringify(data))
                route.replace('/')
            } else {
                alert(data.message)
            }
        } else {
            alert('name or password are invalid')
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <Input value={name} setValue={setName} size={"medium"} placeholder={'name'}/>
            <Input value={password} setValue={setPassword} size={"medium"} placeholder={'password'} type={view ? 'text' : 'password'}/>
            <label>
                <input type='checkbox' onChange={()=>setView(prev => !prev)}/>
                <span className='text-[14px]'>Show password</span>
            </label>
            <Space top={10}/>
            <Button text={'Log in'} click={handleLogin} size='medium'/>
        </div>
    )
}

export default LoginForm;