const hash={
    "1":2,
    "2":5,
    "3":5,
    "4":4,
    "5":5,
    "6":6,
    "7":4,
    "8":7,
    "9":6,
    "0":6
}
function dashCount(n) {
  let count = 0
  let value = n.toString()
      value = value.split("")
      value.forEach((res) => {
        count += hash[res]
      })

  return count
}

