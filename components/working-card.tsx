"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface PromotionType {
  title: string;
  description: string;
  start_date: string;
  end_date?: string | null;
}

export interface CardType {
  name: string;
  description: string | null;
  position: string;
  start_date: string;
  end_date?: string | null;
  promotion?: PromotionType;
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
    <div className="group block space-y-4">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="group block space-y-4"
      >
        {data.promotion && (
          <div className="w-full space-y-2">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm">Tayst AI</p>
                <p className="text-[12px] leading-relaxed bg-secondary p-0.5 rounded-full px-1.5">
                  {data.promotion.title}
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.promotion.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/80 mt-3!">
              <span>{data.promotion.start_date}</span>
              <span>·</span>
              <span>{data.promotion.end_date || "Present"}</span>
            </div>
          </div>
        )}
      </motion.div>
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="group block space-y-4"
      >
        <div
          className={cn(
            "space-y-2",
            data.promotion && "mt-8! border-l-2 pl-4 ml-4",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm text-foreground">{data.name}</h3>
            <span className="text-[12px] text-foreground bg-secondary p-0.5 rounded-full px-1.5">
              {data.position}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            {data.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-foreground/80 mt-3!">
            <span>{data.start_date}</span>
            <span>·</span>
            <span>{data.end_date || "Present"}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
