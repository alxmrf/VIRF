import Image from 'next/image';
import Link from 'next/link';
import LinkButton from './Components/linkButton';
export default function Home() {
  return (
    <div >
      <div className="flex justify-center items-center border-spacing-4">
      <h1 className= "text-5xl text-align-center top-2 font-mono font-extrabold ">VIRF</h1>
      </div> 
<div className=' w-full h-0.5 bg-[#FBFBFF] my-5'></div>
    <div className='space-y-3'>
      <div className='flex justify-center h-6'>
        <div className=' flex space-x-8 rounded-md'>
          <div className='h-full w-[130px] bg-[#3626A7]  flex rounded-md justify-center'>
              <Link href={"./Trivia"} className='hover:bg-[#657ED4] focus:bg-[#657ED4] h-full font-mono font-extrabold w-full rounded-md justify-center text-center text-'>Trivia Game</Link>
          </div>
          <div className='h-full w-[130px] flex bg-[#3626A7] rounded-md justify-center'>
            <Link href={"./Guessing_game"} className='hover:bg-[#657ED4] focus:bg-[#657ED4] font-mono font-extrabold h-full w-full rounded-md justify-center text-center text-'>Guessing game</Link>
          </div>
          <div className='h-full w-[130px] bg-[#3626A7] flex rounded-md justify-center'>
            <Link href={"./Hangman"} className='hover:bg-[#657ED4] focus:bg-[#657ED4] font-mono font-extrabold h-full w-full rounded-md justify-center text-center text-'>Hangman</Link>
          </div>
        </div>
      </div>

      <div className='flex justify-center h-6'>
        <div className=' flex space-x-8 rounded-md'>
          <div className='h-full w-[130px] bg-[#3626A7]  flex rounded-md justify-center'>
              <Link href={"./Magic_touch"} className='hover:bg-[#657ED4] focus:bg-[#657ED4] h-full font-mono font-extrabold w-full rounded-md justify-center text-center text-'>Magic Touch</Link>
          </div>
          <div className='h-full w-[130px] flex bg-[#3626A7] rounded-md justify-center'>
            <Link href={"./Pong"} className='hover:bg-[#657ED4] focus:bg-[#657ED4] font-mono font-extrabold h-full w-full rounded-md justify-center text-center text-'>Pong</Link>
          </div>
          <div className='h-full w-[130px] bg-[#3626A7] flex rounded-md justify-center'>
            <Link href={"./Tetris"} className='hover:bg-[#657ED4] focus:bg-[#657ED4] font-mono font-extrabold h-full w-full rounded-md justify-center text-center text-'>Tetris</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  }
  