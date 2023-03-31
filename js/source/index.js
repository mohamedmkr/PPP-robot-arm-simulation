import * as THREE from "./three/src/Three.js";
import { OrbitControls } from "./three/examples/jsm/controls/OrbitControls.js";
import calcImportantVertices from "./calcVertices.js";
import createMyAllElement from "./createObjects.js";
import addToScene from "./addAllToScene.js";

const myCanvas =
  document.getElementsByClassName("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(
  window.innerWidth / 1.24,
  window.innerHeight //+ 100
);
// document.body.appendChild(renderer.domElement);
myCanvas[0].appendChild(renderer.domElement);

const control = new OrbitControls(
  camera,
  renderer.domElement
);

camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 7;

const listObj = createMyAllElement();

//جلب العناصر من الليست ثم تحريكها لموقعها الابتدائي
var position = new THREE.Vector3();
const col1 = listObj[0];
const col2 = listObj[1].translateX(2);
const join1green = listObj[2].translateX(1);
const join2blue = listObj[3]
  .translateZ(2)
  .translateX(1);
const join3red = listObj[4]
  .translateZ(5 - 0.5 - 0.25)
  .translateX(1);
const endEff = listObj[5]
  .translateZ(5 - 0.5 - 0.25)
  .translateX(1)
  .translateY(-(1.5 / 2 + 0.55 / 2))
  .rotateX(3.14);
const ground = listObj[6]
  .translateY(-(3 / 2))
  .translateX(1)
  .translateZ(1);

addToScene(scene, listObj); //from me!

///////      new  (adding vertices)    ////////////////

const axesHelper = new THREE.AxesHelper(12);
const axesHelper1 = new THREE.AxesHelper(1);
const axesHelper2 = new THREE.AxesHelper(1);
const axesHelper3 = new THREE.AxesHelper(1);
const axesHelper4 = new THREE.AxesHelper(1);

scene.add(
  axesHelper.translateX(-3).translateY(-1.5)
); // from object

join1green.add(axesHelper1);
join2blue.add(axesHelper2);
join3red.add(axesHelper3);
endEff.add(axesHelper4);

//////        end new           ///////

function animate() {
  requestAnimationFrame(animate);
  control.update();
  renderer.render(scene, camera);
}
animate();

//**************       get buttons        ************************/

//get plus <buttons> to set onClickListener:
const btn = document.getElementById("testBtn");
const btn2 = document.getElementById("testBtn2");
const btn3 = document.getElementById("testBtn3");

//get minace <buttons> to set onClickListener:
const btnm = document.getElementById("testBtnm");
const btn2m =
  document.getElementById("testBtn2m");
const btn3m =
  document.getElementById("testBtn3m");

//get <span> for outputs:
const baseX = document.getElementById("baseX");
const baseY = document.getElementById("baseY");
const baseZ = document.getElementById("baseZ");

const endX = document.getElementById("endX");
const endY = document.getElementById("endY");
const endZ = document.getElementById("endZ");

//set the important vertices for first one:
var position = new THREE.Vector3();
calcImportantVertices(
  position.setFromMatrixPosition(
    ground.matrixWorld
  ),
  [baseX, baseY, baseZ]
);
calcImportantVertices(
  position.setFromMatrixPosition(
    endEff.matrixWorld
  ),
  [endX, endY, endZ]
);

//********            plus   onClicks           ************/

//1 - green:
btn2.onclick = function moveJoint1Green() {
  var position = new THREE.Vector3();

  if (
    position.setFromMatrixPosition(
      join1green.matrixWorld
    ).y -
      0.4 <=
    position.setFromMatrixPosition(
      ground.matrixWorld
    ).y
  ) {
    return;
  }

  join1green.translateY(-0.1);
  join2blue.translateY(-0.1);
  join3red.translateY(-0.1);
  endEff.translateY(0.1);

  calcImportantVertices(
    position.setFromMatrixPosition(
      ground.matrixWorld
    ),
    [baseX, baseY, baseZ]
  );
  calcImportantVertices(
    position.setFromMatrixPosition(
      endEff.matrixWorld
    ),
    [endX, endY, endZ]
  );
};

