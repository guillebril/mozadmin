import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import ContenidoModal from './contenidoModal';

class CuadradoMesa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      openConfirmation: false,
      valorKeyMesaAbierta: ''
    };

  }

  gestionarAperturaModalMesa = (keyMesa) => {
    this.setState({valorKeyMesaAbierta: this.props.mesa.key});
    this.setState({open: true});
  }
  gestionarAperturaConfirmacionBorradoMesa = () => {
    this.setState({openConfirmation: true});
  }

  gestionarCerrarModalMesa = () => {
    this.setState({open: false});
  }
  gestionarCancelarBorradoMesa = () => {
    this.setState({openConfirmation: false});
  }

  eliminarMesa = () => {
    this.props.borrarMesa(this.props.mesa.key);
  }

  consultarBorradoMesa = () => {
    //preguntar si esta ok borrar el mesa y dps borrar
    this.gestionarAperturaConfirmacionBorradoMesa();
    //revisar si hay que borrar aca, o mandarlo arriba para que la borre el padre
    //base.remove('restaurantes/oconnells/mesas/' + this.props.mesa.key);
  }

  //backgroundColor:"#ecf0f1"
  render() {
    var estiloMesaCuadrado;
    switch (this.props.mesa.estadoMesa) {
      case 'cerrada':
        estiloMesaCuadrado = {
          minWidth: "100px",
          cursor: "pointer",
          minHeight: "100px",
          backgroundColor: "#ecf0f1",
          display: "inherit",
          alignItems: "center",
          margin: "15px"
        };
        break;
        case 'abierta':
          estiloMesaCuadrado = {
            minWidth: "100px",
            cursor: "pointer",
            minHeight: "100px",
            backgroundColor: "#ff9800",
            display: "inherit",
            alignItems: "center",
            margin: "15px"
          };
          break;
          case 'cuenta':
          estiloMesaCuadrado = {
            minWidth: "100px",
            cursor: "pointer",
            minHeight: "100px",
            backgroundColor: "red",
            display: "inherit",
            alignItems: "center",
            margin: "15px"
          };
          break;
          default:
          estiloMesaCuadrado = {
            minWidth: "100px",
            cursor: "pointer",
            minHeight: "100px",
            backgroundColor: "#ecf0f1",
            display: "inherit",
            alignItems: "center",
            margin: "15px"
          };
          break;
        }

        return (<Paper style={estiloMesaCuadrado} onTouchTap={this.gestionarAperturaModalMesa}>
          <p style={{
              width: "100%",
              textAlign: "center",
              fontSize: "36px"
            }}>
            {this.props.mesa.numero}
          </p>

          <Dialog open={this.state.open}>
            <DialogTitle>Detalle de la Mesa</DialogTitle>
            <DialogContent>
              <ContenidoModal mesa={this.props.mesa} valorKeyMesa={this.state.valorKeyMesaAbierta}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.consultarBorradoMesa} color="primary">
                Borrar mesa
              </Button>
              <Button onClick={this.gestionarCerrarModalMesa} color="primary">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={this.state.openConfirmation}>
            <DialogTitle>Confirmar borrado de mesa</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                IMPORTANTE: Si borra la mesa se pierden todos los datos y no hay manera de recuperar los pedidos de esta mesa.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.eliminarMesa} color="primary">
                Borrar
              </Button>
              <Button onClick={this.gestionarCancelarBorradoMesa} color="primary">
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>

        </Paper>);
    }

  }

  export default CuadradoMesa;
