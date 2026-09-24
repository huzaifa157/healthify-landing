import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { ArrowRight, Sparkles, Star, Heart, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-10 lg:pt-10 lg:pb-14">
      {/* Background soft ambient gradient circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-light/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <View className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Copy & CTAs */}
          <View className="w-full lg:w-1/2 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <View className="flex flex-row items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <Text className="text-xs font-semibold text-brand-dark tracking-wide uppercase">
                Good Food, Brighter You
              </Text>
            </View>

            {/* Main Title */}
            <Text className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.15] mb-4">
              Healthy Meals <br />
              <span className="text-brand-accent font-serif italic">Happier Lives</span>
            </Text>

            {/* Subtitle */}
            <Text className="text-lg sm:text-xl font-semibold text-brand-primary mb-4">
              Fresh. Nutritious. Convenient. Delivered to You.
            </Text>

            {/* Body Description */}
            <Text className="text-base text-gray-600 leading-relaxed max-w-xl mb-8">
              At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, 
              customized plans, and a commitment to your wellness goals across Dubai & the UAE.
            </Text>

            {/* CTA Buttons */}
            <View className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Pressable
                onPress={() => scrollToSection('#services')}
                className="bg-brand-forest hover:bg-brand-dark px-8 py-4 rounded-full flex flex-row items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Text className="text-base font-bold text-white tracking-wide">
                  Explore Meal Plans
                </Text>
                <ArrowRight className="w-5 h-5 text-white" />
              </Pressable>

              <Pressable
                onPress={() => scrollToSection('#how-it-works')}
                className="bg-white hover:bg-brand-sage border border-brand-border px-6 py-4 rounded-full flex flex-row items-center justify-center gap-2.5 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <View className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center">
                  <Play className="w-3 h-3 text-brand-forest fill-brand-forest ml-0.5" />
                </View>
                <Text className="text-sm font-semibold text-brand-dark">
                  Watch How It Works
                </Text>
              </Pressable>
            </View>

            {/* Micro Trust Proof */}
            <View className="flex flex-row items-center gap-4 mt-8 pt-6 border-t border-brand-border/60 w-full">
              <View className="flex flex-row -space-x-2">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' }}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' }}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                  <Text className="text-xs font-bold text-brand-dark ml-1">4.8/5</Text>
                </View>
                <Text className="text-xs text-gray-500">Trusted by 30,000+ happy customers in UAE</Text>
              </View>
            </View>
          </View>

          {/* Right Column: Hero Visual with Floating Badges */}
          <View className="w-full lg:w-1/2 flex items-center justify-center relative mt-6 lg:mt-0">
            
            {/* Outer Decorative Circle Ring */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px]">
              
              {/* Subtle background spinning accent ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-accent/30 animate-[spin_60s_linear_infinite]" />
              
              {/* Main Bowl Image */}
              <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85' }}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  accessibilityLabel="Fresh gourmet healthy salad bowl with avocado and quinoa"
                />
              </div>

              {/* Floating Badge 1: Top-Right Tag */}
              <div className="absolute -top-3 right-0 sm:right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-brand-border animate-float-slow flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-dark">Good Food</p>
                  <p className="text-[9px] text-brand-accent font-semibold">Brighter You</p>
                </div>
              </div>

              {/* Floating Card 2: Bottom-Left Nourishing Badge */}
              <div className="absolute -bottom-4 -left-2 sm:left-0 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-card border border-brand-border animate-float-reverse flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">Nourishing</p>
                  <p className="text-[10px] text-gray-500">Lives Daily in UAE</p>
                </div>
              </div>

              {/* Floating Card 3: Bottom-Right Nutritious Badge */}
              <div className="absolute bottom-10 -right-4 sm:right-0 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-card border border-brand-border animate-float-slow flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="text-[11px] font-bold text-brand-dark">Nutritious Food</p>
                  <p className="text-[9px] text-brand-accent font-medium">100% Fresh Everyday</p>
                </div>
              </div>

            </div>
          </View>

        </View>
      </View>
    </section>
  );
};
