exports.returnText = (name, age) => {
    return `${name} is ${age} years old.`; 
};

exports.addArray = (array) => {
    return array.reduce((a, b) => a + b, 0);
};