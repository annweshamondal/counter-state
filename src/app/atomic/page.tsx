import GlobalCounterButtons from "@/components/GlobalCounterButtons";
import GlobalCounterText from "@/components/GlobalCounterText";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Atomic | Counter State App",
	description: "Atomic Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl">
						Atomic Counter State
					</CardTitle>
				</CardHeader>

				<CardContent className="space-y-8">
					<GlobalCounterText />

					<GlobalCounterButtons />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
