document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultElement = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const person1 = document.getElementById('person1').value.trim();
        const person2 = document.getElementById('person2').value.trim();

        if (person1 === '' || person2 === '') {
            alert('Please enter both names.');
            return;
        }

        // Izračunajte procent ljubezni, ki je vedno 100%
        const lovePercentage = 100;

        // Prikaz rezultata
        resultElement.textContent = `The love percentage between ${person1} and ${person2} is ${lovePercentage}%!`;
    });
});
