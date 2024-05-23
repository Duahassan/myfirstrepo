import React, { useContext, useEffect } from 'react'
import noteContext from './app/context/notecontext'

const User = () => {
  const a =useContext(noteContext)
  useEffect(()=>{
    a.update();
  }, [])
  return (
    <div>
      <h2>Hello this is {a.state.name} and I'm in class {a.state.class}</h2>
    </div>
  )
}

export default User
