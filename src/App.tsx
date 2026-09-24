import React from 'react';
import { View, ScrollView } from 'react-native';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

export default function App() {
  return (
    <View className="flex-1 w-full min-h-screen bg-brand-cream font-sans antialiased text-gray-900">
      <Navbar />
      
      <ScrollView 
        className="flex-1 w-full"
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Advantages />
        <Pricing />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Footer />
      </ScrollView>

      <WhatsAppFab />
    </View>
  );
}
