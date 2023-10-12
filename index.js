

const giftMessage = []
//const girls = ["Ali", "Set", "Aurora"]
//const occasion = "Halloween"
function writeCards(girls, occasion) {
    for (let CG = 0; CG < girls.length; CG++) {
        giftMessage.push(`Thank you, ${girls[CG]}, for the wonderful ${occasion} gift!`);
        
    }
    return giftMessage
}

let n = true
function countDown(n) {
    while (n >= 0) {
        console.log(n--)
    }
}