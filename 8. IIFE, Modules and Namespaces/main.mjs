import User, {printAge,printName} from './package.mjs'
const user = new User('Bob', 20)
printAge(user)
printName(user)
console.log(user)