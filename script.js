
function encontrarEstadoApi(){
    
    fetch(`https://covid19-brazil-api.vercel.app/api/status/v1`)
    .then(response => response.json())
    .then (dados => {
        let status = null;
        
        dados.status === "ok" ? status = 1 : status = 0;
        exibirEstado(status)
        console.log(status)
        
    })
    .catch(err => console.error(err));
    
}

encontrarEstadoApi();

function exibirEstado(busca){
    const statusApi = document.querySelector("#statusApi");
    console.log(busca)
    busca==1?    statusApi.innerHTML = `Online` : statusApi.innerHTML =`Offline`
}