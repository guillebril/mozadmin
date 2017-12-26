import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import ContenidoModal from './contenidoModal';

class CuadradoMesa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      valorKeyMesaAbierta: ''
    };

  }

  gestionarAperturaModalMesa = (keyMesa) => {
    this.setState({ valorKeyMesaAbierta: this.props.mesa.key });
    this.setState({ open: true });
  }

  gestionarCerrarModalMesa = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <Paper  style={{minWidth:"100px" ,cursor:"pointer", minHeight:"100px" , backgroundColor:"#ecf0f1", display:"inherit", alignItems:"center", margin:"15px"}}
				onTouchTap={this.gestionarAperturaModalMesa}
			>
				<p style={{width:"100%", textAlign:"center", fontSize:"36px"}}  >
					{this.props.mesa.numero}
				</p>


				<Dialog open={this.state.open} onRequestClose={this.gestionarCerrarModalMesa}>
          <DialogTitle>Detalle de la Mesa</DialogTitle>
          <DialogContent>

						<ContenidoModal mesa={this.props.mesa} valorKeyMesa={this.state.valorKeyMesaAbierta} />


          </DialogContent>
          <DialogActions>

            <Button onClick={this.gestionarCerrarModalMesa} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>


			</Paper>
    );
  }

}

export default CuadradoMesa;