import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="rounded-full shadow-lg backdrop-blur bg-primary text-primary-foreground"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full px-6 py-6 h-12 shadow-lg"
        >
          <a href="#get-started">
            Start Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
