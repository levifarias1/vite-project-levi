import { useState, useEffect } from "react";

export default function CalculadoraDolar() {
  /**
   * pesos → lo que el usuario escribe en el input
   * tasa → la tasa del dólar que trae la API
   * loading → indica si la API todavía se está cargando
   */
  const [pesos, setPesos] = useState("");
  const [tasa, setTasa] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * useEffect:
   * Este bloque se ejecuta UNA sola vez cuando el componente aparece en pantalla.
   * Sirve para hacer la llamada a la API y traer la tasa del dólar actualizada.
   */
  useEffect(() => {

    // Definimos una función async para poder usar "await".
    const fetchTasa = async () => {
      try {
        /**
         * Hacemos un fetch a la API gratuita:
         *    https://open.er-api.com/v6/latest/ARS
         * Esta API devuelve un JSON con muchas divisas.
         * En nuestro caso queremos ARS → USD.
         */
        const res = await fetch("https://open.er-api.com/v6/latest/ARS");

        // Convertimos la respuesta a un objeto JSON.
        const data = await res.json();

        /**
         * Si la API respondió correctamente,
         * guardamos la tasa del dólar:
         *    data.rates.USD
         */
        if (data.result === "success") {
          setTasa(data.rates.USD);
        }
      } catch (error) {
        /**
         * Si ocurre un error (sin internet, API caída, etc.)
         * lo mostramos en la consola para depurar.
         */
        console.log("Error cargando tasa:", error);
      } finally {
        /**
         * No importa si salió bien o mal,
         * dejamos de mostrar "Cargando..."
         */
        setLoading(false);
      }
    };

    // Ejecutamos la función que definimos arriba.
    fetchTasa();

  }, []); // ← El array vacío significa que solo se ejecuta una vez.


  /**
   * Función para convertir los pesos a dólares.
   * Si todavía no hay tasa o el usuario no escribió un número,
   * siempre devolvemos 0.00 para evitar errores.
   */
  const convertir = () => {
    if (!pesos || isNaN(pesos) || tasa === null) return "0.00";

    /**
     * Fórmula simple:
     *    pesos * tasa = dólares
     */
    return (pesos * tasa).toFixed(2); // Redondeamos a 2 decimales.
  };


  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-lg rounded-xl">

      {/* Título de la app */}
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Conversor ARS → USD (con API)
      </h2>

      {/* Input donde el usuario escribe los pesos */}
      <input
        type="number"
        placeholder="Ingrese pesos argentinos"
        value={pesos}
        onChange={(e) => setPesos(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />

      {/* Si la API todavía se está cargando, mostramos un mensaje... */}
      {loading ? (
        <p className="text-gray-600 text-center">Cargando tasa actual...</p>
      ) : (
        /**
         * ...y si ya cargó, mostramos el resultado.
         */
        <p className="text-center text-lg font-semibold">
          USD: {convertir()}
        </p>
      )}
    </div>
  );
}
