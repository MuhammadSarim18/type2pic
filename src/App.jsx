import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain " />
        </Link>
        <Link to="/create-post" className='font-inter font-medium  text-black hover:brightness-110 px-4 py-2 rounded-md border border-gray-700 transition-all hover:bg-zinc-700 hover:text-white'>Generate</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#27272a] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App