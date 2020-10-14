function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function howManyCamelCase(str) {
    if (!str) {
      return 0
    }
  
    let count = 1 // je
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i)
  
      if (isUpperCase(charCode)) {
        count++
      }
    }
  
    return count
  }
  console.log(howManyCamelCase)
  console.log(isUpperCase)