
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
   
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50">

      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Avatar: The Way of Water</h1>
        <div className="flex space-x-2 mb-4">
          <span className="bg-gray-800 px-3 py-1 rounded-full">Action</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Adventure</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Science Fiction</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">2022</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">3:12:00</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">8.5</span>
        </div>
        <div/>
        </div>
        </div>
       
  
        )
        }
        export default Hero; 