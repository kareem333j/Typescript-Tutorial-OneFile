"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    data = [];
    add(item) {
        this.data.push(item);
    }
}
let itemsOne = new Collection();
let itemsTwo = new Collection();
itemsOne.add({ itemType: "Book_1", title: "Book One", isbn: 1234 });
itemsOne.add({ itemType: "Book_2", title: "Book Two", isbn: 1256 });
itemsTwo.add({ itemType: "Game_1", title: "Game One", style: "Action", price: 100 });
itemsTwo.add({ itemType: "Game_2", title: "Game Two", style: "driving", price: 150 });
console.log(itemsOne);
console.log(itemsTwo);
//# sourceMappingURL=index.js.map