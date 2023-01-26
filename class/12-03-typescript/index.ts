let aaa = "안녕하세요"
aaa = '반갑습니다.'

let ccc: string | number = "Hi"
ccc=10

let eee: boolean = true
eee = false;
//eee = "false"

let arr: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

let hhh: (number | string)[] = [1, "abc", 2]
let iii: number[] | string[] = [1,2,3]
iii = ['a','1']

interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string
}

let profile: IProfile = {
    name: "a",
    age: 13,
    school: "asdf"
}
profile.age="123"
profile.hobby = "f"


function add(a: number, b:number): number {
    return a+b
}