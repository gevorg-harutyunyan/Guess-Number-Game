export const GuessMessage = ({ isGuess, messageRef }) => {
  return (
    <div className="guessFailMessagecContainer">
      <div ref={messageRef} className={isGuess ? "guessMessage" : "failMessage"}>
        {isGuess ? "Guess" : "Fail"}
      </div>
    </div>
  )
}
