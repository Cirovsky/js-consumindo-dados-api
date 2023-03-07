async function buscaEndereco(cep){
    const eErro = document.getElementById('erro');
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('cep incorreto');
        }else{
            preencheEndereco(consultaCEPConvertida);
        }
    }catch(erro){
        eErro.innerHTML = `<p> CEP inválido. tente novamente</p>`;
        limpaFormulario();
    }
}

const eCep = document.getElementById('cep');

eCep.addEventListener("focusout", ()=> buscaEndereco(eCep.value));

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
