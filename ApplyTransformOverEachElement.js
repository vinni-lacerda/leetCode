const map = (arr, fn) => {
    if(!Array.isArray(arr) || arr.length <= 0 || arr.length >= 1000){
        throw new Error('invalid parameters');
    }
    const returnedArray = [];
    const MIN = -(10**9);
    const MAX = 10**9;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] < MIN || arr[i] > MAX){
            throw new Error('invalid array item');
        }
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray;
};
