# note objects
objek mengelompokkan sekumpulan informasi tentang satu entitas **bedasarkan nama properti**

*cara menuliskan objek*
## objek literal
lanngsung tanpa mendefinisikan class nya
```js
const mobil = {
    merek: "toyota", // INI MERUPAKAN PROPERTI
    kecepatan: 20,
    bunyi: funtion() { // INI MERUPAKAN METODE
        console.log("mber...");
    }
};
```


## melalui kelas/constructor
```js
// membuat blueprint dari objek menggunakan class terlebih dahulu
class Mobil {
    constructor(merek, kecepatan) {
        this.merek = merek;
        this.kecepatan = kecepatan;
    }

    maju() {
        console.log(`${this.merek} berjalan...`)
    }
}

// membuat objek dari class yg diatas
const mobil1 = new Mobil("Toyota", 100)
const mobil2 = new Mobil("Honda", 300)
```

objek terdiri dari 4 pilar utama yaitu: 
1. Abstraksi
2. Enkapsulasi
3. Polymorph
4. Inheritance

## abstraction
apa yg dilakukan objek bukan bagaimana caranya


## enkapsulasi
keamanan dan validasi data


## inheritance
membantu mengurangi perulangan kode

## polymorphism
banyak bentuk dalam object oriented
