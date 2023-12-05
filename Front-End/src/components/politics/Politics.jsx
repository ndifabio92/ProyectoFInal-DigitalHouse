import Typography from "@mui/material/Typography";
import "./Politics.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Politics = () => {


  return (
    <>
    <Typography
          variant="h4"
          component="h4"
          sx={{
            height: "30px",
            padding: "30px",
            fontSize: "26px",
            fontWeight: "bold",
            color: "#1F2E7B",
            textDecoration: "underline",
          }}
        >
          Políticas de uso
        </Typography>
    <div className="politics-container"> 
      <div className="section-container">
        <Typography
          variant="h5"
          component="h5"
          sx={{
            height: "30px",
            padding: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1F2E7B",
          }}
        >
          Reservas <CalendarMonthIcon />
        </Typography>
        
        
        <Typography
          variant="body1"
          component="div"
          sx={{
            padding: "10px",
            fontSize: "14px",
            color: "#1F2E7B",
          }}
        >
          <p>Se puede realizar  o cancelar una reserva hasta una hora antes del inicio de la misma. Las cancealaciones que no cumplan este plazo serán cobradas.</p>
        </Typography>
      </div>

      <div className="section-container">
        <Typography
          variant="h5"
          component="h5"
          sx={{
            height: "30px",
            padding: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1F2E7B",
          }}
        >
          Pagos <PaidIcon/>
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            padding: "10px",
            fontSize: "14px",
            color: "#1F2E7B",
          }}
        >
          <p>Los pagos se realizan personalmente en el lugar de la reserva antes de iniciar el turno.</p>
          <p>El precio es por cancha, no importa la cantidad de jugadores que asistan.</p>
        </Typography>
      </div>

      <div className="section-container">
        <Typography
          variant="h5"
          component="h5"
          sx={{
            height: "30px",
            padding: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1F2E7B",
          }}
        >
          Uniendo Pasiones, forjando Comunidad <HandshakeIcon/>
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            padding: "10px",
            fontSize: "14px",
            color: "#1F2E7B",
          }}
        >
          <p>
            Inclusividad: Queremos que todas las personas, principiantes y expertas, se sientan
            bienvenidas.
          </p>
          <p>
            Respeto Mutuo: Valoramos a las personas en su diversidad. En nuestra comunidad, nos brindamos siempre un trato respetuoso, cordial y justo.
          </p>
          <p>
            Momentos Agradables: Entrenar no solo se trata de deporte, sino también de disfrutar del tiempo compartido. Queremos que cada momento sea memorable y lleno de alegría.
          </p>
        </Typography>
      </div>
    </div>
    </>
  );
};

export default Politics;