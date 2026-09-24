// Centralized content data for Healthify Landing Page

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Growth Plans', href: '#pricing' },
  { label: 'Blog', href: '#how-it-works' },
  { label: 'Contact Us', href: '#contact' },
];

export const STATS = [
  {
    value: '1M+',
    label: 'Meals Delivered',
    iconName: 'PackageCheck',
  },
  {
    value: '30K+',
    label: 'Happy Customers',
    iconName: 'Users',
  },
  {
    value: '4.8/5',
    label: 'Customer Satisfaction',
    iconName: 'Star',
  },
  {
    value: '550+',
    label: 'Corporate Clients',
    iconName: 'Building2',
  },
];

export const MEAL_SERVICES = [
  {
    id: 'ready-to-eat',
    title: 'Healthy Ready-To-Eat Meals',
    description: 'Fresh, balanced meals that fit your lifestyle and easy to enjoy at home or work.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    tag: 'Quick & Healthy',
  },
  {
    id: 'customized',
    title: 'Customized Meal Plans',
    description: 'Tailored nutritional plans designed around your specific dietary needs, allergies, and wellness targets.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
    tag: 'Personalized',
  },
  {
    id: 'weight-management',
    title: 'Weight Management Plans',
    description: 'Portion-controlled, calorie-counted gourmet meals engineered for steady, sustainable results.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
    tag: 'Calorie Controlled',
  },
  {
    id: 'high-protein',
    title: 'High Protein Meal Plans',
    description: 'Fuel muscle recovery and daily stamina with high-protein lean meats, fish, and plant superfoods.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
    tag: 'Muscle & Energy',
  },
];

export const ADVANTAGES = [
  {
    id: 'premium',
    icon: 'Diamond',
    title: 'Premium Quality',
    description: 'Finest organic ingredients sourced responsibly from trusted local UAE farms and suppliers.',
  },
  {
    id: 'health',
    icon: 'Heart',
    title: 'Health Focused',
    description: 'Nutritionist-approved balanced meals with transparent macro profiles and zero preservatives.',
  },
  {
    id: 'delivery',
    icon: 'Truck',
    title: 'Convenient Delivery',
    description: 'Temperature-controlled daily delivery right to your doorstep or office across Dubai and UAE.',
  },
  {
    id: 'flexibility',
    icon: 'Sliders',
    title: 'Flexible Plans',
    description: 'Pause, reschedule, customize, or swap your meals anytime with single-click flexibility.',
  },
];

export const PRICING_PLANS = [
  {
    id: 'essential',
    name: 'Essential Plan',
    tagline: 'Balanced Daily Nutrition',
    price: '299',
    currency: 'AED',
    period: 'week',
    popular: false,
    features: [
      '5 Days / Week delivery',
      '2 Fresh meals per day (Lunch & Dinner)',
      'Chef-curated weekly rotating menu',
      'Standard temperature-safe delivery',
      'Standard customer care support',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'balanced',
    name: 'Balanced Plan',
    tagline: 'Optimal Health & Energy',
    price: '499',
    currency: 'AED',
    period: 'week',
    popular: true,
    features: [
      '6 Days / Week delivery',
      '3 Nutritious meals per day (Breakfast, Lunch, Dinner)',
      'Personal macro & calorie customization',
      'Free morning priority delivery slot',
      '1-on-1 Certified Nutritionist consultation',
      'Free healthy snack included daily',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'performance',
    name: 'Performance Plan',
    tagline: 'Athletic & Fitness Goals',
    price: '699',
    currency: 'AED',
    period: 'week',
    popular: false,
    features: [
      '7 Days / Week delivery',
      '4 High-protein meals + 2 superfood snacks',
      'Custom macro formulation (Keto, Bulking, Lean)',
      'VIP priority delivery timing',
      'Bi-weekly body composition check-ins',
      'Unlimited meal swaps & schedule pauses',
    ],
    buttonText: 'Get Started',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Choose Your Plan',
    description: 'Select the meal plan that fits your lifestyle, dietary requirements, and wellness goals.',
    icon: 'CheckCircle2',
  },
  {
    step: '2',
    title: 'We Prepare Fresh Meals',
    description: 'Our expert chefs craft delicious, balanced meals daily using premium fresh ingredients.',
    icon: 'UtensilsCrossed',
  },
  {
    step: '3',
    title: 'Enjoy Convenient Delivery',
    description: 'Chilled, ready-to-eat meals delivered directly to your doorstep in eco-friendly packaging.',
    icon: 'Truck',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sami M.',
    role: 'Fitness Enthusiast',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Healthify has completely transformed my eating habits. Delicious, fresh meals delivered every morning without the stress of grocery shopping or cooking.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ahmed K.',
    role: 'Corporate Executive',
    location: 'Abu Dhabi, UAE',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Finally a healthy meal delivery service that actually tastes amazing! Portions are generous, macros are accurate, and delivery is always punctual.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fatima R.',
    role: 'Working Mother & Doctor',
    location: 'Sharjah, UAE',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Great quality, incredible variety, and top-tier customer service. My energy levels have never been higher since switching to Healthify.',
    rating: 5,
  },
];

export const FAQS = [
  {
    id: '1',
    question: 'What are your meal plans?',
    answer: 'We offer four primary meal plans: Ready-To-Eat, Customized Nutrition, Weight Management, and High-Protein Athletic plans. Each plan is tailored with fresh ingredients and calibrated macronutrients to match your lifestyle.',
  },
  {
    id: '2',
    question: 'How does delivery work?',
    answer: 'We deliver fresh, chilled meals every morning between 5:00 AM and 8:30 AM in temperature-controlled cooler bags across Dubai, Abu Dhabi, and Sharjah, ensuring your meals are ready before your day begins.',
  },
  {
    id: '3',
    question: 'Can I customize my meals and exclude ingredients?',
    answer: 'Yes! You can specify dietary preferences, allergies, and dislikes (e.g., gluten-free, dairy-free, no seafood, low-carb) during sign-up or directly through your customer dashboard anytime.',
  },
  {
    id: '4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), Apple Pay, Tabby (split in 4 payments with 0% interest), and corporate invoicing.',
  },
  {
    id: '5',
    question: 'Do you have a mobile app?',
    answer: 'Yes! Our Healthify mobile app is available on both iOS App Store and Google Play Store, allowing you to manage meals, pause delivery, track macros, and chat with your nutritionist on the go.',
  },
];
