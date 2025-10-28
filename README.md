# EmergencyCall - Mental Health Support Platform

Platform mood tracking dengan AI suggestions yang mengutamakan mental wellness UI principles dan aksesibilitas.

## 🏗️ Tech Stack

**React 19 + TypeScript + Vite + Tailwind CSS v4**

- React + TS: Type safety & component reusability
- Vite: Fast refresh & optimal DX
- Tailwind v4: Rapid prototyping dengan custom theme consistency

## 🔄 State Management

Simple **React Hooks** tanpa external library (Redux/Zustand) - cukup untuk skala kecil-menengah, mudah di-track.

```
App.tsx → MoodForm → MoodScale → Notification → RecommendationCard → AISuggestions/ComingSoon
```

## 🧩 Future Integration
Mood data dari fitur Mood Check-In dapat diintegrasikan dengan dashboard konselor untuk memantau kondisi emosional pengguna secara harian.
Selain itu, sistem dapat dikembangkan untuk menghubungkan hasil mood tracking dengan AI Support atau jadwal sesi konseling langsung melalui API internal agar AI/konselor tau mood pengguna.


## 💙 Mental Wellness UI

### Color Palette
- Primary `#4D90FE` - Biru lembut (calming)
- Secondary `#FFFFFF` - Putih bersih (clarity)  
- Tertiary `#F5F6FA` - Abu-abu netral

### Principles
1. **Accessibility**: ARIA labels, keyboard nav, screen reader support, reduced motion
2. **Gentle Interactions**: Smooth transitions (300ms), subtle animations, progressive disclosure
3. **Empathetic Content**: Non-judgmental, validating, actionable suggestions
4. **Visual Comfort**: Large touch targets (44px), generous spacing, clear hierarchy

### Features
- **Mood-Based AI**: 5 levels (Very Sad → Very Happy) dengan personalized activities
- **Responsive**: Mobile-first, touch-friendly
- **Performance**: Conditional rendering, CSS keyframes, no external icons

## 🚀 Development

```bash
npm install
npm run dev
npm run build
```

**Browser Support**: Modern browsers, WCAG 2.1 Level AA compliant

---
Built with 💙 for mental wellness
