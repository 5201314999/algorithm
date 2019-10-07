//冒泡排序
const bubbleSort = (arr) => {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//改进版冒泡排序,记录换位置的最后一个位置，如果中途有很多一样的值的话，可以减少循环次数
const bubbleSort2=arr=>{
   let i=arr.length-1
    while(i>0){
        let pos=0;
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                pos=j
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i=pos
    }
    return arr

}
