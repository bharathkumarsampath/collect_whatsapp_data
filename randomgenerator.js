function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

// Example:

console.log(  
  typeof(between(9000000000, 9999999999))
)

module.exports = between;