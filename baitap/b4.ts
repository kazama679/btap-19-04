class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo(): void {
        console.log(this.name);
        console.log(this.year);
        console.log(this.company);
        console.log(this.id);
    }
}
let bai4 = new Vehicle("XeDap", 2000, "Asama", 1);
bai4.printInfo();