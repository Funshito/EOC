function SideNav() {
  return (
    <>
      <div className="h-screen bg-blue-900 w-40 flex justify-center py-5 text-white">
        <div className="w-full">
          <div>
            <div className="my-10 flex w-full justify-center">
              <div>
              <div className="w-20 h-20 bg-green-200 rounded-full self-center"></div>
              <h4 className="text-center">John Doe</h4>
              </div>
            </div>
            <ul className="w-full capitalize text-sm font-medium leading-13">
              <a href="" >
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">profile</li>
              </a>
              <a href="">
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">documents</li>
              </a>
              <a href="">
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">job</li>
              </a>
              <a href="">
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">salary</li>
              </a>
              <a href="">
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">benefits</li>
              </a>
              <a href="">
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">onboarding</li>
              </a>
              <a href="">
                <li className="hover:text-blue-900 hover:bg-white px-6 hover:font-bold">chat</li>
              </a>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SideNav;
