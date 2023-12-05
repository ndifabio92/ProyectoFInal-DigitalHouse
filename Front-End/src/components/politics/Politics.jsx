import Typography from "@mui/material/Typography";
import "./Politics.css"

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
          Reservas
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
          <p>Se puede realizar una reserva hasta una hora antes del inicio de la misma.</p>
          <p>
            Se puede cancelar una reserva hasta una hora antes del inicio de la misma. En caso
            contrario, el usuario deberá abonar el precio del turno en el lugar de la reserva.
          </p>
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
          Pagos
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
          <p>Los pagos se realizan personalmente en el lugar de la reserva.</p>
          <p>El precio es por cancha, no importa la cantidad de jugadores que vayan.</p>
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
          Uniendo Pasiones, Forjando Comunidad
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
            Inclusividad: Queremos que todos, desde principiantes hasta expertos, se sientan
            bienvenidos.
          </p>
          <p>
            Respeto Mutuo: Valoramos el respeto y la cortesía. En nuestra comunidad, cada individuo
            es apreciado, y esperamos que todos traten a los demás con amabilidad y consideración.
          </p>
          <p>
            Momentos Agradables: No solo se trata de deporte, sino también de disfrutar del tiempo
            juntos. Queremos que cada momento sea memorable y lleno de alegría.
          </p>
        </Typography>
      </div>
    </div>
    </>
  );
};

export default Politics;