class Node{
    constructor(name){
        this.name = name;
    }

    printName = () => { 
        console.log(this.name);
    }
}

class Main{
    static main = () => {
        let obj = new Node("shihara");
        obj.printName();
    }
}

Main.main();
