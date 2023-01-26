//구조분해할당
const user = {
    name:'철수',
    age:13,
    school:'초등',
    createdAt:'2010-10-11'
}
const {name, age, school, createdAt} = user

function A({name, age, school, createdAt}){
    console.log(`${name}`)
}
A(user)