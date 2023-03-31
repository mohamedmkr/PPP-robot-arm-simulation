const calcImportantVertices = (
  object,
  outputList
) => {
  const x = object.x.toFixed(2);
  const y = object.y.toFixed(2);
  const z = object.z.toFixed(2);

  outputList[0].innerHTML = x;
  outputList[1].innerHTML = y;
  outputList[2].innerHTML = z;
};

export default calcImportantVertices;
