sonor = 0
wuKong.set_all_motor(-100, -100)

def on_forever():
    global sonor
    sonor = sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_MM, DigitalPin.P0)
    if sonor < 20 and sonor > 1:
        wuKong.set_all_motor(-50, 100)
        basic.pause(randint(0, 10))
    else:
        wuKong.set_all_motor(-100, -100)
basic.forever(on_forever)
