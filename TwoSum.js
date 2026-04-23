// Dado um array de inteiros nums e um inteiro target, retorne os índices de dois números cuja soma seja igual ao target.

let nums = [2, 7, 11, 15];

const targetInArray = (nums, target) => {
    if(!Array.isArray(nums)){
        throw new Error('Invalid parameter');
    }

    for(let i = 0; i< nums.length; i++){
        if(typeof nums[i] !== 'number' || !Number.isInteger(nums[i])){
            throw new Error('Invalid value');
        }
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                // console.log([i, j]);
                return[i,j]
            }
            // console.log(nums[i],nums[j]);
        }
    }
}

console.log(targetInArray(nums, 9));
