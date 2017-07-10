import React, { Component } from 'react';
import { SortableContainer, SortableElement} from 'react-sortable-hoc';
import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Itemp from './itemp';
import base from '../../rebase';



//Este componente maneja transacciones
export default class Categoria extends Component {
  constructor(props) {
        super(props);
        this.state = {items:[]}
        this.onSortEnd = this.onSortEnd.bind(this);
        this.onGestionarEdicion= this.onGestionarEdicion.bind(this);
        this.agregarProducto= this.agregarProducto.bind(this);
        this.onBorrar=this.onBorrar.bind(this);
    }

 //Uso re-base para sincronizar el estado del objeto items con la db
    componentDidMount() {
      console.log('La Categoria Key:' + this.props.categoriaKey)
      base.syncState('restaurantes/oconnells/menu/' + this.props.categoriaKey +'/productos/', {
        context: this,
        state: 'items',
        queries: {
          orderByChild: 'pos'
                  },
        keepKeys: true,
        asArray: true
      });

      console.log('key de los items:'+ this.props.value)
    }

//hago el push a la db para crear un nuevo pructo vacio. lo asigno a la ultima posicion de de objeto items.
  agregarProducto = () => {

    const nuevaPos = this.state.items.length
    var immediatelyAvailableReference = base.push('restaurantes/oconnells/menu/' + this.props.categoriaKey + '/productos/', {
    data: {nombre: ' ',
          descripcion: '',
          precio: '',
          disponible: true,
          pos: nuevaPos},
        });
  }

//re-ordeno los objetos luego de desplazar un item.
  onSortEnd = ({ oldIndex, newIndex }) => {
    const items = this.state.items
    // pongo en la nueva pos al elemento que esta en la vieja
    items[oldIndex].pos = 999
    var claveitem = items[oldIndex].key


    if(oldIndex > newIndex){
      var posi = oldIndex
      for (var i = 0; i < oldIndex - newIndex; i++) {
      items[posi-1].pos = posi
      posi--
      }
    }
    else {
      var posi = oldIndex
      for (var i = 0; i < newIndex - oldIndex; i++) {
        items[posi+1].pos = posi
        posi++
      }
    }
    items[oldIndex].pos= newIndex

    this.setState({items: items});
  };


//actualizo el objeto items cada vez que edito un elemento.
  onGestionarEdicion = (inicial, nuevo, posicion, elemento) => {

    const items = this.state.items;

    switch (elemento) {
      case 'nombre':
        items[posicion].nombre = nuevo;
          break;
      case 'descripcion':
          items[posicion].descripcion = nuevo;
            break;
      case 'precio':
            items[posicion].precio = nuevo;
        break;

      default:

    }

    this.setState({ items : items})
  };

  onGestionarDisponibilidad = (disponibilidad, posicion) =>{
      const items = this.state.items;
    items[posicion].disponibilidad = !disponibilidad;
      this.setState({ items : items})
  }


 onBorrar = (key) =>{
   base.remove('restaurantes/oconnells/'+ key, function(err){
   if(!err){

   }
 });
 }

  //devuelve un SortableList con los props naranjas
  render() {
    return(
    <Card className='categoria_tarjeta'>
      <CardText>
         <SortableList2
           items={this.state.items}
           pressDelay={150}
           onSortEnd={this.onSortEnd}
           onGestionarEdicion={this.onGestionarEdicion}
           onBorrar={this.onBorrar}
           agregarProducto={this.agregarProducto}
         onGestionarDisponibilidad={this.onGestionarDisponibilidad}/>
      </CardText>
  </Card>
    )
  }
}


//Este compoenente genera la categoria
const SortableList2 = SortableContainer(({ items, onGestionarEdicion, onGestionarDisponibilidad , agregarProducto, onBorrar }) => {
//Muestra la lista
  return(
    <List>
      <Subheader>Cervezas
        <FloatingActionButton
          style={{float: 'right',}}
          onTouchTap={agregarProducto}>
        <ContentAdd />
      </FloatingActionButton>

    </Subheader>
  {

//Hace un loop por todos los objetos de items y por cada uno crea un sortableItem y le pasa los porops naranjas

    items.map((value, index) => (
        <SortableItem2
          key={value.key}
          index={index}
          value={value}
          onBorrar={onBorrar}
          onGestionarEdicion={onGestionarEdicion}
          onGestionarDisponibilidad={onGestionarDisponibilidad}
           />
    ))}
  </List>
  );
});


//Este componente  genera los items de la lista. Es stateless
const SortableItem2 = SortableElement(({ value, index, onGestionarEdicion, agregarProducto, onGestionarDisponibilidad , onBorrar }) =>
  <div>
  <Itemp
    value={value}
    index={index}
    onBorrar={onBorrar}
    onGestionarEdicion={onGestionarEdicion}
    onGestionarDisponibilidad={onGestionarDisponibilidad}
/>
  </div>
);
