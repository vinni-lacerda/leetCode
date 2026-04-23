const expect = (val) => {
    const toBe = (val2) =>{
        return val === val2;
    }
    return{
        toBe: (val2) =>{
            if (val !== val2)throw new Error('Not Equal');
            return true;
        },
        notToBe: (val3) =>{
            if (val === val3) throw new Error('Equal');
            return true;
        }
    }
};

console.log(expect(5).notToBe('5'));