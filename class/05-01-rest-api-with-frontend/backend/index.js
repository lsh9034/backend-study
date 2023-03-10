import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import {options} from './swagger/config.js'
import cors from 'cors';

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(express.json())
app.use(cors())
app.get('/boards', (req,res)=>{
    const result = [
        {
          number: 1,
          writer: '철수',
          title: '제목입니다~~',
          contents: '내용이에요@@@',
        },
        {
          number: 2,
          writer: '영희',
          title: '영희 제목입니다~~',
          contents: '영희 내용이에요@@@',
        },
        {
          number: 3,
          writer: '훈이',
          title: '훈이 제목입니다~~',
          contents: '훈이 내용이에요@@@',
        },
      ];

    res.send(result);
})

app.post('/boards', (req, res)=>{
    console.log(req.body);
    res.send('게시물 등록에 성공하였습니다!');
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

app.listen(3000, () =>{
    console.log(`Example app listening on port ${3000}`)
})