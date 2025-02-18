import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ClipboardCheck, Scale, Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2D221E] text-[#E8DCC0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Praktijk Asoro
            </h1>
            <h2>Psycho-Diagnostisch Analysecentrum</h2>
            <p className="mx-auto max-w-[700px] text-[#C4A77D] md:text-xl">
              Professionele psychodiagnostische diensten voor kinderen, jongeren en volwassenen
            </p>
            <Button asChild size="lg" className="mt-4 bg-[#C4A77D] text-[#2D221E] hover:bg-[#AA8452]">
              <Link href="/contact">
                Neem Contact Op <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1C1B1A] text-[#F5E6D0]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Onze Diensten
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-[#3E3B32] text-[#F5EBD8]">
              <CardHeader>
                <ClipboardCheck className="h-6 w-6 mb-2 text-[#B37C4D]" />
                <CardTitle>Persoonlijkheidsonderzoek</CardTitle>
                <CardDescription>
                  Uitgebreide analyse van persoonlijkheidskenmerken
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#C4A77D]">
                  Professionele beoordeling van persoonlijkheidskenmerken met gevalideerde methoden
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#3E3B32] text-[#F5EBD8]">
              <CardHeader>
                <Search className="h-6 w-6 mb-2 text-[#B37C4D]" />
                <CardTitle>Second Opinion</CardTitle>
                <CardDescription>
                  Onafhankelijke herbeoordeling van eerdere diagnoses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#C4A77D]">
                  Grondige analyse en herbeoordeling van bestaande psychologische diagnoses
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#3E3B32] text-[#F5EBD8]">
              <CardHeader>
                <Scale className="h-6 w-6 mb-2 text-[#B37C4D]" />
                <CardTitle>Risicotaxatie</CardTitle>
                <CardDescription>
                  Professionele inschatting van risicofactoren
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#C4A77D]">
                  Gedetailleerde analyse van risicofactoren voor gedrag en ontwikkeling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2D221E] text-[#E8DCC0]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Expertise & Ervaring
              </h2>
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
