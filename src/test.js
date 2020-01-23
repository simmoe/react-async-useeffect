export default async function (){
    console.log('i only wanna go once')
    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    let json = await res.json()
    let p = await init(json)
    return p
}

async function init(p){
    return p
}

export async function cbHi(cb){
    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    cb(res)
}