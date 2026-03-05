const inputEstado1 = document.querySelector("#estado1");
const inputEstado2 = document.querySelector("#estado2");
const btnBuscar = document.querySelector("#btnBuscar");

let estadoAtual = ""
let morteAtual = 0

btnBuscar.addEventListener("click", ()=> {
    const nomeEstado1 = inputEstado1.value.trim();
    const nomeEstado2 = inputEstado2.value.trim();
     estadoAtual = ""
     morteAtual = 0
    encontrarDados1(nomeEstado1);
    encontrarDados2(nomeEstado2); 
    
})



function encontrarStatusApi(){
    
    fetch(`https://covid19-brazil-api.vercel.app/api/status/v1`)
    .then(response => response.json())
    .then (dados => {
        let status = null;
        
        dados.status === "ok" ? status = 1 : status = 0;
        exibirEstado(status)
        console.log(status)
        
    })
    .catch(err => console.error(err));
    
};
encontrarStatusApi();





function encontrarDados1(nomeEstado1){
    console.log(nomeEstado1)
    
    fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${nomeEstado1}`)
    .then(resposta => resposta.json())
    .then(dados => {
        // console.log(dados)
        const estadoApi1 = dados.uf
        const morteApi1 = dados.deaths
        // console.log(estadoApi1,morteApi1)
        exibirCasos(estadoApi1,morteApi1)
    })
    
    exibirCasos();
};

function encontrarDados2(nomeEstado2){
    console.log(nomeEstado2)
    fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${nomeEstado2}`)
    .then(resposta => resposta.json())
    .then(dados => {
        // console.log(dados)
        const estadoApi2 = dados.uf
        const morteApi2 = dados.deaths
        // console.log(estadoApi2,morteApi2)
         exibirCasos(estadoApi2,morteApi2)
         
    })
    
};




function exibirEstado(busca){
    const statusApi = document.querySelector("#statusApi");
    console.log(busca)
    busca==1?    statusApi.innerHTML = `Online` : statusApi.innerHTML =`Offline`
};


function exibirCasos(estado, morte){
    
    const resultado = document.querySelector("#resultado");
    if(morte>morteAtual){
        morteAtual=morte
        estadoAtual=estado
    }    
    resultado.innerHTML = `O estado ${estadoAtual} teve mais mortes, foram ${morteAtual}☠️`
}

