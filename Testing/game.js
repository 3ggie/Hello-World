

var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xffffff});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("helloworld.jpg");

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

function animate() {
  requestAnimationFrame(animate);
  sprite.rotation += 0.03;
  renderer.render(stage);
}
animate();
