import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    { title: 'Freshly Prepared Daily', desc: 'Cooked every morning by culinary masters' },
    { title: 'Balanced Nutrition', desc: 'Macro-calculated by certified dietitians' },
    { title: 'Great Taste', desc: 'Gourmet flavor profiles without heavy oils' },
  ];

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-brand-sage/40">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <View className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image Collage & Nourishing Badge */}
          <View className="w-full lg:w-1/2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80' }}
                  className="w-full h-full object-cover"
                  accessibilityLabel="Healthify chef preparing fresh organic meals"
                />
              </div>

              {/* Overlaid Secondary Accent Card */}
              <div className="absolute -bottom-6 -right-3 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-card border border-brand-border/80 flex items-center gap-3.5 max-w-[240px]">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-forest" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">100% Guaranteed</p>
                  <p className="text-[11px] text-gray-500">Fresh & Hygienic in Dubai</p>
                </div>
              </div>

              {/* Circular floating badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-brand-forest text-white p-3 rounded-full shadow-lg items-center justify-center w-20 h-20 text-center flex-col">
                <span className="text-[10px] uppercase font-bold tracking-tight">Daily</span>
                <span className="text-xs font-extrabold text-emerald-300">Fresh</span>
              </div>

            </div>
          </View>

          {/* Right Column: Text & Features */}
          <View className="w-full lg:w-1/2 flex flex-col items-start">
            
            {/* Tag */}
            <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-4">
              <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                About Healthify
              </Text>
            </View>

            {/* Heading */}
            <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight mb-5">
              Your Trusted Healthy <br />
              <span className="text-brand-accent font-serif italic">Food Partner</span>
            </Text>

            {/* Description */}
            <Text className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              At Healthify, we believe healthy eating should be convenient, affordable, and delicious. 
              Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help 
              individuals and families achieve their health goals without sacrificing taste.
            </Text>

            {/* 3 Badges */}
            <View className="flex flex-col gap-4 w-full mb-8">
              {features.map((item) => (
                <View key={item.title} className="flex flex-row items-center gap-3.5 bg-white/70 p-3.5 rounded-2xl border border-brand-border/60 shadow-sm">
                  <View className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </View>
                  <View className="flex flex-col">
                    <Text className="text-sm font-bold text-brand-dark">
                      {item.title}
                    </Text>
                    <Text className="text-xs text-gray-500">
                      {item.desc}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* CTA Button */}
            <Pressable
              onPress={handleScrollToContact}
              className="bg-brand-forest hover:bg-brand-dark px-7 py-3.5 rounded-full flex flex-row items-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Text className="text-sm font-bold text-white">
                More About Us
              </Text>
              <ArrowRight className="w-4 h-4 text-white" />
            </Pressable>

          </View>

        </View>
      </View>
    </section>
  );
};
