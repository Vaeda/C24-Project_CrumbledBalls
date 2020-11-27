class Paper {

    constructor (x, y, radius) {

        var options = {
            density : 1.2,

        }

        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {

        ellipseMode(RADIUS);
        stroke("pink");
        fill("pink");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}

