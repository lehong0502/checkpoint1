// tạo string ban đầu
let str = " High knowledge, high return";

// chuyển đổi string thành array
let strArray = str.split("");

// xóa bỏ các phần tử có giá trị là khoảng trắng " "
let filteredArray = strArray.filter(char => char !== " ");

// chuyển các phần tử có giá trị là chữ hoa thành chữ thường
letlowerCaseArray = filteredArray.map(char => char.toLowerCase());

// console
console.log(lowerCaseArray);