function calculatePairs(options) {
    let choices = [];
    for (let i = 0; i < 6; i++) {
        let temp = pickTwoNumber(options);
        if (temp.length > 0) {
            choices.push(temp);
        }
    }
    console.log(choices);
    return choices;
}


function pickTwoNumber(options) {
    if (options.length === 0) {
        return [];
    }
    while (true) {
        let num1 = random(options);
        let num2 = random(options);

        if (num1 != num2) {
            remove(options, num1);
            remove(options, num2);
            return [num1, num2];
        }
    }
}

function random(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function remove(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}