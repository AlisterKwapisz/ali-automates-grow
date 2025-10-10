import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What happens during the Free AI Consultation?",
      answer: "We'll analyze your current workflows, identify automation opportunities, and create a custom roadmap showing exactly how AI can save you time and money. There's zero pressure and no commitment - just actionable insights you can use immediately."
    },
    {
      question: "How can you guarantee time savings?",
      answer: "We've refined our AI solutions through hundreds of implementations. We identify repeatable tasks and automate them with proven systems. If we don't deliver the promised 15+ hours saved per week within 90 days, we continue working at no additional cost until we do."
    },
    {
      question: "Will AI replace my employees?",
      answer: "Absolutely not. Our AI solutions make your team more effective by handling repetitive tasks, so they can focus on strategic work that actually moves the business forward. Your team becomes more valuable, not redundant."
    },
    {
      question: "What types of processes can be automated?",
      answer: "Almost any repetitive task: data entry, reporting, content creation, customer communication, workflow coordination, quality assurance, and more. During your consultation, we'll identify the biggest time-wasters specific to your business."
    },
    {
      question: "How long does implementation take?",
      answer: "Most clients see initial automation running within 2-3 weeks, with full implementation and optimization complete within 60-90 days. We work in phases so you start seeing benefits quickly while we scale the solution."
    },
    {
      question: "What happens after the initial 90 days?",
      answer: "If you're happy with results (and 94% of our clients are), we continue optimizing and expanding your automation. If not, you pay nothing extra and keep all the systems we built. It's truly risk-free."
    },
    {
      question: "Do I need technical expertise to use these automations?",
      answer: "Not at all. We build user-friendly solutions that integrate seamlessly into your existing workflows. If you can use email and a web browser, you can use our automations. Plus, we provide training and ongoing support."
    },
    {
      question: "What if the automation doesn't work for my business?",
      answer: "That's why we start with a free consultation - to ensure AI is a good fit before you commit. Our 90-day guarantee means if we can't deliver the promised time savings, we work for free until we do. Your success is our only metric."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;