"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">À propos de moi</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Passionné par le développement web depuis plus de 5 ans, je crée des applications modernes et
              performantes.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Parcours professionnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Parcours professionnel</h3>
                <p className="text-muted-foreground">
                  J'ai travaillé sur divers projets web, de la conception à la mise en production, en passant par le
                  développement et les tests.
                </p>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">2024 - 2025</span>
                    <p>STAGE Développeur Full-Stack  - LegOmnia</p>
                  </li>
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">2021 </span>
                    <p> STAGE Développeur Front-End - The Ressource Management </p>
                  </li> 
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Formation</h3>
                <p className="text-muted-foreground">
                  Mon parcours académique m'a permis d'acquérir de solides connaissances en informatique et en
                  développement.
                </p>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">2016 - 2018</span>
                    <p>Formation Concepteur développeur d'applications - Prépavenir Formation </p>
                  </li>
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">2021 - 2022</span>
                    <p>BTS SNIR - Lycée Maryse Condée</p>
                  </li>
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">2019 - 2020</span>
                    <p>Bac STI2D option SIN - Lycée Maryse Condée</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Centres d'intérêt</h3>
                <p className="text-muted-foreground">
                  En dehors du développement, je m'intéresse à plusieurs domaines qui nourrissent ma créativité.
                </p>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">Veille technologique</span>
                    <p>Je reste constamment à jour sur les nouvelles technologies web.</p>
                  </li>
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">Open Source</span>
                    <p>Je contribue régulièrement à des projets.</p>
                  </li>
                  <li className="border-l-2 border-primary/50 pl-4 py-1">
                    <span className="font-medium">UX/UI Design</span>
                    <p>Je m'intéresse aux principes de conception d'interfaces utilisateur.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
