let items = document.querySelectorAll('.item');
let options = [0, 1, 2, 3, 4, 5, 6, 7];
let texts = ['Apple', 'Cat', 'Dog', 'Orrange']
let pairs = [];

let choices = calculatePairs(options);
for (let i = 0; i < choices.length; i++) {
    let pair = choices[i];
    pairs.push(new Pair(items[pair[0]], items[pair[1]], texts[i]));
}

let game = new Global(items, pairs)

for (let i = 0; i < pairs.length; i++) {
    pairs[i].show();
}

setTimeout(() => {
    game.render();
    for (let i = 0; i < pairs.length; i++) {
        pairs[i].hide();
    }
}, 2000);