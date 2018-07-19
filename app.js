if(process.argv.length<3){
    console.error("PARA UTILIZAR ESTE PROCESSO É NECESSÁRIO INFORMAR O NOME DO ARQUIVO A SER [DE]CRIPTOGRAFADO");
    console.info("Encerrando aplicação...");
    process.exit(1);
}
var fs = require('fs');
var CryptoJS = require("crypto-js");
const CHAVE = 'SUA CHAVE AQUI!';
var arq = fs.readFileSync('./repo/'.concat(process.argv[2]),'utf-8');
var ciphertext = CryptoJS.AES.encrypt(arq, CHAVE);
var retorno = ciphertext.toString();
var prefix  = 'cri-';
if((process.argv.length>3)&&(process.argv[3]==='-d')){
    prefix = 'de'.concat(prefix);
    var bytes  = CryptoJS.AES.decrypt(arq, CHAVE);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    retorno = plaintext;
}
fs.writeFile('./repo/'.concat(prefix).concat(process.argv[2]), retorno, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Arquivo Salvo!");
}); 