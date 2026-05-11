'use client'

import {useState} from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Space from "@/components/Space/Space";
import {useRouter} from "next/navigation";

function RegisterForm () {
    const router = useRouter();
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [view,setView] = useState(false);
    const [repeat, setRepeat] = useState("");

    async function handleRegister() {
        if(name && password) {
            if(password !== repeat) {
                return alert("Passwords don't match");
            }
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, password})
            })
            const data = await res.json();
            console.log(data)
            alert(data.message);

            if(data.message && data.message === 'User created') {
                router.replace("/login")
            }
        } else {
            alert('name or password are invalid')
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <Input value={name} setValue={setName} size={"medium"} placeholder={'name'}/>
            <Input value={password} setValue={setPassword} size={"medium"} placeholder={'password'} type={view ? 'text' : 'password'}/>
            <Input value={repeat} setValue={setRepeat} size={"medium"} placeholder={'repeat password'} type={view ? 'text' : 'password'}/>
            <label>
                <input type='checkbox' onChange={()=>setView(prev => !prev)}/>
                <span className='text-[14px]'>Show password</span>
            </label>
            <Space top={10}/>
            <Button text={'Register'} onClick={handleRegister} size='medium'/>
        </div>
    )
}

export default RegisterForm;