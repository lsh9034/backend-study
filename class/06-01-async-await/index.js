import axios from 'axios';


function fetchPost(){
    const result = axios.get('https://koreanjson.com/posts/1');
    console.log(result)
}
fetchPost();
async function fetchPost2(){
    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result.data);
}
fetchPost2();