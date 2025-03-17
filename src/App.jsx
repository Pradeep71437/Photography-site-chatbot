import React, { useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
import { FaEdit, FaCamera, FaHeart } from 'react-icons/fa';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false); // ✅ Fixed here
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput(""); 

      // Simulate chatbot response (You can replace this with an AI response)
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Hello! How can I assist you today?", sender: "bot" }
        ]);
      }, 500);
    }
  };
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0a0b14]' : 'bg-gray-100'}`}>
      <header className="container mx-auto px-10 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-3xl font-bold italic text-purple-500">
            Artistic
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:text-purple-500`}>Home</a>
            <a href="#" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`}>Services</a>
            <a href="#" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`}>About</a>
            <a href="#" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`}>Team</a>
            <a href="#" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`}>Contact</a>
            {/* <button 
              onClick={toggleDarkMode}
              className="bg-purple-500 bg-opacity-20 p-2 rounded-full text-purple-500"
            >
              {darkMode ? "X" : "Y"}
            </button> */}
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
      <div>
          <button 
            onClick={() => setShowChatbot(!showChatbot)} 
            className="text-black cursor-pointer fixed bottom-5 right-5 bg-white px-4 py-2 rounded-full font-bold shadow-md"
          >
            Need Help?
          </button>
        </div>

        {/* Chatbot UI */}
        {showChatbot && (
          <div className="fixed bottom-16 right-5 bg-white shadow-lg rounded-lg w-72">
            {/* Header */}
            <div className="flex justify-between items-center bg-purple-500 text-white p-3 rounded-t-lg">
              <h3 className="font-bold">Chatbot</h3>
              <button onClick={() => setShowChatbot(false)} className="text-xl">✖️</button>
            </div>

            {/* Messages */}
            <div className="h-60 overflow-y-auto p-3">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`p-2 rounded-lg my-1 ${msg.sender === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center p-2 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border rounded-lg p-2 focus:outline-none"
                placeholder="Type a message..."
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage} 
                className="ml-2 bg-purple-500 text-white p-2 rounded-lg"
              >
                ➤
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center  justify-between gap-8 p-10">
          <div className="md:w-1/2">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              A Click Of <br />Artistic Joy
            </h1>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Because every picture tells a story, let us help you tell yours.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-md transition duration-300">
              Get In Touch
            </button>
          </div>
          
          <div className="md:w-1/2 grid grid-rows-1 md:grid-cols-2 gap-4">
            {/* <div className="md:col-span-2 md:row-span-2">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" 
                alt="Photographer taking photo" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div> */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" 
                alt="Person taking photos" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" 
                alt="Hands holding smartphone camera" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <section className="bg-[#0a0b14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professional Editing Card */}
          <div className="bg-purple-600 rounded-xl p-8">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaEdit className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Professional Editing
            </h3>
            <p className="text-white/90">
              We do professional photo editing. Let us help you to take your photo next level.
            </p>
          </div>
          
          {/* Casual Photography Card */}
          <div className="rounded-xl p-8">
            <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaCamera className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Casual Photography
            </h3>
            <p className="text-gray-300">
              You can hire us for any kind of casual Photography. Book us for your next events.
            </p>
          </div>
          
          {/* Wedding Photography Card */}
          <div className="rounded-xl p-8">
            <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaHeart className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Wedding Photography
            </h3>
            <p className="text-gray-300">
              Wedding is the most memorable events of our life. Let us help you to capture it.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#0a0b14] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image grid */}
          <div className="md:w-1/2  grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1 md:row-span-2">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" 
                alt="Hand holding camera" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
              <div >
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" 
                alt="Camera lens closeup" 
                className="w-full h-full  object-cover rounded-2xl"
              />
              
            </div>
            {/* <div>
              <img 
                src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" 
                alt="Person taking photos with flowers" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div> */}
           
          </div>
          
          {/* Right side - Text content */}
          <div className="md:w-1/2">
            <h3 className="text-purple-500 text-lg mb-2">Who Are We</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Capturing life as it happens
            </h2>
            <p className="text-gray-300 mb-8">
              "Artistic" is a studio of some passionate photographer. Our Goal is to capture your experience.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-md transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
}

export default App;