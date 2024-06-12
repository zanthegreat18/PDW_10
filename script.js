function KirimData() {
    var Nama = document.getElementById("nama").value;
    var Nim = document.getElementById("nim").value;
    var Peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    var Alamat = document.getElementById("Alamat").value

    alert(
        "Nama : " + Nama +
        "\nNim : " + Nim +
        "\nPeminatan : " + Peminatan +
        "\nAlamat : " + Alamat
    )
    
}
