import * as THREE from "./three/src/Three.js";

const createMyAllElement = () => {
  /***************  bases columns  *****************/
  const geometry = new THREE.BoxGeometry(
    0.5,
    3,
    0.5
  );
  const material1 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  const col1 = new THREE.Mesh(
    geometry,
    material1
  );
  const col2 = new THREE.Mesh(
    geometry,
    material1
  );

  /*************** end  bases columns  *****************/

  /*************** join 1 green  *****************/
  const geometry2 = new THREE.BoxGeometry(
    2.5,
    0.5,
    0.5
  );
  const material2 = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });

  const join1green = new THREE.Mesh(
    geometry2,
    material2
  );
  /*************** end join 1 green  *****************/

  /*************** join 2 purple  *****************/
  const geometry3 = new THREE.BoxGeometry(
    0.5,
    0.5,
    5
  );
  const material3 = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  });

  const join2purple = new THREE.Mesh(
    geometry3,
    material3
  );
  /*************** end join 2 purple  *****************/

  /*************** join 3 red  *****************/
  const geometry4 = new THREE.BoxGeometry(
    0.5,
    1.5,
    0.5
  );
  const material4 = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });

  const join3red = new THREE.Mesh(
    geometry4,
    material4
  );
  /*************** end join 3 red  *****************/

  /*************** endeffector white  *****************/
  const geometryE = new THREE.ConeGeometry(
    0.275,
    0.55,
    32
  );
  const materialE = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  const endEff = new THREE.Mesh(
    geometryE,
    materialE
  );
  /*************** end endeffector white  *****************/

  /*************** ground #aaa  *****************/

  const geometryG = new THREE.BoxGeometry(
    4,
    0.1,
    3
  );
  const materialG = new THREE.MeshBasicMaterial({
    color: 0x555555,
  });

  const ground = new THREE.Mesh(
    geometryG,
    materialG
  );
  /*************** end ground #aaa  *****************/

  //return:
  return [
    col1,
    col2,
    join1green,
    join2purple,
    join3red,
    endEff,
    ground,
  ];
};

export default createMyAllElement;
