class Cuadrados {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
    }
   
    show() {
        fill(250, 250, 0);
        rect(this.x, this.y, this.width, this.height)

    }

}
