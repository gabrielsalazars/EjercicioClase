let cuadrado = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,

  color: 0,

  showBody: function () {
    stroke(5);
   
    switch (this.color) {
      case 0:
        noFill();
        break;

      case 1:
        fill(0, 255, 0);
        break;

      case 2:
        fill(255, 0, 0);
        break;
    }
    rect(this.x, this.y, this.width, this.height);
  }
}
let cuadrado2 = {
  x: 200,
  y: 0,
  width: 200,
  height: 200,

  showBody: function () {
    noFill();
    
    switch (this.color) {
      case 0:
        noFill();
        break;

      case 1:
        fill(0, 255, 0);
        break;

      case 2:
        fill(255, 0, 0);
        break;
    }
    rect(this.x, this.y, this.width, this.height)
  }
}
let cuadrado3 = {
  x: 0,
  y: 200,
  width: 200,
  height: 200,

  showBody: function () {
    noFill();
    
    switch (this.color) {
      case 0:
        noFill();
        break;

      case 1:
        fill(0, 255, 0);
        break;

      case 2:
        fill(255, 0, 0);
        break;
    }
    rect(this.x, this.y, this.width, this.height)
  }
}
let cuadrado4 = {
  x: 200,
  y: 200,
  width: 200,
  height: 200,

  showBody: function () {
    noFill();
    rect(this.x, this.y, this.width, this.height)
  }
}

let circulo = {
  circulox: 50,
  circuloy: 450,
  diametro: 70,

  showBody: function () {
    fill(255, 250, 0);
    noStroke();
    ellipse(this.circulox, this.circuloy, this.diametro)
  },
  clickedd: function (mouseX, mouseY) {
    if (dist(mouseX, mouseY, (this.circulox + (this.diametro / 2)), (this.circuloy + (this.diametro / 2)))<60) {

      return true;

    } else {
      return false
    }

  }
}

let triangulo = {
  x1: 250,
  y1: 420,
  x2: 200,
  y2: 490,
  x3: 300,
  y3: 490,

  showBody: function () {
    noStroke();
    fill(0, 255, 0);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}
let rombo = {
  x1: 350,
  y1: 420,
  x2: 390,
  y2: 455,
  x3: 350,
  y3: 490,
  x4: 310,
  y4: 455,

  showBody: function () {
    noStroke();
    fill(0, 0, 250);
    quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);

  },
  clickedd: function (mouseX, mouseY) {
    if (dist(mouseX, mouseY, (this.x1 + (this.diametro / 2)), (this.circuloy + (this.diametro / 2)))<60) {

      return true;

    } else {
      return false
    }

  }
}
let cuadradobj = {
  x: 100,
  y: 420,
  width: 70,
  height: 70,

  showBody: function () {
    noStroke();
    fill(0, 255, 255);
    rect(this.x, this.y, this.width, this.height)
  },

  clickedd: function (mouseX, mouseY) {
    if (dist(mouseX, mouseY, (this.x + (this.width / 2)), (this.y + (this.width / 2)))<60) {

      return true;

    } else {
      return false
    }

  }
}

let cuadradoNoFill = {
  x: 60,
  y: 60,
  width: 70,
  height: 70,

  showBody: function () {
    stroke(5);
    noFill();
    rect(this.x, this.y, this.width, this.height)
  }
}
let trianguloNoFill = {
  x1: 300,
  y1: 50,
  x2: 250,
  y2: 140,
  x3: 350,
  y3: 140,

  showBody: function () {
    noFill();
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}
let circuloNoFill = {
  x: 100,
  y: 300,
  diametro: 70,

  showBody: function () {
    stroke(5);
    noFill();
    ellipse(this.x, this.y, this.diametro)
  }
}
let romboNoFill = {
  x1: 300,
  y1: 250,
  x2: 250,
  y2: 300,
  x3: 300,
  y3: 350,
  x4: 350,
  y4: 300,

  showBody: function () {
    stroke(5);
    noFill(0);
    quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);

  }
}

let select;

function setup() {
  createCanvas(400, 600);
  select = null;

}

function draw() {
  background(250);
  cuadrado.showBody();
  cuadrado2.showBody();
  cuadrado3.showBody();
  cuadrado4.showBody();
  circulo.showBody();
  cuadradobj.showBody();
  triangulo.showBody();
  rombo.showBody();
  cuadradoNoFill.showBody();
  trianguloNoFill.showBody();
  circuloNoFill.showBody();
  romboNoFill.showBody();
}

function mousePressed() {
  if (cuadradobj.clickedd(this.mouseX, this.mouseY) == true) {
    select = cuadradobj;

  }  if (circulo.clickedd(this.mouseX, this.mouseY) == true) {
    select = circulo;

  }
  if (circulo.clickedd(this.mouseX, this.mouseY) == true) {
    select = circulo;

  }

}

function mouseDragged() {
  
  if (select == cuadradobj) {
    select.x = this.mouseX - (select.width / 2);
    select.y = this.mouseY - (select.height / 2);
  }

  if (select == circulo) {
    select.circulox = this.mouseX - (select.diametro / 2)+30;
    select.circuloy = this.mouseY - (select.diametro / 2)+30;
  }

}

function mouseReleased() {
  if (select !== null && select==cuadradobj) {
    if (select.x >= cuadrado.x && select.x <= (cuadrado.x + cuadrado.width) &&
      select.y >= cuadrado.y && select.y <= (cuadrado.y + cuadrado.height)) {
      
      cuadrado.color = 1;

    }else {
      cuadrado.color = 0;

    }
  }else if(select!==cuadradobj){
    cuadrado.color=2;
  }
  select = null;

//cudrado3

  if (select !== null && select==circulo) {
    if (select.x >= cuadrado3.x && select.x <= (cuadrado3.x + cuadrado3.width) &&
      select.y >= cuadrado3.y && select.y <= (cuadrado3.y + cuadrado3.height)) {
      
      cuadrado3.color = 1;

    }else {
      cuadrado3.color = 0;

    }
  }else if(select!==cuadradobj){
    cuadrado3.color=2;
  }
  select = null;

}