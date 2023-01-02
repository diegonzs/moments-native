export const commafy = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const wait = (num: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, num)
  })
}
