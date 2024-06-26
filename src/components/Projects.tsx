"use client"
import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { X, Globe } from "lucide-react";
import {motion} from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const projects: {
	href?: string;
	title: string;
	description: string;
	stack: string[];
	repo?: string;
	X?: string;
}[] = [
	{
		href: "https://campusconnectcms.000webhostapp.com/",
		title: "Campus Connect - A Query Management System",
		description:
			"Campus Connect is a comprehensive query management system designed for colleges, schools, and various organizations.",
		stack: ["XAMPP","PHP", "MySQL", "Bootstrap", "HTML5",],
		repo: "https://github.com/mohittjee/Complaint-Management-System",
		// X:   ""
	},
	{
		// href: "",
		title: "Swagy Hub - Ecommerce Website",
		description: "Swagy Hub is an ecommerce platform offering a seamless shopping experience with secure authentication and smooth data flow.",
		stack: ["MERN", "Firebase🔥", ],
		repo: "https://github.com/mohittjee/SwagyHub",
	},
	{
		// href: "",
		title: "Groovify - A Music Player",
		description: "Groovify is a music player application featuring a clean and intuitive interface, allowing users to create playlists and manage song libraries efficiently.",
		stack: ["HTML5","CSS3","JavaScript",],
		// repo: "",
	},
];

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				Projects{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#projects"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
				<span aria-hidden className="text-muted-foreground/50 text-sm ml-2">
					(sorted by most recent)
				</span>
			</h2>

			<div className="grid grid-cols-1 gap-4 ">
				{projects.map((project, i) => (
					<Card key={i} className="shadow-sm rounded-2xl dark:hover:bg-zinc-900 cursor-pointer">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription className="tracking-normal">{project.description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<Separator />
							<div className="flex items-center flex-wrap gap-2 ">
								{project.href && (
									<Link target="_blank" href={project.href}>
										<motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<Globe className="mr-2 size-4" />
											Website
										</Button>
										</motion.button>
									</Link>
								)}
								{project.repo && (
									<Link target="_blank" href={project.repo}>
										<motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<GitHubLogoIcon className="mr-2 size-4" />
											Repo
										</Button>
										</motion.button>
									</Link>
								)}
								{project.X && (
									<Link target="_blank" href={project.X}>
										<motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<X className="mr-2 size-4" />
											View on X
										</Button>
										</motion.button>
									</Link>
								)}
							</div>
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<Badge className="opacity-50 rounded-xl" key={tech}>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Projects;
