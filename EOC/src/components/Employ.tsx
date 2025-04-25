function Employ() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="w-200 bg-slate-100 h-auto px-5 py-5">
            <h1 className="font-bold text-2xl mb-5">Employee Registration</h1>
            <h3 className="font-base text-xl text-blue-400">Personal Details</h3>
          <div className="grid grid-flow-col grid-rows-4 gap-4 mb-5">
            <div className="row-span-2">
              <label htmlFor="">Last Name</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="last name"
              />
            </div>


            <div className="row-span-2">
              <label htmlFor="">Email</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="email"
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">First Name</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="first name"
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Mobile number</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="mobile number"
              />
            </div>


            <div className="row-span-2">
              <label htmlFor="">gender</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="gender"
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Date of birth</label>
              <input
                className=" border block px-2 py-2 text-lg"
                type="date"
                placeholder="gender"
              />
            </div>

          </div>

          <h3 className="font-base text-xl text-blue-400">Personal Identity</h3>
          <div className="grid grid-flow-col grid-rows-4 gap-4">
            <div className="row-span-2">
              <label htmlFor="">Employee ID</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="id"
              />
            </div>


            <div className="row-span-2">
                <label htmlFor="">Employment type</label>
                <select className="block w-full p-2 border rounded-md text-gray-700 bg-white">
                    <option value="">Select an option</option>
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                    <option value="3">Contract</option>
                </select>
            </div>

            <div className="row-span-2">
              <label htmlFor="">Job Title</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="job"
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Salary</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="number"
                placeholder="salary"
              />
            </div>


            <div className="row-span-2">
              <label htmlFor="">Department</label>
              <input
                className="border block px-2 py-2 text-lg"
                type="text"
                placeholder="department"
              />
            </div>

            <div className="row-span-2">
              <label htmlFor="">Start Date</label>
              <input
                className=" border block px-2 py-2 text-lg"
                type="date"
                placeholder="date"
              />
            </div>

          </div>
          <button type="submit" className=" my-5 bg-blue-900 font-base hover:bg-blue-700 px-3 py-2 rounded-lg text-white capitalize">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Employ;