//2 - blue:
btn.onclick = function moveJoint2Blue() {
  var position = new THREE.Vector3();

  if (
    position.setFromMatrixPosition(
      join2blue.matrixWorld
    ).z +
      0.45 <=
    position.setFromMatrixPosition(
      ground.matrixWorld
    ).z
  ) {
    return;
  }
  join2blue.translateZ(-0.1);
  join3red.translateZ(-0.1);
  endEff.translateZ(0.1);

  calcImportantVertices(
    position.setFromMatrixPosition(
      ground.matrixWorld
    ),
    [baseX, baseY, baseZ]
  );
  calcImportantVertices(
    position.setFromMatrixPosition(
      endEff.matrixWorld
    ),
    [endX, endY, endZ]
  );
};

//3 - red:
btn3.onclick = function moveJoint3Red() {
  var position = new THREE.Vector3();

  if (
    position.setFromMatrixPosition(
      join3red.matrixWorld
    ).y -
      1.5 / 3 >=
    position.setFromMatrixPosition(
      join2blue.matrixWorld
    ).y
  ) {
    return;
  }

  join3red.translateY(0.1);
  endEff.translateY(-0.1);

  calcImportantVertices(
    position.setFromMatrixPosition(
      ground.matrixWorld
    ),
    [baseX, baseY, baseZ]
  );
  calcImportantVertices(
    position.setFromMatrixPosition(
      endEff.matrixWorld
    ),
    [endX, endY, endZ]
  );
};

//********            minase    onClicks          ************/

//1 - green:
btn2m.onclick = function moveJoint1Green_m() {
  if (
    position.setFromMatrixPosition(
      join1green.matrixWorld
    ).y -
      3 / 2 +
      0.5 >=
    position.setFromMatrixPosition(
      col1.matrixWorld
    ).y
  ) {
    return;
  }
  join1green.translateY(0.1);
  join2blue.translateY(0.1);
  join3red.translateY(0.1);
  endEff.translateY(-0.1);

  calcImportantVertices(
    position.setFromMatrixPosition(
      ground.matrixWorld
    ),
    [baseX, baseY, baseZ]
  );
  calcImportantVertices(
    position.setFromMatrixPosition(
      endEff.matrixWorld
    ),
    [endX, endY, endZ]
  );
};

//2 - Blue:
btnm.onclick = function moveJoint2Blue_m() {
  var position = new THREE.Vector3();

  if (
    position.setFromMatrixPosition(
      join2blue.matrixWorld
    ).z -
      2.1 >=
    position.setFromMatrixPosition(
      col1.matrixWorld
    ).z
  ) {
    return;
  }
  join2blue.translateZ(0.1);
  join3red.translateZ(0.1);
  endEff.translateZ(-0.1);

  calcImportantVertices(
    position.setFromMatrixPosition(
      ground.matrixWorld
    ),
    [baseX, baseY, baseZ]
  );
  calcImportantVertices(
    position.setFromMatrixPosition(
      endEff.matrixWorld
    ),
    [endX, endY, endZ]
  );
};

//3 - red:
btn3m.onclick = function moveJoint3Redm() {
  var position = new THREE.Vector3();

  if (
    position.setFromMatrixPosition(
      join3red.matrixWorld
    ).y +
      1.5 / 3 <=
    position.setFromMatrixPosition(
      join2blue.matrixWorld
    ).y
  ) {
    return;
  }

  join3red.translateY(-0.1);
  endEff.translateY(+0.1);

  calcImportantVertices(
    position.setFromMatrixPosition(
      ground.matrixWorld
    ),
    [baseX, baseY, baseZ]
  );
  calcImportantVertices(
    position.setFromMatrixPosition(
      endEff.matrixWorld
    ),
    [endX, endY, endZ]
  );
};
