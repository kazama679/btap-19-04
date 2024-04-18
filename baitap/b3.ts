class Employee {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    inRa(): void {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
let bai3 = new Employee("Quang", "Rikkei", 129837476);
bai3.inRa();