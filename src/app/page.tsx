import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center border-spacing-4">
      <h1 className= "text-5xl text-align-center p-5 ">Joguinhos Bacanas</h1>
      </div> 
      <div className='flex justify-center items-center'>
        <table className='spacing-'>
          <tr>
            <td><Link className = "border  border-round bg-violet-400 border-violet-400 focus:bg-violet-200 hover:bg-violet-200" href="./Guessing_game">Guessing game</Link></td>
            <td><Link  className = "border  border-round bg-violet-400 border-violet-400 focus:bg-violet-200 hover:bg-violet-200" href="./Hangman"> Hangman</Link></td>
            <td><Link className = "border  border-round bg-violet-400 border-violet-400 focus:bg-violet-200 hover:bg-violet-200" href="./Magic_touch">Magic_touch</Link></td>
          </tr>
          <tr>
            <td>	<Link  className = "border  border-round bg-violet-400 border-violet-400 focus:bg-violet-200 hover:bg-violet-200" href="./Pong">Pong</Link></td>
            <td><Link className = "border  border-round bg-violet-400 border-violet-400 focus:bg-violet-200 hover:bg-violet-200" href="./Tetris">Tetris</Link></td>
            <td><Link className = "border  border-round bg-violet-400 border-violet-400 focus:bg-violet-200 hover:bg-violet-200" href="./Trivia">Trivia</Link></td>
          </tr>
        </table>
      </div>
    </div>
  );
  }
  