
// interface initiation

interface Order {
    id: number
    customer: string
    menu: string
    qty: number
    price: number
};

interface Simple {
    customer: string
    total: number
}

const orders: Order[] = [
    {id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000},
    {id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000},
    {id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000},
    {id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000}
];

// 1st problem (quantity * price)

let total = orders.map((x) => x.qty * x.price);
console.log(`Total harga tiap pelanggan: ${total.join(", ")}.`);

// 2nd problem (name and quantity * price only)

let simpleOrder: Simple[] = []
orders.forEach((x) => simpleOrder.push({customer: x.customer, total: x.price * x.qty}))
console.log("Data Pesanan (Simple Version)");
simpleOrder.forEach((x) => console.log(`- ${x.customer} dengan total harga Rp${x.total}`))

let simpleOrderWoArray: string[] = []
orders.forEach((x) => simpleOrderWoArray.push(x.customer))

// 3rd problem (qty > 1)

let filter = orders.filter((x) => x.qty > 1)
console.log("Data pesanan yang memesan lebih dari 1 item:");
filter.forEach((x) => console.log(`- ${x.customer} dengan pesanan ${x.menu} berjumlah ${x.qty} dengan total Rp${x.qty * x.price}.`))
