import {describe, expect, test} from '@jest/globals';
import {ErrorMessages} from '../src/ErrorMessages'
import {Matemagica} from '../src/Matemagica'


describe('Operações matematicas', () => {

    test('Deve somar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(1)
        matemagica.setY(2)

        expect(matemagica.getSum()).toBe(3)
    })

    test('Deve subtrair dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(1)
        matemagica.setY(1)

        expect(matemagica.getSub()).toBe(0)
    })


    test('Deve multiplicar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(5)
        matemagica.setY(6)

        expect(matemagica.getMultiply()).toBe(30)
    })

    test('Deve dividir dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(4)
        matemagica.setY(2)

        expect(matemagica.getDivision()).toBe(2)
    })

    test('Deve retornar um erro ao informar string no lugar de numero', () => {
        const matemagica = new Matemagica()

        //@ts-ignore
        expect(matemagica.setX('pipipi')).toBe(ErrorMessages.INVALID_OPERATION)
        //@ts-ignore
        expect(matemagica.setY('popopo')).toBe(ErrorMessages.INVALID_OPERATION)
    })
})