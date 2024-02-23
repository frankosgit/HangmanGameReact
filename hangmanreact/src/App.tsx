import './App.css'

function App() {


  return (
    <>
      <div className='w-full'>
        <h1>HANGMAN GAME</h1>
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
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
    </>
  )
}

export default App
