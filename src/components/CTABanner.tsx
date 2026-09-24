import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTABanner: React.FC = () => {
  const handleGetStarted = () => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-10 bg-brand-cream">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <View className="relative bg-brand-forest rounded-3xl overflow-hidden px-6 py-10 sm:px-12 sm:py-12 lg:py-14 shadow-elevated">
          
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-light/10 rounded-full blur-2xl -z-0 pointer-events-none" />

          <View className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <View className="max-w-2xl flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                  Ready to Feel Your Best?
                </span>
              </div>
              <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Transform Your Health, <br />
                <span className="text-emerald-300 font-serif italic">One Meal At A Time</span>
              </Text>
              <Text className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                Fresh, nutritious, convenient. Join thousands of happy customers in Dubai and across the UAE today.
              </Text>
            </View>

            <View className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Pressable
                onPress={handleGetStarted}
                className="bg-white hover:bg-emerald-50 px-8 py-4 rounded-full flex flex-row items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Text className="text-sm sm:text-base font-bold text-brand-dark tracking-wide uppercase">
                  Get Started Today
                </Text>
                <ArrowRight className="w-4 h-4 text-brand-dark" />
              </Pressable>
            </View>

          </View>
        </View>
      </View>
    </section>
  );
};
