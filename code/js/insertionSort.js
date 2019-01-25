//插入排序
//我写的，写之前看过实现思路，写的过程中边界问题处理花了很长时间【不开心】
const insertionSort1 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

//朋友写的，写之前没看过插入的思路【佩服】
var insertionSort2 = (arr) => {
    for (let i = arr.length - 2; i >= 0; i--) {
        for (let j = arr.length - 1; j >= i; j--) {
            if (arr[j] > arr[i]) {
                arr[j + 1] = arr[j];
            } else {
                arr[j] = arr.splice(i, 1)[0];
                break;
            }
        }
    }
    return arr;
}