import * as CANNON from 'cannon-es'
import * as THREE from 'three'
import { GLTFLoader as THREE_GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import balloonGLB from '../models/balloon.glb?url';

export class Balloon {

  constructor({ world, scene, chainSize, chainDist, balloonRadius, balloonGravity, rootPosition }) {

    this.world = world;
    this.scene = scene;
    this.chainSize = chainSize;
    this.chainDist = chainDist;
    this.chainRadius = 0.05;

    this.balloonRadius = balloonRadius;
    this.balloonGravity = balloonGravity;
    this.balloonGravity.y *= balloonRadius;
    //this.balloonBody = undefined;

    this.rootPosition = rootPosition;
    //this.sphereBalloon = undefined;

    this.arraySpheres = [];
    this.arrayBodys = [];

    this.material = undefined;

    this.loader = new THREE_GLTFLoader();

    this.init();

  }
  async init() {

    await this.initMaterials();
    await this.initPhysicsChain();
    await this.initPhysicsBalloon();
    await this.initVisualChain();
    await this.initVisualBalloon();
  }

  async initMaterials() {
    this.material = new CANNON.Material();
  }

  async initPhysicsChain() {

    let radius = this.chainRadius;
    this.previous = undefined;

    for (let i = 0; i <= this.chainSize; i++) {

      let dist = this.chainDist;
      let mass = 1;
      let position = new CANNON.Vec3(0, dist * (5 - i), 0);

      if (i == 0) { // is root
        mass = 0;
        position = this.rootPosition;
      }

      const sphereShape = new CANNON.Sphere(radius);
      const bodySphere = new CANNON.Body({
        mass: mass,
        material: this.material,
        shape: sphereShape
      });

      bodySphere.position = position;

      bodySphere.velocity.x = -i;
      bodySphere.sleepSpeedLimit = 0.1
      bodySphere.sleepTimeLimit = 1
      bodySphere.linearDamping = 0.3;
      bodySphere.angularDamping = 0.3;

      this.world.addBody(bodySphere);
      this.arrayBodys.push({ bodySphere });

      // Connect this body to the last one added
      if (this.previous) {
        const distanceConstraint = new CANNON.DistanceConstraint(bodySphere, this.previous, dist);
        this.world.addConstraint(distanceConstraint);
      }
      this.previous = bodySphere;
    }
  }

  async initPhysicsBalloon() {
    const sphereShape = new CANNON.Sphere(this.balloonRadius);
    this.balloonBody = new CANNON.Body({
      mass: this.balloonRadius,
      material: this.material,
      shape: sphereShape
    });

    this.balloonBody.position.set(0, 0, 0);
    this.balloonBody.sleepSpeedLimit = 0.1
    this.balloonBody.sleepTimeLimit = 1
    this.balloonBody.linearDamping = 0.3;
    this.balloonBody.angularDamping = 0.3;

    this.world.addBody(this.balloonBody);

    const distanceConstraint = new CANNON.DistanceConstraint(this.balloonBody, this.previous, this.balloonRadius * 2);
    this.world.addConstraint(distanceConstraint);
  }

  async initVisualChain() {

    let radius = this.chainRadius;
    const sphereGeometry = new THREE.SphereGeometry(radius, 16, 8);
    const sphereMaterial = new THREE.MeshNormalMaterial();

    for (let i = 0; i <= this.chainSize; i++) {

      let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      this.arrayBodys[i].sphere = sphere;
      this.scene.add(sphere);

    };

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 5, 0),
      new THREE.Vector3(0, 10, 0)
    ]);

    const points = this.curve.getPoints(this.chainSize);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const materialRope = new THREE.LineBasicMaterial({
      color: 0x5588ff,
      linewidth: 10,
    });

    this.curve.mesh = new THREE.Line(geometry.clone(), materialRope);
    this.scene.add(this.curve.mesh);

  };

  async initVisualBalloon() {

    const sphereGeometry = new THREE.CylinderGeometry(3.0, 1.0, 3.0, 18.0);
    sphereGeometry.rotateX(Math.PI * 0.5)
    sphereGeometry.translate(0, 0, -1.5);


    const gltf = await this.loader.loadAsync(balloonGLB);
    const balloonGeometry = gltf.scene.children[0].geometry;
    balloonGeometry.rotateX(Math.PI * 0.5)

    const sphereMaterial = new THREE.MeshNormalMaterial();
    this.sphereBalloon = new THREE.Mesh(balloonGeometry, sphereMaterial);
    this.sphereBalloon.matrixAutoUpdate = false;

    this.scene.add(this.sphereBalloon);
  }

};

