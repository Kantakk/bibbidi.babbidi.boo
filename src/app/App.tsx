import { Instagram, Twitter, Github, Mail } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const portfolioWorks = [
  {
    id: 1,
    title: 'Minimal Architecture',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1652842949533-44afcd43d1e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2ODg3OTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Abstract Art',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1703936205356-11814e31bfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGFydHxlbnwxfHx8fDE3Njg5Mzg1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Creative Space',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY4OTA3MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Product Design',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1566554001689-b53a88dbd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3Njg5MzAyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Interior Vision',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1753505889211-9cfbac527474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3Njg4ODc3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'Graphic Poster',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1654865433650-23e71f161b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2ODk1MDUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'Github', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight mb-8">
            クリエイティブな
            <br />
            デザインと
            <br />
            アートの世界
          </h1>
          <p className="text-[clamp(1.25rem,3vw,2rem)] text-neutral-600 max-w-2xl">
            ミニマルで洗練されたデザインを通じて、
            <br />
            新しい価値を創造します。
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] tracking-tight mb-16">Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioWorks.map((work) => (
              <div
                key={work.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] tracking-tight">
                    {work.title}
                  </h3>
                  <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-500">
                    {work.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-20 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-[clamp(2rem,4vw,3rem)] tracking-tight mb-4">
                Let's Connect
              </h3>
              <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-neutral-600">
                お気軽にお問い合わせください。
              </p>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="group"
                >
                  <link.icon
                    className="w-8 h-8 stroke-[1.5] text-neutral-800 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center text-[clamp(1rem,2vw,1.25rem)] text-neutral-500">
            © 2026 Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
