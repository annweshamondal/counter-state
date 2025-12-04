"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		if (count < 100) {
			setCount(count + 1);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count < 91) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count > 9) {
			setCount(count - 10);
		}
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-2xl">
				Count: <span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-8">
				<Button
					onClick={minus}
					className="cursor-pointer"
					variant={"destructive"}
					disabled={count < 1}>
					<MinusCircleIcon /> Minus 1
				</Button>

				<Button
					onClick={plus}
					className="cursor-pointer"
					disabled={count > 99}>
					<PlusCircleIcon /> Plus 1
				</Button>

				<Button
					onClick={minusTen}
					className="cursor-pointer"
					variant={"destructive"}
					disabled={count < 10}>
					<MinusCircleIcon /> Minus 10
				</Button>

				<Button
					onClick={plusTen}
					className="cursor-pointer"
					disabled={count > 90}>
					<PlusCircleIcon /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default ExpertCounter;
