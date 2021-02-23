input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(maxval)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(maxval - minval)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sword)
    basic.showNumber(minval)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(total / list.length)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    list.push(randint(0, 9))
    for (let value of list) {
        basic.showNumber(value)
    }
})
let total = 0
let minval = 0
let maxval = 0
let list: number[] = []
list = [randint(0, 9), randint(0, 9), randint(0, 9), randint(0, 9)]
maxval = 0
minval = 9
total = 0
for (let value of list) {
    basic.showNumber(value)
    if (value > maxval) {
        maxval = value
    }
    if (value < minval) {
        minval = value
    }
    total += value
}
basic.forever(function () {
	
})
