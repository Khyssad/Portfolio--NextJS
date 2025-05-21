// app/blog/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Portfolio de Développeur",
  description: "Articles, tutoriels et réflexions sur le développement web et les technologies",
}

// Exemple de données d'articles
const blogPosts = [
  {
    id: 'getting-started-with-nextjs',
    title: "Débuter avec Next.js : Un guide complet",
    description: "Découvrez comment créer votre première application avec Next.js, un framework React puissant pour le développement web.",
    date: "2025-03-15",
    readTime: "8 min",
    categories: ["Next.js", "React", "Tutoriel"],
    excerpt: "Next.js est un framework React qui vous permet de créer des applications web performantes avec un rendu côté serveur et une génération de sites statiques...",
  },
  {
    id: 'tailwind-css-tips',
    title: "5 astuces pour améliorer votre workflow avec Tailwind CSS",
    description: "Maximisez votre productivité avec ces conseils pratiques pour travailler efficacement avec Tailwind CSS.",
    date: "2025-02-28",
    readTime: "6 min",
    categories: ["CSS", "Tailwind", "Productivité"],
    excerpt: "Tailwind CSS a révolutionné la façon dont nous écrivons le CSS. Voici quelques astuces pour tirer le meilleur parti de ce framework utilitaire...",
  },
  {
    id: 'typescript-best-practices',
    title: "Bonnes pratiques TypeScript pour des projets maintenables",
    description: "Apprenez comment structurer vos projets TypeScript pour une meilleure maintenabilité et une collaboration d'équipe efficace.",
    date: "2025-01-10",
    readTime: "10 min",
    categories: ["TypeScript", "Bonnes pratiques", "Architecture"],
    excerpt: "TypeScript améliore considérablement la qualité du code JavaScript, mais nécessite une certaine discipline. Voici les meilleures pratiques à adopter...",
  }
];

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-between py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Découvrez mes articles sur le développement web, les technologies et mes réflexions sur le monde numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="secondary">{category}</Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/blog/${post.id}`}>
                    Lire <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/" className="text-primary hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}