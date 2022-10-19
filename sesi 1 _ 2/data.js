const nama = "Muhammad Ibnu Mualifin";
let usia = 1;

let biodata = document.getElementById("biodata");

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        generasi = "golongan remaja";
    }
    else if(usia > 18 && usia < 30) {
        generasi = "golongan dewasa";
    }
    else if(usia >= 30) {
        generasi = "golongan tua";
    }
    else if(usia > 2 && usia < 10) {
        generasi = "golongan anak anak";
    }
    else {
        generasi = "golongan bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
