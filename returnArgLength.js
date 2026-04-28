const argumentsLength = (args) => {
    if(!Array.isArray(args) || args.length < 0 ){
        throw new Error('Parameter cannot be less than 0');
    }

    return args.length;
}

console.log(argumentsLength([1, 'vini', null]));
