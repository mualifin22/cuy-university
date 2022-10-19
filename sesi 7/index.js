const http = require("http");
const host = "127.0.0.1";
const port = 3002;
const rupiah = require('rupiah-format')

//request adalah data masuk dari luar
//response adalah data keluar dari sistem
const server = http.createServer(function (request, response) {
    const nama = "mualifin";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;
    
    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    const hasil = `nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}`

    response.statusCode = 200;    
    response.end(hasil);
});

server.listen(port, host, "", function () {
    console.log(`server menyala di ${host}:${port}`);
});