document.getElementById("hamburger").onclick = function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
};

function hitung(){
    var nilaiQuiz = parseInt(document.fform.quis.value);
    var nilaiTugas = parseInt(document.fform.tugas.value);
    var nilaiUts = parseInt(document.fform.uts.value);
    var nilaiUas = parseInt(document.fform.uas.value);

    var tNilai1 = nilaiQuiz * 0.1;
    var tNilai2 = nilaiTugas * 0.2;
    var tNilai3 = nilaiUts * 0.3;
    var tNilai4 = nilaiUas * 0.4;

    var tnk = tNilai1 + tNilai2 + tNilai3 + tNilai4;
    var indeks;
    var ket;

    if (tnk <= 100 && tnk >= 80){
        indeks = "A";
        ket = "Lulus dengan sangat baik"
    }else if (tnk <=80 && tnk >= 68){
        indeks = "B";
        ket = "Lulus dengan baik";
    }else if (tnk <=68 && tnk >= 55){
        indeks = "C";
        ket = "Lulus dengan cukup";
    }else if (tnk <=55 && tnk >= 38){
        indeks = "D";
        ket = "Lulus dengan kurang";
    }else if (tnk < 38){
        indeks = "E";
        ket = "Tidak Lulus";
    }

    document.fform.nAkhir.value = tnk;
    document.fform.indeks.value = indeks;
    document.fform.Keterangan.value = ket;
}