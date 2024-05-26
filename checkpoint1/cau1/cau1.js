// Khởi tạo array m
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

// Lọc ra những phần tử không phải là số
let mNumbers = m.filter(item => typeof item === 'number');

// Tạo array mới mSquared thỏa mãn mSquared[i] = pow(mNumbers[i], 2)
let mSquared = mNumbers.map(item => Math.pow(item, 2));

// Console
console.log("Array m đã lọc:", mNumbers);
console.log("Array mSquared:", mSquared);