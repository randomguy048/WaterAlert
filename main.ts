input.onButtonPressed(Button.B, function () {
    basic.showString("V1.2.1")
})
let minutes_to_sleep = 510
let hours_to_remind = 15.5
led.setBrightness(5)
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
music.play(music.stringPlayable("- - - - - - C D ", 70), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G F E D C C5 ", 550), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.forever(function () {
    basic.pause(1800000)
    while (0 < hours_to_remind) {
        music.play(music.stringPlayable("E - C - - E C F ", 600), music.PlaybackMode.LoopingInBackground)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            hours_to_remind += -0.5
            music.stopMelody(MelodyStopOptions.All)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            music.play(music.stringPlayable("C F G C F G B C5 ", 550), music.PlaybackMode.UntilDone)
            basic.clearScreen()
            basic.pause(1800000)
            continue;
        }
        basic.pause(420)
    }
    if (hours_to_remind == 0) {
        while (minutes_to_sleep > 0) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            minutes_to_sleep += 1800000
        }
        music.play(music.stringPlayable("- - - - - - C D ", 70), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("B A G F E D C C5 ", 550), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C D E B C5 C C ", 550), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        minutes_to_sleep += 510
    }
    hours_to_remind += 15.5
})
