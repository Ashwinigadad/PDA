export default function ContactPage() {
  return (
    <div className="bg-[#F5F5F5] text-[#1C1C1C] min-h-screen flex flex-col items-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-[#C4A77D] pb-2 text-[#2C2C2C]">
          Contact Us
        </h1>
        
        <img 
          src="/images/p6.jpeg" 
          alt="Professional answering a phone call" 
          className="w-full max-w-md mx-auto rounded-lg mb-6" 
        />
        
        <p className="text-lg leading-relaxed mb-6 text-[#C4A77D]">
          For inquiries, professional consultations, or appointments, please reach out to us through the following channels:
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-3 text-[#2C2C2C]">Contact Information</h2>
        <p className="text-md leading-relaxed mb-6 text-[#1C1C1C]">
          <strong>Email:</strong> contact@psycho-diagnostiek.nl <br/>
          <strong>Phone:</strong> +31 123 456 789 <br/>
          <strong>Address:</strong> Prinses Marijkestraat 50K, 2404BD, Alphen aan den Rijn, Netherlands
        </p>

        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/armand-sa%C4%9F-261643137/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#C4A77D] text-[#2C2C2C] px-4 py-2 rounded-lg font-semibold hover:bg-[#E8DCC0]"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:contact@psycho-diagnostiek.nl" 
            className="bg-[#C4A77D] text-[#2C2C2C] px-4 py-2 rounded-lg font-semibold hover:bg-[#E8DCC0]"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
