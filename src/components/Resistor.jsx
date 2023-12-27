const Resistor = ({ bands }) => {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 1534 284"
			style={{ enableBackground: "new 0 0 1534 284" }}
			xmlSpace="preserve">
			<g>
				<path
					fill="#8C8C8C"
					d="M1499.8,181H34.2C15.3,181,0,163.8,0,142.5l0,0C0,121.2,15.3,104,34.2,104h1465.6c18.9,0,34.2,17.2,34.2,38.5
l0,0C1534,163.8,1518.7,181,1499.8,181z"
				/>
				<path
					fill="#D8B476"
					d="M760,27c-55.9-0.2-93-0.3-93-0.3h0c-32.6-0.9-65.3-1.1-98-0.7c-35.5-2.8-73.7-7.8-114-16
c-13.7-2.8-27-5.8-39.9-9c0,0-63.1,0-102.1,0s-39,24-39,24v71l3,163c0,0-3,25,24,25s99.3,0,99.3,0s25.7,2,55.7-8
c17.3-5.8,25.6-10.2,37-12.9c16.1-3.8,28.8-3.2,35-3.1c26.5,0.5,74.3-0.4,139-2h93c0,0,100,2,139,2s42,6,72,16s55.7,8,55.7,8
s72.3,0,99.3,0s24-25,24-25l3-163V25c0,0,0-24-39-24s-102.1,0-102.1,0S987,2,972,10s-47,17-114,16s-98,0.7-98,0.7l0,0"
				/>
				<path
					fill="#E4C8A0"
					d="M971,24c0,0-32,6-37,8s-12,17,3,18s15,1,15,1h40.8l84.2,2c0,0,12-2,12-18s-17-15-23-15s-41.9,0-52.9,0
C1002,20,971,24,971,24z"
				/>
				<circle fill="#E4C8A0" cx="321" cy="50" r="24" />
			</g>
			<g id="bands">
				<g id="band1">
					<path
						fill={bands.band1.color}
						d="M489,264c-5.1,2-12.7,4.8-22,8c-7.7,2.7-15,5.1-18,6c-8.6,2.7-24.3,5.4-50,6c0-95,0-189,0-284
c31.7,0.8,46.5,5,54,9c1.5,0.8,7.1,2.4,16,3.8c7.7,1.3,12.3,2.5,16,3.2C486.3,97.3,487.7,182.7,489,264z"
					/>
				</g>
				<g id="band2">
					<rect fill={bands.band2.color} x="576" y="26" width="93" height="232" />
				</g>
				<g id="band3">
					<rect fill={bands.band3.color} x="757" y="27" width="93" height="231" />
				</g>
				<g id="band4">
					<g>
						<radialGradient
							id="gradient"
							cx="1038.9847"
							cy="136.6774"
							r="299.0786"
							gradientTransform="matrix(1 0 0 0.9649 0 4.9335)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" style={{ stopColor: bands.band4.color }} />
							<stop offset="1" style={{ stopColor: "#636363" }} />
						</radialGradient>
						<rect fill="url(#gradient)" x="1018" width="39" height="284" />
					</g>
				</g>
			</g>
		</svg>
	);
};

export default Resistor;
