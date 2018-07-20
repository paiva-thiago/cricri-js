const CHAVE = '6891 DTI!ORCOM?SIGOM @UDESP TR3LLO PUBLIC 8102';
var   CryptoJS = require("crypto-js");

var bParametrosNaoPermitindoExecucao = function(argv){
    return (argv.length<3);
}

var processoDeCriptografia = function(argv){
    return (!((argv.length>3)&&(argv[3]=='-d')));
}

var  prefixo = function(argv){
    return ( (processoDeCriptografia(argv) ) ? 'cri-' : 'decri-' );
}

var criptografar = function(conteudo){
    var oculto = CryptoJS.AES.encrypt(conteudo, CHAVE);
    return  oculto.toString();
}

var decriptografar = function(conteudo){
    var bytes  = CryptoJS.AES.decrypt(conteudo, CHAVE);
    var revela = bytes.toString(CryptoJS.enc.Utf8);
    return revela;
}

var cricri = function(argv,conteudo){
    var retorno = '';
    if (processoDeCriptografia(argv)){
        retorno = criptografar(conteudo);
    }else{
        retorno = decriptografar(conteudo);
    }
    return retorno;
}

exports.cricri       = cricri;
exports.naoPermitido = bParametrosNaoPermitindoExecucao;
exports.prefixo      = prefixo;



