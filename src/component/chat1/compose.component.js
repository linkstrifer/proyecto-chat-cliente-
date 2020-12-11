import { useState } from "react";

import { API } from "./constants";

function Compose() {
  const [value, setValue] = useState("");

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        if (value !== "") {
          fetch(`${API}/channel/general`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: "kelly",
              text: value,
            }),
          })
            .then(() => {
              setValue("");
            })
            .catch((error) => console.error(error));
        }
      }}
    >
      <input
        className="input"
        placeholder="Escribe tu mensaje aqui"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="boton">
        Enviar
      </button>
    </form>
  );
}

export default Compose;
