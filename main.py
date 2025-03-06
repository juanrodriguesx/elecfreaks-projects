sonor = 0
wuKong.set_all_motor(-100, -100)

def escolher_melhor_caminho():
    """ Faz o robô analisar os dois lados e escolher o melhor caminho. """
    wuKong.set_all_motor(0, 0)  # Para o robô antes de analisar
    basic.pause(500)

    # Olha para a esquerda
    wuKong.set_all_motor(-50, 50)
    basic.pause(500)
    distancia_esquerda = sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_CM, DigitalPin.P1)

    # Olha para a direita
    wuKong.set_all_motor(50, -50)
    basic.pause(1000)
    distancia_direita = sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_CM, DigitalPin.P1)

    # Retorna à posição inicial
    wuKong.set_all_motor(-50, 50)
    basic.pause(500)

    # Escolhe o melhor caminho
    if distancia_esquerda > distancia_direita:
        wuKong.set_all_motor(-50, 50)  # Gira para a esquerda
    else:
        wuKong.set_all_motor(50, -50)  # Gira para a direita

    basic.pause(500)  # Tempo para virar
    wuKong.set_all_motor(-100, -100)  # Continua seguindo em frente

def on_forever():
    global sonor
    sonor = sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_CM, DigitalPin.P1)
    
    if 1 < sonor < 20:
        escolher_melhor_caminho()
    else:
        wuKong.set_all_motor(-100, -100)

basic.forever(on_forever)
