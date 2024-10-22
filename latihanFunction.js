function luasSegitigaSikuSiku(alas, tinggi){
    return (alas*tinggi)/2
  }
  function luasPersegiPanjang(panjang, lebar){
    return panjang*lebar
  }
  function luasLingkaran(jari){
    return jari**2*3.14
  }
  let a= prompt("Pilih perhitungan luas: \n1. Segitiga siku-siku \n2. Persegi panjang \n3. Lingkaran")
  switch(a){
    case '1':
      let alas= prompt("Masukkan alas: ")
      let tinggi= prompt("Masukkan tinggi: ")
      console.log(luasSegitigaSikuSiku(alas, tinggi))
      break;
    case '2':
      let panjang= prompt("Masukkan panjang: ")
      let lebar= prompt("Masukkan lebar: ")
      console.log(luasPersegiPanjang(panjang, lebar))
      break;
    case '3':
      let jari= prompt("Masukkan jari-jari: ")
      console.log(luasLingkaran(jari))
      break;
    default: console.log("Anda terlalu tolol untuk sekolah di SMA Alfa Centauri!")
  }