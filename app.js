var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processador");
var HtmlParser = require("./HtmlParser");
var Table = require("./Table");
var PDFWriter = require ("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();


async function main(){
    var dados = await leitor.Read('./users.csv');
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".PDF", html);
}

main();