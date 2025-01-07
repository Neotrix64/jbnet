function Section1() {
  return (
    <>
      <div className="w-full h-screen bg-white text-black">
        <div className="topPart py-10">
          <div className="flex justify-center">
            <div className="grid">
              <h3 className="flex justify-center text-2xl font-bold">Services</h3>
              <h4 className="flex justify-center text-center text-gray-500">we provide several services that will help you find your ideal job <br /> feel free to search through all of our available jobs we've got for you</h4>
              <div className="buttons flex justify-center gap-5">
                <button className="border-b-2 border-purple-500">UI/UX Design</button>
                <button className="border-b-2 border-transparent hover:border-purple-500 ease-in-out duration-300">Software</button>
                <button>Art</button>
                <button>Ingeniery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
