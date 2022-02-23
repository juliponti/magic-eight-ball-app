import { useState, useRef, useEffect } from "react";
import { BsQuestionLg as Icon } from "react-icons/bs";

function App() {
  const [userInput, setUserInput] = useState("");
  const [randomIndex, setRandomIndex] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleAnswer(e) {
    e.preventDefault();
    if (userInput !== "") {
      prediction.current.classList.add("active", "fade");
      ball.current.classList.add("animation");
      setTimeout(() => handleAnimation(), 1000);
      setRandomIndex(Math.floor(Math.random() * 20));
      setUserInput("");
    }
  }

  function handleAnimation() {
    ball.current.classList.remove("animation");
    prediction.current.classList.remove("fade");
  }

  const ball = useRef();
  const prediction = useRef();

  const possibleAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definite ly",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Most likely",
    "Outlook not so good",
    "Very doubtful",
  ];
  const answer = possibleAnswers[randomIndex];

  return (
    <div className="bg-desktop-home bg-cover bg-bottom min-h-[100vh] flex flex-col justify-center items-center">
      <header className="w-full py-6">
        <h1 className="font-cursive text-6xl text-black w-fit py-5 mx-auto capitalize">
          Magic eight ball
        </h1>
      </header>
      <main className="w-full flex flex-col justify-center items-center">
        <form className="relative mx-auto my-5 flex flex-col justify-center">
          <label className="font-sanserif text-2xl text-white self-center p-5">
            Ask a yes or no question
          </label>
          <input
            type="text"
            className="w-96 h-8 px-2 focus:outline-indigo-700 text-2xl"
            value={userInput}
            onChange={handleChange}
          />
          <Icon className="absolute right-1" />
          <br />
          <button
            type="submit"
            className="uppercase bg-indigo-700 text-zinc-100 px-2 py-3 w-40 mx-auto rounded-lg hover:bg-indigo-800 focus:outline-1 focus:outline-indigo-600 active:bg-indigo-500 transition-all"
            onClick={handleAnswer}
          >
            Get answer
          </button>
        </form>

        <div className="w-full">
          <div
            ref={ball}
            className="w-[26rem] h-[26rem] bg-black bg-gradient-to-r from-gray-800 to-black rounded-full mt-8 mx-auto"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="w-[14rem] h-[14rem] rounded-full bg-gradient-to-r from-gray-800 to-black overflow-hidden">
                <div
                  ref={prediction}
                  className=" hidden relative bottom-[-58px] left-[-8px] border-l-[180px] border-l-indigo-700 border-t-[100px] border-b-[100px] border-y-transparent rotate-[96deg] skew-y-1 drop-shadow-3xl "
                >
                  <h3
                    className="absolute
                  top-[-47px] right-[116px] w-[107px] font-mono text-xl rotate-[270deg] uppercase"
                  >
                    {answer}
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
