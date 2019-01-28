//归并排序，分治排序
const mergeSort=(arr)=>{
    let leftArr,rightArr,res=[];
    if(arr.length>1){
        leftArr=mergeSort(arr.slice(0,Math.floor(arr.length/2)));
        // console.log('---------leftArr-------');
        // console.log(leftArr);
        // console.log('---------leftArr-------');
        rightArr=mergeSort(arr.slice(Math.floor(arr.length/2),arr.length));
        // console.log('---------rightArr-------');
        // console.log(rightArr);
        // console.log('---------rightArr-------');
        let i=0;
        let j=0;
        while(i<leftArr.length&&j<rightArr.length){
            leftArr[i]<=rightArr[j]?(res.push(leftArr[i])&&i++):(res.push(rightArr[j])&&j++);
        }
        while(i<leftArr.length){
            res.push(leftArr[i]);
            i++
        }
        while(j<rightArr.length){
            res.push(rightArr[j]);
            j++;
        }
        // console.log(res);
        return res;
    }
    return arr;
}
