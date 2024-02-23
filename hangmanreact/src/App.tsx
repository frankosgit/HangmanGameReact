import { useEffect, useState } from 'react'
import './App.css'
import Game from './components/Game'
import { Player } from './models/playerModels'
import { avatarText } from './models/avatartext'

function App() {
  const [playerOne, setPlayerOne] = useState(new Player("", 5, false))
  const [playerTwo, setPlayerTwo] = useState(new Player("", 5, false))
  const [textDisplay, setTextDisplay] = useState(new avatarText(false, false, false, false))

  const handlePlayerOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerOne({ ...playerOne, [e.target.name]: e.target.value })
  }

  const handlePlayerTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerTwo({ ...playerTwo, [e.target.name]: e.target.value })
  }

  const playerOneSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setPlayerOne({ ...playerOne, active: false })
    setPlayerTwo({ ...playerTwo, active: true })
  }

  const playerTwoSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setPlayerOne({ ...playerOne, active: false })
    setPlayerTwo({ ...playerTwo, active: false })
  }

  useEffect(() => {
    setTimeout(() => {
      setTextDisplay({ ...textDisplay, firstText: true })
    }, 1000);
    setTimeout(() => {
      setTextDisplay({ ...textDisplay, secondText: true })
    }, 3000);
    setTimeout(() => {
      setTextDisplay({ ...textDisplay, thirdText: true })
    }, 5000);
    setTimeout(() => {
      setTextDisplay({ ...textDisplay, foruthText: true })
      setPlayerOne({...playerOne, active: true})
    }, 7000);
  }, [])



  return (
    <>
      <div className='w-full'>
        <h1 className='mb-12'>HANGMAN GAME</h1>
        {textDisplay.firstText &&
          <div className="avatar indicator mb-12">
            <span className="indicator-item badge badge-secondary">typing…</span>
            <div className="w-20 h-20 rounded-lg">
              <img alt="Tailwind CSS examples" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        }
        {textDisplay.secondText &&
          <div className="chat chat-start mb-12">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">Lets play a game of hangman</div>
          </div>
        }
        {textDisplay.thirdText &&
          <div className="chat chat-start mb-12">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">Enter your name and we can go further</div>
          </div>
        }
        {textDisplay.foruthText &&
          <div className="chat chat-start mb-12">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">Good luck!</div>
          </div>
        }
        {
        <>
        <div className="chat chat-start mb-12">
  


        </div>
        </>
        }
      </div>

      {playerOne.active && <input name='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-12" onChange={handlePlayerOneChange} />}
      {playerTwo.active && <input name='name' type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs mb-12" onChange={handlePlayerTwoChange} />}
      {playerOne.active && <button className="btn btn-outline btn-primary" onClick={playerOneSubmit}>PlayerOneSubmit</button>}
      {playerTwo.active && <button className="btn btn-outline btn-secondary" onSubmit={playerTwoSubmit}>PlayerTwoSubmit</button>}
      <Game />

    </>
  )
}

export default App
