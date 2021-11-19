class ZCTracker {
  constructor() {
    this.display = [];
  }
  insert(req) {
    this.display.push(req.params.ZC);
  }
  list() {
    const sorted = this.display.map((el) => Number(el)).sort((a, b) => a - b);
    let merging = [];
    let merge = false;
    let i = 0;
    const newDisplay = [];
    let ready = false;
    while (i < sorted.length) {
      if (sorted[i] == sorted[i + 1] - 1) {
        merging.push(sorted[i]);
        merge = true;
      } else {
        if (merge) {
          merging.push(sorted[i]);
          ready = true;
          merge = false;
        }
      }
      if (!merge && !ready) newDisplay.push(sorted[i]);
      if (ready) {
        newDisplay.push(`${merging[0]}-${merging[merging.length - 1]}`);
        merging = [];
        ready = false;
      }
      i++;
    }
    this.display = newDisplay;
  }
}
module.exports = ZCTracker;
