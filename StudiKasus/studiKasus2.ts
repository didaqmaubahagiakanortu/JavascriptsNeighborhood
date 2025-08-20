
// interface declaration

interface Book {
    id: number,
    judul: string,
    kategori: string,
    harga: number,
    stok: number
}

// arrays ddeclaration

const books: Book[] = [
    {id: 1, judul: "TS Dasar", kategori: "Pemrograman", harga: 150_000, stok: 10},
    {id: 2, judul: "NestJS Lanjutan", kategori: "Web", harga: 250_000, stok: 5},
    {id: 3, judul: "Data Structures", kategori: "Ilmu Komputer", harga: 180_000, stok: 8}
];

// 1st problem (category clg)

console.log("No. 1");
function byCategory(array) {
    return array.filter((x) => x.kategori === "Web")
}
console.log(byCategory(books));

// 2nd problem (stock * price)

console.log("No. 2");
let value = books.map((x) => x.harga * x.stok);
console.log(value);

// 3rd problem (highest stock + 10)

console.log("No. 3");
let highStock = books
highStock.sort((a, b) => b.stok - a.stok)
highStock[0].stok += 10;
console.log(highStock[0]);

// 4th problem (transform book[] into string[])

console.log("No. 4");
let simple: string[] = books.map((x) => (`${x.judul} — Rp${x.harga} (Stok: ${x.stok})`))
console.log(simple);

// 5th problem (title only clg)

console.log("No. 5");
books.forEach((x) => console.log(x.judul));