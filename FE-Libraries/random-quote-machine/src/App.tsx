import './app.css';
import { useEffect, useState } from 'react';
import { RefreshCcw, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 overflow-hidden">
      <motion.div 
        id="quote-box" 
        className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg max-h-[90%] overflow-auto"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 2 }}>
        
        <p id="text" className="text-2xl font-semibold text-gray-800">"{quote}"</p>
        <p id="author" className="text-right text-lg text-gray-600 mt-4">- {author}</p>

        <div className="flex justify-between items-center mt-6">
        <a 
            id="tweet-quote" 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-xl">
            <Twitter className="mr-2" /> Tweet
          </a>
          <button 
            id="new-quote" 
            onClick={fetchQuote} 
            className="flex items-center bg-purple-300 hover:bg-purple-400 p-2 rounded-xl cursor-pointer">
            <RefreshCcw className="mr-2" /> New Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
