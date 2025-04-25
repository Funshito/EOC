function Onboarding() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-cover bg-center bg-[url('../.././bg.png')]">
        <div className="border border-slate-200 shadow w-300 h-150">
            <div className="w-full h-15 flex items-center px-10 pt-15">
                <div className="bg-stone-700 w-10 h-10 rounded-full"></div>
                <div className="bg-white rounded-full w-5 h-5 ml-[-20px]"></div>
                <h1 className="ml-1 font-bold text-2xl">nboarding</h1>
            </div>
            <div className="text-center block w-full h-full flex items-center justify-center">
                <div>
                    <h1 className="text-6xl text-stone-500 font-bold py-3 mt-[-100px]">Welcome to the team!</h1>
                    <p className="text-lg text-slate-500">
                        Complete your onboarding task below. Let us know if you have any
                        questions!
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="px-10 py-10">
        <h3 className="text-slate-500 font-bold text-2xl mb-5" >Your onboarding tasks</h3>
        <p>Click on a task to see the details</p>
        <div className="flex justify-around">
            <div>
                <h2 className="text-xl text-slate-500 font-bold">Basic Info</h2>
            </div>

            <div>
                <h2 className="text-xl text-slate-500 font-bold">Basic Info</h2>
            </div>
        </div>

      </div>
    </>
  );
}

export default Onboarding;
