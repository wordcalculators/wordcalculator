// Centralized Tools Directory for WordCalculator.net
// This file contains all available tools for search functionality across the website.
// Update this file to add/remove tools globally.

const allTools = [
  // CALCULATORS
  {
    name: "Age Calculator",
    url: "age-calculator.html",
    icon: "fa-solid fa-user-clock",
    category: "calculator",
    keywords: "age calculator date of birth years months days birthday chronological age exact age"
  },
  {
    name: "BMI Calculator",
    url: "bmi-calculator.html",
    icon: "fa-solid fa-heartbeat",
    category: "calculator",
    keywords: "bmi calculator body mass index health kg cm weight height"
  },
  {
    name: "Calorie Calculator",
    url: "calorie-calculator.html",
    icon: "fa-solid fa-fire-alt",
    category: "calculator",
    keywords: "calorie calculator tdee bmr nutrition maintenance weight loss gain"
  },
  {
    name: "Loan & EMI Calculator",
    url: "loan-emi-calculator.html",
    icon: "fa-solid fa-coins",
    category: "calculator",
    keywords: "loan emi calculator mortgage interest monthly payment principal finance"
  },
  {
    name: "Interest Calculator",
    url: "interest-calculator.html",
    icon: "fa-solid fa-chart-pie",
    category: "calculator",
    keywords: "simple compound interest calculator savings roi investment finance"
  },

  // CONVERTERS & UNITS
  {
    name: "Length & Distance Converter",
    url: "length-distance-converter.html",
    icon: "fa-solid fa-ruler-combined",
    category: "converter",
    keywords: "length unit converter centimeter to inch inch to cm meter to feet feet to meter km to miles distance"
  },
  {
    name: "Area Converter",
    url: "area-converter.html",
    icon: "fa-solid fa-vector-square",
    category: "converter",
    keywords: "area converter square feet to square meter sq ft to sqm acre to hectare land size"
  },
  {
    name: "Temperature Converter",
    url: "temperature-converter.html",
    icon: "fa-solid fa-temperature-half",
    category: "converter",
    keywords: "temperature converter celsius to fahrenheit fahrenheit to celsius kelvin c to f f to c"
  },
  {
    name: "Data Size Converter",
    url: "data-size-converter.html",
    icon: "fa-solid fa-database",
    category: "converter",
    keywords: "data size converter megabyte to kilobyte mb to kb kb to mb byte kb mb gb tb storage"
  },
  {
    name: "Speed Converter",
    url: "speed-converter.html",
    icon: "fa-solid fa-tachometer-alt",
    category: "converter",
    keywords: "speed converter kmh to mph mph to kmh ms to kmh pace"
  },
  {
    name: "Million & Billion Converter",
    url: "million-billion-converter.html",
    icon: "fa-solid fa-sort-numeric-up-alt",
    category: "converter",
    keywords: "million to billion converter large number scale thousand million billion trillion number formatter"
  },

  // IMAGE & FILE
  {
    name: "Image Compressor",
    url: "image-compressor.html",
    icon: "fa-solid fa-compress",
    category: "media",
    keywords: "image compressor compress jpg png webp image size reducer optimizer online free"
  },
  {
    name: "Image Resizer",
    url: "image-resizer.html",
    icon: "fa-solid fa-expand-arrows-alt",
    category: "media",
    keywords: "image resizer photo resize width height percentage online resize jpg png"
  },
  {
    name: "PNG to JPG Converter",
    url: "png-to-jpg-converter.html",
    icon: "fa-solid fa-file-image",
    category: "media",
    keywords: "png to jpg converter convert png to jpeg image format change online free"
  },
  {
    name: "JPG to PNG Converter",
    url: "jpg-to-png-converter.html",
    icon: "fa-solid fa-file-image",
    category: "media",
    keywords: "jpg to png converter convert jpeg to png transparent background online"
  },

  // TEXT & WRITING
  {
    name: "Word & Character Counter",
    url: "https://wordcalculator.net",
    icon: "fa-solid fa-i-cursor",
    category: "text",
    keywords: "word counter character counter text length count live"
  },
  {
    name: "Case Converter",
    url: "case-converter.html",
    icon: "fa-solid fa-text-height",
    category: "text",
    keywords: "case converter upper lower sentence title camel kebab snake"
  },
  {
    name: "Grammar & Spell Checker",
    url: "grammar-spell-checker.html",
    icon: "fa-solid fa-spell-check",
    category: "text",
    keywords: "grammar checker spell check proofreading errors correction language"
  },
  {
    name: "Reading Time Calculator",
    url: "reading-time-calculator.html",
    icon: "fa-solid fa-book-reader",
    category: "text",
    keywords: "reading time calculator words per minute blog article"
  },
  {
    name: "Typing Speed Test",
    url: "typing-speed-test.html",
    icon: "fa-solid fa-keyboard",
    category: "text",
    keywords: "typing speed test wpm words per minute keyboard practice"
  },
  {
    name: "Citation Generator",
    url: "citation-generator.html",
    icon: "fa-solid fa-quote-left",
    category: "text",
    keywords: "citation generator apa mla chicago harvard bibliography academic writing research"
  },

  // PRODUCTIVITY
  {
    name: "Writing Goal Tracker",
    url: "writing-goal-tracker.html",
    icon: "fa-solid fa-bullseye",
    category: "productivity",
    keywords: "goal tracker writing streak habit daily words target"
  },
  {
    name: "Focus Timer (Pomodoro)",
    url: "focus-timer.html",
    icon: "fa-solid fa-hourglass-start",
    category: "productivity",
    keywords: "pomodoro timer focus session 25 minute break productivity"
  },
  {
    name: "Session History",
    url: "session-history.html",
    icon: "fa-solid fa-history",
    category: "productivity",
    keywords: "session history autosave revision versions notes"
  },
  {
    name: "Daily Writing Prompt",
    url: "writing-prompt-generator.html",
    icon: "fa-solid fa-lightbulb",
    category: "productivity",
    keywords: "writing prompt ideas inspiration creative writing daily prompt"
  },
  {
    name: "Writing Journal",
    url: "writing-journal.html",
    icon: "fa-solid fa-pen-nib",
    category: "productivity",
    keywords: "writing journal notes log reflection daily writing diary"
  },

  // SEO & CONTENT
  {
    name: "Keyword Density Analyzer",
    url: "keyword-density-analyzer.html",
    icon: "fa-solid fa-percentage",
    category: "seo",
    keywords: "keyword density analyzer seo term frequency content optimization"
  },
  {
    name: "Title & Meta Preview",
    url: "title-meta-preview.html",
    icon: "fa-solid fa-heading",
    category: "seo",
    keywords: "title meta description checker snippet preview character limit"
  },
  {
    name: "Plagiarism Checker",
    url: "plagiarism-checker.html",
    icon: "fa-solid fa-fingerprint",
    category: "seo",
    keywords: "plagiarism checker duplicate content originality"
  },
  {
    name: "Readability & Text Statistics",
    url: "readability-analyzer.html",
    icon: "fa-solid fa-chart-bar",
    category: "seo",
    keywords: "readability score flesch grade level gunning fog readability analyzer"
  },
  {
    name: "English Dictionary",
    url: "dictionary.html",
    icon: "fa-solid fa-book",
    category: "text",
    keywords: "dictionary word meaning definition examples english vocabulary"
  },
  {
    name: "Synonym & Antonym Finder",
    url: "synonym-finder.html",
    icon: "fa-solid fa-exchange-alt",
    category: "text",
    keywords: "synonym antonym finder thesaurus alternative words similar words"
  },
  {
    name: "Rhyming Word Finder",
    url: "rhyming-word-finder.html",
    icon: "fa-solid fa-music",
    category: "text",
    keywords: "rhyme rhyming word finder poetry lyrics song writing"
  },
  {
    name: "Word Frequency Analyzer",
    url: "word-frequency-analyzer.html",
    icon: "fa-solid fa-list-ol",
    category: "text",
    keywords: "word frequency ngram analyzer bigram trigram phrase count"
  },
  {
    name: "Word to Page Converter",
    url: "word-to-page-converter.html",
    icon: "fa-solid fa-file-alt",
    category: "text",
    keywords: "word to page converter pages count manuscript length a4"
  },
  {
    name: "Speech Time Calculator",
    url: "speech-time-calculator.html",
    icon: "fa-solid fa-microphone-alt",
    category: "text",
    keywords: "speech time calculator presentation length words to minutes talking time"
  },
  {
    name: "SEO Keyword Ideas",
    url: "seo-keyword-ideas.html",
    icon: "fa-solid fa-lightbulb",
    category: "seo",
    keywords: "seo keyword ideas related keywords suggestions topic research"
  },
  {
    name: "Long-Tail Keyword Finder",
    url: "long-tail-keyword-finder.html",
    icon: "fa-solid fa-stream",
    category: "seo",
    keywords: "long tail keyword finder blog topic ideas content planning"
  },
  {
    name: "Percentage Calculator",
    url: "percentage-calculator.html",
    icon: "fa-solid fa-percentage",
    category: "calculators",
    keywords: "percentage calculator calculate percentage percent increase decrease percentage of number percentage change math calculator"
  }
];

// Export for modules if needed (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = allTools;
}