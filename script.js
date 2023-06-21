// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (gender === "male" && (height >= 1.70) 
// Se o gênero for estritamente igual ao masculino e a altura for maior ou igual a 1.70;
&& (barReps >= 6 || barSeconds >= 15) 
// Verifca se as repertições na barra forem maiores ou iguais a 6 ou os segundos na barra forem maiores ou iguais a 15s;
&& (abs >= 41) 
// Verifca se os abdominais forem maiores ou iguais a 41;
&& ((runDistance >= 3000 && runTime <= 720)
// Verifca se a distância de corrida for maior ou igual a 3000m, e o tempo de corrida for maior ou igual a 720s;
|| (runDistance >= 5000 && runTime <= 1200)) 
// Ou a distância percorrida for maior ou igual a 5000m e o tempo de corrida for maior ou igual a 1200s;
&& ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30 ))) 
// Verifca se a distância nadando for maior ou igual a 100m e o tempo nadando for maior ou igual a 60s, ou o tempo mergulhando
// for maior ou igual a 30s.
{
    passed = true
}

if (gender === "female" && (height >= 1.60) 
// Se o gênero for estritamente igual ao feminino e a altura for maior ou igual a 1.60;
&& (barReps >= 5 || barSeconds >= 12) 
// Verifca se as repertições na barra forem maiores ou iguais a 5 ou os segundos na barra forem maiores ou iguais a 12s;
&& (abs >= 41) 
// Verifca se os abdominais forem maiores ou iguais a 41;
&& ((runDistance >= 4000 && runTime <= 900) 
// Verifca se a distância de corrida for maior ou igual a 4000m, e o tempo de corrida for menor ou igual a 900s;
|| (runDistance >= 6000 && runTime <= 1320)) 
// Ou a distância percorrida for maior ou igual a 6000m e o tempo de corrida for menor ou igual a 1320s;
&& ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30 ))) 
// Verifca se a distância nadando for maior ou igual a 100m e o tempo nadando for menor ou igual a 60s, ou o tempo mergulhando
// for menor ou igual a 30s.

{
    passed = true
}


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
