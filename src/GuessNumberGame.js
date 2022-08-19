import { useCallback, useEffect, useRef, useState } from "react"
import { GuessNumber } from "./components/GuessNumber"
import { UnknownNumbers } from "./components/UnknownNumbers"
import { WinMessage } from "./components/Messages/winMessage"
import { game } from "./functions/game"
import { GuessMessage } from "./components/Messages/guessMessage"

export const GuessNumberGame = () => {
  const [gameInfo, setGameInfo] = useState(game.getInfo())
  const messageRef = useRef()

  const guess = useCallback((number) => {
    const info = game.guess(number)
    setGameInfo(info)
  }, [])

  const newGame = () => {
    setGameInfo(game.newGame())
  }

  const keydown = (e) => {
    const num = parseInt(e.key)
    if (num || num === 0) guess(num)
  }

  useEffect(() => {
    messageRef.current.style.visibility = "hidden"
    window.addEventListener("keydown", keydown)
  }, [])

  useEffect(() => {
    if (gameInfo.type === "guess" && !gameInfo.isWin) {
      messageRef.current.style.visibility = "visible"
      setTimeout(() => {
        messageRef.current.style.visibility = "hidden"
      }, 1000)
    }
  }, [gameInfo])

  return (
    <div className="containerMain">
      <UnknownNumbers
        numbers={gameInfo.numbers}
        predictionIndex={gameInfo.predictionIndex}
      />
      <GuessMessage isGuess={gameInfo.isGuess} messageRef={messageRef} />
      {gameInfo.isWin ? (
        <>
          <WinMessage />
          <span className="newGameButton" onClick={newGame}>
            New Game
          </span>
        </>
      ) : (
        <GuessNumber onGuess={guess} />
      )}
    </div>
  )
}
