
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function AdminSideNav() {
  const location = useLocation();
  const isDocumentPage = location.pathname === '/documents';
  const isEmploymentPage = location.pathname === '/employment';
  const isSalaryPage = location.pathname === '/salary';
  const isOnboardingPage = location.pathname === '/onboarding';
  const isStaffPage = location.pathname === '/staffs';
  const navigate = useNavigate();
  const handleStaff = ()=>{
    navigate('/staffs');
  }
  const handleDocument = ()=>{
    navigate('/documents');
  }
  const handleEmployment = ()=>{
    navigate('/employment');
  }
  const handleSalary = ()=>{
    navigate('/salary');
  }
  const handleOnboarding = ()=>{
    navigate('/onboarding');
  }

    return (
      <>
        <div className="h-screen bg-blue-900 w-40 flex justify-center py-5 text-white">
          <div className="w-full">
            <div>
              <div className="my-10 flex w-full justify-center">
                <div>
                <div className="w-20 h-20 bg-yellow-200 rounded-full self-center"></div>
                <h4 className="text-center">Admin</h4>
                </div>
              </div>
              <ul className="w-full capitalize text-sm font-medium leading-13">
                <a onClick={handleStaff} href="" >
                  <li className={ isStaffPage? 'bg-white px-6 font-bold text-blue-900' : 'hover:text-blue-900 hover:bg-white px-6 hover:font-bold' }>Staffs</li>
                </a>
                <a onClick={handleDocument} href="">
                  <li className={ isDocumentPage? 'bg-white px-6 font-bold text-blue-900' : 'hover:text-blue-900 hover:bg-white px-6 hover:font-bold' }>documents</li>
                </a>
                <a onClick={handleEmployment} href="">
                  <li className={ isEmploymentPage? 'bg-white px-6 font-bold text-blue-900' : 'hover:text-blue-900 hover:bg-white px-6 hover:font-bold' }>Employement</li>
                </a>
                <a onClick={handleSalary} href="">
                  <li className={ isSalaryPage? 'bg-white px-6 font-bold text-blue-900' : 'hover:text-blue-900 hover:bg-white px-6 hover:font-bold' }>salary</li>
                </a>
                <a onClick={handleOnboarding} href="">
                  <li className={ isOnboardingPage? 'bg-white px-6 font-bold text-blue-900' : 'hover:text-blue-900 hover:bg-white px-6 hover:font-bold' }>onboarding</li>
                </a>
              </ul>
            </div>
            
          </div>
        </div>
      </>
    );
  }
  
  export default AdminSideNav;
  