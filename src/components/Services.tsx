import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MEAL_SERVICES } from '../data/content';

export const Services: React.FC = () => {
  const handleSelectPlan = () => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <View className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <View className="flex flex-col items-start max-w-2xl">
            <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-3">
              <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Our Services
              </Text>
            </View>
            <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
              Healthy Meal Plans for <br className="hidden sm:inline" />
              <span className="text-brand-accent font-serif italic">Every Lifestyle</span>
            </Text>
          </View>

          <Pressable 
            onPress={handleSelectPlan}
            className="flex flex-row items-center gap-2 group cursor-pointer self-start md:self-auto"
          >
            <Text className="text-sm font-bold text-brand-forest group-hover:text-brand-accent transition-colors">
              View All Services
            </Text>
            <ArrowRight className="w-4 h-4 text-brand-forest group-hover:translate-x-1 transition-transform" />
          </Pressable>
        </View>

        {/* 4 Cards Responsive Grid */}
        <View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {MEAL_SERVICES.map((service) => (
            <View
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-border/70 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image with Tag Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-sage">
                <Image
                  source={{ uri: service.image }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  accessibilityLabel={service.title}
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-[11px] font-bold text-brand-dark">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <View className="p-6 flex flex-col flex-1 justify-between">
                <View className="mb-4">
                  <Text className="text-lg font-bold text-brand-dark group-hover:text-brand-accent transition-colors mb-2">
                    {service.title}
                  </Text>
                  <Text className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </Text>
                </View>

                {/* Card Action Link */}
                <Pressable
                  onPress={handleSelectPlan}
                  className="flex flex-row items-center justify-between pt-4 border-t border-brand-border/50 cursor-pointer"
                >
                  <Text className="text-xs font-bold text-brand-forest uppercase tracking-wider group-hover:text-brand-accent transition-colors">
                    Explore Plan
                  </Text>
                  <View className="w-8 h-8 rounded-full bg-brand-light group-hover:bg-brand-forest flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-brand-forest group-hover:text-white transition-colors" />
                  </View>
                </Pressable>
              </View>

            </View>
          ))}
        </View>

      </View>
    </section>
  );
};
