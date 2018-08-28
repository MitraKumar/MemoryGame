class Pair {
    constructor(elm1, elm2, text) {
        this.elms = [elm1, elm2];
        this.selected = [false, false];
        this.revealed = [true, true];
        this.checked = [false, false];
        this.text = text || Math.floor(Math.random() * 100);
    }

    show() {
        for (let i = 0; i < this.elms.length; i++) {
            if (this.revealed[i] === true) {
                this.elms[i].innerHTML = this.text;
            } else {
                this.elms[i].innerHTML = "";
            }
        }
    }

    reveal(elm) {
        for (let i = 0; i < this.elms.length; i++) {
            if (this.elms[i] === elm) {
                this.revealed[i] = true
                this.elms[i].innerHTML = this.text;
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