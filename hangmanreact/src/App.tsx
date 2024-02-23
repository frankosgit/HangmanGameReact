import { useState } from 'react'
import './App.css'
import { Player } from './models/playerModels'

function App() {
  const [playerOne, setPlayerOne] = useState(new Player("", 5, true))
  const [playerTwo, setPlayerTwo] = useState(new Player("", 5, false))

  const handlePlayerOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerOne({ ...playerOne, [e.target.name]: e.target.value })
  }

  const handlePlayerTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerTwo({ ...playerTwo, [e.target.name]: e.target.value })
  }

  const playerOneSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setPlayerOne({...playerOne, active: false})
    setPlayerTwo({...playerTwo, active: true})
  }

  return (
    <>
      <div className='w-full'>
        <h1 className='mb-12'>HANGMAN GAME</h1>
        <div className="avatar indicator">
          <span className="indicator-item badge badge-secondary">typing…</span>
          <div className="w-20 h-20 rounded-lg">
            <img alt="Tailwind CSS examples" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-bubble">It was you who would bring balance to the Force</div>
        </div>
        <div className="chat chat-start mb-12">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
      </div>
      {playerOne.active && <input name='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={handlePlayerOneChange} />}
      {playerTwo.active && <input name='name' type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={handlePlayerTwoChange} />}
      {playerOne.active && <button className="btn btn-outline btn-primary" onClick={playerOneSubmit}>PlayerOneSubmit</button>}
      {playerTwo.active && <button className="btn btn-outline btn-secondary">PlayerTwoSubmit</button>}

      <h4>player one is called {playerOne.name}</h4>
      <h4>player two is called{playerTwo.name}</h4>

    </>
  )
}

export default App
