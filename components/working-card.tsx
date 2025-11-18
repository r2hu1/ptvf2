"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface CardType {
	name: string;
	description: string | null;
	position: string;
	start_date: string;
	end_date: string | null;
}

export function WorkingCard({ data }: { data: CardType }) {
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
		hover: {
			y: -4,
			transition: { duration: 0.3 },
		},
	};

	return (
		<motion.div
			rel="noopener noreferrer"
			variants={cardVariants}
			whileHover="hover"
			className="group block"
		>
			<div className="space-y-2">
				<div className="flex items-center justify-between gap-3">
					<h3 className="text-foreground text-sm group-hover:text-foreground transition-colors">
						{data.name}
					</h3>
					<span className="text-[12px] text-foreground">{data.position}</span>
				</div>

				<p className="text-xs text-muted-foreground leading-relaxed">
					{data.description}
				</p>

				<div className="flex items-center justify-between pt-3 border-t border-border/30">
					<div className="flex items-center gap-3 text-xs text-muted-foreground">
						<span>{data.start_date}</span>
						<span>·</span>
						<span>{data.end_date || "Present"}</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
