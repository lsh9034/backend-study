import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import {options} from './swagger/config.js'
import cors from 'cors';
import 'dotenv/config'
import { checkValidationEmail, getWelcomeTemplate, sendWelcomTEmplateToEmail } from './email.js';
import mongoose from 'mongoose';
import { Board } from './models/board.model.js';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(express.json())
app.use(cors())

app.get('/boards', async (req,res)=>{
    const result = await Board.find()

    res.send(result)
})

app.post('/boards', async (req, res)=>{
    console.log(req.body);

    const board = new Board({
      writer: req.body.writer,
      title: req.body.title,
      contents: req.body.contents
    });
    await board.save();
    
    res.send("게시물 등록에 성공하였습니다!");
})

app.post('/tokens/phone', (req, res)=>{
    const myphone = req.body.myphone;

    const isValid = checkValidationPhone(myphone);
    if(isValid){
        const mytoken = getToken();
        sendTokenToSMS(myphone, mytoken);
        res.send('인증완료!!!')
    }
});

app.post("/users", (req, res)=>{
  const user = req.body.myuser;
  
  const isValid = checkValidationEmail(user.email)
  if(isValid){
    const mytemplate = getWelcomeTemplate(user)
    sendWelcomTEmplateToEmail(user.email, mytemplate);
    res.send("가입완료!!");
  }
})

mongoose.connect('mongodb://my-database:27017/mydocker')

app.listen(3000, () =>{
    console.log(`Example app listening on port ${3000}`)
})
