let minutes_to_sleep = 510
let hours_to_remind = 15.5
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
music.play(music.stringPlayable("- - - - - - C D ", 70), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G F E D C C5 ", 550), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 - - - - - - - ", 70), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.forever(function () {
    basic.pause(1800000)
    while (0 < hours_to_remind) {
        music.play(music.stringPlayable("C D G F C D G F ", 600), music.PlaybackMode.LoopingInBackground)
        basic.showNumber(4.5)
        if (input.buttonIsPressed(Button.A)) {
            hours_to_remind += -0.5
            music.stopMelody(MelodyStopOptions.All)
            basic.showLeds(`
                . . # # #
                . . # . #
                . . # # #
                . . . . .
                . . . . .
                `)
            music.play(music.stringPlayable("C - C5 - - - - - ", 500), music.PlaybackMode.UntilDone)
            basic.clearScreen()
            basic.pause(1800000)
            continue;
        }
    }
    if (minutes_to_sleep == 510) {
        while (minutes_to_sleep > 0) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1800000)
            minutes_to_sleep += -30
        }
    } else {
        music.play(music.stringPlayable("- - - - - - C D ", 70), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("B A G F E D C C5 ", 550), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        minutes_to_sleep += 510
    }
})
