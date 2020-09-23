import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import ground from '@/game/assets/platform.png'
import star from '@/game/assets/star.png'
import dude from '@/game/assets/dude.png'



export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('ground', ground);
    this.load.image('bomb', bomb);
    this.load.image('star', star);
    this.load.spritesheet('dude', dude, {frameWidth: 32, frameHeight: 48});
    this.load.audio('thud', [thudMp3, thudOgg]);
  }

  create () {
    this.scene.start('PlayScene');
  }
}
