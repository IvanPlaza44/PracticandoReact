import React from 'react'
import TwitterCard from './TwitterCard'

export const App = () => {

  const users = [

    {
      name: "Ivan",
      userName: "IvanPlaza44",
    },
    {
      name: "Midu",
      userName: "Midudev",
    },
    {
      name: "Joaquin",
      userName: "NoSquazer",
    }

  ]

  return (
    <div className="App">
      {
        users.map(({ name, userName }) =>
          <TwitterCard name={name} userName={userName} key={userName}/>
        )
      }
    </div>
  )
}
