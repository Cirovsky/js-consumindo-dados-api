async function buscaEndereco(cep){
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            alert("esse cep não existe");
            throw Error('Esse cep não existe');
        }else{
            console.log(consultaCEPConvertida)
            preencheEndereco(consultaCEPConvertida);
        }
    }catch(erro){
        console.log(erro);
        alert("CEP preenchido de forma errada!");
        limpaFormulario();
    }
}



const eCep = document.getElementById('cep');
eCep.onkeydown = (tecla) => {
    if (tecla.code == 'Tab' || tecla.code == 'Enter'|| tecla.code == 'Space'){
        buscaEndereco(eCep.value);
    }
}

const eEndereco = document.getElementById('endereco');
const eBairro = document.getElementById('bairro');
const eComplemento = document.getElementById('complemento');
const eCidade = document.getElementById('cidade');
const eEstado = document.getElementById('estado');

function preencheEndereco(cep){
    eEndereco.value = cep.logradouro;
    eBairro.value = cep.bairro;
    eComplemento.value = cep.complemento;
    eCidade.value = cep.localidade;
    eEstado.value = cep.uf;
}

function limpaFormulario(){
    eCep.value = ""
    eEndereco.value = "";
    eBairro.value = "";
    eComplemento.value = "";
    eCidade.value = "";
    eEstado.value = "";
}
