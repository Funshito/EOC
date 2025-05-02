import TopNav from "../../TopNav"
import AdminSideNav from "../AdminSideNav"
import { useNavigate } from 'react-router-dom';

function Staffs() {
    const navigate = useNavigate();

    function handleAdd(){
        navigate('/employ');
    }
  return (
    <div>
        <div className="flex bg-white">
            <AdminSideNav />
            <div className="w-full">
                <TopNav />
                <div className="w-full px-10 pt-15">
                    <div className="flex justify-between items-center mb-2">
                    <h1 className="font-bold text-2xl text-slate-500">Staffs</h1>
                    <button onClick={handleAdd} className="py-2 px-5 bg-slate-500 text-white font-bold cursor-pointer hover:bg-slate-800">Add</button>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-100 text-left text-gray-600 uppercase font-medium">
                            <tr >
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">First Name</th>
                                <th className="px-4 py-3">last Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Mobile</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 bg-white">
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3">#13457097</td>
                                <td className="px-4 py-3">John</td>
                                <td className="px-4 py-3">Fulham</td>
                                <td className="px-4 py-3">wong@gmail.com</td>
                                <td className="px-4 py-3">200000</td>
                                <td className="px-4 py-3"><button className="cursor-pointer bg-blue-100 px-4 py-2 hover:bg-blue-300">view</button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Staffs