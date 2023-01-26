import { checkValidationEmail, getWelcomeTemplate, sendWelcomTEmplateToEmail } from "./email.js";

function createUser(user){
    const isValid = checkValidationEmail(user.email);
    if(isValid){
        const template = getWelcomeTemplate(user);
        sendWelcomTEmplateToEmail(user.email, template);
    }
}

const user = {
    name:'철수',
    age:13,
    school:'다람쥐초등학교',
    email:'lsh9034@naver.com',
}
createUser(user)


const a=[]
a.push(1)
console.log(a)