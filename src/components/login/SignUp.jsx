import google from '../../assets/google.png'

export default function SignUp(){
    return (
        <>
            <div className="shadow-lg p-4 w-sm">
                <div className="p-6">
                    <h1 className=" font-bold text-center text-xl">Sign Up</h1>
                    <p className="text-center text-sm m-1.5">Let's get started with your 30 days trial</p>
                </div>
                <form action="" className="flex flex-col items-center justify-center">
                    <input type="text" name="" id="" className="border-1 border-[#cec1c1] rounded-sm p-1 w-xs" placeholder="Name" /><br/>
                    <input type="email" name="" id="" className="border-1 border-[#cec1c1] rounded-sm p-1 w-xs" placeholder="Email"/><br/>
                    <input type="password" name="" id="" className="border-1 border-[#cec1c1] rounded-sm p-1 w-xs" placeholder="Password"/><br/>
                    <button className="bg-[#06668C] text-white rounded-sm w-xs p-1">Sign Up</button>
                    <small className='m-1.5'>Already have an account?<span className="text-[#82CEF9] font-bold">Log In</span></small>
                </form>
                <div className="text-center p-4">
                    <button className="flex items-center justify-center gap-3 border-1 border-[#cec1c1] rounded-sm p-1 w-xs">
                        <img src={google} className='w-5 h-5' alt="" />
                        Sign up with Google
                    </button>
                </div>
                <div className="text-center">
                    <small>By signing up to create an account I accept <br/><span className="text-[#82CEF9]">company's Terms of use and privacy policy</span></small>
                </div>
            </div>
        </>
    )
}