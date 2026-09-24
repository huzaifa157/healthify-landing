import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleSupportClick = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <View className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Support CTA */}
          <View className="w-full lg:w-5/12 flex flex-col items-start">
            <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-3">
              <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Frequently Asked Questions
              </Text>
            </View>
            <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
              Have Questions? <br />
              <span className="text-brand-accent font-serif italic">We've Got Answers.</span>
            </Text>
            <Text className="text-base text-gray-500 leading-relaxed mb-8">
              Find quick answers to common questions about our fresh meal plans, delivery timings across the UAE, and dietary customizations.
            </Text>

            <Pressable
              onPress={handleSupportClick}
              className="bg-brand-forest hover:bg-brand-dark px-7 py-3.5 rounded-full flex flex-row items-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Text className="text-sm font-bold text-white">
                Contact Support Team
              </Text>
              <ArrowRight className="w-4 h-4 text-white" />
            </Pressable>

            {/* Quick helper card */}
            <View className="mt-10 p-5 rounded-2xl bg-brand-cream border border-brand-border/70 flex flex-row items-center gap-3.5 w-full">
              <View className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 text-brand-forest" />
              </View>
              <View className="flex flex-col">
                <Text className="text-xs font-bold text-brand-dark">Still have questions?</Text>
                <Text className="text-xs text-gray-500">Our Dubai dietitians are available 7 days a week.</Text>
              </View>
            </View>
          </View>

          {/* Right Column: Interactive Accordion */}
          <View className="w-full lg:w-7/12 flex flex-col gap-4">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <View
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-accent/50 bg-brand-cream/60 shadow-sm' 
                      : 'border-brand-border/70 bg-white hover:border-brand-border'
                  }`}
                >
                  <Pressable
                    onPress={() => toggleFAQ(faq.id)}
                    className="p-5 sm:p-6 flex flex-row items-center justify-between gap-4 cursor-pointer w-full text-left"
                    accessibilityRole="button"
                    accessibilityState={{ expanded: isOpen }}
                  >
                    <Text className={`text-base sm:text-lg font-bold transition-colors flex-1 ${
                      isOpen ? 'text-brand-forest' : 'text-brand-dark'
                    }`}>
                      {faq.question}
                    </Text>
                    <View className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-brand-forest text-white rotate-180' : 'bg-brand-light text-brand-forest'
                    }`}>
                      <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-brand-forest'}`} />
                    </View>
                  </Pressable>

                  {isOpen && (
                    <View className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-brand-border/40 animate-fadeIn">
                      <Text className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>

        </View>
      </View>
    </section>
  );
};
