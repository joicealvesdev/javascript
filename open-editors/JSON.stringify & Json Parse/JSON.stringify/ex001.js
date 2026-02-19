const obj = {
    key1: 0, 
    key2: 1,
    key3: 2
}

console.log(JSON.stringify(obj, (key, value) => {
  if (typeof value === 'number') {
    if(value > 1) {
        return value
    }
    return undefined
  }
  return value
}, 4)) //4 é o espaçamento dentro do objeto 


