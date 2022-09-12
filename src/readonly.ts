export {}

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("大西")
console.log(myVisaCard.owner)
// myVisaCard.owner = '史弥'
// console.log(myVisaCard.owner)
