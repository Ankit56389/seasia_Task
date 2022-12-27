let arr = [2, 1, 5, 7, -1]
arr.sort()
let output = []

let j = 1

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[j] && arr[i] > 0) {
        output.push(arr[i])
        break
    }
}
console.log(output)