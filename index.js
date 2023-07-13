let cards = [
  { id: 1, name: '2C', value: 2, suit: 'C', image: 'images/2C.png' },
  { id: 2, name: '2D', value: 2, suit: 'D', image: 'images/2D.png' },
  { id: 3, name: '2H', value: 2, suit: 'H', image: 'images/2H.png' },
  { id: 4, name: '2S', value: 2, suit: 'S', image: 'images/2S.png' },
  { id: 5, name: '3C', value: 3, suit: 'C', image: 'images/3C.png' },
  { id: 6, name: '3D', value: 3, suit: 'D', image: 'images/3D.png' },
  { id: 7, name: '3H', value: 3, suit: 'H', image: 'images/3H.png' },
  { id: 8, name: '3S', value: 3, suit: 'S', image: 'images/3S.png' },
  { id: 9, name: '4C', value: 4, suit: 'C', image: 'images/4C.png' },
  { id: 10, name: '4D', value: 4, suit: 'D', image: 'images/4D.png' },
  { id: 11, name: '4H', value: 4, suit: 'H', image: 'images/4H.png' },
  { id: 12, name: '4S', value: 4, suit: 'S', image: 'images/4S.png' },
  { id: 13, name: '5C', value: 5, suit: 'C', image: 'images/5C.png' },
  { id: 14, name: '5D', value: 5, suit: 'D', image: 'images/5D.png' },
  { id: 15, name: '5H', value: 5, suit: 'H', image: 'images/5H.png' },
  { id: 16, name: '5S', value: 5, suit: 'S', image: 'images/5S.png' },
  { id: 17, name: '6C', value: 6, suit: 'C', image: 'images/6C.png' },
  { id: 18, name: '6D', value: 6, suit: 'D', image: 'images/6D.png' },
  { id: 19, name: '6H', value: 6, suit: 'H', image: 'images/6H.png' },
  { id: 20, name: '6S', value: 6, suit: 'S', image: 'images/6S.png' },
  { id: 21, name: '7C', value: 7, suit: 'C', image: 'images/7C.png' },
  { id: 22, name: '7D', value: 7, suit: 'D', image: 'images/7D.png' },
  { id: 23, name: '7H', value: 7, suit: 'H', image: 'images/7H.png' },
  { id: 24, name: '7S', value: 7, suit: 'S', image: 'images/7S.png' },
  { id: 25, name: '8C', value: 8, suit: 'C', image: 'images/8C.png' },
  { id: 26, name: '8D', value: 8, suit: 'D', image: 'images/8D.png' },
  { id: 27, name: '8H', value: 8, suit: 'H', image: 'images/8H.png' },
  { id: 28, name: '8S', value: 8, suit: 'S', image: 'images/8S.png' },
  { id: 29, name: '9C', value: 9, suit: 'C', image: 'images/9C.png' },
  { id: 30, name: '9D', value: 9, suit: 'D', image: 'images/9D.png' },
  { id: 31, name: '9H', value: 9, suit: 'H', image: 'images/9H.png' },
  { id: 32, name: '9S', value: 9, suit: 'S', image: 'images/9S.png' },
  { id: 33, name: '10C', value: 10, suit: 'C', image: 'images/10C.png' },
  { id: 34, name: '10D', value: 10, suit: 'D', image: 'images/10D.png' },
  { id: 35, name: '10H', value: 10, suit: 'H', image: 'images/10H.png' },
  { id: 36, name: '10S', value: 10, suit: 'S', image: 'images/10S.png' },
  { id: 37, name: 'JC', value: 10, suit: 'C', image: 'images/JC.png' },
  { id: 38, name: 'JD', value: 10, suit: 'D', image: 'images/JD.png' },
  { id: 39, name: 'JH', value: 10, suit: 'H', image: 'images/JH.png' },
  { id: 40, name: 'JS', value: 10, suit: 'S', image: 'images/JS.png' },
  { id: 41, name: 'QC', value: 10, suit: 'C', image: 'images/QC.png' },
  { id: 42, name: 'QD', value: 10, suit: 'D', image: 'images/QD.png' },
  { id: 43, name: 'QH', value: 10, suit: 'H', image: 'images/QH.png' },
  { id: 44, name: 'QS', value: 10, suit: 'S', image: 'images/QS.png' },
  { id: 45, name: 'KC', value: 10, suit: 'C', image: 'images/KC.png' },
  { id: 46, name: 'KD', value: 10, suit: 'D', image: 'images/KD.png' },
  { id: 47, name: 'KH', value: 10, suit: 'H', image: 'images/KH.png' },
  { id: 48, name: 'KS', value: 10, suit: 'S', image: 'images/KS.png' },
  { id: 49, name: 'AC', value: [1, 11], suit: 'C', image: 'images/AC.png' },
  { id: 50, name: 'AD', value: [1, 11], suit: 'D', image: 'images/AD.png' },
  { id: 51, name: 'AH', value: [1, 11], suit: 'H', image: 'images/AH.png' },
  { id: 52, name: 'AS', value: [1, 11], suit: 'S', image: 'images/AS.png' },
]

