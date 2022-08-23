// array => tipe data collection

let arr = [1, "a", 3.14, true];

console.log(arr[0]); // pemanggilan data dalam array dimulai dari index 0

// menggabungkan item baru ke belakang (push)
arr.push(27);
console.log(arr);
// menggabungkan item baru ke depan (unshift)
arr.unshift("nice one");
console.log(arr);

// menggabungkan 2 array dengan push.apply(arr1, arr2)
let arr2 = [134 , 3211];
arr.push.apply(arr, arr2);
console.log(arr);

// menghapus item dari belakang (pop)
arr.pop();
console.log(arr);
// menghapus item dari depan (shift)
arr.shift();
console.log(arr);
// menghapus item dari indexnya dengan .splice(index_item . jumlah data)
arr.splice(3 , 1); // menghapus true
console.log(arr);


// menghapus semua item dari array
// arr.splice(0, arr.length);
// console.log(arr)


// looping array dengan cepat menggunakan .map()
arr.map((itemArray, indexArr) => {
    console.log(`array ke -${indexArr} ==> ${itemArray}`);
})

console.log('\n')
// filter array terhadap kondisi tertentu dengan filter

arr.filter((itemArray) => {
    return itemArray !== 'a' // ngefilter selain a maka akan di tampilkan
}).map((itemArr, indexArr) => {
    console.log(`array ke -${indexArr} ==> ${itemArr}`);
})

// menggabungkan semua item menjadi string 

console.log(arr.join(" "));