/**
 * Three.js Boilerplate
 *
 * In HTML, create an element `<div id="world"></div>`.
 *
 * @author Ryan Yu
 * @author https://ryanyu.com
 * @author https://frontend30.com
 */

/**
 * State.js
 * https://github.com/mrdoob/stats.js/
 */

(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

/**
 * dat GUI
 * https://github.com/dataarts/dat.gui
 */

let somethingControls = new function () {
  this.somethingColor = 0x96ff;
  this.cameraFov = 75;
}

const gui = new dat.GUI();
gui.addColor(somethingControls, 'somethingColor');
gui.add(somethingControls, 'cameraFov', 25, 100);

/**
 * Scene, Camera, Renderer
 */

function createScene() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  /**
   * Scene
   */

  scene = new THREE.Scene();

  /**
   * Camera
   */

  const fieldOfView = 75;
  const aspectRatio = WIDTH / HEIGHT;
  const nearArt = 1;
  const farArt = 10000;

  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearArt,
    farArt,
  );
  camera.position.set(0, 0, 1000);

  /**
   * Renderer
   */

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;

  const container = document.getElementById('world');
  container.appendChild(renderer.domElement);

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Update the canvas on resizing
  window.addEventListener('resize', handleWindowResize);
}

function handleWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

function createLights() {
  shadowLight = new THREE.DirectionalLight(0Xffffff, 0.9);
  shadowLight.position.set(-1, 0, 1);
  scene.add(shadowLight);
}

function init() {
  createScene();
  createLights();
  // More functions goes here
  // createSomething();

  loop();
}

function loop() {
  // Functions goes here
  // animateSomething();

  requestAnimationFrame(loop);
  renderer.render(scene, camera);
}

window.addEventListener('load', init);
