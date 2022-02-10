basic.forever(function () {
    servos.P1.run(25)
})
basic.forever(function () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) < 10) {
        basic.pause(500)
        servos.P0.setAngle(90)
    } else {
        basic.pause(3000)
        servos.P0.setAngle(0)
    }
})
