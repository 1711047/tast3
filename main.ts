basic.forever(function () {
    music.setVolume(255)
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(988, music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
