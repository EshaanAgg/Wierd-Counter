import { useStore } from "@nanostores/react";
import { $counter } from "../stores/counter";

export const Display = () => {
	// The counter is now a reactive variable that can be accessed directly
	const counter = useStore($counter);

	return (
		<>
			<div className="bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl w-36 align-middle border-4">
				{/* React Logo */}
				<div className="flex">
					<p className="font-semibold flex-1 text-lg text-black/70">React</p>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="-11.5 -10.232 23 20.463">
							<circle r="2.05" fill="#61dafb"></circle>
							<g fill="none" stroke="#61dafb">
								<ellipse rx="11" ry="4.2"></ellipse>
								<ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
								<ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
							</g>
						</svg>
					</div>
				</div>

				<div className="text-dark-800 font-bold text-2xl flex items-center justify-center m-1">
					Counter
				</div>
				<div className="text-black/80 flex items-center justify-center rounded-md text-4xl">
					{counter}
				</div>
			</div>
		</>
	);
};
