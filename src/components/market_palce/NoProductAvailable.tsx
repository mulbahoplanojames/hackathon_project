import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

const NoProductAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <>
      <section
        className={cn(
          "flex flex-col items-center justify-center py-10 min-h-80 w-full bg-slate-100 text-center mt-12 rounded-md",
          className
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold ">
            No Product avaliable in {selectedTab}
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          We&apos;re sorry, but there are no products available in {selectedTab}
          at the moment .
        </motion.p>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <Loader2 className="animate-spin" />
          <span>We are restocking the products</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Please try again later or check our other categories
        </motion.p>
      </section>
    </>
  );
};

export default NoProductAvailable;
