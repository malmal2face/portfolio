"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "Sky Smart Technology (Pvt) Ltd",
    role: "Technical Lead / Project Manager",
    period: "2025 – Present",
    achievements: [
      "Leading cross-functional teams of 10+ developers and designers",
      "Architecting scalable microservices infrastructure serving 100K+ users",
      "Implementing Agile methodologies resulting in 40% faster delivery cycles",
      "Mentoring junior developers and conducting code reviews",
      "Managing client relationships and translating business requirements into technical solutions"
    ]
  },
  {
    company: "Axcertro (Pvt) Ltd",
    role: "Senior Developer",
    period: "2023 – 2025",
    achievements: [
      "Developed enterprise-level web applications using React and Node.js",
      "Optimized database queries reducing response times by 60%",
      "Integrated RESTful APIs and third-party services",
      "Collaborated with UX team to implement responsive designs",
      "Led migration from monolithic to microservices architecture"
    ]
  },
  {
    company: "Sampath Bank PLC",
    role: "Software Developer",
    period: "2021 – 2023",
    achievements: [
      "Built secure banking solutions following industry compliance standards",
      "Implemented real-time transaction processing systems",
      "Developed internal tools improving operational efficiency by 30%",
      "Participated in code audits and security reviews",
      "Worked with legacy systems modernization projects"
    ]
  },
  {
    company: "IDAPZ Web Solution Company",
    role: "Full Stack Developer",
    period: "2019 – 2021",
    achievements: [
      "Created custom CMS solutions for diverse client needs",
      "Developed e-commerce platforms with payment gateway integration",
      "Implemented SEO best practices improving client visibility",
      "Managed multiple projects simultaneously with tight deadlines",
      "Provided technical support and maintenance for deployed applications"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous growth, innovation, and leadership in software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6 max-w-5xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-lg mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
