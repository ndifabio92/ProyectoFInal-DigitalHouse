import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import useFetchDataApi from "../../hooks/useFetchDataApi";
import { METHODS } from "../../constants/methods";
import { ENDPOINTS } from "../../constants/endpoints";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

const ModalConfirm = ({ values, idClub, date }) => {
  const { userData } = AuthContext();

  const navigate = useNavigate();

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [isOpen, setIsOpen] = useState(false);

  const { fetchData } = useFetchDataApi();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //Formateo fecha
  const fechaOriginal = date;
  const fecha = new Date(fechaOriginal);
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); 
  const anio = fecha.getFullYear();
  const fechaFormateada = `${dia}-${mes}-${anio}`;

  //Formateo hora inicio
  const horaInicioOriginal = values.startDatetime;
  const horaInicio  = new Date(horaInicioOriginal);
  const horasIni = horaInicio.getHours().toString().padStart(2, '0');
  const minutosIni = horaInicio.getMinutes().toString().padStart(2, '0');
  const horaInicioFormateada = `${horasIni}:${minutosIni}`;

  //Formateo hora finalización
  const horaFinOriginal = values.endDatetime;
  const horaFin  = new Date(horaFinOriginal);
  const horasFin = horaFin.getHours().toString().padStart(2, '0');
  const minutosFin = horaFin.getMinutes().toString().padStart(2, '0');
  const horaFinFormateada = `${horasFin}:${minutosFin}`;



  const confirm = async () => {
    const resp = await fetchData(ENDPOINTS.RESERVATION, METHODS.POST, values);

    handleClick();

    if (resp.error) {
      Swal.fire({
        title: resp.error,
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Confirmar",
      }).then(() => {
        console.log(resp.error);
      });
    } else {
      Swal.fire({
        title: "Reserva agregada con éxito",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Confirmar",
      }).then(() => {
        console.log("Reserva agregada con éxito");
      });
    }

    navigate(`/club/${idClub}`);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClick}
        type="submit"
        sx={{
          marginX: "auto",
        }}
      >
        Reservar
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClick}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{ color: "#FF914D" }}>
          Confirmación de reserva
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul>
              <li>
                <p>Club:</p>
              </li>
              <li>
                <p>Cancha:</p>
              </li>
              <li>
                <p>Fecha: {fechaFormateada}</p>
              </li>
              <li>
                <p>Hora inicio: {horaInicioFormateada} hs</p>
              </li>
              <li>
                <p>Hora finalización: {horaFinFormateada} hs</p>
              </li>
              <li>
                <p>
                  Usuario: {userData.name} {userData.lastname} -{" "}
                  {userData.username}
                </p>
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClick}>
            Cancelar
          </Button>
          <Button onClick={confirm} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalConfirm;
