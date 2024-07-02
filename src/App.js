import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import GradientText from "./utils/GradientText";
import ChatBot from "./components/chatbot/ChatBot";
import Sidebar from "./components/chatbot/Sidebar";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  

  useEffect(() => {
    if (isAuthenticated) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }, [isAuthenticated]);

  const handleLoginSuccess = (response) => {
    console.log(response);
    setAuthenticated(true);
  };

  const handleLoginError = (error) => {
    console.log(error);
  };

  const firstText = "Fix your Sales";

  // Calculate the total animation duration for the first instance
  const firstTextLength = firstText.length;
  const animationDelayPerLetter = 0.3; //  the delay used in GradientText
  const animationDurationPerLetter = 0.2; // the duration in the CSS animation
  const totalFirstAnimationDuration =
    firstTextLength * animationDelayPerLetter + animationDurationPerLetter;

  return (
    <div className="App">
      <Navbar onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError}/>

      <div className="fixed z-[9999] inset-4 pointer-events-none"></div>

      
        <main className="h-[calc(100vh-4rem)] ">
          <div className="bg-black xl:px-[160px]">
            <div className="text-main w-full text-4xl pt-[8rem] xl:pt-[2rem] xl:h-screen flex  xl:flex-row items-center justify-center xl:justify-center">
              <div className="flex  pt-[5rem] xl:pt-0 h-fit xl:w-[100%] pb-0 flex-col text-center text-white items-center  gap-8 sm:-mt-[2%] justify-center xl:justify-between ">
                <h1 className="justify-center text-2xl text-gray-700 text-[1.875rem] md:text-[3rem] md:leading-[4rem]  lg:text-7xl font-semibold  font-proximaBold -mt-[2%] xl:mt-10  bg-clip-text ">
                  <GradientText text="Fix your Sales" />
                </h1>
                <h3 className="w-full leading-tight  text-center md:text-[70px] xl:text-[80px] md:mt-5  p-0 xl:text-start font-proximaBold -mt-[2%] bg-clip-text text-gray-700">
                  <GradientText
                    text="Enabling Human Intelligence with Artificial Intelligence"
                    delay={totalFirstAnimationDuration}
                  />
                </h3>
                <span className="text-lg text-orange-600	mb-5">join the waitlist &gt; </span>
              </div>
            </div>
          </div>


          {isAuthenticated && (
            <div className="flex flex-1 overflow-hidden h-[calc(100vh-4rem)] ">
            <Sidebar  onSelect={(question) => {
                document.querySelector('.chatbot input').value = question;
                document.querySelector('.chatbot button').click();
            }} />
            <ChatBot />
        </div>
        )}
        </main>
     
    </div>
  );
}

export default App;
