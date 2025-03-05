let sonor = 0
wuKong.setAllMotor(-100, -100)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0)
    if (sonor < 20 && sonor > 1) {
        wuKong.setAllMotor(-50, 100)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
