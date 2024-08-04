import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
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
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;


    this.clock = new THREE.Clock();
    this.timeStep = 1 / 60;
    this.lastCallTime == null;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("rgb(50, 50, 50)");

    this.camera = null;

    this.balloonCount = 35;
    this.chainSize = 9;

    this.loader = new RGBELoader;

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
    this.initLights();
    this.addModels();
  }

  initCamera() {
    //camera
    const fov = 40;
    const aspect = this.width / this.height;
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 50;
    this.camera.position.y = 5;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
  }

  initHelpers() {
    // const gridHelper = new THREE.GridHelper(20, 20);
    // this.scene.add(gridHelper);
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
    //this.world.allowSleep = true;



    //this.debugRenderer = new CannonDebugRenderer(this.scene, this.world); 
    const groundShape = new CANNON.Plane();
    const groundMaterial = new CANNON.Material();
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial, type: CANNON.Body.STATIC, });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    groundBody.addShape(groundShape);
    this.world.addBody(groundBody);

    const roofShape = new CANNON.Plane();
    const roofMaterial = new CANNON.Material();
    const roofBody = new CANNON.Body({ mass: 0, material: roofMaterial, type: CANNON.Body.STATIC, });
    roofBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    //roofBody.position = new CANNON.Vec3(0.0, 3.0, 0.0)
    roofBody.addShape(roofShape);
    this.world.addBody(roofBody);

    //--------------------------------------
    const material = new CANNON.Material();
    const physics_box = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
    this.body = new CANNON.Body({ mass: 1, material: material });
    this.body.position = new CANNON.Vec3(5.0, 0.5, 8.0)
    this.body.addShape(physics_box);
    //this.body.allowSleep = true;
    this.world.addBody(this.body);

    // this.body.sleepSpeedLimit = 0.1
    // this.body.sleepTimeLimit = 1
    this.body.angularDamping = 0.5;


    //--------------------------------------
    // // Делаем цепочку из сфер
    // // Balloon 
    this.balloonArray = [];
    this.addBalloons();

    //--------------------------------------
    // FatLine 


    //--------------------------------------
    this.world.groundMaterial = groundBody.material;
    // this.groundMaterial = groundBody.material;
    // const material_ground = new CANNON.ContactMaterial(this.groundMaterial, material,{ friction: 0.0, restitution: 0.0 });
    //this.world.addContactMaterial(material_ground);


  }

  initEvents() {

    window.addEventListener("keydown", this.keyEvent.bind(this));
    
    const arrows = document.querySelectorAll(".arrow");
  
    arrows.forEach(arrow => {
      arrow.addEventListener("click", this.keyEvent.bind(this));
    });

    const btnBalloons = document.querySelectorAll(".btnBalloons");
    btnBalloons.forEach(btn => {
      btn.addEventListener("click", this.keyEvent.bind(this));
    });

  }
  
  initLights(){
   
    const scene = this.scene;

    //this.loader.setPath('../src/assets/textures/hdri/').load('basic.hdr', function (texture) {
    this.loader.setPath('/static/assets/textures/hdri/').load('basic.hdr', function (texture) {

        console.log(texture)
        texture.mapping = THREE.EquirectangularReflectionMapping;
  
        scene.background = texture;
        //scene.background = new THREE.Color( 0x33322c );
        scene.environment = texture;
        
      });

    // White directional light at half intensity shining from the top.
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(0, 20, 20);
    directionalLight.castShadow = true;

    this.scene.add(directionalLight);

    //Set up shadow properties for the light
    directionalLight.shadow.mapSize.width = 128; // 512 default
    directionalLight.shadow.mapSize.height = 128; //512 default
    directionalLight.shadow.bias = - 0.0001;

    // Настройка камеры теней
    const shadowCamera = directionalLight.shadow.camera;
    shadowCamera.left = -15; // Левая граница области
    shadowCamera.right = 15; // Правая граница области
    shadowCamera.top = 15; // Верхняя граница области
    shadowCamera.bottom = -15; // Нижняя граница области
    shadowCamera.near = 0.5; // Ближняя плоскость отсечения
    shadowCamera.far = 40; // Дальняя плоскость отсечения

    // const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
    // this.scene.add(dirLightHelper);

    // this.scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

  }

  keyEvent(event){
    //console.log('keydown! ' + event.key)
    const accessKey = event.target.accessKey;    
    //console.log('accessKey! ' + accessKey)


      if (event.key === 'ArrowLeft' || accessKey === 'ArrowLeft') {
        this.balloonArray.map(b => {
          b.arrayBodys[0].bodySphere.position.x -= 0.5
        })

       // console.log('ArrowLeft!')

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
      
      if (accessKey === 'plus' ) {
      
        for (var i = 0; i < this.balloonArray.length; i++) {
          // if (this.balloonArray[i].arrayBodys[0].bodySphere.invMass === 1 && 
          //   this.balloonArray[i].balloonGravity.y > 0) {
          //   this.balloonArray[i].balloonGravity = new CANNON.Vec3(0, 0, 0);
          //   break; 
          // }  
          
          if (this.balloonArray[i].arrayBodys[0].bodySphere.invMass === 1 && 
            this.balloonArray[i].balloonGravity.y <= 0 &&
            this.balloonArray[i].balloonBody.position.y <= 5 ) {
            
            this.balloonArray[i].balloonGravity = new CANNON.Vec3(0, 50, 0);
            break; 
          }  
        }   
      
      } 
      
      if (accessKey === 'minus' ) {            

        for (var i = 0; i < this.balloonArray.length; i++) {
          if (this.balloonArray[i].arrayBodys[0].bodySphere.invMass === 0) {
            this.balloonArray[i].arrayBodys[0].bodySphere.invMass = 1;
            this.balloonArray[i].arrayBodys[0].bodySphere.mass = 1;
            this.balloonArray[i].arrayBodys[0].bodySphere.invMassSolve = 1;
            this.balloonArray[i].arrayBodys[0].bodySphere.type = 1;
              break; 
          }        
        }   
      
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
          balloonRadius: 1.1,
          balloonGravity: new CANNON.Vec3(0, 50, 0),
          rootPosition: new CANNON.Vec3(0, 0, 0)
        });

      this.balloonArray.push(balloon);
    }

  }

  addModels(){
    
    const geometryPlane = new THREE.PlaneGeometry(25, 25, 25)
    geometryPlane.rotateX(Math.PI * -0.5)
    const materialPlane = new THREE.MeshStandardMaterial({
        color: 0x667777, //FFE4C4
        envMap: this.scene.environment,
        envMapIntensity: 1.0
      })
    materialPlane.depthTest = true;    

    const plane = new THREE.Mesh(geometryPlane, materialPlane)
    //plane.castShadow = true; //default is false
    plane.receiveShadow = true; //default 
    plane.transparent = true;
    plane.opacity = 0.9;

    this.scene.add(plane)

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

          if( balloon.balloonBody.position.y > 100) {
            balloon.balloonGravity = new CANNON.Vec3(0, 0, 0);
          }

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