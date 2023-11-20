import { useState } from "react";
export const SimpleInput = () => {
  const [firstName, setFirst] = useState("");
  const [endName, setEnd] = useState("");
  const fullName = `${firstName}${endName}`;
  return (
    <>
      <div>
        {" "}
        First:
        <input
          value={firstName}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
      </div>
      <div>
        End
        <input
          value={endName}
          onChange={(e) => {
            setEnd(e.target.value);
          }}
        />
      </div>

      <div>{fullName}</div>
    </>
  );
};
