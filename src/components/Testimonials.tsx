import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Star, Quote, ArrowRight, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-brand-cream">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <View className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <View className="flex flex-col items-start max-w-2xl">
            <View className="px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-accent/20 mb-3">
              <Text className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Customer Stories
              </Text>
            </View>
            <Text className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
              What Our Customers <br />
              <span className="text-brand-accent font-serif italic">Are Saying</span>
            </Text>
          </View>

          <Pressable 
            className="flex flex-row items-center gap-2 group cursor-pointer self-start md:self-auto"
          >
            <Text className="text-sm font-bold text-brand-forest group-hover:text-brand-accent transition-colors">
              View More Reviews
            </Text>
            <ArrowRight className="w-4 h-4 text-brand-forest group-hover:translate-x-1 transition-transform" />
          </Pressable>
        </View>

        {/* 3 Review Cards */}
        <View className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <View
              key={review.id}
              className="bg-white rounded-3xl p-7 border border-brand-border/70 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-brand-light group-hover:text-emerald-100 transition-colors mb-4" />

              {/* Quote Text */}
              <Text className="text-sm sm:text-base text-gray-600 leading-relaxed italic mb-6">
                "{review.quote}"
              </Text>

              {/* Rating & User Profile */}
              <View className="pt-4 border-t border-brand-border/50">
                {/* 5 Stars */}
                <View className="flex flex-row items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </View>

                {/* Avatar & Details */}
                <View className="flex flex-row items-center gap-3">
                  <Image
                    source={{ uri: review.avatar }}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-light"
                    accessibilityLabel={review.name}
                  />
                  <View className="flex flex-col">
                    <Text className="text-sm font-bold text-brand-dark">
                      {review.name}
                    </Text>
                    <View className="flex flex-row items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-accent" />
                      <Text className="text-xs text-gray-500">
                        {review.role} • {review.location}
                      </Text>
                    </View>
                  </View>
                </View>

              </View>

            </View>
          ))}
        </View>

      </View>
    </section>
  );
};
