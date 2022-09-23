let Time = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        Time += 1
        basic.showNumber(Time)
    }
})
input.onButtonPressed(Button.AB, function () {
    Time = 0
    basic.showNumber(Time)
})
