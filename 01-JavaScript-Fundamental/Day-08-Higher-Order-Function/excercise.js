function halo() {
    console.log("halo");
}

function jalankan(v) {
    console.log("sebelum");
    v()
    console.log("sesudah");
}

jalankan(halo)