import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Utensils, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

// Crisp SVG social icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const servicesList = [
    'Healthy Ready-To-Eat Meals',
    'Customized Meal Plans',
    'Weight Management Plans',
    'High Protein Meal Plans',
    'Corporate Catering Solutions',
    'Chilled Daily Delivery UAE',
  ];

  const socialLinks = [
    { component: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
    { component: TwitterIcon, label: 'Twitter/X', href: 'https://twitter.com' },
    { component: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
    { component: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-forest">
      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Columns */}
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Socials */}
          <View className="flex flex-col items-start">
            <Pressable 
              onPress={() => handleNavClick('#home')}
              className="flex flex-row items-center gap-3 cursor-pointer mb-4"
            >
              <View className="w-10 h-10 rounded-full bg-brand-forest flex items-center justify-center border border-white/20">
                <Utensils className="w-5 h-5 text-emerald-300" />
              </View>
              <View className="flex flex-col">
                <Text className="text-xl font-bold tracking-tight text-white font-sans">
                  Healthify
                </Text>
                <Text className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase -mt-0.5">
                  هيلثيفاي • Dubai
                </Text>
              </View>
            </Pressable>

            <Text className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              Healthify is Dubai’s leading fresh healthy meal delivery service. Freshly cooked, portion-controlled, and designed for your wellness goals.
            </Text>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.component;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 flex items-center justify-center transition-colors text-gray-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </View>

          {/* Col 2: Quick Links */}
          <View className="flex flex-col items-start">
            <Text className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </Text>
            <View className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Pressable
                  key={link.label}
                  onPress={() => handleNavClick(link.href)}
                  className="cursor-pointer"
                >
                  <Text className="text-xs sm:text-sm text-gray-300 hover:text-emerald-300 transition-colors">
                    {link.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Col 3: Our Services */}
          <View className="flex flex-col items-start">
            <Text className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Services
            </Text>
            <View className="flex flex-col gap-2.5">
              {servicesList.map((service) => (
                <Pressable
                  key={service}
                  onPress={() => handleNavClick('#services')}
                  className="cursor-pointer"
                >
                  <Text className="text-xs sm:text-sm text-gray-300 hover:text-emerald-300 transition-colors">
                    {service}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Col 4: Get In Touch */}
          <View className="flex flex-col items-start">
            <Text className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Get In Touch
            </Text>
            <View className="flex flex-col gap-3.5">
              <View className="flex flex-row items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <Text className="text-xs sm:text-sm text-gray-300">
                  Business Bay, Dubai, United Arab Emirates
                </Text>
              </View>

              <View className="flex flex-row items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+97141234567" className="text-xs sm:text-sm text-gray-300 hover:text-emerald-300 transition-colors">
                  +971 4 123 4567
                </a>
              </View>

              <View className="flex flex-row items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@healthify.me" className="text-xs sm:text-sm text-gray-300 hover:text-emerald-300 transition-colors">
                  info@healthify.me
                </a>
              </View>

              <View className="flex flex-row items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <Text className="text-xs sm:text-sm text-gray-300">
                  Mon – Sun: 7:00 AM – 9:00 PM
                </Text>
              </View>
            </View>
          </View>

        </View>

        {/* Bottom Copyright */}
        <View className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Text className="text-xs text-gray-400">
            © 2026 Healthify. All Rights Reserved. Crafted with care in Dubai, UAE.
          </Text>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-xs text-gray-400 hover:text-emerald-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="text-xs text-gray-400 hover:text-emerald-300 transition-colors">
              Terms of Service
            </a>
            <a href="#home" className="text-xs text-gray-400 hover:text-emerald-300 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </View>

      </View>
    </footer>
  );
};
