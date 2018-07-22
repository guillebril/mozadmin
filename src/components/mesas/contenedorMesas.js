// Dependencias
import React, { Component } from 'react';
import base from '../../rebase';
// import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import CuadradoMesa from './cuadradoMesa';
import ContenidoModal from './contenidoModal';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class ContenedorMesas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mesas: [],
      open: false,
      valorKeyMesaCreada: ''
    }
    this.agregarMesa = this.agregarMesa.bind(this);
  }
  handleOpen = () => {

    var valorTemp = this.agregarMesa();
    this.setState({ valorKeyMesaCreada: valorTemp });
    this.setState({ open: true });
    console.log(valorTemp);
  };

  handleCloseCancelar = () => {
    this.setState({ open: false });
    base.remove('restaurantes/oconnells/mesas/' + this.state.valorKeyMesaCreada);
  };
  handleCloseAceptar = () => {
    this.setState({ open: false });
  };

  //Uso re-base para sincronizar el estado del objeto mesas con la db
  componentDidMount() {
    base.bindToState('restaurantes/oconnells/mesas', {
      context: this,
      state: 'mesas',
      queries: { orderByChild: 'pos' },
      keepKeys: true,
      asArray: true
    });
  }

  agregarMesa = () => {
    var valorPush = base.push('restaurantes/oconnells/mesas', {
      data: {
        numero: "2",
        codigoMesa: "dgm92",
        total: '0',
        fechaHoraIngreso: '',
        estado: 'en espera',
      },
    });
    return (valorPush.key)
  }
  borrarMesa = (keyMesaBorrar) =>
  {
    base.remove('restaurantes/oconnells/mesas/' + keyMesaBorrar);
  }

  render() {

    var mesasAbiertas = Object.values(this.state.mesas)
    .filter (mesa => mesa.estadoMesa === "abierta")
    .map((mesa, index) => {
      return (<CuadradoMesa key={mesa.key} mesa={mesa} borrarMesa={this.borrarMesa.bind(this)}/>)
    });
    var mesasCerradas = Object.values(this.state.mesas)
    .filter (mesa => mesa.estadoMesa === "cerrada")
    .map((mesa, index) => {
      return (<CuadradoMesa key={mesa.key} mesa={mesa} borrarMesa={this.borrarMesa.bind(this)}/>)
    });
    var mesasPedidasCuenta = Object.values(this.state.mesas)
    .filter (mesa => mesa.estadoMesa === "cuenta")
    .map((mesa, index) => {
      return (<CuadradoMesa key={mesa.key} mesa={mesa} borrarMesa={this.borrarMesa.bind(this)}/>)
    });

    return (
      <div style={{width:"100%"}}>
				<div style={{marginBottom:"25px"}}>
					<Button  onTouchTap={this.handleOpen}>Agregar Mesa</Button>
					<Dialog
					 open={this.state.open}
					 onClose={this.handleClose}
					 aria-labelledby="alert-dialog-title"

					 >
					 <DialogTitle id="alert-dialog-title">{"Nueva cuenta"}</DialogTitle>
					 <DialogContent>
					 <ContenidoModal valorKeyMesa={this.state.valorKeyMesaCreada} />
					 </DialogContent>
					 <DialogActions>
             <Button primary  onTouchTap={this.handleCloseCancelar}> Eliminar </Button>
             <Button primary  keyboardFocused={true} onTouchTap={this.handleCloseAceptar}> Cerrar </Button>
					 </DialogActions>

				</Dialog>
				</div>

				<div style={{display:"flex",  flexWrap:"wrap"}}>
        <h1>Mesas Abiertas</h1>
				{mesasAbiertas}
				</div>
        <div style={{display:"flex",  flexWrap:"wrap"}}>
        <h1>Cuentas pedidas</h1>
        {mesasPedidasCuenta}
				</div>
        <div style={{display:"flex",  flexWrap:"wrap"}}>
        <h1>Mesas Cerradas</h1>
        {mesasCerradas}
				</div>
			</div>
    );
  }
}

export default ContenedorMesas;
