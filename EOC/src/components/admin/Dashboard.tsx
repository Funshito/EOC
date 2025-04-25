// import { useState } from "react";


import AdminSideNav from "./AdminSideNav";
import TopNav from "../TopNav";
function Dashboard() {

    

  return (
    <>
        <div className="flex bg-white">
            <AdminSideNav />
            <div className="w-full">
                <TopNav />
                <div className="w-full px-10 pt-15">
                    <h1></h1>
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-100 text-left text-gray-600 uppercase font-medium">
                            <tr >
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Full Name</th>
                                <th className="px-4 py-3">Position</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 bg-white">
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3">#13457097</td>
                                <td className="px-4 py-3">John shaun</td>
                                <td className="px-4 py-3">Sales rep</td>
                                <td className="px-4 py-3">pending</td>
                                <td className="px-4 py-3"><button>view</button></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">#13457097</td>
                                <td className="px-4 py-3">John shaun</td>
                                <td className="px-4 py-3">Sales rep</td>
                                <td className="px-4 py-3">pending</td>
                                <td className="px-4 py-3"><button>view</button></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">#13457097</td>
                                <td className="px-4 py-3">John shaun</td>
                                <td className="px-4 py-3">Sales rep</td>
                                <td className="px-4 py-3">pending</td>
                                <td className="px-4 py-3"><button>view</button></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">#13457097</td>
                                <td className="px-4 py-3">John shaun</td>
                                <td className="px-4 py-3">Sales rep</td>
                                <td className="px-4 py-3">pending</td>
                                <td className="px-4 py-3"><button>view</button></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">#13457097</td>
                                <td className="px-4 py-3">John shaun</td>
                                <td className="px-4 py-3">Sales rep</td>
                                <td className="px-4 py-3">pending</td>
                                <td className="px-4 py-3"><button>view</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Dashboard