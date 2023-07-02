/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

// --- //

const books = [
  // wordCount is a placeholder
  new Book("Số Đỏ", "Nguyễn Nhật Ánh", "Nhà Xuất Bản Văn Học", "Vietnam", 12, 5000), 
  new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", "Nhà Xuất Bản Kim Đồng", "Vietnam", 8, 4000),
  new Book("Tắt Đèn", "Ngô Tất Tố", "Nhà Xuất Bản Trẻ", "Vietnam", 10, 6000),
  new Book("Bên Đồng Đường", "Nguyễn Ngọc Tư", "Nhà Xuất Bản Tổng Hợp TPHCM", "Vietnam", 15, 5500),
  new Book("Tôi Thấy Hoa Vàng Trên Cỏ Xanh", "Nguyễn Nhật Ánh", "Nhà Xuất Bản Trẻ", "Vietnam", 20, 7000)
];

// Iterate through the books array
for (let i = 0; i < books.length; i++) {
  let book = books[i];
  console.log(`Word count for "${book.title}": ${book.wordCount}`); //${} is template literals
}