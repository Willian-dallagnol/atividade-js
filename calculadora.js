      function calcularIMC() {
        
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);

      if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultadoIMC').textContent = 'Por favor, insira valores válidos.';
        document.getElementById('classificacaoIMC').textContent = '';
        return;
      }

      const imc = peso / (altura * altura);
      const imcFormatado = imc.toFixed(2);
      document.getElementById('resultadoIMC').textContent = `Seu IMC é: ${imcFormatado}`;

      let classificacao = '';

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
      } else {
        classificacao = 'Obesidade grau III (obesidade mórbida)';
      }

      document.getElementById('classificacaoIMC').textContent = classificacao;
    }