class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.mid = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    console.log(`setRange min = ${this.min}`);
    console.log(`setRange max = ${this.max}`);
  }

  guess() {
    this.mid = Math.round(this.min + (this.max - this.min) / 2);
    console.log(`guess, mid = ${this.mid}`);

    return this.mid;
  }

  lower() {
    this.max = this.mid;
    console.log(`lower, max(${this.max}) = mid(${this.mid}) `);
  }

  greater() {
    this.min = this.mid;
    console.log(`greater, min(${this.min}) = mid(${this.mid}) `);
  }
}

module.exports = GuessingGame;
