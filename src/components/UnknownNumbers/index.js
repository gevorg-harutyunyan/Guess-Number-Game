import { OneProjectedNumber } from "./item"

export const UnknownNumbers = ({ numbers, predictionIndex }) => {
  return (
    <div className="unknownNumberContainer">
      {numbers.map((number, i) => (
        <OneProjectedNumber
          key={i}
          number={number}
          isPrediction={predictionIndex === i}
        />
      ))}
    </div>
  )
}
