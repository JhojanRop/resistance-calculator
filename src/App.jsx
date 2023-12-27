import React, { useState } from "react";

import Resistor from "./components/Resistor";
import Selects from "./components/Selects";
import HeaderCard from "./components/HeaderCard";
import FooterCard from "./components/FooterCard";
import CalculateButton from "./components/CalculateButton";

function App() {
	const [band1, setBand1] = useState({ name: "Black", color: "black", value: "0" });
	const [band2, setBand2] = useState({ name: "Black", color: "black", value: "0" });
	const [band3, setBand3] = useState({ name: "Black", color: "black", value: "1" });
	const [band4, setBand4] = useState({ name: "Gold", color: "gold", value: "5" });
	const [resistance, setResistance] = useState(0);
	const [showResitance, setShowResistance] = useState(false);

	const bands = { band1, band2, band3, band4 };
	const setBands = { setBand1, setBand2, setBand3, setBand4 };

	return (
		<main className="w-full min-h-screen flex justify-center items-center">
			<section className="w-3/4 max-w-lg p-5 bg-gray-100 border rounded-lg shadow-sm ">
				<HeaderCard />

				<article className="w-3/4 mx-auto my-7">
					<Resistor bands={bands} />
				</article>

				<article className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
					<Selects bands={bands} setBands={setBands} setBand1={setBand1} />
				</article>

				<CalculateButton
					setShowResistance={setShowResistance}
					setResistance={setResistance}
					bands={bands}>
					Calculate
				</CalculateButton>

				{showResitance && <FooterCard resistance={resistance} tolerance={band4.value} />}
			</section>
		</main>
	);
}

export default App;
