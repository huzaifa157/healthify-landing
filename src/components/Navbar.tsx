import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Menu, X, ArrowRight, Utensils } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-border/60 transition-all duration-200">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <View className="flex flex-row items-center justify-between h-20">
          
          {/* Logo */}
          <Pressable 
            onPress={() => handleNavClick('#home')}
            className="flex flex-row items-center gap-3 cursor-pointer group"
          >
            <View className="w-10 h-10 rounded-full bg-brand-forest flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Utensils className="w-5 h-5 text-brand-light" />
            </View>
            <View className="flex flex-col">
              <Text className="text-xl font-bold tracking-tight text-brand-dark font-sans">
                Healthify
              </Text>
              <Text className="text-[10px] text-brand-accent font-semibold tracking-wider uppercase -mt-0.5">
                هيلثيفاي • Dubai
              </Text>
            </View>
          </Pressable>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex flex-row items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Pressable
                key={link.label}
                onPress={() => handleNavClick(link.href)}
                className="cursor-pointer py-1 px-1 group"
              >
                <Text className="text-sm font-medium text-gray-700 hover:text-brand-forest transition-colors duration-150">
                  {link.label}
                </Text>
                <View className="h-0.5 bg-transparent group-hover:bg-brand-accent transition-all duration-200 w-0 group-hover:w-full rounded-full" />
              </Pressable>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <View className="hidden lg:flex flex-row items-center gap-4">
            <Pressable
              onPress={() => handleNavClick('#pricing')}
              className="bg-brand-forest hover:bg-brand-dark px-6 py-2.5 rounded-full flex flex-row items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Text className="text-sm font-semibold text-white">
                Get Started
              </Text>
              <ArrowRight className="w-4 h-4 text-white" />
            </Pressable>
          </View>

          {/* Mobile Hamburger Button */}
          <View className="flex lg:hidden">
            <Pressable
              onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-light/50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-dark" />
              ) : (
                <Menu className="w-6 h-6 text-brand-dark" />
              )}
            </Pressable>
          </View>
        </View>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <View className="lg:hidden py-4 border-t border-brand-border/40 bg-brand-cream/98 animate-fadeIn">
            <View className="flex flex-col gap-3 px-2">
              {NAV_LINKS.map((link) => (
                <Pressable
                  key={link.label}
                  onPress={() => handleNavClick(link.href)}
                  className="px-4 py-2.5 rounded-lg hover:bg-brand-light/60 transition-colors"
                >
                  <Text className="text-base font-medium text-gray-800">
                    {link.label}
                  </Text>
                </Pressable>
              ))}
              <View className="pt-2">
                <Pressable
                  onPress={() => handleNavClick('#pricing')}
                  className="w-full bg-brand-forest py-3 rounded-full flex flex-row items-center justify-center gap-2 shadow-sm"
                >
                  <Text className="text-sm font-semibold text-white">
                    Get Started
                  </Text>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    </header>
  );
};
