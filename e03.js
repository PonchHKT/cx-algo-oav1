function Marsos(str) {
    const sosCount = str.length / 3
    const messages = "SOS".repeat(sosCount)
  
    let errorCount = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== messages[i]) {
        errorCount++
      }
    }
  
    return errorCount
  }