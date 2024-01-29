let score = 0
let disabled= false;
let firstCard, secondCard;
const cards = document.querySelectorAll(".card")

function flipCard({target: clickedCard}) {
    if(disabled || clickedCard == firstCard){return;}
    if (score == 8) {
        console.log("oyun bitti.")

        return;
    }
    clickedCard.classList.add("flip")

    if (!firstCard) {
        firstCard = clickedCard
        console.log("ilk kartım=" + firstCard)

        return;
    }

    secondCard = clickedCard
    disabled = true
    console.log("ikinci kartım=" + secondCard)

    let img1 = firstCard.querySelector(".back-view img").src
    let img2 = secondCard.querySelector(".back-view img").src

    if (img1 == img2) {
        score++
        console.log("score=" + score)

        firstCard.removeEventListener("click", flipCard)
        secondCard.removeEventListener("click", flipCard)
        firstCard = ""
        secondCard = ""
        disabled= false
    } else {
        setTimeout(() => {
            firstCard.classList.add("shake")
            secondCard.classList.add("shake")
        }, 400)

        setTimeout(() => {
            firstCard.classList.remove("shake","flip")
            secondCard.classList.remove("shake","flip")
            firstCard = ""
            secondCard = ""
            disabled= false
        }, 1200)}


}

function shuffle(){
    let cardNames = [1,2,3,4,7,8,5,6,1,2,3,4,7,8,5,6]
    cardNames.sort(( )=> Math.random() > 0.5 ? 1 : -1

    )

    cards.forEach((card, i)=>{
        console.log(cardNames)
        card.querySelector(".back-view img").src = `images/img-${cardNames[i]}.png`
    })
}

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})

shuffle()