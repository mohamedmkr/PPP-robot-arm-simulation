const addToScene = (scene, listObj) => {
  for (
    let index = 0;
    index < listObj.length;
    index++
  ) {
    scene.add(listObj[index]);
  }
};
export default addToScene;
