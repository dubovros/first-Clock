setInterval(setClock, 1000)

const hourHand = document.querySelector('div.hand.hour')
const minuteHand = document.querySelector('div.hand.minute')
const secondHand = document.querySelector('div.hand.second')

function setClock () {
    const currentTime = new Date()
    const secondRatio = currentTime.getSeconds() /60
    const minuteRatio = (secondRatio + currentTime.getMinutes()) /60
    const hourRatio = (minuteRatio + currentTime.getHours()) /12

    getRatio(hourHand, hourRatio)
    getRatio(minuteHand, minuteRatio)
    getRatio(secondHand, secondRatio)
}

function getRatio(element, handRatio) {
    element.style.setProperty('--rotation', handRatio * 360)
}

setClock()
