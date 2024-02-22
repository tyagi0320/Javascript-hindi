const name="hitesh"
const repocount = 50

//console.log(name+repocount+"value") => Avoid this method

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('harshithhc')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('c'))

const newstring1 = gameName.substring(0,4)
console.log(newstring1)

const newstring2 = gameName.slice(1,5)
console.log(newstring2)
const newstring3 = gameName.slice(-9,2)
console.log(newstring3)

const newstring4 = " harshit tyagi  "
console.log(newstring4.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','%69'))
console.log(url.includes('tyagi'))

const string5 = "ramesh-suresh-kamlesh"

console.log(string5.split('-'))
