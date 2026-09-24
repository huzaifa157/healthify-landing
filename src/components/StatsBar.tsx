import React from 'react';
import { View, Text } from 'react-native';
import { PackageCheck, Users, Star, Building2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const statsList = [
    {
      value: '1M+',
      label: 'Meals Delivered',
      icon: PackageCheck,
      color: 'text-brand-accent',
      bg: 'bg-brand-light',
    },
    {
      value: '30K+',
      label: 'Happy Customers',
      icon: Users,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      value: '4.8/5',
      label: 'Customer Satisfaction',
      icon: Star,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      isStar: true,
    },
    {
      value: '550+',
      label: 'Corporate Clients',
      icon: Building2,
      color: 'text-brand-primary',
      bg: 'bg-brand-sage',
    },
  ];

  return (
    <section className="relative z-20 -mt-4 sm:-mt-6 mb-6 sm:mb-8">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <View className="bg-white rounded-3xl shadow-card border border-brand-border/70 p-6 sm:p-8">
          <View className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-brand-border/60">
            {statsList.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <View 
                  key={stat.label} 
                  className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 ${
                    idx !== 0 ? 'lg:pl-8' : ''
                  }`}
                >
                  <View className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center shrink-0 shadow-sm`}>
                    <IconComponent className={`w-6 h-6 ${stat.color} ${stat.isStar ? 'fill-amber-500' : ''}`} />
                  </View>
                  <View className="flex flex-col">
                    <Text className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                      {stat.value}
                    </Text>
                    <Text className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                      {stat.label}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </section>
  );
};
