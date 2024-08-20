import { Game as MainGame } from './scenes/Game';
import { AUTO, Scale, Game, Scene } from 'phaser';
import * as PIXI from 'pixi.js';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    // parent: 'game-container',
    parent: 'phaser-game',
    backgroundColor: '#028af8',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        Game
    ],
    render: {
        // This is an example of how you could set PixiJS properties if needed
        pixelArt: true,
        antialias: false
    }
};

export default new Game(config);
