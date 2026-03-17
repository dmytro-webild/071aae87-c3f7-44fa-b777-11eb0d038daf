"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Sparkles, Heart, Zap, MessageSquare, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="mediumLargeSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="SoulSync"
          navItems={[
            { name: "Memory Vault", id: "memory-vault" },
            { name: "Shared Diary", id: "shared-diary" },
            { name: "Features", id: "features" },
            { name: "Get Started", id: "get-started" }
          ]}
          button={{
            text: "Download App",            href: "#download"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Keep Your Friendship Alive"
          description="SoulSync is a private digital sanctuary where you and your best friend capture memories, share thoughts, and celebrate every moment together. From photos and voice notes to countdown timers and mood checks, stay deeply connected no matter the distance."
          tag="New Release"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "Get Started", href: "#get-started" },
            { text: "Learn More", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/lesbian-couple-together-outdoors-concept_53876-13932.jpg"
          imageAlt="Best friends sharing a joyful moment together"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="Seven Ways to Stay Connected"
          description="Discover the features that make SoulSync the perfect friendship app. From memory preservation to real-time mood sharing, every feature is designed to deepen your bond."
          tag="Core Features"
          tagIcon={Heart}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "Memory Vault",              author: "Store Forever",              description: "Upload and organize photos, videos, and voice notes in a beautiful timeline. Each memory is a precious moment preserved just for you two.",              tags: ["Photos", "Videos", "Voice"],
              imageSrc: "http://img.b2bpic.net/free-photo/detective-inspector-examines-case-files_482257-75311.jpg",              imageAlt: "Memory vault timeline display"
            },
            {
              id: "2",              title: "Shared Diary",              author: "Write Together",              description: "A private journal where both friends can write daily notes, thoughts, and feelings. Create an intimate record of your friendship journey.",              tags: ["Journal", "Private", "Daily"],
              imageSrc: "http://img.b2bpic.net/free-photo/colorful-overloaded-bullet-journal_23-2150248150.jpg",              imageAlt: "Shared diary writing interface"
            },
            {
              id: "3",              title: "Countdown Timer",              author: "Anticipation",              description: "See exactly how many days, hours, and minutes until you meet again. Build excitement and mark the moments that matter.",              tags: ["Timer", "Meetings", "Dates"],
              imageSrc: "http://img.b2bpic.net/free-vector/this-week-neon-lights-cyber-monday_23-2148667863.jpg",              imageAlt: "Countdown timer display"
            },
            {
              id: "4",              title: "Mood Check",              author: "Express Yourself",              description: "Quick mood buttons like 'I miss you,' 'Thinking of you,' 'Bad day today,' and 'I'm happy today.' Share your feelings instantly.",              tags: ["Moods", "Feelings", "Quick"],
              imageSrc: "http://img.b2bpic.net/free-vector/video-game-health-bar-element-collection_23-2150257564.jpg",              imageAlt: "Mood check buttons interface"
            },
            {
              id: "5",              title: "Friendship Quotes",              author: "Daily Inspiration",              description: "Receive daily emotional friendship quotes that celebrate your bond. Share them on social media to spread the friendship love.",              tags: ["Quotes", "Daily", "Sharing"],
              imageSrc: "http://img.b2bpic.net/free-vector/motivational-poster-inspirational-quote-design_1284-43535.jpg",              imageAlt: "Friendship quotes display"
            },
            {
              id: "6",              title: "Memory Reminders",              author: "Anniversary Moments",              description: "Get notified when memories from the same date in previous years appear. Relive your best moments with nostalgic notifications.",              tags: ["Reminders", "Memories", "Notifications"],
              imageSrc: "http://img.b2bpic.net/free-photo/detective-inspector-examines-case-files_482257-75311.jpg",              imageAlt: "Memory reminder notification"
            }
          ]}
        />
      </div>

      <div id="story-generator" data-section="story-generator">
        <ProductCardTwo
          title="Friendship Story Generator"
          description="Transform your memories into beautiful shareable stories. Generate Instagram-ready friendship images that celebrate your unique bond with just one click."
          tag="Creative Tool"
          tagIcon={Zap}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "story-1",              brand: "SoulSync",              name: "Memory Story",              price: "Auto-Generated",              rating: 5,
              reviewCount: "Instant",              imageSrc: "http://img.b2bpic.net/free-vector/flat-adventure-instagram-stories-with-photo_23-2149027498.jpg",              imageAlt: "Generated friendship story template"
            },
            {
              id: "story-2",              brand: "SoulSync",              name: "Quote Story",              price: "Auto-Generated",              rating: 5,
              reviewCount: "Instant",              imageSrc: "http://img.b2bpic.net/free-vector/motivational-poster-inspirational-quote-design_1284-43535.jpg",              imageAlt: "Generated quote story template"
            },
            {
              id: "story-3",              brand: "SoulSync",              name: "Milestone Story",              price: "Auto-Generated",              rating: 5,
              reviewCount: "Instant",              imageSrc: "http://img.b2bpic.net/free-vector/video-game-health-bar-element-collection_23-2150257564.jpg",              imageAlt: "Generated milestone story template"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Loved by Best Friends Everywhere"
          description="See how SoulSync has helped friendships bloom and connections deepen across the world."
          tag="User Stories"
          tagIcon={MessageSquare}
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Maya & Sarah",              date: "2 weeks ago",              title: "Changed Everything",              quote: "SoulSync made staying connected so easy. Even though we're miles apart, it feels like we're together every day. The memory vault is our favorite feature!",              tag: "Long Distance Friends",              avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-with-short-curly-hair-colorful-shirt-smiling-broadly-hugging-herself-standing-green-wall_141793-29368.jpg",              avatarAlt: "Maya profile"
            },
            {
              id: "2",              name: "James & Alex",              date: "1 month ago",              title: "Our Friendship Bible",              quote: "We use SoulSync every single day. The shared diary and mood checks keep us so connected. It's like having a best friend diary that we both write in.",              tag: "Daily Users",              avatarSrc: "http://img.b2bpic.net/free-photo/positive-guy-feels-very-glad-closes-eyes-being-happy-hear-excellent-news-wears-round-glasses-checkered-shirt-isolated-beige-background-delighted-man-casual-clothes-poses-indoor_273609-56676.jpg",              avatarAlt: "James profile"
            },
            {
              id: "3",              name: "Emma & Lily",              date: "3 weeks ago",              title: "Pure Magic",              quote: "The friendship story generator is incredible! We use it to share memories on Instagram all the time. It's such a beautiful way to celebrate our bond publicly.",              tag: "Social Sharers",              avatarSrc: "http://img.b2bpic.net/free-photo/headshot-attracitve-carefree-charismatic-european-young-woman-with-deep-blue-eyes-fair-hair-freckles-smiling-happily-while-gazing-sincere-kind-front-standing-gray-wall_176420-35770.jpg",              avatarAlt: "Emma profile"
            },
            {
              id: "4",              name: "Jordan & Casey",              date: "10 days ago",              title: "Worth Every Moment",              quote: "The countdown timer to our meetups and the daily quotes keep us motivated. SoulSync is more than an app—it's our friendship's safe space.",              tag: "Emotional Connection",              avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-with-curly-hair-wearing-jersey_1139-335.jpg",              avatarAlt: "Jordan profile"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Made for Best Friends"
          description={[
            "SoulSync was created by best friends for best friends. We understand the pain of distance and the precious nature of friendship. Our mission is to provide a safe, beautiful, and intimate digital space where friendships can flourish.",            "Every feature is thoughtfully designed to celebrate the moments that matter. From quiet reflections in a shared diary to joyful memories in the vault, SoulSync honors the depth and uniqueness of your friendship bond.",            "We believe that true friendship deserves more than regular messaging apps. It deserves a sanctuary dedicated entirely to your connection."
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Download App", href: "#download" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Have questions about SoulSync? We've got answers. Find everything you need to know about our friendship app."
          tag="Help & Support"
          tagIcon={HelpCircle}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="left"
          imageSrc="http://img.b2bpic.net/free-photo/lesbian-couple-together-outdoors-concept_53876-13932.jpg"
          imageAlt="Help and support illustration"
          faqs={[
            {
              id: "1",              title: "Is SoulSync completely private?",              content: "Yes! SoulSync is designed to be completely private. Only you and your best friend can access your memories, diary entries, and messages. We use end-to-end encryption to ensure your data is secure."
            },
            {
              id: "2",              title: "Can I use SoulSync with multiple friends?",              content: "SoulSync is designed for one-on-one friendships. Each friendship gets its own dedicated space to maintain intimacy and focus. You can create separate SoulSync spaces with different friends."
            },
            {
              id: "3",              title: "How do I set up the countdown timer?",              content: "Simply tap the 'Countdown' section and enter the date and time of your next meeting. SoulSync will automatically calculate and display the days, hours, and minutes until you meet again."
            },
            {
              id: "4",              title: "Can I export my memories?",              content: "Absolutely! You can download your memories, diary entries, and stories directly to your device at any time. Your friendship story belongs to you."
            },
            {
              id: "5",              title: "What happens if my friend deletes the app?",              content: "Your memories are saved in the cloud. If your friend reinstalls the app, you can both pick up right where you left off. Nothing is ever lost."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Connect?"
          description="Download SoulSync today and start creating memories with your best friend. Join thousands of friendships finding their perfect digital space."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/lesbian-couple-together-outdoors-concept_53876-13932.jpg"
          imageAlt="Get started with SoulSync"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputs={[
            { name: "email", type: "email", placeholder: "Your email address", required: true },
            { name: "friend-email", type: "email", placeholder: "Your friend's email address", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your friendship (optional)",            rows: 4
          }}
          buttonText="Get Download Link"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SoulSync"
          copyrightText="© 2025 SoulSync. Built with love for friendships everywhere."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Security", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Download", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Support", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "Discord", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}