let arr = []
let n = +prompt("số lượng ký tự")
for (let i = 0; i < n; i++) {
    input = +prompt("nhập vào ký tự")
    arr.push(input)
}


// Hien gia tri truoc khi doi
document.getElementById("demo").innerHTML = arr + "<br>"
// Hien thi do dai cua mang
document.getElementById("demo1").innerHTML = "Length: " + arr.length+ "<br>"

// arr = parseInt(arr)
//
// // // Hien thi do dai cua mang
// // document.getElementById("demo3").innerHTML = "kiem tra: " + arr.length+ "<br>"

let count = 0
for (let i = 0; i < arr.length; i++) {
    console.log(typeof(arr[i]));
    console.log(arr[i]);
    console.log(isNaN(arr[i]));
    if (typeof(arr[i]) === "number" && isNaN(arr[i]) !== true ) {
        count++
    }

}
document.getElementById("demo2").innerHTML = "số ký tự số là: " +count+ "<br>"