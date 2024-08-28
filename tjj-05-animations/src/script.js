import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Game Loop 

// Animation // Method 1 / Manual 
let time = Date.now();
const tick = () => {

    // RequestAnimationFrame's purpose is not to do animation!!
    // console.log('tick');

    // Time 
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime; // update time 
    // console.log( deltaTime );
    
    // Update Objects 
    mesh.position.x += 0.01
    mesh.position.y -= 0.01
    mesh.rotation.y += 0.001 * deltaTime;

    // New Frame 
    renderer.render(scene, camera)

    window.requestAnimationFrame( tick );
}
// tick();


// Animation // Method 2 / Time Elapsed 
const clock = new THREE.Clock();
const tick2 = () => {
    
    // Clock
    const elapsedTime = clock.getElapsedTime();
    // console.log( elapsedTime );

    // Modify Objects 
    mesh.rotation.y = elapsedTime // * Math.PI;
    mesh.position.y = Math.sin( elapsedTime );
    mesh.position.x = Math.cos( elapsedTime ) * 0.25;

    // New Frame
    renderer.render( scene , camera );

    // Loop
    window.requestAnimationFrame( tick2 );
}
// tick2();


// Animation // Method 2 / Time Elapsed 
const clock3 = new THREE.Clock();
const tick3 = () => {
    
    // Clock
    const elapsedTime = clock3.getElapsedTime();
    // console.log( elapsedTime );

    // Modify Objects 
    camera.position.y = 3;
    camera.position.z = Math.cos( elapsedTime ) + 2;
    camera.position.x = Math.cos( elapsedTime ) * 4;
    camera.lookAt( mesh.position );

    // New Frame
    renderer.render( scene , camera );

    // Loop
    window.requestAnimationFrame( tick3 );
}
// tick3();

