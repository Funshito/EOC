import {
  Search,
  Settings,
  LogOut,
  MessageCircle,
  Bell,
  Mail,
} from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopNav() {

  // const date = new Date();
  // const [time, setTime] = useState<string>(format(date, "hh:mm a"));
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());
  const today = format(date, "PPP");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/');
  }
  useEffect(() => {
    const interval = setInterval(() => {
      // setTime(format(date, "hh:mm:ss a"));
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full h-20 bg-white-100 px-5 py-4 border border-slate-200">
        <div className="flex items-center">
          <Search className="cursor-pointer text-slate-500" />
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
            <MessageCircle className="cursor-pointer mr-4 text-slate-500" />
            <Mail className="cursor-pointer mr-4 text-slate-500" />
            <Bell className="cursor-pointer mr-4 text-slate-500" />
            <Settings className="cursor-pointer mr-4 text-slate-500" />
            <div
              dir="ltr"
              className="border-s-4 h-10 border-slate-500 mr-4"
            ></div>
            <LogOut onClick={handleLogout} className="cursor-pointer text-red-500 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
