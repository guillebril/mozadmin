export default function ordenarPosicionObjetos(oldIndex,newIndex,objetos)
{
  // pongo en la nueva pos al elemento que esta en la vieja
  objetos[oldIndex].pos = 999

  var i = 0
  var posi = oldIndex
  if(oldIndex > newIndex){
    for (i; i < oldIndex - newIndex; i++) {
    objetos[posi-1].pos = posi
    posi--
    }
  }
  else {
    for (i ; i < newIndex - oldIndex; i++) {
      objetos[posi+1].pos = posi
      posi++
    }
  }
  objetos[oldIndex].pos= newIndex

  return objetos;
}
