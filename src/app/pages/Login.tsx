
const Login = () =>{
    return(
        <div className='h-screen flex items-center justify-center'>
            <form className=' flex flex-col border-slate-500 border-solid border-3 items-center justify-center'>
                <input className="w-[200px] h-[30px] m-[10px] border-slate-500 border-solid border-2 rounded-lg " type="email" placeholder="email"></input>
                <input className="w-[200px] h-[30px] m-[10px] border-slate-500 border-solid border-2 rounded-lg " type="password" placeholder="password"></input>
                <button type="submit" className='w-[200px] h-[40px] bg-slate-200 rounded-sm hover:bg-slate-300'>Login</button>
            </form>
        </div>
    )
}

export default Login