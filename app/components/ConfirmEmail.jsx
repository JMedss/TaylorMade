
export const ConfirmEmail = ({ name, date, time, confirmed }) => (
    <div className="flex flex-col items-center">
      <h5 className="text-[16px]">Dear {name},</h5>
      <p>{`Your appointment with Taylor-Made at ${time} on ${date} has been ${confirmed ? "confirmed" : "denied" }.`}</p>
    </div>
  ); 