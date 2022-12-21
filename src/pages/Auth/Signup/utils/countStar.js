
export default function countStar(val){
    let stars = ''

    for (let index = 0; index < val.length; index++) {
        stars += '*'
    }

    console.log(stars)
    return stars
}