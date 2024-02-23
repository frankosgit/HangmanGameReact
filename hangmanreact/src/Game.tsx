import React from 'react'
import Start from './assets/Hangman Game start picture 1.png'
import Fail0 from './assets/Fail 0.png'
import Fail1 from './assets/Fail 1.png'
import Fail2 from './assets/Fail 2.png'
import Fail3 from './assets/Fail 3.png'
import Fail4 from './assets/Fail 4.png'
import Fail5 from './assets/Fail 5.png'




const Game = () => {
  return (
    <div>
      <img src={Start} alt='Start Screen'/>

      <img src={Fail0} alt='Fail 0'/>

      <img src={Fail1} alt='Fail 1'/>

      <img src={Fail2} alt='Fail 2'/>

      <img src={Fail3} alt='Fail 3'/>

      <img src={Fail4} alt='Fail 4'/>

      <img src={Fail5} alt='Fail 5'/>

    </div>
  )
}

export default Game