import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove,  } from 'react-sortable-hoc';
import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import Itemp from './itemp';
import base from '../../rebase';



const SortableItem = SortableElement(({ value, index, onGestionarEdicion, agregarProducto }) =>

  <div>

  <Itemp
    value={value}
    index={index}

    onGestionarEdicion={onGestionarEdicion}
    agregarProducto={agregarProducto}/>
  </div>
);


const SortableList = SortableContainer(({ items, onGestionarEdicion, agregarProducto }) => {

  return(
    <List>
      <Subheader>Cervezas
        <FloatingActionButton
          style={{float: 'right'}}
          onTouchTap={agregarProducto}>
        <ContentAdd />
      </FloatingActionButton>
    </Subheader>

  {



    items.map((value, index) => (

        <SortableItem key={value.key}
          index={index}
          value={value}
          onGestionarEdicion={onGestionarEdicion} />
    ))}
  </List>

  );

});


export default class Categoria extends Component {
  constructor(props) {
        super(props);
        this.state = {items:
          //['IPA Cerventum', 'Goose IPA', 'Cream Stout', 'Honey', 'Item 5', 'Item 6']
          []
        };
        this.onSortEnd = this.onSortEnd.bind(this);
        this.onGestionarEdicion = this.onGestionarEdicion.bind(this);
        this.agregarProducto= this.agregarProducto.bind(this);
    }
    componentDidMount() {
      base.syncState('restaurantes/', {
        context: this,
        state: 'items',
        queries: {
        orderByChild: 'pos',
      },
        keepKeys: true,
        asArray: true
      });
    }

  agregarProducto = () => {
    const nuevaPos = this.state.items.length
    var immediatelyAvailableReference = base.push('restaurantes', {
    data: {name: 'George',
          type: 'Grizzly',
          pos: nuevaPos},
  });
  //available immediately, you don't have to wait for the callback to be called
  //var generatedKey = immediatelyAvailableReference.key;
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
    items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  onGestionarEdicion = (inicial, nuevo, indice) => {
        const items = this.state.items;
        items[indice].name = nuevo;
        this.setState({ items : items})
  };

  render() {
    return(
    <Card className='categoria_targeta'>
      <CardText>
         <SortableList
           items={this.state.items}
           pressDelay={150}
           onSortEnd={this.onSortEnd}
           onGestionarEdicion={this.onGestionarEdicion}
           agregarProducto={this.agregarProducto}
             />

      </CardText>
  </Card>
    )
  }
}
