basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    } else {
        basic.clearScreen()
    }
    
})
