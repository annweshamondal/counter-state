"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-2xl">
				Count: <span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-8">
				<Button
					onClick={minus}
					className="cursor-pointe"
					variant={"destructive"}>
					<MinusCircleIcon /> Minus 1
				</Button>

				<Button
					onClick={plus}
					className="cursor-pointer">
					<PlusCircleIcon /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
