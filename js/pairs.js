// const image = document.createElement('img');
// image.src = 'imgs/black.png';
class Pair {
    constructor(elm1, elm2, text, image) {
        this.elms = [elm1, elm2];
        this.selected = [false, false];
        this.revealed = [true, true];
        this.checked = [false, false];
        this.text = text || Math.floor(Math.random() * 100);
        this.image = image;
        this.backImage = 'imgs/black.png';
    }

    show() {
        for (let i = 0; i < this.elms.length; i++) {
            // console.log(this.elms[i]);
            if (this.revealed[i] === true) {
                // this.elms[i].innerHTML = this.text;
                this.elms[i].src = this.image;
            } else {
                this.elms[i].src = this.backImage;
            }
        }
    }

    reveal(elm) {
        for (let i = 0; i < this.elms.length; i++) {
            if (this.elms[i] === elm) {
                this.revealed[i] = true
                this.elms[i].src = this.image;
            }
        }
    }

    hide() {
        if (!this.checked[0] && !this.checked[1]) {
            this.revealed = [false, false];
            this.show();
        }
    }

    mark() {
        this.checked = [true, true];
    }
}