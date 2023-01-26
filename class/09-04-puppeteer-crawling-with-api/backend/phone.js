import coolsms from 'coolsms-node-sdk'
import 'dotenv/config'
export function getToken() {
    const count=6
    if (count === undefined) {
      console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
      return;
    } else if (count <= 0) {
      console.log('에러 발생!!! 갯수가 너무 적습니다!!!');
      return;
    } else if (count > 10) {
      console.log('에러 발생!!! 갯수가 너무 많습니다!!!');
      return;
    }
  
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
      count,
      '0'
    );
      return result;
    // console.log(result);
  }

export function checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
      console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
      return false;
    } else {
      return true; // 검증 통과
    }
  }

export async function sendTokenToSMS(myphone, token) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;
  const mysms = coolsms.default;
  console.log(SMS_KEY.length, SMS_KEY)
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  const result = await messageService.sendOne({
    to:myphone,
    from: SMS_SENDER,
    text: `하이욤 내가 만든거임 token 번호는 ${token} 입니다.` 
  });
  console.log(result);
  //console.log(myphone + '번호로 인증번호' + token + '를 전송합니다!!!');
}

