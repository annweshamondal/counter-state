import AdvanceCounter from "@/components/AdvanceCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance | Counter State App",
	description: "Advance Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl">
						Advance Counter State
					</CardTitle>
				</CardHeader>

				<CardContent>
					<AdvanceCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
