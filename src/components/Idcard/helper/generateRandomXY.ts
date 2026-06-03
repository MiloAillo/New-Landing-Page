export function getRandomIntInclusive(min: number, max: number) {

  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)

}

export default function GenerateRandomXY(x_min: number, x_max: number, y_min: number, y_max: number): {x: number, y: number} {
    
    const x = getRandomIntInclusive(x_min, x_max)

    const y = getRandomIntInclusive(y_min, y_max)    

    return {x, y}

}