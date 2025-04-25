import {
  Search,
  Settings,
  LogOut,
  MessageCircle,
  Bell,
  Mail,
} from "lucide-react";
import { format } from "date-fns";

function TopNav() {
  const date = new Date();
  const today = format(date, "PPP");
  const time = format(date, "hh:mm a");

  return (
    <>
      <div className="flex items-center justify-between w-full h-20 bg-white-100 px-5 py-4 border border-slate-200">
        <div className="flex items-center">
          <Search className="text-slate-500" />
          <input
            className="outline-0 px-3 py-2 focus:border-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <div className="px-5 mx-5">
            {today} | {time}
          </div>
          <div className="flex items-center">
            <MessageCircle className="mr-4 text-slate-500" />
            <Mail className="mr-4 text-slate-500" />
            <Bell className="mr-4 text-slate-500" />
            <Settings className="mr-4 text-slate-500" />
            <div
              dir="ltr"
              className="border-s-4 h-10 border-slate-500 mr-4"
            ></div>
            <LogOut className="text-red-500 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
