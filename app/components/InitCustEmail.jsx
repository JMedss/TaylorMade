

export const InitCustEmail = ({ name, barber, date, time }) => (
  <div className="flex flex-col items-center">
    <h5 className="text-[16px]">Dear {name},</h5>
    <p>Thank you for booking with Taylor-Made. We want to inform you that your recent appointment request has been successfully processed. Currently, it is in the queue, awaiting confirmation from your selected barber.</p>
    <p>If you provided your phone number during the booking, please anticipate a confirmation text once the barber has confirmed the appointment. Alternatively, if you did not provide a phone number, you can expect an email notification with the confirmation.</p>
    <p>We appreciate your patience and look forward to providing you with a seamless and enjoyable experience at Taylor-Made Barber Shop.</p>

    <ul>
      <li>Date: {date}</li>
      <li>Time: {time}</li>
      <li>Barber: {barber}</li>
    </ul>
    <div>
      <a href="https://www.taylormadebarbershop.com">Click to return to website</a>
    </div>
  </div>
); 