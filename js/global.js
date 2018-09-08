class Global {
    constructor(elms, pairs) {
        this.pairs = pairs;
        this.elms = elms;
        this.selected = [];
        this.tries = 0;
        this.attempts = 20;
        this.finished = false;
    }

    render() {
        this.elms.forEach((elm, i) => {
            elm.addEventListener('click', (e) => {
                if (this.finished) return;

                this.tries++;
                if (this.tries > this.attempts) {
                    document.getElementById('message').innerHTML = "You Loose!!";
                    document.getElementById('attempts').innerHTML = "0";
                    this.finished = true;
                }
                document.getElementById('attempts').innerHTML = `Total attempts left: ${this.attempts - this.tries}`;

                this.selected.push(e.target);
                this.reveal(elm);

                if (this.selected.length === 2) {
                    if (this.chekPair()) {
                        this.markPair();
                        if (this.isWin()) {
                            document.getElementById('message').innerHTML = "You Win!!";
                        }
                    } else {
                        this.hide();
                    }
                    this.selected = [];
                }

            })
        })
    }

    chekPair() {
        for (let i = 0; i < this.pairs.length; i++) {
            if (this.comparePair(this.pairs[i].elms, this.selected)) {
                return true;
            }
        }
        return false;
    }

    comparePair(pair, selected) {
        if (pair[0] === selected[0] && pair[1] == selected[1]) {
            return true;
        }
        if (pair[0] == selected[1] && pair[1] === selected[0]) {
            return true;
        }
    }

    markPair() {
        for (let i = 0; i < this.pairs.length; i++) {
            if (this.comparePair(this.pairs[i].elms, this.selected)) {
                this.pairs[i].mark();
            }

        }
    }

    reveal(elm) {
        for (let i = 0; i < this.pairs.length; i++) {
            if (this.pairs[i].elms[0] === elm || this.pairs[i].elms[1] === elm) {
                this.pairs[i].reveal(elm);
            }
        }
    }

    hide() {
        for (let i = 0; i < this.pairs.length; i++) {
            this.pairs[i].hide();
        }
    }

    isWin() {
        for (let i = 0; i < this.pairs.length; i++) {
            if (!this.pairs[i].revealed[0] && !this.pairs[i].revealed[1]) return false;
        }
        this.finished = true;
        return true;
    }
}