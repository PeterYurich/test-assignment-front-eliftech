export const parseDate = (date) => {
    const str = String(date)
    const arr = str.split('')
    const slice = arr.slice(0, 10)
    const res = slice.join('')
    return res
  };