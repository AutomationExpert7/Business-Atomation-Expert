import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  Calendar,
  Crown,
  Eye,
  Headphones,
  Lightbulb,
  Network,
  Plus,
  Rocket,
  Search,
  Settings,
  TrendingUp,
  TriangleAlert,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialMarquee } from "@/components/testimonial-marquee"
import { automationCategories } from "@/lib/automations"

export const metadata: Metadata = {
  title: "Business Automations Expert",
  description: "Ai Automations for Business",
}

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* Extra decorative background layers specific to the home page */}
      <div
        className="fixed bottom-0 left-0 w-96 h-96 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253, 221, 189, 0.3) 0%, rgba(253, 221, 189, 0.15) 30%, rgba(253, 221, 189, 0.05) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="fixed top-20 right-20 w-64 h-64 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253, 221, 189, 0.1) 0%, rgba(253, 221, 189, 0.05) 50%, transparent 100%)",
          filter: "blur(30px)",
        }}
      />

      {/* Hero */}
      <section className="relative px-8 py-16 text-center z-10">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <Image
            src="/images/green-ring-2.webp"
            alt="Background decoration"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Your go-to, on demand,
            <br />
            <span className="text-primary-accent">
              Business Process Automations
            </span>
            <br />
            support team
          </h1>
          <p className="text-lg md:text-xl text-untitled-ui-gray300 mb-12 max-w-3xl mx-auto">
            Automating everyday business tasks has never been easier since we
            do it for you.
          </p>
          <a href="#consultation">
            <Button
              variant="outline"
              className="h-11 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-8 py-4 rounded-full text-lg font-medium"
            >
              Book Consultation Now
            </Button>
          </a>
        </div>
      </section>

      {/* We don't sell software */}
      <section className="px-8 py-20 relative z-10">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-40">
          <Image
            src="/images/green-ring-2.webp"
            alt="Decorative ring"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              We don&apos;t sell software.
              <br />
              <span className="text-primary-accent">
                We solve software problems for you.
              </span>
            </h2>
            <p className="text-untitled-ui-gray300 text-base leading-relaxed">
              Are repetitive tasks eating up your time and resources? Is your
              software not getting the job done? Our experts, consultants and
              automation engineers leverage your existing software stack to
              work better with automations and integration.
            </p>
          </div>
          <div className="space-y-3 relative z-10">
            {[
              { href: "/team", icon: Users, label: "Highly personalized team" },
              { href: "/case-studies", icon: Crown, label: "Hands-on, highly specialized" },
              { href: "#consultation", icon: TriangleAlert, label: "Get the attention you need" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} className="block" href={href}>
                <div className="flex items-center space-x-3 p-4 bg-untitled-ui-gray900/50 rounded-lg border border-untitled-ui-gray700/30">
                  <div className="w-10 h-10 bg-primary-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-dark-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-base font-medium">{label}</span>
                  </div>
                  <div className="w-8 h-8 bg-primary-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-accent rounded-full" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Talk with an expert */}
      <section className="px-8 py-20 bg-untitled-ui-gray900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
            Talk with an <span className="text-primary-accent">expert</span>
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-accent rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-dark-primary" />
                  </div>
                  <span className="inline-flex items-center rounded-full border font-semibold transition-colors border-transparent bg-primary-accent text-dark-primary text-xs px-3 py-1">
                    RevOps
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="text-primary-accent">
                    Unify Sales, Marketing and Customer Success.
                  </span>
                  <br />
                  One revenue engine, zero blind spots.
                </h3>
                <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                  We connect your CRM, marketing platforms and customer
                  success tools into a single automated Revenue Operations
                  (RevOps) workflow — so leads, deals and renewals flow
                  smoothly with no manual hand-offs, no data silos and full
                  pipeline visibility from first touch to closed-won.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/digital-automation.webp"
                    alt="RevOps dashboard showing unified revenue pipeline and analytics"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-green-900/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/handshake-automation.png"
                    alt="Human and AI handshake representing automation partnership"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-accent rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-dark-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="text-primary-accent">
                    Slow, repetitive tasks?
                  </span>
                  <br />
                  Let us automate and accelerate it for you.
                </h3>
                <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                  Send bulk messages, update accounts, create invoices and
                  more with automation. Hands free teams can now focus on
                  more important work.
                </p>
              </div>
            </div>

            <div className="relative lg:order-2 block lg:hidden">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/workflow-tablet.webp"
                  alt="Hands working on tablet with analytics and charts"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent" />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 lg:order-1">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-accent rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-dark-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="text-primary-accent">
                    Set up software to improve workflow.
                  </span>
                </h3>
                <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                  Streamline integration between CRM, VoIP, email, eCommerce,
                  Salesforce, QuickBooks and more. Sit back and watch your
                  software work like a well-oiled machine.
                </p>
              </div>
              <div className="relative lg:order-2 hidden lg:block">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/workflow-tablet.webp"
                    alt="Hands working on tablet with analytics and charts"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/digital-automation.webp"
                    alt="Hand with digital overlay representing process automation"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-accent rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-dark-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="text-primary-accent">
                    Consolidation and process automations are our specialty.
                  </span>
                </h3>
                <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                  Enable updates to transfer to all platforms automatically.
                  Accelerate ordering, invoicing and bookkeeping to occur
                  instantaneously. Leave the Excel headaches behind.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#consultation">
              <Button
                variant="outline"
                className="h-11 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-8 py-3 rounded-full text-base font-medium"
              >
                Book Consultation Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Consultation / Calendly */}
      <section className="px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-primary-accent rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-dark-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-primary-accent">get started?</span>
            </h2>
            <p className="text-untitled-ui-gray300 text-lg max-w-3xl mx-auto">
              Schedule a free consultation with our automation experts.
              We&apos;ll discuss your business needs and show you exactly how
              we can help streamline your processes.
            </p>
          </div>
          <div
            className="bg-untitled-ui-gray800/30 rounded-3xl md:p-8 p-0 border border-untitled-ui-gray700"
            id="consultation"
          >
            <div
              className="calendly-inline-widget overflow-hidden"
              data-url="https://calendly.com/businessautomationsexpert/business-automation-expert?hide_gdpr_banner=1"
              style={{
                minWidth: "220px",
                height: "655px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-untitled-ui-gray400 text-sm">
              ⏰ Free 30-minute consultation • 🚀 No commitment required • 💡
              Get expert advice
            </p>
          </div>
        </div>
      </section>

      {/* How does it work */}
      <section className="px-8 py-20 bg-untitled-ui-gray900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            How does it <span className="text-primary-accent">work?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Network,
                title: "Perform an Audit",
                description:
                  "Our expert team examines all the components of your software stack to see what's working and what's not.",
              },
              {
                icon: Search,
                title: "Analyze your processes",
                description:
                  "By understanding your everyday work flow and pain points, we ideate how to make your software work better to meet your business goals.",
              },
              {
                icon: Settings,
                title: "Implement changes",
                description:
                  "Our experts go in and clean up your tech stack. We implement automations and optimize how each component works with each other.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="text-center space-y-4 p-6 border-2 border-primary-accent rounded-2xl bg-untitled-ui-gray900/20"
              >
                <div className="w-16 h-16 bg-transparent border-2 border-primary-accent rounded-2xl flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-primary-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-accent">
                  {title}
                </h3>
                <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: Lightbulb,
                title: "Provide training",
                description:
                  "Once everything is in place, we train your team to use automation tools for maximum productivity.",
              },
              {
                icon: Headphones,
                title: "Ongoing support",
                description:
                  "If any problems arise, we're there for you. Whether it's troubleshooting or a new business need, just give us a call and we'll get to work.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="text-center space-y-4 p-6 border-2 border-primary-accent rounded-2xl bg-untitled-ui-gray900/20"
              >
                <div className="w-16 h-16 bg-transparent border-2 border-primary-accent rounded-2xl flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-primary-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-accent">
                  {title}
                </h3>
                <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#consultation">
              <Button
                variant="outline"
                className="h-11 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-8 py-3 rounded-full text-base font-medium"
              >
                Book Consultation Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Types of automations */}
      <section className="px-8 py-20 bg-untitled-ui-gray900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            <span className="text-primary-accent">Types of automations</span>{" "}
            we can implement for you
          </h2>
          <p className="text-center text-untitled-ui-gray300 text-lg mb-16">
            We target{" "}
            <span className="text-primary-accent font-semibold">
              three core business
            </span>{" "}
            areas to help teams perform at their best
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {automationCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold flex items-center space-x-3">
                  <div className="w-8 h-8 border-2 border-primary-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-accent rounded-full" />
                  </div>
                  <span className="text-primary-accent">{category.title}</span>
                </h3>
                <div className="h-1 bg-primary-accent rounded-full" />
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <Card
                      key={item.title}
                      className="bg-untitled-ui-gray800/50 border-untitled-ui-gray700 rounded-2xl"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-primary-accent">
                            {item.title}
                          </h4>
                          <div className="w-8 h-8 bg-primary-accent rounded-full flex items-center justify-center">
                            <Plus className="w-5 h-5 text-dark-primary" />
                          </div>
                        </div>
                        <p className="text-untitled-ui-gray300 text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-untitled-ui-gray300 mb-8 text-lg">
              and much much more...
            </p>
            <a href="#consultation">
              <Button
                variant="outline"
                className="h-11 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-8 py-4 rounded-full text-lg font-medium"
              >
                Book Consultation Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Business Automations Expert */}
      <section className="px-8 py-20 relative z-10">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-40">
          <Image
            src="/images/green-ring-1.webp"
            alt="Decorative ring"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Why{" "}
              <span className="text-primary-accent">
                Business Automations Expert
              </span>
              ?
            </h2>
            <p className="text-untitled-ui-gray300 text-lg leading-relaxed mb-12">
              Our expert software technicians have been at this for years.
              Getting software to communicate well with each other can be
              daunting. We know exactly how frustrating it can be for
              business and IT teams to improve software performance and
              efficiency. Seeing the need, we created Business Automations
              Expert to fill the gap. Now, businesses all over are thrilled
              with their software, instead of fighting against it.
            </p>
            <div className="flex space-x-6">
              {[Settings, Lightbulb, Rocket].map((Icon, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-primary-accent rounded-2xl flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-dark-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-20 bg-untitled-ui-gray900/30 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
            What <span className="text-primary-accent">Customers</span> are
            saying
          </h2>
          <TestimonialMarquee />
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-untitled-ui-gray800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            Want to secure the future sustainability and scalability of your
            business?
          </h2>
          <p className="text-primary-accent font-bold mb-8 sm:mb-10 tracking-wider text-xs sm:text-sm">
            LET US HELP YOU
          </p>
          <a href="#consultation">
            <Button
              variant="outline"
              className="h-11 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Set up a Consultation
            </Button>
          </a>
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  )
}