class Song {
    public readonly id: number;
    private name: string;
    private length: number;
    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getLength(): number {
        return this.length;
    }
    setLength(length: number): void {
        this.length = length;
    }
}
let bai6 = new Song(1, "Yêu nắm", 280);
console.log("Ban đầu");
console.log(bai6.id);
console.log(bai6.getName());
console.log(bai6.getLength());
bai6.setName("Em của ngày hôm qua");
bai6.setLength(310);
console.log("khi đã thay đổi");
console.log(bai6.id);
console.log(bai6.getName());
console.log(bai6.getLength());