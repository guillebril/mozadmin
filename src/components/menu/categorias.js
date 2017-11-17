import React, { Component } from 'react';
import ListaCategorias from './HOC_listaCategorias';
import base from '../../rebase';
import ordenarPosicionObjetos from '../../helper/funcOrdenarPosicionObjetos';

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
    base.push('restaurantes/oconnells/menu', {
    data: {
        nombre: 'Nombre',
        //revisar el valor de tipoCategoria si se cambia, verificar en el codigo que se necesita correlatividad de nombres en otro lado
        tipoCategoria: "Comidas",
        disponible: true,
        pos: nuevaPos},
        });
  }

//re-ordeno los objetos luego de desplazar un item.
  onSortEnd = ({ oldIndex, newIndex }) => {
    const categorias = this.state.categorias;
    var categorias2 = ordenarPosicionObjetos(oldIndex,newIndex,categorias);
    this.setState({categorias: categorias2});
  };

//actualizo el objeto categorias cada vez que edito un elemento.
  onGestionarEdicionCategoria = (inicial, nuevo, posicion, elemento) => {
    const categorias = this.state.categorias;
    switch (elemento) {
      case 'TituloCategoria':
        categorias[posicion].nombre = nuevo;
          break;

      case 'TipoCategoria':
        if(categorias[posicion].tipoCategoria == "Bebidas")
        {
          categorias[posicion].tipoCategoria = "Comidas";
        }
        else {if (categorias[posicion].tipoCategoria == "Comidas")
                {
                  categorias[posicion].tipoCategoria = "Bebidas";
                }
                else {
                  {
                    console.log("Error tipo categoria");
                  }
                }
              }

      default:
      
    }
    this.setState({ categorias : categorias})
  };

  onGestionarDisponibilidadCategoria = (disponibilidad, posicion) =>{
      const categorias = this.state.categorias;
    categorias[posicion].disponibilidad = !disponibilidad;
      this.setState({ categorias : categorias})
  }

  onBorrarCategoria = (key) => {
     base.remove('restaurantes/oconnells/menu' + key)

   }

  render() {
    return(
    <div>
         <ListaCategorias
           categorias={this.state.categorias}
           pressDelay={150}
           axis='x'
           onSortEnd={this.onSortEnd}
           onGestionarEdicionCategoria={this.onGestionarEdicionCategoria}
           onBorrarCategoria={this.onBorrarCategoria}
           agregarCategoria={this.agregarCategoria}
           onGestionarDisponibilidadCategoria={this.onGestionarDisponibilidadCategoria}/>
    </div>
      )
  }
}
