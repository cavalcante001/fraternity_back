import { Math } from './Math';

describe('Testing Math library', () => {

    beforeAll(() => {

    });

    afterAll(() => {

    });

    beforeEach(() => {
        // bla bla bla
    });

    afterEach(() => {

    });

    it('should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });
    
    it('should reduce two numbers correctly', () => {
        const response = Math.sub(4, 2);
        expect(response).toBe(2);
    });
    
    it('should multiply two numbers correctly', () => {
        const response = Math.mult(3, 5);
        expect(response).toBe(15);
    });
    
    it('should divide two numbers correctly', () => {
        const response = Math.div(15, 5);
        expect(response).toBe(3);
    
        const response2 = Math.div(3, 0);
        expect(response2).toBe(false);
    });    


    it('contar quantos caracteres tem na string', () => {
        const response = 'paulo';
        expect(response).toHaveLength(5);
    })

    it('se possui a propriedade EMAIL', () => {
        const response = {
            name: 'Paulo',
            email: 'paulo@gmail.com'
        }

        expect(response).toHaveProperty('email');
    })    

    it('se a resposta é undefined', () => {
        const response = {
            name: 'Paulo',
            email: 'paulo@gmail.com'
        }

        expect(response).toBeUndefined();
    })    

    it('se a resposta não é undefined', () => {
        const response = {
            name: 'Paulo',
            email: 'paulo@gmail.com'
        }

        expect(response).not.toBeUndefined();
    })    

    it('se a resposta é maior que 20', () => {
        const response = 20;

        // expect(response).toEqual(20);
        expect(response).toBeGreaterThan(20);
    })    

    it('se a resposta é mair ou igual a 20', () => {
        const response = 20;

        // expect(response).toEqual(20);
        expect(response).toBeGreaterThanOrEqual(20);
    })

    it('verifica se a resposta bate com o regex', () => {
        const response = 'paulo@gmail.com';

        expect(response).toMatch(/[a-z]@[a-z].[a-z]/);
    })

    it('se a resposta lança um erro', () => {
        const response =  Math.div(10, 0);

        expect(response).toThrow(new Error('Não divide por zero'));
    })
});
