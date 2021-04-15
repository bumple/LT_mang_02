let arr = []
let n = +prompt("số lượng ký tự")
for (let i = 0; i < n; i++) {
    input = prompt("nhập vào ký tự")
    arr.push(input)
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-"){
        arr[i] == "_"
    }
}
document.write(arr)