let dealerHand = []
let dealerHandValue = []
let playerHand = []
let playerHandValue = []
let dealButton = document.getElementById('deal')
let hitButton = document.getElementById('hit')
let stayButton = document.getElementById('stay')

dealButton.addEventListener('click', draw)
hitButton.addEventListener('click', playerHit)
stayButton.addEventListener('click', stay)

//write a function that will draw a random dealer hand

function draw() {
  for (let i = 0; i < 2; i++) {
    let randomId = Math.floor(Math.random() * (52 - 1) + 1)
    dealerHand.push(randomId)
  }
  console.log(dealerHand)
  for (let i = 0; i < 2; i++) {
    let randomId = Math.floor(Math.random() * (52 - 1) + 1)
    playerHand.push(randomId)
  }
  //console.log(playerHand)
}

function playerHit() {
  let randomId = Math.floor(Math.random() * (52 - 1) + 1)
  playerHand.push(randomId)
  //console.log(playerHand)
}

function dealerHit() {
  // console.log(dealerHand)
}

function stay() {
  // Finds [0] Object
  let dealerHandID0 = cards.find((card) => card.id === dealerHand[0])
  console.log(`Dealer Hand ID 1 Object: ${dealerHandID0}`)

  // Finds [1] Object
  let dealerHandID1 = cards.find((card) => card.id === dealerHand[1])
  console.log(`Dealer Hand ID 2 Object: ${dealerHandID1}`)

  // Finds [0] Object Value
  let dealerHandValue0 = parseInt(dealerHandID0.value, 10)
  console.log(`Dealer Hand Value 1: ${dealerHandValue0}`)

  // Finds [0] Object Value
  let dealerHandValue1 = parseInt(dealerHandID1.value, 10)
  console.log(`Dealer Hand Value 2: ${dealerHandValue1}`)

  // Adds both values
  let dealerHandTotal = dealerHandValue0 + dealerHandValue1
  console.log(`Dealer Hand Total: ${dealerHandTotal}`)
  // console.log(dealerHandTotal)

  // If Value is Less than 16

  if (dealerHandTotal < 16) {
    let randomId = Math.floor(Math.random() * (52 - 1) + 1)
    dealerHand.push(randomId)
    console.log(`Dealer Hand 2: ${dealerHand}`)

    let dealerHandID2 = cards.find((card) => card.id === randomId)
    let dealerHandValue2 = dealerHandID2 ? parseInt(dealerHandID2.value, 10) : 0

    console.log(
      dealerHandValue0 + ',' + dealerHandValue1 + ',' + dealerHandValue2
    )
    console.log(
      `Dealer Hand 3: ${dealerHandTotal + parseInt(dealerHandValue2, 10)}`
    )
  } else {
  }
}
// console.log('dealer hand value ' + cards[dealerHandValue0].value)
//   if dealerHandValue <= 16
