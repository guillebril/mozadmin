import React, { Component } from 'react';
import  Card  from 'material-ui/Card';

import base from '../../rebase';
import ListaProductos from './HOC_listaProductos';
import ordenarPosicionObjetos from '../../helper/funcOrdenarPosicionObjetos';


//Este componente maneja transacciones
export default class ItemCategoria extends Component {
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
      base.syncState('restaurantes/oconnells/menu/' + this.props.categoriaKey +'/productos/', {
        context: this,
        state: 'items',
        queries: {
          orderByChild: 'pos'
                  },
        keepKeys: true,
        asArray: true
      });
    }

//hago el push a la db para crear un nuevo pructo vacio. lo asigno a la ultima posicion de de objeto items.
  agregarProducto = ({gestionarApertura}) => {
    const nuevaPos = this.state.items.length
    base.push('restaurantes/oconnells/menu/' + this.props.categoriaKey + '/productos/', {
    data: {nombre: '',
          descripcion: '',
          precio: '',
          disponibilidad: true,
          pos: nuevaPos},
        });


  }

//re-ordeno los objetos luego de desplazar un item.
  onSortEnd = ({ oldIndex, newIndex }) => {
    const items = this.state.items
    var items2 = ordenarPosicionObjetos(oldIndex,newIndex,items);
    this.setState({items: items2});
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
     base.remove('restaurantes/oconnells/menu/' + this.props.categoriaKey + '/productos/' + key, function(err){
     if(!err){

       }
     });
   }

  //devuelve un SortableList con los props naranjas
  render() {
    return(
    <Card className='categoria_tarjeta'>
      <ListaProductos
        items={this.state.items}
        categoria={this.props.categoria}
        pressDelay={150}
        onSortEnd={this.onSortEnd}
        onGestionarEdicion={this.onGestionarEdicion}
        onBorrar={this.onBorrar}
        onBorrarCategoria={this.onBorrarCategoria}
        agregarProducto={this.agregarProducto}
        onGestionarDisponibilidad={this.onGestionarDisponibilidad}
        onGestionarEdicionCategoria={this.props.onGestionarEdicionCategoria}
      />
    </Card>
      )
    }
}
