const mobil = {
  merek: "BYD",
};
console.log(mobil.merek);

// menulis objek didalam array
const blogs = [
  { tittle: "how to succes", likes: 0 },
  { tittle: "how to rich", likes: 10 },
];

// contoh
const user = {
  name: "Adisty",
  age: 20,
  location: "Indonesia",
  blogs: [
    { tittle: "how to succes", likes: 0 },
    { tittle: "how to rich", likes: 10 },
  ],
  login: function () {
    console.log("user telah masuk");
  },
  logout() {
    // VERSI SINGKATNYA
    console.log("user tehal keluar");
  },
  logBlogs: function () {
    // this untuk mengakses properti yg dimiliki dirinya sendiri
    console.log(this.blogs[0]);
    this.blogs.forEach((blogs) => {
      console.log(blogs.tittle, blogs.likes);
    });
  },
};
