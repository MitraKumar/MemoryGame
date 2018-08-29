let items = document.querySelectorAll('.img');
let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let texts = ['Apple', 'Cat', 'Dog', 'Orrange', 'Melon', 'Lion'];
let pairs = [];

let choices = calculatePairs(options);
for (let i = 0; i < choices.length; i++) {
    let pair = choices[i];
    let img = `imgs/${i + 1}.png`
    pairs.push(new Pair(items[pair[0]], items[pair[1]], texts[i], img));
}

let game = new Global(items, pairs)

for (let i = 0; i < pairs.length; i++) {
    pairs[i].show();
}

setTimeout(() => {
    document.getElementById('attempts').innerHTML = "Total attempts left: " + game.attempts;
    game.render();
    for (let i = 0; i < pairs.length; i++) {
        pairs[i].hide();
    }
}, 5000);