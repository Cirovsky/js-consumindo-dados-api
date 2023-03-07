async function buscaEndereco(){
    try{
        const consultaCEP = await fetch('https://viacep.com.br/ws/31140629/json/');
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('Esse cep não existe');
        }else{
            console.log(consultaCEPConvertida);
        }
    }catch(erro){
        console.log(erro)
    }
}

buscaEndereco()
/* .then(resposta => resposta.json()
.then(r => {
    if(r.erro){
        throw Error('Esse cep não existe!');
    }else{
        console.log(r);
    }
})
.catch(erro => console.log(erro)))
.finally(mensagem=> console.log('processamento concluído')); */

