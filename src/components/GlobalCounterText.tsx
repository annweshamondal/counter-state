"use client";

import { countAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const GlobalCounterText = () => {
	const count = useAtomValue(countAtom);

	return (
		<div className="text-center text-2xl">
			Count: <span className="font-semibold">{count}</span>
		</div>
	);
};

export default GlobalCounterText;
