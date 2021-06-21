// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'


function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}


function App() {
  const [animal, setAnimal] = React.useState('');
  return (
    <form>
      <FavoriteAnimal animal={animal} onAnimalChange={e => setAnimal(e.target.value)} />
      <Display animal={animal}/>
    </form>
  )
}

export default App
