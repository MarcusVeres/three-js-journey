import * as THREE from 'three'

console.log("Ze javahscreep ees vorkeen");
console.log(THREE);

// Canvas 
const canvas = document.querySelectorAll('canvas.webgl')[0];
console.log( canvas );

// Scene 
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry( 1 , 1 , 1 );
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 , wireframe: true });
const mesh = new THREE.Mesh( geometry , material );
scene.add( mesh )

// Camera - theoretical point of view 
const config = {
  fov: 75, 
  height: 600,
  width: 800,
}
const camera = new THREE.PerspectiveCamera( config.fov , config.width / config.height );
scene.add( camera );
camera.position.x = 2;
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize( config.width , config.height );
renderer.render( scene , camera );
