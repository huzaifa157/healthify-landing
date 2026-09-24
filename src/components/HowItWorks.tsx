import React from 'react';
import { View, Text } from 'react-native';
import { CheckCircle2, UtensilsCrossed, Truck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const stepIcons = [CheckCircle2, UtensilsCrossed, Truck];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <View className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-3">
            <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
              Our Approach
            </Text>
          </View>
          <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Healthy Eating in <br />
            <span className="text-brand-accent font-serif italic">3 Simple Steps</span>
          </Text>
          <Text className="text-base text-gray-500 leading-relaxed">
            Getting fresh, gourmet, nutritionist-approved food delivered to your door in Dubai has never been easier.
          </Text>
        </View>

        {/* 3 Steps Flow */}
        <View className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = stepIcons[index] || CheckCircle2;
            return (
              <View
                key={item.step}
                className="relative bg-brand-cream rounded-3xl p-8 border border-brand-border/70 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Step Number Floating Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-forest text-white font-black text-sm flex items-center justify-center shadow-md">
                  {item.step}
                </div>

                {/* Icon Circle */}
                <View className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-brand-forest" />
                </View>

                {/* Title */}
                <Text className="text-xl font-bold text-brand-dark mb-3">
                  {item.title}
                </Text>

                {/* Description */}
                <Text className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </Text>
              </View>
            );
          })}

        </View>

      </View>
    </section>
  );
};
