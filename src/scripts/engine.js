const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")


let mapelKey = [];  // pegar teclas mapeadas
let audio = new Audio("./src/tunes/a.wav");
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    // abaixo vamos criar efeito sobra nas teclas clickadas pelo teclado
const clickedKey = document.querySelector(`[data-key="${key}"]`);
clickedKey.classList.add("active");
setTimeout(() => {
    clickedKey.classList.remove("active");
}, 100);
};



pianokeys.forEach((key) => {   // para cada parametro(key) uma instrução
     //dataset.key =  para pegar só s valores, e não a escrita/codigo
    key.addEventListener("click", () => playTune(key.dataset.key) )  // ficar escutando o que? Clicks, ()=>playTune() = chamar uma função
    mapelKey.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {  // criando doc que fica escutando as teclas apertadas 'keydown' / (e) evento, nome da função
    if(mapelKey.includes(e.key)) {  // linha let mapelKey = []; e linha mapelKey.push(key.dataset.key); para pegar as teclas tocadas com instruçoes, aqui o 'if' da a condição para apenas elas aparecerem para a leitura doaa navegador
        playTune(e.key);
    }
    playTune(e.key);  // teclas que estao sendo tocadas são as dos tunes
});

const handleVolume = (e) => {      // função do volume
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

 volumeSlider.addEventListener("input", handleVolume);  // meteu imput? aciona a função handleVolumw
 keysCheck.addEventListener("click", showHideKeys);


