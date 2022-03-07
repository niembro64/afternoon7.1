class Sundae {
    constructor(
        flavor,
        numScoops,
        sauce,
        toppings,
        whipped = true,
        container = "cup"
    ) {
        this.flavor = flavor;
        this.numScoops = numScoops;
        this.sauce = sauce;
        this.toppings = toppings;
        this.whipped = whipped;
        this.container = container;
    }

    eat(){
        this.numScoops -= 1;
        console.log('I ate ${this.flavor}');
    }

}

const tinRoof = new Sundae(
    "vanilla",
    2,
    "chocolate",
    ["peanuts", "rainbow spranks"],
    true,
    "glass bowl"
);

console.log(tinRoof);
tinRoof.eat() 
tinRoof.eat() 
console.log(tinRoof);
