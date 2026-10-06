import { useState } from "react";

function generarReto() {
  return {
    a: Math.floor(Math.random() * 8) + 1,
    b: Math.floor(Math.random() * 8) + 1,
  };
}

/** Verificación simple (suma) para frenar consultas automáticas desde la web. */
export function useMathCaptcha() {
  const [reto, setReto] = useState(generarReto);
  const [respuesta, setRespuesta] = useState("");

  const esValido = respuesta !== "" && Number(respuesta) === reto.a + reto.b;

  function reiniciar() {
    setReto(generarReto());
    setRespuesta("");
  }

  return { reto, respuesta, setRespuesta, esValido, reiniciar };
}

export type MathCaptchaState = ReturnType<typeof useMathCaptcha>;
