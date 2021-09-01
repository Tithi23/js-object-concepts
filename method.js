const student = {
    id: 102,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking eaxm');
    },
    treatDay: function (expense, bokies) {
        this.money = this.money - expense - bokies;
        return this.money;
    }
}
// student.takeExam();
const remaining1 = student.treatDay(900, 100);
const remaining2 = student.treatDay(700, 50);
console.log(remaining2);
