import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

export default function WelcomePage() {
  const features = [
    { title: "Intuitive Design", description: "User-friendly interface for seamless navigation" },
    { title: "Powerful Analytics", description: "Gain insights with our advanced analytics tools" },
    { title: "Secure & Reliable", description: "Your data is safe with our top-notch security measures" },
    { title: "24/7 Support", description: "Round-the-clock assistance for all your needs" },
  ]

  return (
    <div className="min-h-screen">
      {/* <header className="container mx-auto mt-10">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">Tech Insights</span>
          </Link>
          <Button variant="outline"><Link href="/login">Login  </Link></Button>
        </nav>
      </header> */}

      <main className="container mx-auto px-4 py-12 mt-5 md:mt-20">
        <section className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our Platform
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the power of our innovative solution and take your business to new heights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}