//快速排序
//算法训练,大体思路看了，后面再去看具体操作步骤，发现2者描述的信息量差距有点大。转成具体编码，至少卡住10分钟
const quickSort=(arr)=>{
    const sort=(arr,left=0;right=arr.length-1)=>{
        if(left>=right){
            return;
        }
        let i=0,j=right,base=arr[0];
        
        
    };
    if(arr.length)
    if(arr.length<2){
        return arr;
    }
    return [...quickSort(arr.slice(0,i)),k,...quickSort(arr.slice(j,arr.length))];
}
