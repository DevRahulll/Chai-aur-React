import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  // console.log(color)
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("Red")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Red" }} >Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => setColor("violet")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Violet" }}>Violet</button>
          <button onClick={() => setColor("pink")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Pink" }}>Pink</button>
          <button onClick={() => setColor("black")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Black" }}>Black</button>
          <button onClick={() => setColor("orange")} className='outline-none px-6 py-1 rounded-xl text-white shadow-lg' style={{ backgroundColor: "Orange" }}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
