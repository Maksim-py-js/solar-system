scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(1920, 720);

renderer.domElement.setAttribute("id", "Minecraft3DObj");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040, 1);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 1);
pLight.position.set(0, -3, 7);
scene.add(pLight);

const helper = new THREE.PointLightHelper(pLight);
scene.add(helper);

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('../3d/scene.gltf', function(gltf) {
	obj = gltf;
	// ojb.scene.scale.set(1.3, 1.3, 1.3);

	scene.add(obj.scene);
});

function animate() {
	requestAnimationFrame(animate);

	if(obj) {
		obj.scene.rotation.y += 0.03;
	}
	renderer.render(scene, camera);
}
animate();