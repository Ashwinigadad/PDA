export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-[#2563EB] to-[#979fb8] text-white min-h-screen flex flex-col items-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-[#E0E7FF] pb-2">
          Contact Us
        </h1>
        
        <img 
          src="/images/p6.jpeg" 
          alt="Professional answering a phone call" 
          className="w-full max-w-md mx-auto rounded-lg mb-6 shadow-lg" 
        />
        
        <p className="text-lg leading-relaxed mb-6 text-[#E0E7FF]">
          For inquiries, professional consultations, or appointments, please reach out to us through the following channels:
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-3">Contact Information</h2>
        <p className="text-md leading-relaxed mb-6 text-[#E0E7FF]">
          <strong>Email:</strong> contact@psycho-diagnostiek.nl <br/>
          <strong>Phone:</strong> +31 123 456 789 <br/>
          <strong>Address:</strong> Prinses Marijkestraat 50K, 2404BD, Alphen aan den Rijn, Netherlands
        </p>

        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/armand-sa%C4%9F-261643137/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-[#2563EB] px-4 py-2 rounded-lg font-semibold hover:bg-[#E0E7FF] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:contact@psycho-diagnostiek.nl" 
            className="bg-white text-[#2563EB] px-4 py-2 rounded-lg font-semibold hover:bg-[#E0E7FF] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}