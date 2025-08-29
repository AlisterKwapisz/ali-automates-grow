import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What tools do you use?",
      answer: "Make.com, N8n, OpenAI, VAPI, and standard web scrapers where legal."
    },
    {
      question: "Do you need my logins?",
      answer: "Yes, but we make everything safe and secure, and only if you want to. If you prefer to use your own accounts, we can use those. If not, we can use our accounts, but you'll cover the expenses."
    },
    {
      question: "How fast is delivery?",
      answer: "Depends on the size of the AI workflows or AI agents. Usually, we'll get it done within a week for smaller AI automations, but custom ones can have longer waiting times."
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