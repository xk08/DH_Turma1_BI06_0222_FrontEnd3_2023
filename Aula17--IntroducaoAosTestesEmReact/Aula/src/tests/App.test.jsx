
describe("testando operações matemáticas em valores numéricos", () => {
    test("testando a soma de 2 numeros inteiros, sendo o resultado 9", () => {

        /// Arrange
        const number1 = 4;

        const number2 = 5;

        /// Act
        const result = number1 + number2;

        ///Assert
        expect(result).toBe(9);

    });

    test("testando a subtração de 2 numeros inteiros, e o resultado não pode ser 5", () => {

        /// Arrange
        const number1 = 10;
        const number2 = 3;

        /// Act
        const result = number1 - number2;

        ///Assert
        expect(result).not.toBe(5);

    });
});

