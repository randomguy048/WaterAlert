let minutes_to_sleep = 0
let hours_to_remind = 0
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
music.play(music.stringPlayable("- - - - - - C D ", 70), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G F E D C C5 ", 550), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.forever(function () {
    hours_to_remind = 15.5
    while (0.5 < hours_to_remind) {
        basic.pause(3600000)
        hours_to_remind += -1
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            . . # . .
            . # . . .
            `)
        music.play(music.stringPlayable("C D G F C D - - ", 600), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("C - C5 - - - - - ", 500), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
    if (hours_to_remind == 0.5) {
        hours_to_remind += -0.5
        music.play(music.stringPlayable("C D G F C D - - ", 690), music.PlaybackMode.UntilDone)
        basic.showNumber(4.5)
    }
    minutes_to_sleep = 510
    if (minutes_to_sleep == 510) {
        while (minutes_to_sleep > 0) {
            basic.pause(1800000)
            minutes_to_sleep += -30
        }
    } else {
        minutes_to_sleep += 510
    }
})
