import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import WorkingExperience from "@/components/working";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Header />
			<Hero />
			<Projects />
			<WorkingExperience />
		</main>
	);
}
