import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div class="p-2 m-2 h-fit w-fit bg-gray-400">
        <div>
          <input type="text" placeholder="password" ref={passwordRef} class="p-1 border-black rounded " value={password} />
          <button onClick={copyPasswordToClipboard} class="bg-blue-500 hover:bg-blue-700 rounded p-1 font-bold text-white">Copy</button>
        </div>
        <div>
          <span>
            <input type="range" min="1" max="20" value={length} class="custom-slidor" readOnly onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="length">Length : {length}</label>
          </span>
          <span class="m-1">
            <input type="checkbox" id="numberAllowed" onClick={() => { setNumberAllowed(prev => !prev) }} />
            <label htmlFor="numberAllowed">Number</label>
          </span>
          <span class="m-1">
            <input type="checkbox" id="characterAllowed" onClick={() => { setCharacterAllowed(prev => !prev) }} />
            <label htmlFor="characterAllowed">Characters</label>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
