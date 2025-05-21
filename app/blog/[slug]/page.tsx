// app/blog/[slug]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample blog post data
const blogPosts = [
  {
    id: 'getting-started-with-nextjs',
    title: "Débuter avec Next.js : Un guide complet",
    description: "Découvrez comment créer votre première application avec Next.js, un framework React puissant pour le développement web.",
    date: "2025-03-15",
    readTime: "8 min",
    categories: ["Next.js", "React", "Tutoriel"],
    content: `
# Débuter avec Next.js : Un guide complet

Next.js est un framework React qui vous permet de créer des applications web performantes avec un rendu côté serveur et une génération de sites statiques. Dans cet article, nous allons explorer les concepts fondamentaux de Next.js et créer une application simple.

## Pourquoi choisir Next.js ?

- **Rendu Hybride** : Choisissez entre le rendu côté serveur (SSR), la génération statique (SSG), ou le rendu côté client pour chaque page.
- **Optimisation des performances** : Chargement et routage rapides grâce au découpage de code automatique.
- **Développement simplifié** : API routes, support TypeScript intégré, et hot reloading.
- **SEO amélioré** : Le rendu côté serveur améliore l'indexation par les moteurs de recherche.

## Installation et configuration

Pour commencer un nouveau projet Next.js, exécutez la commande suivante :

\`\`\`bash
npx create-next-app mon-projet-nextjs
\`\`\`

Cela créera un nouveau répertoire avec la structure de base d'un projet Next.js. Naviguez dans ce répertoire et démarrez le serveur de développement :

\`\`\`bash
cd mon-projet-nextjs
npm run dev
\`\`\`

Votre application est maintenant accessible à l'adresse \`http://localhost:3000\`.

## Structure d'un projet Next.js

- **/pages** : Contient vos pages et routes API. Chaque fichier dans ce répertoire devient une route.
- **/public** : Stocke les fichiers statiques comme les images et les polices.
- **/styles** : Contient vos fichiers CSS.
- **next.config.js** : Configuration personnalisée de Next.js.

## Création de votre première page

Dans Next.js, chaque fichier dans le répertoire \`/pages\` devient automatiquement une route. Par exemple, créons une page "À propos" :

\`\`\`jsx
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>À propos de nous</h1>
      <p>Bienvenue sur notre page d'information !</p>
    </div>
  )
}
\`\`\`

Cette page sera accessible à l'adresse \`/about\`.

## Conclusion

Next.js simplifie considérablement le développement d'applications React modernes. Ce guide n'est qu'une introduction aux fonctionnalités de base. Pour approfondir, explorez la documentation officielle et les exemples de la communauté.

Dans un prochain article, nous aborderons des sujets plus avancés comme l'API Routes, l'authentification et le déploiement.
`,
  },
  {
    id: 'tailwind-css-tips',
    title: "5 astuces pour améliorer votre workflow avec Tailwind CSS",
    description: "Maximisez votre productivité avec ces conseils pratiques pour travailler efficacement avec Tailwind CSS.",
    date: "2025-02-28",
    readTime: "6 min",
    categories: ["CSS", "Tailwind", "Productivité"],
    content: `
# 5 astuces pour améliorer votre workflow avec Tailwind CSS

Tailwind CSS a révolutionné la façon dont nous écrivons le CSS. Voici quelques astuces pour tirer le meilleur parti de ce framework utilitaire.

## 1. Utilisez l'extension VSCode

L'extension Tailwind CSS IntelliSense pour VSCode offre l'autocomplétion, la mise en évidence de la syntaxe et des aperçus de couleurs directement dans votre éditeur. C'est un outil essentiel pour accélérer votre développement.

## 2. Créez des composants pour les motifs répétitifs

Si vous vous retrouvez à répéter les mêmes classes Tailwind, c'est le moment de créer un composant réutilisable :

\`\`\`jsx
// Button.jsx
export function Button({ children, variant = "primary" }) {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };
  
  return (
    <button className={baseClasses + " " + variants[variant]}>
      {children}
    </button>
  );
}
\`\`\`

## 3. Utilisez les directives @apply pour les classes complexes

Pour des combinaisons de classes que vous utilisez fréquemment mais qui ne méritent pas un composant entier, utilisez la directive @apply dans vos feuilles de style :

\`\`\`css
/* styles.css */
.card {
  @apply p-6 rounded-lg shadow-md bg-white;
}

.card-title {
  @apply text-xl font-bold mb-2;
}
\`\`\`

## 4. Exploitez les stratégies de responsive design de Tailwind

Tailwind facilite la création d'interfaces responsives avec ses préfixes pour les points d'arrêt :

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Ce texte change de taille selon la largeur de l'écran
</div>
\`\`\`

## 5. Personnalisez votre configuration

N'hésitez pas à personnaliser le fichier tailwind.config.js pour ajouter vos propres couleurs, espaces, ou breakpoints :

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#FF6347',
        'brand-light': '#FF8C7F',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      }
    }
  }
}
\`\`\`

## Conclusion

En intégrant ces astuces à votre workflow quotidien, vous pourrez exploiter pleinement la puissance de Tailwind CSS tout en maintenant un code propre et maintenable. La clé est de trouver le bon équilibre entre l'utilisation directe des classes utilitaires et l'abstraction lorsque cela devient répétitif.
`,
  },
  {
    id: 'typescript-best-practices',
    title: "Bonnes pratiques TypeScript pour des projets maintenables",
    description: "Apprenez comment structurer vos projets TypeScript pour une meilleure maintenabilité et une collaboration d'équipe efficace.",
    date: "2025-01-10",
    readTime: "10 min",
    categories: ["TypeScript", "Bonnes pratiques", "Architecture"],
    content: `
# Bonnes pratiques TypeScript pour des projets maintenables

TypeScript améliore considérablement la qualité du code JavaScript, mais nécessite une certaine discipline. Voici les meilleures pratiques à adopter pour des projets durables et maintenables.

## 1. Définissez des types précis

Évitez d'utiliser \`any\` autant que possible. Ce type contourne le système de typage de TypeScript et annule ses avantages :

\`\`\`typescript
// À éviter
function processData(data: any): any {
  return data.map(item => item.value);
}

// Préférez
interface DataItem {
  value: string;
  id: number;
}

function processData(data: DataItem[]): string[] {
  return data.map(item => item.value);
}
\`\`\`

## 2. Utilisez les interfaces pour les objets

Les interfaces sont parfaites pour définir la forme des objets et permettent l'extension :

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface AdminUser extends User {
  permissions: string[];
}
\`\`\`

## 3. Organisez vos types dans des fichiers dédiés

Pour les projets de grande envergure, créez des fichiers de définition de types pour chaque domaine :

\`\`\`typescript
// types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserId = number;

export interface UserCreationParams {
  name: string;
  email: string;
  password: string;
}
\`\`\`

## 4. Utilisez l'inférence de types quand c'est pertinent

TypeScript est intelligent. Laissez-le déduire les types lorsque c'est évident :

\`\`\`typescript
// Inutilement verbeux
const numbers: number[] = [1, 2, 3].map((num: number): number => num * 2);

// Plus propre, même niveau de sécurité
const numbers = [1, 2, 3].map(num => num * 2);
\`\`\`

## 5. Tirez parti des unions discriminées

Les unions discriminées permettent de créer des types complexes mais sûrs :

\`\`\`typescript
type Success = {
  status: 'success';
  data: User[];
};

type Error = {
  status: 'error';
  message: string;
};

type ApiResponse = Success | Error;

function handleResponse(response: ApiResponse) {
  if (response.status === 'success') {
    // TypeScript sait que response.data existe ici
    console.log(response.data.length);
  } else {
    // TypeScript sait que response.message existe ici
    console.error(response.message);
  }
}
\`\`\`

## 6. Configurez tsconfig.json correctement

Un fichier tsconfig.json bien configuré peut prévenir de nombreuses erreurs :

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true
  }
}
\`\`\`

## 7. Utilisez les génériques pour les fonctions réutilisables

Les génériques permettent de créer des fonctions polyvalentes tout en préservant la sécurité de type :

\`\`\`typescript
function getFirstItem<T>(array: T[]): T | undefined {
  return array[0];
}

const firstNumber = getFirstItem([1, 2, 3]); // Type: number
const firstString = getFirstItem(["a", "b", "c"]); // Type: string
\`\`\`

## Conclusion

En suivant ces bonnes pratiques, vous réduirez considérablement les bugs potentiels dans vos projets TypeScript et améliorerez leur maintenabilité. Le système de type de TypeScript est un outil puissant qui, utilisé correctement, peut transformer la qualité de votre code JavaScript.
`,
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.id === params.slug);
  
  if (!post) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas"
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.description
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.id === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Function to convert markdown to HTML (simplified for this example)
  // In a real project, you would use a library like remark or markdown-it
  const markdownToHtml = (markdown: string) => {
    return markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gm, '<em>$1</em>')
      .replace(/\n/gm, '<br />')
      .replace(/```([\s\S]+?)```/g, (match, p1) => 
        `<pre class="bg-muted p-4 rounded-md my-4 overflow-auto">${p1.replace(/^(.*)$/gm, '$1')}</pre>`
      );
  };

  return (
    <main className="flex flex-col items-center justify-between py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-4xl">
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux articles
          </Link>
        </Button>
        
        <article className="prose prose-stone dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary">{category}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{post.description}</p>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
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
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} 
               className="leading-relaxed blog-content" />
        </article>
        
        <div className="border-t mt-12 pt-8">
          <h3 className="text-lg font-medium mb-4">Continuer la lecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="block">
                  <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <Badge variant="secondary" className="mb-2">{relatedPost.categories[0]}</Badge>
                    <h4 className="font-medium mb-1">{relatedPost.title}</h4>
                    <p className="text-sm text-muted-foreground">{relatedPost.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}