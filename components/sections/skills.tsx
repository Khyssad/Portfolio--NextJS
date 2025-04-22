"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Skills data
const skills = {
  frontend: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "SASS", icon: "💅" },
    { name: "Bootstrap", icon: "🎨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟩" },
    { name: "Express", icon: "🚂" },
    { name: "Python", icon: "🐍" },
    { name: "PHP", icon: "🐘" },
    { name: "REST API", icon: "🔌" },
  ],
  database: [
    { name: "MySQL", icon: "🐬" },
    { name: "SQLite", icon: "📊" },
    { name: "Google Cloud", icon: "☁️" },
  ],
  tools: [
    { name: "Git", icon: "🔄" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Figma", icon: "🎨" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Linux", icon: "🐧" },
    { name: "Vite", icon: "⚡" },
    { name: "Visual Studio Code", icon: "💻" },
  ],
}

export default function Skills() {
  const categories = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "database", label: "Base de données" },
    { value: "tools", label: "Outils" },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mes compétences</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un aperçu des technologies et outils que je maîtrise, organisés par domaine.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{category.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {skills[category.value as keyof typeof skills].map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border hover:border-primary/50 hover:bg-accent/50 transition-colors"
                        >
                          <span className="text-3xl mb-2" role="img" aria-label={skill.name}>
                            {skill.icon}
                          </span>
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
