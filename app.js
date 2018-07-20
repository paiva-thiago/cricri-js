var fs = require('fs');
var CriCriJs = require("./cricrinc.js");
 
if (CriCriJs.naoPermitido(process.argv)){
    console.error("PARA UTILIZAR ESTE PROCESSO É NECESSÁRIO INFORMAR O NOME DO ARQUIVO A SER [DE]CRIPTOGRAFADO");
    console.info("Encerrando aplicação...");
    process.exit(1);
}else{    
    let conteudoDoArquivo            = fs.readFileSync('./repo/'.concat(process.argv[2]),'utf-8');
    let arquivoConvertido            = CriCriJs.cricri(process.argv,conteudoDoArquivo);
    let prefixoDoArquivoConvertido   = CriCriJs.prefixo(process.argv);
    fs.writeFile('./repo/'.concat(prefixoDoArquivoConvertido).concat(process.argv[2]), arquivoConvertido, function(err) {
        if(err) {
            return console.log(err);
        }    
        console.log("Arquivo Salvo!");
    });         
}