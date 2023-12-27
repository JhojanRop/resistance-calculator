import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Modal = (resistance, tolerance) => {
	return MySwal.fire({
		titleText: "More values",
		html: (
			<div className="text-left mx-auto w-5/6">
				<p className="font-semibold">
					Tolerance: <span className="font-normal">±{tolerance}%</span>
				</p>
				<p className="font-semibold">
					Maximum resistance:{" "}
					<span className="font-normal">
						{resistance + resistance * (tolerance / 100)} Ω
					</span>
				</p>
				<p className="font-semibold">
					Minimum resistance:{" "}
					<span className="font-normal">
						{resistance - resistance * (tolerance / 100)} Ω
					</span>
				</p>
			</div>
		),
		showConfirmButton: true,
		confirmButtonText: "Ok",
		confirmButtonColor: "rgb(168 85 247)",
	});
};

export default Modal;
