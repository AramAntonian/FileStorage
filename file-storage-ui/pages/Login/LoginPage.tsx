import LoginForm from "@/pages/Login/LoginForm";
import Link from "next/link";
import Space from "@/components/Space/Space";

function LoginPage () {

    return (
        <div className='flex flex-col border-2 w-[25vw] h-[30vh] absolute top-1/2 left-1/2 transform-[translate(-50%,-50%)] items-center justify-center rounded-xl p-3'>
            <LoginForm />
            <Space top={10}/>
            <span>Dont have an account? <span className='underline text-blue-950'><Link href={'register'}>register</Link></span></span>
        </div>
    )

}

export default  LoginPage
