import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Balloon } from './Balloon.js'
import { FatLine } from './FatLine.js'

export default class Sketch {

  constructor() {

    this.canvas = document.getElementById('canvas');
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      canvas: this.canvas
    });

    this.renderer.setSize(this.width, this.height);

    this.clock = new THREE.Clock();
    this.timeStep = 1 / 60;
    this.lastCallTime == null;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("rgb(50, 50, 50)");

    this.camera = null;

    this.balloonCount = 20;
    this.chainSize = 9;

    this.init();
    this.addObject();
    //this.initEvents();

    this.renderLoop();
  }

  initEvents() {
    window.addEventListener('mousemove', (event) => {
      //this.mouseMove(event)
    })

    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.renderer.setSize(this.width, this.height);

    this.camera.fov = 40;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  init() {
    this.initCamera();
    this.initHelpers();
    this.initPhysics();
    this.initEvents();
  }

  initCamera() {
    //camera
    const fov = 40;
    const aspect = this.width / this.height;
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 50;
    this.camera.position.y = 10;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
  }

  initHelpers() {
    const gridHelper = new THREE.GridHelper(20, 20);
    this.scene.add(gridHelper);
  }

  addObject() {

    const cube1_Geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube1_Material = new THREE.MeshNormalMaterial();
    this.cube1 = new THREE.Mesh(cube1_Geometry, cube1_Material);
    this.cube1.matrixAutoUpdate = false;

    //this.scene.add(this.cube1);

    const sphere1_Geometry = new THREE.SphereGeometry(0.5, 16, 8);
    const sphere1_Material = new THREE.MeshNormalMaterial();
    this.sphere1 = new THREE.Mesh(sphere1_Geometry, sphere1_Material);

    //this.scene.add(this.sphere1);

    this.fatLines = new FatLine({
      scene: this.scene,
      chains: this.balloonCount,
      chainSize: this.chainSize
    })

    // this.scene.add(this.cilinder1);
  }

  initPhysics() {
    this.world = new CANNON.World();
    this.world.solver.iterations = 20;
    this.fixedTimeStep = 1.0 / 60.0;
    this.damping = 0.01;

    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.gravity.set(0, -9.8, 0);
    this.world.allowSleep = true;



    //this.debugRenderer = new CannonDebugRenderer(this.scene, this.world); 
    const groundShape = new CANNON.Plane();
    const groundMaterial = new CANNON.Material();
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial, type: CANNON.Body.STATIC, });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    groundBody.addShape(groundShape);
    this.world.addBody(groundBody);

    //--------------------------------------
    const material = new CANNON.Material();
    const physics_box = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
    this.body = new CANNON.Body({ mass: 1, material: material });
    this.body.position = new CANNON.Vec3(5.0, 0.5, 8.0)
    this.body.addShape(physics_box);
    this.body.allowSleep = true;
    this.world.addBody(this.body);

    this.body.sleepSpeedLimit = 0.1
    this.body.sleepTimeLimit = 1
    this.body.angularDamping = 0.5;


    //--------------------------------------
    // // Делаем цепочку из сфер
    // // Balloon 
    this.balloonArray = [];
    this.addBalloons();

    //--------------------------------------
    // FatLine 


    //--------------------------------------
    this.groundMaterial = groundMaterial;
    const material_ground = new CANNON.ContactMaterial(this.groundMaterial, material,
      { friction: 0.1, restitution: 0.1 });
    this.world.addContactMaterial(material_ground);


  }

  initEvents() {

    window.addEventListener("keydown", this.keyEvent.bind(this));
    
    const arrows = document.querySelectorAll(".arrow");
  
    arrows.forEach(arrow => {
      arrow.addEventListener("click", this.keyEvent.bind(this));
    });

  }

  keyEvent(event){
    //console.log('keydown! ' + event.key)
    const accessKey = event.target.accessKey;    
    //console.log('accessKey! ' + accessKey)


      if (event.key === 'ArrowLeft' || accessKey === 'ArrowLeft') {
        this.balloonArray.map(b => {
          b.arrayBodys[0].bodySphere.position.x -= 0.5
        })

      }
      if (event.key === 'ArrowRight' || accessKey === 'ArrowRight') {

        this.balloonArray.map(b => {
          b.arrayBodys[0].bodySphere.position.x += 0.5
        })
      }
      if (event.key === 'ArrowUp' || accessKey === 'ArrowUp' ) {     

        this.balloonArray.map(b => {
          b.arrayBodys[0].bodySphere.position.z -= 0.5
        })

      }
      if (event.key === 'ArrowDown'|| accessKey === 'ArrowDown' ) {
      
          this.balloonArray.map(b => {
          b.arrayBodys[0].bodySphere.position.z += 0.5
        })

      }
      // do something
  }

  addBalloons() {

    for (let index = 0; index < this.balloonCount; index++) {

      const balloon = new Balloon(
        {
          world: this.world,
          scene: this.scene,
          chainSize: this.chainSize,
          chainDist: 0.5 * Math.random() + 0.4, // расстояние между звеньями цепи
          balloonRadius: 1,
          balloonGravity: new CANNON.Vec3(0, 350, 0),
          rootPosition: new CANNON.Vec3(0, 0, 0)
        });

      this.balloonArray.push(balloon);
    }

  }

  renderLoop = () => {
    this.renderer.setAnimationLoop((ts) => {
      const time = performance.now() / 1000 // seconds

      if (!this.lastCallTime) {
        this.world.step(this.timeStep);

      } else {
        const dt = time - this.lastCallTime
        for (let index = 0; index < 4; index++) {
          this.world.step(this.timeStep, dt / 4)
        }
      }


      this.balloonArray.map((balloon, index) => {

        for (let i = 0; i < balloon.arrayBodys.length; i++) {

          const sphere = balloon.arrayBodys[i].sphere;
          sphere.position.copy(balloon.arrayBodys[i].bodySphere.position);
          sphere.quaternion.copy(balloon.arrayBodys[i].bodySphere.quaternion);

          //------------------------------------------------------------------ 
          const spline = balloon.curve;
          const splineMesh = spline.mesh;
          const position = splineMesh.geometry.attributes.position;

          position.setXYZ(i, sphere.position.x, sphere.position.y, sphere.position.z);
          position.needsUpdate = true;

          // FATLINE START----------------------------------------------------
          const lineinTextyre = ((balloon.arrayBodys.length + 1) * 4) * index;  // 1  - offset in dataOfChainForTexture

          this.fatLines.dataOfChainForTexture[(4 * i) + lineinTextyre] = sphere.position.x;
          this.fatLines.dataOfChainForTexture[(4 * i + 1) + lineinTextyre] = sphere.position.y;
          this.fatLines.dataOfChainForTexture[(4 * i + 2) + lineinTextyre] = sphere.position.z;
          this.fatLines.dataOfChainForTexture[(4 * i + 3) + lineinTextyre] = 0.0;

          if (i == balloon.arrayBodys.length - 1) {
            this.fatLines.dataOfChainForTexture[(4 * (i + 1)) + lineinTextyre] = sphere.position.x;
            this.fatLines.dataOfChainForTexture[(4 * (i + 1) + 1) + lineinTextyre] = sphere.position.y + 1; // Нормаль для последнего звена
            this.fatLines.dataOfChainForTexture[(4 * (i + 1) + 2) + lineinTextyre] = sphere.position.z;
            this.fatLines.dataOfChainForTexture[(4 * (i + 1) + 3) + lineinTextyre] = 100.0;
          }

          // FATLINE END------------------------------------------------------

        }


        if (balloon.sphereBalloon) {

          balloon.balloonBody.applyForce(balloon.balloonGravity);
          balloon.sphereBalloon.position.copy(balloon.balloonBody.position);

          balloon.sphereBalloon.matrix.lookAt(
            balloon.sphereBalloon.position,
            balloon.arrayBodys[8].sphere.position,
            new THREE.Vector3(0, 1, 0)
          )
          //balloon.sphereBalloon.matrix.makeRotationY(Math.PI*0.5); 
          balloon.sphereBalloon.matrix.setPosition(balloon.sphereBalloon.position)
          balloon.sphereBalloon.matrixNeedsUpdate = true;
        }

      });


      //FATLINE START----------------------------------------------------
      this.fatLines.dataTexture.image.data = this.fatLines.dataOfChainForTexture;
      this.fatLines.dataTexture.needsUpdate = true;
      //FATLINE END------------------------------------------------------

      // Render
      this.renderer.render(this.scene, this.camera);

    });
  }

}
new Sketch();