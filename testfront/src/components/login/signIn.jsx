import google from '../../assets/google.png'
export default function SignIn(){
    return(
        <>
            <div className="shadow-lg p-4 w-sm">
                <div className="p-2">
                    <h1 className=" font-bold text-center text-xl">Sign In</h1>
                </div>
                <form action="" className="flex flex-col items-center justify-center">
                    <input type="text" name="" id="" placeholder="Email" className="border-1 border-[#cec1c1] rounded-sm p-1 w-xs"/><br/>
                    <input type="password" name="" id="" placeholder="Password" className="border-1 border-[#cec1c1] rounded-sm p-1 w-xs"/><br/>
                    <button type="submit" className="bg-[#06668C] text-white rounded-sm w-xs p-1">Sign In</button>
                </form>
                <div className="text-center p-4">
                    <button className="flex items-center justify-center gap-3 border-1 border-[#cec1c1] rounded-sm p-1 w-xs">
                        <img src={google} className='w-5 h-5' alt="" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </>
    )
}