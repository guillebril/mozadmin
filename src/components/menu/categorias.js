import React, { Component } from 'react';
import { SortableContainer, SortableElement} from 'react-sortable-hoc';
import { CardText } from 'material-ui/Card';


import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Categoria from './categoria';
import base from '../../rebase';

//ARREGLACO DESPUES DE HABER METIDO LA PATA
//Este componente maneja transacciones
export default class Categorias extends Component {
  constructor(props) {
        super(props);
        this.state = {categorias:[]}
        this.onSortEnd = this.onSortEnd.bind(this);
        this.onGestionarEdicion= this.onGestionarEdicionCategoria.bind(this);
        this.agregarCategoria= this.agregarCategoria.bind(this);
        this.onBorrarCategoria=this.onBorrarCategoria.bind(this);
    }

 //Uso re-base para sincronizar el estado del objeto categorias con la db
    componentDidMount() {
      base.syncState('restaurantes/oconnells/menu', {
        context: this,
        state: 'categorias',
        queries: {
          orderByChild: 'pos'
                  },
        keepKeys: true,
        asArray: true
      });
    }

//hago el push a la db para crear un nuevo pructo vacio. lo asigno a la ultima posicion de de objeto categorias.
  agregarCategoria = () => {
    const nuevaPos = this.state.categorias.length
    var immediatelyAvailableReference = base.push('restaurantes/oconnells/menu', {
    data: {nombre: 'Nombre de la categoria',
          disponible: true,
          pos: nuevaPos},
        });
  }

//re-ordeno los objetos luego de desplazar un item.
  onSortEnd = ({ oldIndex, newIndex }) => {
    const categorias = this.state.categorias
    // pongo en la nueva pos al elemento que esta en la vieja
    categorias[oldIndex].pos = 999
    var claveitem = categorias[oldIndex].key


    if(oldIndex > newIndex){
      var posi = oldIndex
      for (var i = 0; i < oldIndex - newIndex; i++) {
      categorias[posi-1].pos = posi
      posi--
      }
    }
    else {
      var posi = oldIndex
      for (var i = 0; i < newIndex - oldIndex; i++) {
        categorias[posi+1].pos = posi
        posi++
      }
    }
    categorias[oldIndex].pos= newIndex

    this.setState({categorias: categorias});
  };


//actualizo el objeto categorias cada vez que edito un elemento.
  onGestionarEdicionCategoria = (inicial, nuevo, posicion, elemento) => {

    const categorias = this.state.categorias;
    switch (elemento) {
      case 'nombre':
        categorias[posicion].nombre = nuevo;
          break;

      default:

    }

    this.setState({ categorias : categorias})
  };

  onGestionarDisponibilidadCategoria = (disponibilidad, posicion) =>{
      const categorias = this.state.categorias;
    categorias[posicion].disponibilidad = !disponibilidad;
      this.setState({ categorias : categorias})
  }


 onBorrarCategoria = (key) =>{
   base.remove('restaurantes/oconnells/menu'+ key, function(err){
   if(!err){

   }
 });
 }

  //devuelve un SortableList con los props naranjas
  render() {
    return(
    <div>
      <CardText>
         <SortableList
           categorias={this.state.categorias}
           pressDelay={150}
           axis='x'
           onSortEnd={this.onSortEnd}
           onGestionarEdicioncategoria={this.onGestionarEdicioncategoria}
           onBorrarCategoria={this.onBorrarCategoria}
           agregarCategoria={this.agregarCategoria}
         onGestionarDisponibilidadCategoria={this.onGestionarDisponibilidadCategoria}/>
      </CardText>
  </div>
    )
  }
}


//Este compoenente genera la categoria
const SortableList = SortableContainer(({ categorias, onGestionarEdicionCategoria, onGestionarDisponibilidadCategoria , agregarCategoria, onBorrarCategoria }) => {
//Muestra la lista
  return(
    <div>
      <div >
         <RaisedButton
           label="Agregar Categoria"
           style={{float: 'left', display: 'block', marginLeft: '15px'}}
           onTouchTap={agregarCategoria}
           primary={true}
            />
          <br/><br/><br/>
      </div>



        <div className='categorias_tarjetas'>
  {
//Hace un loop por todos los objetos de categorias y por cada uno crea un sortableItem y le pasa los porops naranjas


    categorias.map((value, index) => (

        <SortableItem key={value.key}
          index={index}
          value={value}
          onBorrarCategoria={onBorrarCategoria}
          onGestionarEdicionCategoria={onGestionarEdicionCategoria}
          onGestionarDisponibilidadCategoria={onGestionarDisponibilidadCategoria}
           />
    ))}

    </div>
  </div>
  );
});


//Este componente  genera los categorias de la lista. Es stateless
const SortableItem = SortableElement(({ value, index, onGestionarEdicionCategoria, agregarCategoria, onGestionarDisponibilidadCategoria , onBorrarCategoria, categoriaKey }) =>
  <div >
  <Categoria
    categoriaKey={value.key}
    value={value}
    index={index}
    onBorrar={onBorrarCategoria}
    onGestionarEdicion={onGestionarEdicionCategoria}
    onGestionarDisponibilidadCategoria={onGestionarDisponibilidadCategoria}
/>
  </div>
);
