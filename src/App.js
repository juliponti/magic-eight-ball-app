function App() {
  return (
    <div className="bg-desktop-home bg-cover bg-bottom h-screen">
      <header className="w-full py-6">
        <h1 className="font-cursive text-6xl text-black w-fit py-5 mx-auto capitalize">
          Magic eight ball
        </h1>
      </header>
      <main className="w-full flex flex-col justify-center items-center">
        <form className="mx-auto my-5 flex flex-col justify-center">
          <label className="font-sanserif text-2xl text-white self-center p-5">
            Ask a yes or no question
          </label>
          <input
            type="text"
            className="w-96 h-8 px-2 focus:outline-indigo-700 text-2xl"
          />
          <br />
          <button
            type="submit"
            className="uppercase bg-indigo-700 text-zinc-100 px-2 py-3 w-40 mx-auto rounded-lg hover:bg-indigo-800"
          >
            Get answer
          </button>
        </form>

        <div className="w-full">
          <div className="w-[26rem] h-[26rem] bg-black bg-gradient-to-r from-gray-800 to-black rounded-full mt-8 mx-auto">
            <div className="h-full w-full flex justify-center items-center">
              <div className="w-[14rem] h-[14rem] rounded-full bg-gradient-to-r from-gray-800 to-black overflow-hidden">
                <div className="relative bottom-[-58px] left-[-8px] border-l-[180px] border-l-indigo-700 border-t-[100px] border-b-[100px] border-y-transparent rotate-[96deg] skew-y-1 drop-shadow-3xl ">
                  <h3
                    className="absolute
                  top-[-47px] right-[135px] font-mono text-xl rotate-[270deg] uppercase"
                  >
                    Don't count on it
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
