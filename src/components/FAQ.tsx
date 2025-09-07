import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How can you guarantee placements?",
      answer: "We've refined our AI algorithms through hundreds of campaigns. Our system identifies and engages candidates who are most likely to move forward. If we don't hit our targets, we continue working until we do — at no extra cost to you."
    },
    {
      question: "Will this replace my recruiters?",
      answer: "Absolutely not. This makes your recruiters more effective by handling the time-consuming sourcing and initial outreach, so they can focus on building relationships and closing deals."
    },
    {
      question: "What if candidates don't respond to AI messages?",
      answer: "Our messages are personalized and human-like, with response rates 3x higher than typical recruitment outreach. Plus, we follow up across multiple channels until we get a response."
    },
    {
      question: "How quickly can we start seeing results?",
      answer: "Most clients see increased candidate engagement within 2 weeks and first placements within 30-45 days. The full 5-10 placements typically occur throughout the 90-day period."
    },
    {
      question: "What happens after the 90-day pilot?",
      answer: "If you're happy with results (and 94% of our clients are), we scale the system across more roles and continue optimizing. If not, you pay nothing and keep all the placements we made."
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