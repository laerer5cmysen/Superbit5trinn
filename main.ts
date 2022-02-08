basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) < 5) {
        basic.pause(500)
        servos.P0.setAngle(90)
    } else {
        basic.pause(3000)
        servos.P0.setAngle(0)
    }
})
