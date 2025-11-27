import ExpertCounter from "@/components/ExpertCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expert | Counter State App",
	description: "Expert Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl">
						Expert Counter State
					</CardTitle>
				</CardHeader>

				<CardContent>
					<ExpertCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
