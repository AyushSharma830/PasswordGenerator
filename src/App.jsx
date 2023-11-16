import { useState, useCallback } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(1)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random * length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  return (
    <>

    </>
  )
}

export default App
