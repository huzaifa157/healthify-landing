import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Check, Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('balanced');
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  const handleChoose = (planName: string) => {
    setSelectedPlan(planName.toLowerCase());
    setSuccessNotice(`You selected the ${planName}! Redirecting to checkout...`);
    setTimeout(() => setSuccessNotice(null), 4000);
  };

  return (
    <section id="pricing" className="py-10 sm:py-12 lg:py-16 bg-brand-sage/30">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <View className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <View className="flex flex-col items-start max-w-2xl">
            <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-3">
              <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Growth Plans
              </Text>
            </View>
            <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
              Find the Perfect Plan <br />
              <span className="text-brand-accent font-serif italic">for Your Goals</span>
            </Text>
          </View>

          <Pressable 
            onPress={() => handleChoose('Balanced Plan')}
            className="flex flex-row items-center gap-2 group cursor-pointer self-start md:self-auto"
          >
            <Text className="text-sm font-bold text-brand-forest group-hover:text-brand-accent transition-colors">
              View All Plans
            </Text>
            <ArrowRight className="w-4 h-4 text-brand-forest group-hover:translate-x-1 transition-transform" />
          </Pressable>
        </View>

        {/* Dynamic Notification when plan clicked */}
        {successNotice && (
          <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center justify-between animate-fadeIn">
            <span>{successNotice}</span>
            <button onClick={() => setSuccessNotice(null)} className="text-emerald-600 hover:text-emerald-900 font-bold ml-4">✕</button>
          </div>
        )}

        {/* 4 Cards Grid (3 Pricing + 1 Highlight Visual Card) */}
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <View
                key={plan.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular 
                    ? 'border-2 border-brand-accent shadow-card lg:-translate-y-2' 
                    : 'border border-brand-border/70 shadow-sm hover:shadow-card'
                }`}
              >
                {/* Most Popular Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-forest text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Most Popular</span>
                  </div>
                )}

                <View>
                  {/* Plan Name & Tagline */}
                  <Text className="text-xl font-extrabold text-brand-dark mb-1">
                    {plan.name}
                  </Text>
                  <Text className="text-xs text-gray-500 font-medium mb-6">
                    {plan.tagline}
                  </Text>

                  {/* Price */}
                  <View className="flex flex-row items-baseline gap-1 mb-6 pb-6 border-b border-brand-border/60">
                    <Text className="text-sm font-bold text-gray-400">
                      {plan.currency}
                    </Text>
                    <Text className="text-4xl font-black text-brand-dark tracking-tight">
                      {plan.price}
                    </Text>
                    <Text className="text-xs text-gray-500 font-medium ml-1">
                      / {plan.period}
                    </Text>
                  </View>

                  {/* Feature Checklist */}
                  <View className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <View key={i} className="flex flex-row items-start gap-2.5">
                        <View className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-brand-accent text-white' : 'bg-brand-light text-brand-forest'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </View>
                        <Text className="text-xs text-gray-600 leading-snug">
                          {feat}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Get Started Button */}
                <Pressable
                  onPress={() => handleChoose(plan.name)}
                  className={`w-full py-3.5 rounded-full flex flex-row items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 ${
                    isPopular
                      ? 'bg-brand-forest hover:bg-brand-dark shadow-md text-white'
                      : 'bg-brand-light hover:bg-brand-forest text-brand-forest hover:text-white'
                  }`}
                >
                  <Text className={`text-xs font-bold uppercase tracking-wider ${
                    isPopular ? 'text-white' : 'group-hover:text-white'
                  }`}>
                    {plan.buttonText}
                  </Text>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Pressable>

              </View>
            );
          })}

          {/* 4th Card: "Invest in a Healthier You" Visual Card */}
          <View className="relative bg-brand-forest rounded-3xl overflow-hidden shadow-card flex flex-col justify-between p-6 sm:p-7 text-white min-h-[380px] group">
            
            {/* Background Image with dark overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80' }}
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                accessibilityLabel="Healthy lifestyle bowl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                <HeartHandshake className="w-4 h-4 text-emerald-300" />
                <span className="text-[11px] font-semibold tracking-wide uppercase text-white">Your Wellness</span>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white font-sans">
                Invest in a <br />
                <span className="text-emerald-300 font-serif italic">Healthier You</span>
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Join thousands of UAE residents enjoying sustainable energy, weight loss, and chef-curated nutrition every single day.
              </p>
              <Pressable
                onPress={() => handleChoose('Balanced Plan')}
                className="w-full bg-white hover:bg-emerald-50 py-3 rounded-full flex flex-row items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Text className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Start Today
                </Text>
                <ArrowRight className="w-3.5 h-3.5 text-brand-dark" />
              </Pressable>
            </div>

          </View>

        </View>

      </View>
    </section>
  );
};
