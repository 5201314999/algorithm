//选择排序
const selectionSort = (arr) => {
    let min = 0, temp;
    for (let i = 0; i < arr.length; i++) {
        min=i;
        for (let j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
