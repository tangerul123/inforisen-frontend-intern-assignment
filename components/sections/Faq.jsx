"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/ui/FaqItem";
import { faqs } from "@/data/faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-primary">Questions</span>
            </>
          }
          subtitle={
            <>
              Find clear and simple explanations to the most common questions
              about our services, payments,
              <br /> orders, and account management.
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-[1120px] gap-4 lg:grid-cols-2 lg:gap-x-6">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-4">
              {col.map((item) => {
                const index = faqs.indexOf(item);
                return (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    open={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
