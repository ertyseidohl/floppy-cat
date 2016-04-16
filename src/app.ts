/// <reference path="../definitions/phaser.d.ts"/>
import { Cat, CollisionManager } from "./Cat";

class SimpleGame {

    private game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", { preload: this.preload, create: this.create });
    }

    public preload() {
        //this.game.load.image("logo", "phaser.png");


    }

    public create() {

        this.game.physics.startSystem(Phaser.Physics.P2JS);
       // this.game.physics.p2.gravity.y = 1200;

        let collisions = new CollisionManager(this.game);
        let cat = new Cat(this.game, collisions, 200, 200, 100, 30);

        // let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        // logo.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {
    let game = new SimpleGame();
};
