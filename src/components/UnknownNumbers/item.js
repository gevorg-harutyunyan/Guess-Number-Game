import { memo } from "react"

export const OneProjectedNumber = memo(({ number, isPrediction }) => {
  const predictionClass = isPrediction ? " prediction" : ""
  return (
    <div className={"unknownNumberItem" + predictionClass}>
      {number !== null ? number : "X"}
    </div>
  )
})
