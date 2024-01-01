

export const InitBarberEmail = ({ barber, name, time, date, service, location }) => (
    <div>
      <h5>Dear {barber},</h5>
      <p>{name} has requested an appointment:</p>
      <ul>
        <li>Date: {date}</li>
        <li>Time: {time}</li> 
        <li>Service: {service}</li>
      </ul>
      <a href={`https://www.taylormadebarbershop.com/${location}barbershop/${date}-${time}-${name}`}>{`https://www.taylormadebarbershop.com/${location}barbershop/${date}-${time}-${name}`}</a>
    </div>
  ); 