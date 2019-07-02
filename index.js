const env = process.env
const envObj = {}

Object.keys(env).forEach((varKey) => {
  const varValue = env[varKey]
  const varKeyArr = varKey.split('_')
  let lastObj = envObj

  varKeyArr.forEach((varKeyValue, i) => {
    let varKeyValues = [ varKeyValue ]
    let lastObj2

    if (varKeyValue === varKeyValue.toUpperCase()) varKeyValues.push(varKeyValue.toLowerCase())
    else {
      const char0 = varKeyValue.charAt(0)
      if (char0 === char0.toUpperCase()) varKeyValues.push(char0.toLowerCase() + varKeyValue.slice(1))
    };

    varKeyValues.forEach((varKeyValue, i2) => {
      if (i2 > 0) lastObj[varKeyValue] = lastObj2
      else if (lastObj[varKeyValue]) lastObj2 = lastObj[varKeyValue]
      else lastObj2 = lastObj[varKeyValue] = (i === varKeyArr.length - 1) ? varValue : {}
    })

    lastObj = lastObj2
  })
})

module.exports = envObj
