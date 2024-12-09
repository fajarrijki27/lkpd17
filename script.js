document.getElementById("hamburger").onclick = function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
};

function hitung() {
    var hJogja = 320000;
    var hSurabaya = 540000;
    var hSemarang = 240000;
    var hTiket = 0;
    var sTotal = 0;
    var diskon = 0;

    var kota = document.fform.kota.value;
    var nama = document.fform.nama.value;
    var jumlah = parseInt(document.fform.jumlah.value);

    if (!jumlah || jumlah <= 0) {
        alert("Masukkan jumlah tiket yang valid!");
        return;
    }

    if (!nama) {
        alert("Masukkan Nama Anda!");
        return;
    }

    if (kota === "Jogjakarta") {
        hTiket = hJogja;
    } else if (kota === "Surabaya") {
        hTiket = hSurabaya;
    } else if (kota === "Semarang") {
        hTiket = hSemarang;
    }

    sTotal = hTiket * jumlah;

    var member = document.querySelector('input[name="Member"]:checked');
    if (!member) {
        alert("Pilih jenis Member!");
        return;
    }

    if (member.value === "Gold") {
        diskon = sTotal * 0.2;
    } else if (member.value === "Silver") {
        diskon = sTotal * 0.1;
    } else if (member.value === "Non-member") {
        diskon = 0;
    }

    var tBayar = sTotal - diskon;

    document.fform.HargaTiket.value = hTiket;
    document.fform.SubTotal.value = sTotal;
    document.fform.Diskon.value = diskon;
    document.fform.TotalBayar.value = tBayar;
    document.getElementById("bayarButton").disabled = false;
}

function bayar() {
    var totalBayar = parseInt(document.fform.TotalBayar.value);
    if (totalBayar <= 0) {
        alert("Total bayar belum dihitung atau tidak valid.");
        return;
    }

    var nominalBayar = parseInt(prompt("Masukkan nominal pembayaran:"));
    if (nominalBayar <= 0) {
        alert("Nominal pembayaran tidak valid.");
        return;
    }

    if (nominalBayar < totalBayar) {
        alert("Nominal pembayaran kurang. Silakan masukkan nominal yang mencukupi.");
        return;
    }

    var kembalian = nominalBayar - totalBayar;

    document.formakhir.onama.value = document.fform.nama.value;
    document.formakhir.otujuan.value = document.fform.kota.value;
    document.formakhir.ojTiket.value = document.fform.jumlah.value;
    document.formakhir.omember.value = document.querySelector('input[name="Member"]:checked').value;
    document.formakhir.ohTiket.value = document.fform.HargaTiket.value;
    document.formakhir.osTotal.value = document.fform.SubTotal.value;
    document.formakhir.odiskon.value = document.fform.Diskon.value;
    document.formakhir.otBayar.value = totalBayar;
    document.formakhir.obayar.value = nominalBayar;
    document.formakhir.okembalian.value = kembalian;

    document.querySelector(".data-penumpang").style.display = "none";
    document.querySelector(".data-transaksi").style.display = "block";
}

