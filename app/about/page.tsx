export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-[#2563EB] to-[#979fb8] text-white min-h-screen flex flex-col items-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-[#C4A77D] pb-2 text-white">
          About Psycho-Diagnostisch Analysecentrum (PDA)
        </h1>

        {/* Add the image here */}
        <img 
          src="/images/p7.jpeg" 
          alt="About PDA" 
          className="w-full h-auto rounded-lg shadow-lg mb-8"
        />
        
        <p className="text-2xl leading-relaxed mb-6 text-white">
          Psycho-Diagnostisch Analysecentrum (PDA) provides expert psychological diagnostics for children, youth, parents, 
          and judicial institutions such as courts, child protection services, and certified agencies. 
          Our goal is to deliver thorough assessments to aid in legal and psychological cases.
        </p>
        
        <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Our Expertise</h2>
        <p className="text-lg leading-relaxed mb-6 text-white">
          PDA specializes in personality assessments, second opinions, risk analysis, and evidence-based psycho-diagnostics. 
          We ensure accurate and unbiased reporting while maintaining the highest ethical standards.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Collaborations & Accreditation</h2>
        <p className="text-lg leading-relaxed mb-6 text-white">
          PDA has worked with institutions such as the Dutch Youth Institute and Child Protection Services. 
          We are affiliated with key professional organizations and follow strict compliance regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Why Choose PDA?</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6 text-white">
          <li>Independent, precise, and transparent reporting</li>
          <li>No waiting lists – fast and efficient service</li>
          <li>Deep expertise in psycho-diagnostics and legal assessments</li>
          <li>Client confidentiality and evidence-based approach</li>
        </ul>
      </div>
    </div>
  );
}