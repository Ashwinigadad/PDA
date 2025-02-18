import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Scale, Search, Brain, FileText } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#2D221E] text-[#E8DCC0] flex flex-col">
      <div className="container mx-auto py-12 md:py-24 max-w-7xl flex-1">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5E6D0]">
            Onze Werkzaamheden
          </h1>
          <p className="mt-4 text-lg text-[#C4A77D]">
            Professionele psychodiagnostische diensten op maat
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/** Service Cards **/}
          {[
            {
              title: "Persoonlijkheidsonderzoek (PO's)",
              description: "Uitgebreide analyse van persoonlijkheidskenmerken en gedragspatronen",
              icon: ClipboardCheck,
              points: [
                "Gedetailleerde persoonlijkheidsanalyse",
                "Gedragspatroon evaluatie",
                "Ontwikkelingsperspectieven",
                "Praktische aanbevelingen",
              ],
            },
            {
              title: "Second Opinion",
              description: "Onafhankelijke herbeoordeling van eerdere diagnoses",
              icon: Search,
              points: [
                "Grondige analyse van bestaande diagnoses",
                "Onafhankelijke beoordeling",
                "Nieuwe inzichten en perspectieven",
                "Uitgebreide rapportage",
              ],
            },
            {
              title: "Risicotaxatie",
              description: "Professionele inschatting van risicofactoren",
              icon: Scale,
              points: [
                "Systematische risico-evaluatie",
                "Preventieve maatregelen",
                "Gedragsanalyse",
                "Veiligheidsaanbevelingen",
              ],
            },
            {
              title: "Psychodiagnostiek",
              description: "Uitgebreide psychologische diagnostiek",
              icon: Brain,
              points: [
                "Cognitieve functietests",
                "Ontwikkelingsonderzoek",
                "Gedragsobservaties",
                "Diagnostische interviews",
              ],
            },
          ].map((service, index) => (
            <Card key={index} className="bg-[#E8DCC0] shadow-lg border border-[#C4A77D]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <service.icon className="h-5 w-5 text-[#2D221E]" />
                  <CardTitle className="text-[#2D221E]">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-[#4E3B31]">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-[#4E3B31]">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/** Full-width last section **/}
      <div className="w-full h-auto bg-[#E8DCC0] py-16 flex justify-center items-center">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">Onze Werkwijze</h2>
            <div className="space-y-4">
              {[
                { title: "Intake & Analyse", desc: "Grondige bespreking van de hulpvraag en analyse van beschikbare informatie", icon: FileText },
                { title: "Onderzoek & Observatie", desc: "Uitvoering van diagnostische tests en gedragsobservaties", icon: Brain },
                { title: "Rapportage & Advies", desc: "Uitgebreide verslaglegging met concrete aanbevelingen", icon: ClipboardCheck },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-[#C4A77D] p-2 rounded-full">
                    <step.icon className="h-5 w-5 text-[#2D221E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{step.title}</h3>
                    <p className="text-[#4E3B31]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
            <Image
              alt="Professional consultation"
              className="object-cover w-full h-full"
              src="/images/p3.jpeg"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
