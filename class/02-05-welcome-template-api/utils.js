export function getToday(){
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = date.getMonth()
    const dd = date.getDate()

    return `${yyyy}-${mm+1}-${dd}`
}

console.log(getToday())