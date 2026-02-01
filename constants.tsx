import React from 'react';
import { Leader, NewsItem } from './types';

export const APP_NAME = "Bangladesh Gono-Khichuri Party";
export const APP_NAME_BN = "বাংলাদেশ গণ-খিচুড়ি পার্টি";
export const SLOGAN = "Godi Bilas Zindabad!";
export const SLOGAN_BN = "গদি বিলাস জিন্দাবাদ!";
export const VOTE_PRICE = 1080;

// Dynamic announcements list (Strictly Bengali, updated to reflect the new party name)
export const ANNOUNCEMENTS_BN = [
  "ভোট দিন সালাদ মার্কায়, পকেট ভরুন রঙিন ধোঁয়ায়! 💨",
  "আমরা দেব ইশতেহারের ফুলঝুরি, আপনারা দেবেন সিন্দুকের চাবি! 🔑",
  "প্রতিটি ভোটারকে দেওয়া হবে একটি করে ডিজিটাল সোনার হরিণ! 🦌",
  "উন্নয়নের জোয়ারে ভাসবে দেশ, জনগণের হবে বারোটা শেষ! 🌊",
  "নির্বাচনের পর আমাদের ইনবক্সে পাবেন না, তাই এখনই ভোট দিয়ে দিন! 📵",
  "মিথ্যা বলা আমাদের অধিকার, ভাঁওতা দেওয়াই আমাদের অঙ্গীকার! 🤝",
  "সালাদ মার্কায় ভোট দিলে মিলবে চাঁদে জমি কেনার অগ্রিম সুযোগ! 🌙"
];

