const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight.replace(',', '.') / (height * height)).toFixed(2);
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('warning');

    document.getElementById('infos').classList.remove('hidden');

    if(imc < 18.5) {
        description = 'Status: Abaixo do peso!'
    }
    else if(imc >= 18.5 && imc <= 25) {
        description = 'Status: você está com o peso correto!';
        value.classList.remove('warning', 'medium', 'high');
        value.classList.add('normal');
    }
    else if(imc >25 && imc <= 30) {
        description = 'Status: Alerta!! Você está acima do peso!';
        value.classList.remove('warning', 'high', 'normal');
        value.classList.add('medium');
    }
    else if(imc > 30 && imc <= 35) {
        description ='Status: Cuidado, Você está com obesidade moderada!'
        value.classList.remove('warning', 'medium', 'normal');
        value.classList.add('high');
    }
    else if(imc > 35 && imc <= 40) {
        description ='Status: Alerta!! Você está com obesidade severa!'
    }
    else {
        description ='Status: Alerta!! Você está com obesidade mórbida!'
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;
});