import * as CANNON from 'cannon-es'
import * as THREE from 'three'
import {GLTFLoader as THREE_GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import RiggedSimpleGLB from '../models/RiggedSimple.glb?url';

export class Rig{
  
    constructor({scene}){
       
       //this.world = world; 
       this.scene = scene;
       this.chainSize = 15;
       //this.chainDist = chainDist;
       this.chainRadius = 1;
     
       this.arraySpheres = [];
       this.arrayBodys = [];
       
       this.loader  = new THREE_GLTFLoader();

    this.init();
            
    }
    async init(){
        
        //await this.initPhysicsChain();               
        await this.initVisualChain();        
    }

    async initPhysicsChain(){

    }
    
    async initVisualChain(){

           
       
       
        let radius = this.chainRadius;
        const sphereGeometry = new THREE.SphereGeometry(radius,16,8);
        const sphereMaterial = new THREE.MeshNormalMaterial();

        for (let i = 0; i <= this.chainSize; i++) {
         
           let sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
                   
          //this.arrayBodys[i].sphere = sphere;
           this.scene.add(sphere);       
          
         };

         const gltf = await this.loader.loadAsync(RiggedSimpleGLB);
         //const balloonGeometry = gltf.scene.children[0].children[0].children[0].geometry;

         const balloonGeometry = gltf.scene.children[0].children[0].children[1].geometry;


         let testRig = new THREE.Mesh(balloonGeometry,sphereMaterial); 
         this.scene.add(testRig); 
    //    this.curve = new THREE.CatmullRomCurve3([
    //      new THREE.Vector3( 0, 0, 0 ),
    //      new THREE.Vector3( 0, 5, 0 ),
    //      new THREE.Vector3( 0, 10, 0 )
    //    ]); 
       
    //    const points = this.curve.getPoints( this.chainSize );
    //    const geometry = new THREE.BufferGeometry().setFromPoints( points ); 
       
    //    const materialRope = new THREE.LineBasicMaterial( {
    //      color: 0x5588ff,
    //      linewidth: 10,
    //    });

    //    this.curve.mesh = new THREE.Line( geometry.clone(), materialRope);
    //    this.scene.add(this.curve.mesh);  

    }
}