// Hierarchical data structure for Districts and Constituencies
export const DISTRICT_DATA: Record<string, string[]> = {
  "Dhaka": ["Dhaka-1", "Dhaka-2", "Dhaka-3", "Dhaka-4", "Dhaka-5", "Dhaka-6", "Dhaka-7", "Dhaka-8", "Dhaka-9", "Dhaka-10", "Dhaka-11", "Dhaka-12", "Dhaka-13", "Dhaka-14", "Dhaka-15", "Dhaka-16", "Dhaka-17", "Dhaka-18", "Dhaka-19", "Dhaka-20"],
  "Chattogram": ["Chattogram-1", "Chattogram-2", "Chattogram-3", "Chattogram-4", "Chattogram-5", "Chattogram-6", "Chattogram-7", "Chattogram-8", "Chattogram-9", "Chattogram-10", "Chattogram-11", "Chattogram-12", "Chattogram-13", "Chattogram-14", "Chattogram-15", "Chattogram-16"],
  "Cumilla": ["Cumilla-1", "Cumilla-2", "Cumilla-3", "Cumilla-4", "Cumilla-5", "Cumilla-6", "Cumilla-7", "Cumilla-8", "Cumilla-9", "Cumilla-10", "Cumilla-11"],
  "Sylhet": ["Sylhet-1", "Sylhet-2", "Sylhet-3", "Sylhet-4", "Sylhet-5", "Sylhet-6"],
  "Rajshahi": ["Rajshahi-1", "Rajshahi-2", "Rajshahi-3", "Rajshahi-4", "Rajshahi-5", "Rajshahi-6"],
  "Khulna": ["Khulna-1", "Khulna-2", "Khulna-3", "Khulna-4", "Khulna-5", "Khulna-6"],
  "Barishal": ["Barishal-1", "Barishal-2", "Barishal-3", "Barishal-4", "Barishal-5", "Barishal-6"],
  "Rangpur": ["Rangpur-1", "Rangpur-2", "Rangpur-3", "Rangpur-4", "Rangpur-5", "Rangpur-6"],
  "Mymensingh": ["Mymensingh-1", "Mymensingh-2", "Mymensingh-3", "Mymensingh-4", "Mymensingh-5", "Mymensingh-6", "Mymensingh-7", "Mymensingh-8", "Mymensingh-9", "Mymensingh-10", "Mymensingh-11"],
  "Gazipur": ["Gazipur-1", "Gazipur-2", "Gazipur-3", "Gazipur-4", "Gazipur-5"],
  "Narayanganj": ["Narayanganj-1", "Narayanganj-2", "Narayanganj-3", "Narayanganj-4", "Narayanganj-5"],
  "Tangail": ["Tangail-1", "Tangail-2", "Tangail-3", "Tangail-4", "Tangail-5", "Tangail-6", "Tangail-7", "Tangail-8"],
  "Bogura": ["Bogura-1", "Bogura-2", "Bogura-3", "Bogura-4", "Bogura-5", "Bogura-6", "Bogura-7"],
  "Noakhali": ["Noakhali-1", "Noakhali-2", "Noakhali-3", "Noakhali-4", "Noakhali-5", "Noakhali-6"],
  "Brahmanbaria": ["Brahmanbaria-1", "Brahmanbaria-2", "Brahmanbaria-3", "Brahmanbaria-4", "Brahmanbaria-5", "Brahmanbaria-6"],
  "Dinajpur": ["Dinajpur-1", "Dinajpur-2", "Dinajpur-3", "Dinajpur-4", "Dinajpur-5", "Dinajpur-6"],
  "Jashore": ["Jashore-1", "Jashore-2", "Jashore-3", "Jashore-4", "Jashore-5", "Jashore-6"],
  "Patuakhali": ["Patuakhali-1", "Patuakhali-2", "Patuakhali-3", "Patuakhali-4"],
  "Kishoreganj": ["Kishoreganj-1", "Kishoreganj-2", "Kishoreganj-3", "Kishoreganj-4", "Kishoreganj-5", "Kishoreganj-6"],
  "Pabna": ["Pabna-1", "Pabna-2", "Pabna-3", "Pabna-4", "Pabna-5"],
  "Kushtia": ["Kushtia-1", "Kushtia-2", "Kushtia-3", "Kushtia-4"],
  "Chandpur": ["Chandpur-1", "Chandpur-2", "Chandpur-3", "Chandpur-4", "Chandpur-5"],
  "Feni": ["Feni-1", "Feni-2", "Feni-3"],
  "Lakshmipur": ["Lakshmipur-1", "Lakshmipur-2", "Lakshmipur-3", "Lakshmipur-4"],
  "Cox's Bazar": ["Cox's Bazar-1", "Cox's Bazar-2", "Cox's Bazar-3", "Cox's Bazar-4"],
  "Habiganj": ["Habiganj-1", "Habiganj-2", "Habiganj-3", "Habiganj-4"],
  "Moulvibazar": ["Moulvibazar-1", "Moulvibazar-2", "Moulvibazar-3", "Moulvibazar-4"],
  "Sunamganj": ["Sunamganj-1", "Sunamganj-2", "Sunamganj-3", "Sunamganj-4", "Sunamganj-5"],
  "Netrokona": ["Netrokona-1", "Netrokona-2", "Netrokona-3", "Netrokona-4", "Netrokona-5"],
  "Sherpur": ["Sherpur-1", "Sherpur-2", "Sherpur-3"],
  "Jamalpur": ["Jamalpur-1", "Jamalpur-2", "Jamalpur-3", "Jamalpur-4", "Jamalpur-5"],
  "Narsingdi": ["Narsingdi-1", "Narsingdi-2", "Narsingdi-3", "Narsingdi-4", "Narsingdi-5"],
  "Manikganj": ["Manikganj-1", "Manikganj-2", "Manikganj-3"],
  "Munshiganj": ["Munshiganj-1", "Munshiganj-2", "Munshiganj-3"],
  "Faridpur": ["Faridpur-1", "Faridpur-2", "Faridpur-3", "Faridpur-4"],
  "Madaripur": ["Madaripur-1", "Madaripur-2", "Madaripur-3"],
  "Gopalganj": ["Gopalganj-1", "Gopalganj-2", "Gopalganj-3"],
  "Rajbari": ["Rajbari-1", "Rajbari-2"],
  "Shariatpur": ["Shariatpur-1", "Shariatpur-2", "Shariatpur-3"],
  "Satkhira": ["Satkhira-1", "Satkhira-2", "Satkhira-3", "Satkhira-4"],
  "Bagerhat": ["Bagerhat-1", "Bagerhat-2", "Bagerhat-3", "Bagerhat-4"],
  "Jhenaidah": ["Jhenaidah-1", "Jhenaidah-2", "Jhenaidah-3", "Jhenaidah-4"],
  "Magura": ["Magura-1", "Magura-2"],
  "Narail": ["Narail-1", "Narail-2"],
  "Chuadanga": ["Chuadanga-1", "Chuadanga-2"],
  "Meherpur": ["Meherpur-1", "Meherpur-2"],
  "Sirajganj": ["Sirajganj-1", "Sirajganj-2", "Sirajganj-3", "Sirajganj-4", "Sirajganj-5", "Sirajganj-6"],
  "Naogaon": ["Naogaon-1", "Naogaon-2", "Naogaon-3", "Naogaon-4", "Naogaon-5", "Naogaon-6"],
  "Natore": ["Natore-1", "Natore-2", "Natore-3", "Natore-4"],
  "Chapai Nawabganj": ["Chapai Nawabganj-1", "Chapai Nawabganj-2", "Chapai Nawabganj-3"],
  "Joypurhat": ["Joypurhat-1", "Joypurhat-2"],
  "Gaibandha": ["Gaibandha-1", "Gaibandha-2", "Gaibandha-3", "Gaibandha-4", "Gaibandha-5"],
  "Kurigram": ["Kurigram-1", "Kurigram-2", "Kurigram-3", "Kurigram-4"],
  "Nilphamari": ["Nilphamari-1", "Nilphamari-2", "Nilphamari-3", "Nilphamari-4"],
  "Lalmonirhat": ["Lalmonirhat-1", "Lalmonirhat-2", "Lalmonirhat-3"],
  "Panchagarh": ["Panchagarh-1", "Panchagarh-2"],
  "Thakurgaon": ["Thakurgaon-1", "Thakurgaon-2", "Thakurgaon-3"],
  "Bhola": ["Bhola-1", "Bhola-2", "Bhola-3", "Bhola-4"],
  "Jhalokathi": ["Jhalokathi-1", "Jhalokathi-2"],
  "Pirojpur": ["Pirojpur-1", "Pirojpur-2", "Pirojpur-3"],
  "Barguna": ["Barguna-1", "Barguna-2"],
  "Rangamati": ["Rangamati-1"],
  "Bandarban": ["Bandarban-1"],
  "Khagrachari": ["Khagrachari-1"]
};

