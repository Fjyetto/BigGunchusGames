import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 600 / 400, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );

const controls = new OrbitControls( camera, renderer.domElement );

const max = Math.max(window.innerWidth, window.innerHeight)

let w=0;
let h=0;
if (max==window.innerWidth){
	h = window.innerHeight;
	w = (h/3)*4;
}else{
	w = window.innerWidth;
	h = (w/4)*3;
}
renderer.setSize( w,h );

document.getElementById("gaming").appendChild( renderer.domElement );

function rad(deg) {
  return deg * (Math.PI / 180);
}

const loader = new THREE.CubeTextureLoader();
loader.setPath( 'box/' );
const boxt = loader.load( [
	'px.png', 'nx.png',
	'py.png', 'ny.png',
	'pz.png', 'nz.png'
] );

boxt.magFilter = THREE.NearestFilter;
boxt.minFilter = THREE.NearestFilter;
const boxm = new THREE.MeshBasicMaterial( { map: boxt } );

const geometry = new THREE.BoxGeometry(5.3,7.5,0.5);
const ncube = new THREE.Mesh( geometry,boxm );
scene.add( ncube );
ncube.rotation.copy(new THREE.Euler(rad(7),rad(30),rad(0),'XYZ'));

const light = new THREE.AmbientLight( 0x202020 ); // soft white light
scene.add( light );

function lockChangeAlert() {
  if (document.pointerLockElement === renderer.domElement ||
      document.mozPointerLockElement === renderer.domElement) {
    document.addEventListener('mousemove', mousemov, false);
  } else {
    document.removeEventListener('mousemove', mousemov, false);
  }
}

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

camera.position.copy(new THREE.Vector3(2.102,2.5,-8.15));
camera.quaternion.copy((new THREE.Quaternion()).setFromAxisAngle( new THREE.Vector3( -0.22796, -0.3133, 0.921876 ), Math.PI / 2 ));

let debug = false;

const clock = new THREE.Clock();
let delta;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	
}
let t = new THREE.Vector3(0,0,0);
camera.getWorldDirection(t);
console.log(t);
animate();