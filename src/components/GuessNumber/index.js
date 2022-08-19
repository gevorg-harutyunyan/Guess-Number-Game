import { memo } from "react"

export const GuessNumber = memo(({ onGuess }) => {
  const arr = Array(10).fill(0)
  const click = (number) => () => {
    onGuess(number)
  }
  return (
    <div className="guessNumberContainer">
      {arr.map((_, index) => (
        <span key={index} className="guessNumberItem" onClick={click(index)}>
          {index}
        </span>
      ))}
    </div>
  )
})
