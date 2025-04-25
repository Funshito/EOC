import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Login() {

    const staffs = {
        admin1: {
            email: 'admin@gmail.com',
            password: '123456'
        },
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogIn = (e: React.FormEvent) => {
        e.preventDefault();


        // {users.map((user) => (
        //     <div key={user.id} className="p-2 border-b">
        //       <p>{user.name} ({user.email}) - {user.isActive ? 'Active' : 'Inactive'}</p>
        //     </div>
        //   ))}


    
        // Mock auth check
        if (email === staffs.admin1.email && password === staffs.admin1.password) {
            setError('');
            navigate('/dashboard');
            setEmail('');
            setPassword('');
        } else {
          setError('Invalid credentials');
        }
      };
    

  return (
    <>
        <div className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-[url('../.././bg.png')]">
            <div>
                <form 
                onSubmit={handleLogIn} 
                className="px-10 py-10 rounded border border-slate-200 shadow bg-white w-150">
                    <h1 className="capitalize mb-10 font-bold text-2xl text-slate-500">Company Staffs</h1>
                    {error && <p className="mb-4 text-red-500 text-sm">{error}</p>}
                    <div className="mb-5">
                        <label className="text-slate-600 text-xl" htmlFor="">Email:</label>
                        <input className="hover:bg-blue-100 focus:bg-blue-100 block w-full border border-slate-200 bg-gray-100 outline-0 px-5 py-2 rounded text-lg my-2" type="text" placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-5">
                        <label className="text-slate-600 text-xl" htmlFor="">Password:</label>
                        <input className="hover:bg-blue-100 focus:bg-blue-100 block w-full border border-slate-200 bg-gray-100 outline-0 px-5 py-2 rounded text-lg my-2" type="password" placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="cursor-pointer text-white bg-blue-600 rounded px-5 py-3 font-base font-bold w-full">Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login