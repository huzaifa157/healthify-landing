import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Gem, Heart, Truck, Sliders, ArrowRight } from 'lucide-react';
import { ADVANTAGES } from '../data/content';

export const Advantages: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Diamond: Gem,
    Heart: Heart,
    Truck: Truck,
    Sliders: Sliders,
  };

  const handleLearnMore = () => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="advantages" className="py-10 sm:py-12 lg:py-16 bg-brand-cream">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <View className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <View className="flex flex-col items-start max-w-2xl">
            <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-3">
              <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Our Advantages
              </Text>
            </View>
            <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
              Why Choose <span className="text-brand-accent font-serif italic">Healthify</span>
            </Text>
            <Text className="text-base sm:text-lg text-gray-600 leading-relaxed">
              More than just meals — we deliver a healthier, happier you with personalized benefits designed to fit seamlessly into your busy lifestyle.
            </Text>
          </View>

          <Pressable
            onPress={handleLearnMore}
            className="inline-flex flex-row items-center gap-2 group cursor-pointer bg-brand-forest hover:bg-brand-dark px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all self-start md:self-auto"
          >
            <Text className="text-xs font-bold text-white tracking-wide uppercase">
              Discover All Advantages
            </Text>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Pressable>
        </View>

        {/* 4 Cards Grid */}
        <View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ADVANTAGES.map((adv) => {
            const Icon = iconMap[adv.icon] || Gem;
            return (
              <View
                key={adv.id}
                className="bg-white rounded-3xl p-7 border border-brand-border/70 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group"
              >
                <View className="w-14 h-14 rounded-2xl bg-brand-light group-hover:bg-brand-forest flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-brand-forest group-hover:text-white transition-colors duration-300" />
                </View>
                <Text className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                  {adv.title}
                </Text>
                <Text className="text-sm text-gray-500 leading-relaxed">
                  {adv.description}
                </Text>
              </View>
            );
          })}
        </View>

      </View>
    </section>
  );
};
