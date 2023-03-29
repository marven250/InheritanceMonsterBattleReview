const d = new Dragon();
const m = new Moth();
console.log("this is moth", m.render())
console.log("this is dragon", d.render())
const b = new Battle(d, m);

// Initial render
b.render();