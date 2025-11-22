import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	return (
		<div className="space-y-8">
			<div className="text-center text-2xl">
				Count: <span className="font-semibold">0</span>
			</div>

			<div className="grid grid-cols-2 gap-8">
				<Button
					className="cursor-pointe"
					variant={"destructive"}>
					<MinusCircleIcon /> Minus 1
				</Button>

				<Button className="cursor-pointer">
					<PlusCircleIcon /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
