import AdminSideNav from "../AdminSideNav"
import TopNav from "../../TopNav"

function Document() {
  return (
    <div>
        <div className="flex bg-white">
            <AdminSideNav />
            <div className="w-full">
                <TopNav />
                <div className="w-full px-10 pt-15">
                    <h1 className="font-bold text-2xl text-slate-500 mb-2">Documents</h1>
                    <div className="flex gap-4 ">
                        <div className="basis-350 px-5 py-10 border border-slate-200 hover:bg-gray-100">
                            <h2 className="text-xl text-blue-300 font-bold">John Doe</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Document