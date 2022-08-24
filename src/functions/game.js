const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min)

const getNumberArr = (digits) => {
  const arr = Array(digits)
    .fill()
    .map(() => getRandomNumber(0, 9))

  arr[0] = getRandomNumber(1, 9)
  return arr
}

const getNullArr = (size) => Array(size).fill(null)

const guessNumberGame = (digits = 4) => {
  let predictionIndex
  let numbers

  const isGuess = (num) => numbers[predictionIndex] === num

  const getNumbers = () =>
    getNullArr(digits).map((_, i) => (i < predictionIndex ? numbers[i] : null))

  const getInfo = (type, isGuess) => () => ({
    type,
    isGuess,
    predictionIndex,
    isWin: predictionIndex === digits,
    numbers: getNumbers(),
  })

  const guess = (num) => {
    if (predictionIndex === digits) return
    const isNumberGuessed = isGuess(num)
    predictionIndex = isNumberGuessed ? predictionIndex + 1 : 0
    return getInfo("guess", isNumberGuessed)()
  }

  const newGame = () => {
    predictionIndex = 0
    numbers = getNumberArr(digits)
    console.log(numbers)
    return getInfo("start", false)()
  }

  newGame()

  return {
    newGame,
    getInfo: getInfo("getInfo", false),
    guess,
  }
}

export const game = guessNumberGame()