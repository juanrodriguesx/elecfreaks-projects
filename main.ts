function escolher_melhor_caminho () {
    // Faz o robô analisar os dois lados e escolher o melhor caminho.
    wuKong.setAllMotor(0, 0)
    // Para o robô antes de analisar
    basic.pause(500)
    // Olha para a esquerda
    wuKong.setAllMotor(-50, 50)
    basic.pause(500)
    distancia_esquerda = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    // Olha para a direita
    wuKong.setAllMotor(50, -50)
    basic.pause(1000)
    distancia_direita = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    // Retorna à posição inicial
    wuKong.setAllMotor(-50, 50)
    basic.pause(500)
    // Escolhe o melhor caminho
    if (distancia_esquerda > distancia_direita) {
        wuKong.setAllMotor(-50, 50)
    } else {
        // Gira para a esquerda
        wuKong.setAllMotor(50, -50)
    }
    // Gira para a direita
    basic.pause(500)
    // Tempo para virar
    wuKong.setAllMotor(-100, -100)
}
let sonor = 0
let distancia_direita = 0
let distancia_esquerda = 0
wuKong.setAllMotor(-100, -100)
// Continua seguindo em frente
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (1 < sonor && sonor < 20) {
        escolher_melhor_caminho()
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
