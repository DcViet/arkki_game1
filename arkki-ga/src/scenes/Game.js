import { Game as PhaserGame } from 'phaser';
import { Scene } from 'phaser';
import * as PIXI from 'pixi.js';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');
    }

    create() {
        // Phaser setup
        this.add.image(512, 384, 'background');
        this.add.image(512, 350, 'logo').setDepth(100);
        this.add.text(512, 490, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        // PixiJS setup
        const canvas = document.querySelector('#phaser-game canvas');

        const pixiApp = new PIXI.Application({
            // view: this.sys.game.canvas,  // Use Phaser's canvas as Pixi's canvas
            view: canvas,
            transparent: true,
            width: this.cameras.main.width,
            height: this.cameras.main.height,
            resolution: window.devicePixelRatio || 1
        });

        // Example PixiJS code: Create a PixiJS sprite
        const texture = PIXI.Texture.from('assets/bunny.png'); // Ensure this path is correct
        const bunny = new PIXI.Sprite(texture);
        bunny.x = pixiApp.screen.width / 2;
        bunny.y = pixiApp.screen.height / 2;
        bunny.anchor.set(0.5);
        pixiApp.stage.addChild(bunny);

        // Example PixiJS animation
        pixiApp.ticker.add(() => {
            bunny.rotation += 0.01;
        });
    }
}
