const log = console.log;
const button = PIXI.Sprite.fromImage('images/sprites/image.png');
button.interactive = true;
button.buttonMode = true;
button.anchor.set(0.5);
button.x = 100;
button.y = 100;
app.stage.addChild(button);
