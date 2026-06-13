"use client"

import Link from "next/link"
import { ArrowRight, Star, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DotPattern } from "@/components/dot-pattern"
import { motion } from "framer-motion"
import { heroContainerVariants, heroItemVariants } from "./animations"

export function HeroContent() {
  return (
    <>
      <div className="absolute inset-0">
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6 flex justify-center sm:mb-8" variants={heroItemVariants}>
            <Link href="https://jambikota.go.id/" target="_blank" rel="noopener noreferrer">
              <Badge variant="outline" className="border-foreground px-4 py-2">
                <Star className="mr-2 h-3 w-3 fill-current" />
                Pemerintah kota jambi
                <ArrowRight className="ml-2 h-3 w-3" />
              </Badge>
            </Link>
          </motion.div>

          <motion.h1
            className="mb-4 text-2xl font-bold tracking-tight sm:mb-6 sm:text-4xl lg:text-7xl"
            variants={heroItemVariants}
          >
            RSUD
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}H. Abdurrahman Sayoeti{" "}
            </span>
            Kota Jambi
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:mb-10 sm:text-xl lg:text-2xl"
            variants={heroItemVariants}
          >
            &quot;Melayani dengan sepenuh hati&quot;
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mb-6 mt-8 max-w-2xl text-center sm:mb-8 sm:mt-10"
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground sm:text-lg">
            <span className="font-bold text-primary">Pelayanan Kesehatan Terpadu untuk Masyarakat Kota Jambi</span>{" "}
            <Minus className="mx-2 inline h-3 w-3 sm:h-4 sm:w-4" /> RSUD H. Abdurrahman Sayoeti menyediakan layanan medis yang cepat, aman, profesional, dan terjangkau, didukung fasilitas modern serta tenaga kesehatan berpengalaman.
          </p>
        </motion.div>
      </div>
    </>
  )
}
