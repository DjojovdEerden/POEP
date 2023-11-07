const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 823;
const CANVAS_HEIGHT = canvas.height = 800;

const Ground = document.getElementById('Ground');
const Grass = document.getElementById('Grass');
const BigTree = document.getElementById('BigTree');
const TheTreeBehind1 = document.getElementById('TheTreeBehind1');
const TheTreeBehind2 = document.getElementById('TheTreeBehind2');

let x = 0;
let x2 = 823;
const movSpeed = 1;
    
class Layer{
    constructor(image, movSpeed, y_Position){
        this.x = 0;
        this.y = y_Position;
        this.width = 823;
        this.height = 800;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = movSpeed;
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y);
        ctx.drawImage(this.image, this.x2, this.y);
    }

    update(){
        if(this.x < -823) {
            this.x = 823 - this.speedModifier + this.x2;
        }else{
            this.x -= this.speedModifier;
        }
    
        if(this.x2 < -823) {
            this.x2 = 823 - this.speedModifier + this.x;
        }else{
            this.x2 -= this.speedModifier;
        }
    }


}

const GroundLayer = new Layer(Ground, 2, 160);
const GrassLayer = new Layer(Grass, 1.5, 160);
const BigTreeLayer = new Layer(BigTree, 1, 0);
const TheTreeLayer1 = new Layer(TheTreeBehind1, 0.5, 20);
const TheTreeLayer2 = new Layer(TheTreeBehind2, 0.3, 0);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    TheTreeLayer2.update();
    TheTreeLayer2.draw();
    TheTreeLayer1.update();
    TheTreeLayer1.draw();
    BigTreeLayer.update();
    BigTreeLayer.draw();
    GrassLayer.update();
    GrassLayer.draw();
    GroundLayer.update();
    GroundLayer.draw();

    

    requestAnimationFrame(animate);
};
animate();