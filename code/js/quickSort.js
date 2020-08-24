//快速排序
//算法训练,自己想摸索了一小时，然后看教程。。呜呜呜


const quickSort=(arr)=>{
    if(arr.length<=1) return arr;
    let i=0,j=arr.length-1,x=arr[0]
    while(i<j){
        while(i<j&&arr[j]>=x){
            j--
        }
        if(i<j){
            arr[i++]=arr[j]
        }
        while(i<j&&arr[i]<x){
            i++
        }
        if(i<j){
            arr[j--]=arr[i]
        }
    }
    arr[i]=x;
    return [...quickSort(arr.slice(0,i)),x,...quickSort(arr.slice(i+1,arr.length))];
}