export const LEADERS: Leader[] = [
  {
    id: "1",
    name: "জনাব তাসবির আযাদ",
    designation: "প্রধান স্বপ্নদ্রষ্টা ও খিচুড়ি সম্রাট",
    promise: "প্রতিটি নাগরিকের জন্য মাসে একবার বিনামূল্যে দুবাই ট্রিপ (ভার্চুয়াল)",
    image: "https://picsum.photos/seed/leader1/400/400",
    bio: "অবিশ্বাস্য যোগ্যতা এবং ৩টি কাল্পনিক পিএইচডি-র অধিকারী। তিনি বাতাস থেকে ভোট তৈরির ফর্মুলা আবিষ্কার করেছেন।"
  },
  {
    id: "4",
    name: "জনাব জাহিদ আযাদ",
    designation: "ভারপ্রাপ্ত চেয়ারম্যান, বাংলাদেশ গণ-খিচুড়ি পার্টি",
    promise: "১.নির্বাচিত হলে প্রতিটি ভোটারের ফেসবুক আইডিতে প্রতিদিন ১০০০টি করে অটো-লাইক এবং রিয়েক্ট দেওয়ার ব্যবস্থা করা হবে। ২.প্রতিটি পরিবারের জন্য সপ্তাহে একদিন হেলিকপ্টারে করে কাচ্চি বিরিয়ানি হোম-ডেলিভারি দেওয়া হবে",
    image: "https://picsum.photos/seed/zahidazad/400/400",
    bio: "রাষ্ট্রীয় কোষাগার এবং রান্নাঘর-উভয় সামলানোর সমান দক্ষতাসম্পন্ন। তিনি মনে করেন সব দলের দুর্নীতির মশলা দিয়ে তৈরি এক অদ্ভুত খিচুড়ি শাসন ব্যবস্থাই পারে দেশের ভবিষ্যৎকে সুস্বাদু করতে।"
  }
];

export const MANIFESTO_ITEMS = [
  "নির্বাচনের দিন সবার জন্য বিনামূল্যে স্পেশাল শাহী খিচুড়ি (এক প্লেট শেয়ারিং)।",
  "অনুগত কর্মীদের জন্য ভিআইপি জেলে যাওয়ার আগাম বুকিং সুবিধা।",
  "দেশের সব নদীকে দুধে রূপান্তরিত করার মহাপরিকল্পনা।",
  "ফেসবুকে বেশি লাইক দিলে সরকারি চাকরিতে বিশেষ কোটা।"
];

export const NEWS_FEED: NewsItem[] = [
  {
    id: "n1",
    title: "গণ-খিচুড়ি পার্টির নতুন ইশতেহার: বাতাস খেয়েও পেট ভরবে!",
    date: "আজকের খবর",
    summary: "দেশের খাদ্যের অভাব দূর করতে নতুন বায়বীয় টেকনোলজি নিয়ে আসছে বাংলাদেশ গণ-খিচুড়ি পার্টি।",
    category: 'Promise'
  },
  {
    id: "n2",
    title: "বিরোধী দলের ইফতার পার্টিতে খিচুড়ি না থাকায় তুলকালাম",
    date: "গতকাল",
    summary: "খিচুড়ি না থাকা মানেই হলো বাংলাদেশ গণ-খিচুড়ি পার্টিকে অপমান করা - অভিযোগ মুখপাত্রের।",
    category: 'Scandal'
  }
];

export const COLORS = {
  primary: "#10b981", // Emerald
  secondary: "#ef4444", // Red
  accent: "#f59e0b", // Amber
  dark: "#0f172a", // Slate 900
  light: "#f8fafc", // Slate 50
};
