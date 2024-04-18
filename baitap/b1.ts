class bai1a {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let bai1a1 = new bai1a("Mercedes", 2022, "Mercedes-Benz");
console.log(bai1a1.name);
console.log(bai1a1.year);
console.log(bai1a1.company);