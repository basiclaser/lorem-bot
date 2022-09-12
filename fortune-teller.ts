const when: string[] = ["never", "soon", "in a few days", "in a few weeks", "in a few months", "in a few years", "try to", "what if you", "always", "sometimes"];
const lorem: string[] = ["lorem ipsum", "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam,", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur.", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident,", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"]
const what: string[] = ["whatever", "before you judge someone", "what you like", "what you love", "new things", "old friends", "a xylophone", "the dog", "if it makes you happy"]

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

console.log(`${sample(when)} ${sample(lorem)} ${sample(lorem)} ${sample(what)}`);