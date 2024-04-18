class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];
    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe(): void {
        console.log(this.id);
        console.log(this.name);
    }
}
let bai5 = new Department(1, "keToan", ["Minh", "Anh"]);
bai5.describe();