

function Login() {
  return (
    <>
        <div className="w-full h-screen flex items-center justify-center bg-cover bg-center">
            <div>
                <form action="" className="px-10 py-10 rounded border border-slate-200 shadow bg-white w-150">
                    <h1 className="capitalize mb-10 font-bold text-2xl text-slate-500">Company Staffs</h1>
                    <div className="mb-5">
                        <label className="text-slate-600 text-xl" htmlFor="">Username:</label>
                        <input className="hover:bg-blue-100 focus:bg-blue-100 block w-full border border-slate-200 bg-gray-100 outline-0 px-5 py-2 rounded text-lg my-2" type="text"  placeholder="username"/>
                    </div>

                    <div className="mb-5">
                        <label className="text-slate-600 text-xl" htmlFor="">Password:</label>
                        <input className="hover:bg-blue-100 focus:bg-blue-100 block w-full border border-slate-200 bg-gray-100 outline-0 px-5 py-2 rounded text-lg my-2" type="password" placeholder="password"/>
                    </div>

                    <button type="submit" className="cursor-pointer text-white bg-blue-600 rounded px-5 py-3 font-base font-bold w-full">Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login