import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendario() {
    const [value, setValue] = useState(new Date());

    return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-lg rounded-xl">
    <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Calendario con Tailwind
    </h2>

    <Calendar
        onChange={setValue}
        value={value}
        className="rounded-lg border border-gray-300 p-2"
    />

    <p className="text-center mt-4 text-gray-600">
        Seleccionaste:{" "}
        <span className="font-bold">{value.toLocaleDateString()}</span>
    </p>
    </div>
    );
}