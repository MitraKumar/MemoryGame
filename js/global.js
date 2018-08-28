class Global {
    constructor(elms, pairs) {
        this.pairs = pairs;
        this.elms = elms;
        this.selected = [];
        this.tries = 0;
    }

    render() {
        this.elms.forEach((elm, i) => {
            elm.addEventListener('click', (e) => {
                this.tries++;
                // console.log("Number of attempts: " + this.tries);
                if (this.tries > 10) {
                    document.getElementById('message').innerHTML = "You Loose!!";
                    document.getElementById('attempts').innerHTML = "0";
                    return;
                }
                document.getElementById('attempts').innerHTML = "Total attempts left: " + (10 - this.tries);

                this.selected.push(e.target);
                console.log(this.selected.length);
                this.reveal(elm);

                if (this.selected.length === 2) {
                    if (this.chekPair()) {
                        // console.log("Choose the same letter");
                        this.markPair();
                        if (this.finished()) {
                            // console.log("You Win!!!");
                            document.getElementById('message').innerHTML = "You Win!!"
                        }
                    } else {
                        // console.log("Oops, didn't choose the correct letter");
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

    finished() {
        for (let i = 0; i < this.pairs.length; i++) {
            if (!this.pairs[i].revealed[0] && !this.pairs[i].revealed[1]) return false;
        }
        return true;
    }
}