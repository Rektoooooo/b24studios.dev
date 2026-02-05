const projects = [
  {
    id: 'shadowlift',
    name: 'ShadowLift',
    tagline: 'Your complete iOS fitness companion.',
    description:
      'A production-ready fitness tracking app built with 100% native Apple technologies. Custom workout splits, detailed set/rep/weight logging, HealthKit integration, AI-powered workout summaries, and advanced analytics — all with zero external dependencies.',
    tech: ['Swift', 'SwiftUI', 'HealthKit', 'SwiftData', 'Charts'],
    appStoreUrl: 'https://apps.apple.com/us/app/shadowlift/id6743451583',
    screenshot: '/images/shadowlift-icon.png',
  },
  {
    id: 'habitowl',
    name: 'Habit Owl',
    tagline: 'Build better habits, one day at a time.',
    description:
      'A beautiful, modern habit tracking app with multiple habit types, Pomodoro-style focus timers, streak tracking, and flexible scheduling. Designed to help you stay consistent with a clean, intuitive interface.',
    tech: ['Swift', 'SwiftUI', 'SwiftData', 'WidgetKit'],
    appStoreUrl: 'https://apps.apple.com/us/app/myhabitowl/id6757938878',
    screenshot: '/images/habitowl-icon.png',
  },
  {
    id: 'stoppr',
    name: 'Stoppr',
    tagline: 'Take back control of your screen time.',
    description:
      'A Screen Time management app that helps you monitor and control device usage through Apple\'s Screen Time API. Block distracting apps instantly, track daily usage with live reports, and build healthier habits with your phone.',
    tech: ['Swift', 'SwiftUI', 'FamilyControls', 'DeviceActivity', 'ManagedSettings'],
    // Replace with real App Store URL when live
    appStoreUrl: '#',
    screenshot: '/images/stoppr-icon.png',
  },
  {
    id: 'mealprepai',
    name: 'MealPrep AI',
    tagline: 'Your AI-powered meal planning assistant.',
    description:
      'A smart meal planning app that creates personalized weekly plans tailored to your dietary preferences and health goals. AI-generated recipes, nutrition tracking with visual progress rings, and auto-generated grocery lists organized by store section.',
    tech: ['Swift', 'SwiftUI', 'SwiftData', 'OpenAI'],
    // Replace with real App Store URL when live
    appStoreUrl: '#',
    screenshot: '/images/mealprepai-icon.png',
  },
]

export default projects
