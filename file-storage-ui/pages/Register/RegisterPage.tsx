import RegisterForm from "@/pages/Register/RegisterForm";
import Link from "next/link";
import Space from "@/components/Space/Space";

function RegisterPage () {

    return (
        <div className='flex flex-col border-2 w-[25vw] h-[30vh] absolute top-1/2 left-1/2 transform-[translate(-50%,-50%)] items-center justify-center rounded-xl'>
            <RegisterForm />
            <Space top={10}/>
            <span>Already have an account? <span className='underline text-blue-950'><Link href={'login'}>Log in</Link></span></span>

        </div>
    )

}

export default  RegisterPage
