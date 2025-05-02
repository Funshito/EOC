import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type User = {
  lname: string,
  fname: string,
  email: string,
  gender: string,
  mobile: number,
  dob: Date,
  password: string,
  jobtitle: string,
  department: string,
  employmenttype: string,
  salary: number,
  startdate: Date,
}


function Employ() {

  // const [lastName, setLastName] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [gender, setGender] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [dob, setDob] = useState('');
  // const [department, setDepartment] = useState('');
  // const [jobTitle, setJobTitle] = useState('');
  // const [employmentType, setEmploymentType] = useState('');
  // const [salary, setSalary] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');



  const navigate = useNavigate();
  function handleBack(){
    navigate("/staffs");
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if(lastName.length < 1){
  //   setError("Input last Name");
  //   } else if(firstName.length < 1){
  //     setError("Input first Name")
  //   }
  //   else if(email.length < 1){
  //     setError("Enter email address")
  //   }
  //   else if(gender.length < 1){
  //     setError("Select a gender")
  //   }
  //   else if(mobile.length < 1){
  //     setError("Enter mobile number")
  //   }else if(dob.length < 1){
  //     setError("Input date of birth")
  //   }else if(password.length < 1){
  //     setError("Enter a password")
  //   }else if(jobTitle.length < 1){
  //     setError("Enter job title")
  //   }else if(department.length < 1){
  //     setError("Enter a deparment")
  //   }else if(employmentType.length < 1){
  //     setError("Select employment type")
  //   }else if(salary.length < 1){
  //     setError("Enter salary")
  //   }else if(startDate.length < 1){
  //     setError("Enter a starting date")
  //   }
  //   else {
  //     setMessage("Employee has been added");
  //     setError("")
  //     setLastName("")
  //     setFirstName("")
  //     setEmail("")
  //     setGender("")
  //     setMobile("")
  //     setDob("")
  //     setPassword("")
  //     setJobTitle("")
  //     setDepartment("")
  //     setEmploymentType("")
  //     setSalary("")
  //     setStartDate("")
      
  //   }
  // } 


  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<User>({
    lname: '',
    fname: '',
    email: '',
    gender: '',
    mobile: 0,
    dob: new Date(),
    password: '',
    jobtitle: '',
    department: '',
    employmenttype: '',
    salary: 0,
    startdate: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    console.log(users)
    setFormData({ lname: '', fname: '', email: '', gender: '', mobile: 0, dob: new Date(), password: '', jobtitle: '', department: '', employmenttype: '', salary: 0, startdate: new Date() });
    console.log(formData)
  };


  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-200 bg-slate-100 h-auto px-5 py-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl mb-5">Employee Registration</h1>
              <ArrowLeft onClick={handleBack} className='text-slate-800 text-2xl cursor-pointer hover:bg-slate-300'/>
            </div>
            {error && <p className="mb-4 text-red-500 text-sm px-2 py-5 bg-red-100">{error}</p>}
            {message && <p className="mb-4 text-green-500 text-sm px-2 py-5 bg-green-100">{message}</p>}
            <h3 className="font-base text-xl text-blue-400">Personal Details</h3>
          <div className="grid grid-flow-col grid-rows-4 gap-4 mb-5">
            <div className="row-span-2">
              <label htmlFor="">Last Name</label>
              <input
                name='lname'
                className="border block px-2 py-2 text-lg w-full"
                type="text"
                placeholder="last name"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">gender</label>
              <select className="block w-full p-2 border rounded-md text-gray-700 bg-white"
                value={formData.gender}
                name='gender'
                onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            

            <div className="row-span-2">
              <label htmlFor="">First Name</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="text"
                placeholder="first name"
                name='fname'
                value={formData.fname}
                onChange={handleChange}
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Mobile number</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="number"
                placeholder="mobile number"
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>


            <div className="row-span-2">
              <label htmlFor="">Email</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="email"
                placeholder="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Date of birth</label>
              <input
                className=" border block px-2 py-2 text-lg w-full"
                type="date"
                placeholder="gender"
                name='dob'
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

          </div>

          <h3 className="font-base text-xl text-blue-400">Personal Identity</h3>
          <div className="grid grid-flow-col grid-rows-4 gap-4">
            <div className="row-span-2">
              <label htmlFor="">Employee Password</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="password"
                placeholder="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>


            <div className="row-span-2">
                <label htmlFor="">Employment type</label>
                <select className="block w-full p-2 border rounded-md text-gray-700 bg-white"
                name='employmenttype'
                value={formData.employmenttype}
                onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="full time">Full Time</option>
                    <option value="part time">Part Time</option>
                    <option value="contract">Contract</option>
                </select>
            </div>

            <div className="row-span-2">
              <label htmlFor="">Job Title</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="text"
                placeholder="job"
                name='jobtitle'
                value={formData.jobtitle}
                onChange={handleChange}
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Salary</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="number"
                placeholder="salary"
                name='salary'
                value={formData.salary}
                onChange={handleChange}
              />
            </div>


            <div className="row-span-2">
              <label htmlFor="">Department</label>
              <input
                className="border block px-2 py-2 text-lg w-full"
                type="text"
                placeholder="department"
                name='department'
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Start Date</label>
              <input
                className=" border block px-2 py-2 text-lg w-full"
                type="date"
                placeholder="date"
                name='startdate'
                value={formData.startdate}
                onChange={handleChange}
              />
            </div>

          </div>
          <button type="submit" className=" my-5 bg-blue-900 font-base hover:bg-blue-700 px-3 py-2 rounded-lg text-white capitalize cursor-pointer">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Employ;
