import { useState, useEffect, } from "react";
import "../CSS/calculadora.css";

export default function CalculadoraDolar() {

    const[pesos, setPesos] = useState("");
    const[tasa, setTasa] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchTasa = async () => {
    try {
    const resul = await fetch("https://open.er-api.com/v6/latest/ARS");
    const data = await res.json();

    if (data.result === "success") {
        setTasa(data.rates.USD); // Guardamos el valor del dólar
    }
    } catch (error) {
    console.log("Error cargando API", error);
    } finally {
      setLoading(false); // Ocultamos el mensaje de "cargando"
    }
    };

    fetchTasa();
}, []);

    return (
        <div className="conversor-container">

    <h2 className="conversor-title">Conversor ARS → USD</h2>

    <input 
    type="number"
    placeholder="Ingresá pesos argentinos"
    value={pesos}
    onChange={(e) => setPesos(e.target.value)}
    className="conversor-input"/>

    {loading ? (
        <p className="conversor-loading">Cargando cotización...</p>
    ) : (
        <p className="conversor-result">
        USD: {tasa && pesos ? (pesos * tasa).toFixed(2) : "0.00"}
        </p>
    )}

    </div>

    );
}