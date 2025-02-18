import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ClipboardCheck, Scale, Search } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2D221E] text-[#E8DCC0]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Praktijk Asoro
          </h1>
          <h2 className="text-lg md:text-xl mt-2">Psycho-Diagnostisch Analysecentrum</h2>
          <p className="mx-auto max-w-2xl text-[#C4A77D] md:text-lg mt-4">
            Professionele psychodiagnostische diensten voor kinderen, jongeren en volwassenen
          </p>
          <Button asChild size="lg" className="mt-6 bg-[#C4A77D] text-[#2D221E] hover:bg-[#AA8452]">
            <Link href="/contact">
              Neem Contact Op <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1C1B1A] text-[#F5E6D0]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">Onze Diensten</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              { title: "Persoonlijkheidsonderzoek", description: "Uitgebreide analyse van persoonlijkheidskenmerken", icon: <ClipboardCheck className="h-6 w-6 mb-2 text-[#B37C4D]" /> },
              { title: "Second Opinion", description: "Onafhankelijke herbeoordeling van eerdere diagnoses", icon: <Search className="h-6 w-6 mb-2 text-[#B37C4D]" /> },
              { title: "Risicotaxatie", description: "Professionele inschatting van risicofactoren", icon: <Scale className="h-6 w-6 mb-2 text-[#B37C4D]" /> }
            ].map((service, index) => (
              <Card key={index} className="bg-[#3E3B32] text-[#F5EBD8]">
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#C4A77D]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2D221E] text-[#E8DCC0]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Expertise & Ervaring</h2>
              <p className="text-[#C4A77D]">
                PDA werkt samen met toonaangevende instituten zoals het Nederlands Jeugdinstituut en
                de Kinderbescherming. Onze expertise wordt ondersteund door jarenlange ervaring en
                continue professionele ontwikkeling.
              </p>
              <Button asChild variant="secondary" className="bg-[#C4A77D] text-[#2D221E] hover:bg-[#AA8452]">
                <Link href="/about">
                  Lees Meer Over Ons <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                alt="Professional working environment"
                className="object-cover"
                fill
                src="/images/p4.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
