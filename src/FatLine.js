import * as THREE from 'three'

export class FatLine {
    constructor({
        scene,
        chains,
        chainSize
    }) {

        this.scene = scene;
        this.dataTexture = null;
        this.chains = chains;
        this.sizeUVx = chainSize;

        this.init(this.chains);
    }

    async init(chains) {

        const FATLINE_COUNT = this.chains; // chains.length;

        await this.initDataTexture(chains);


        const fatLine_geometry = new THREE.CylinderGeometry(0.025, 0.1, 10, 6, this.sizeUVx, true);
        const fatLine_Material = new THREE.MeshNormalMaterial({ side: THREE.FrontSide });
        //fatLine_Material.wireframe = true;

        fatLine_Material.uniforms = {
            myDataTexture: { value: this.dataTexture },// Пример новой uniform переменной
            myChainSize: { value: this.sizeUVx }
        };

        fatLine_Material.onBeforeCompile = function (shader) {

            shader.uniforms.myDataTexture = fatLine_Material.uniforms.myDataTexture;
            shader.uniforms.myChainSize = fatLine_Material.uniforms.myChainSize;
            shader.vertexShader = `
      uniform sampler2D myDataTexture;
      uniform float myChainSize;
      ` + shader.vertexShader;

            shader.vertexShader = shader.vertexShader.replace('#include <displacementmap_vertex>',
                `
        //gl_InstanceID
        ivec2 scaledUV = ivec2(uv * myChainSize); 

        vec3 direction = texelFetch(myDataTexture, ivec2(scaledUV.y, gl_InstanceID ), 0).xyz;
        vec3 direction1 = texelFetch(myDataTexture, ivec2(scaledUV.y + 1 , gl_InstanceID), 0).xyz;    
        
        // // -----NORMAL --------------------------------
        vec3 up  = normalize(vec3(0.0, 0.0, -1.0));         
        vec3 norm  = normalize(direction1 - direction);             

        vec3 tang  = normalize(cross(up, norm));
        vec3 binormal  = normalize(cross(tang, norm));
        mat3 tbnMatrix  = mat3(tang, norm, binormal);
        
        transformed.y = 0.0;
        transformed =  tbnMatrix * transformed;  

        transformed += direction;
        vNormal = normalize( transformedNormal );
   

      `);

        }
        this.fatLine = new THREE.InstancedMesh(fatLine_geometry, fatLine_Material, FATLINE_COUNT);
        this.scene.add(this.fatLine);
    }

    //FATLINE  chains - array of points
    async initDataTexture(chains) {

        const FATLINE_length = chains;//chains.length;
        let size = this.sizeUVx + 2;

        this.dataOfChainForTexture = new Float32Array(4 * size * FATLINE_length);
        for (let j = 0; j < FATLINE_length; j++) {
            for (let i = 0; i < size; i++) {

                const lineinTextyre = j * (size * 4);

                this.dataOfChainForTexture[(4 * i) + lineinTextyre] = 0.1;
                this.dataOfChainForTexture[(4 * i + 1) + lineinTextyre] = 0.2;
                this.dataOfChainForTexture[(4 * i + 2) + lineinTextyre] = 0.3;
                this.dataOfChainForTexture[(4 * i + 3) + lineinTextyre] = 0.4;

            }
        }

        this.dataTexture = new THREE.DataTexture(
            this.dataOfChainForTexture,
            size,
            FATLINE_length,
            THREE.RGBAFormat,
            THREE.FloatType,
            0,
            THREE.ClampToEdgeWrapping,
            THREE.ClampToEdgeWrapping,
        );

        this.dataTexture.needsUpdate = true;

    }

}