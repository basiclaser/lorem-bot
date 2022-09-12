const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
type day = typeof days[number]

const today: Date = new Date();
const day: number = today.getDay();
const dayName: day = days[day];

console.log(`Today is ${dayName}`);