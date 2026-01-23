import "../styles/Showcase.css";
import { useState } from "react";
import clsx from "clsx";

export default function Showcase() {
  const [previewImage, setPreviewImage] = useState(null);
  // const journeySteps = [
  //   {
  //     title: "Welcome to Your Dashboard",
  //     images: ["home-left.png"],
  //     description: "Start your day with a personalized overview of your nutrition goals, daily progress, and meal plans.",
  //     alignment: "left",
  //     flipImages: [false],
  //   },
  //   {
  //     title: "Discover Campus Dining",
  //     images: ["dining-hall-menu-portrait.png", "flipped/dining-halls-left.png"],
  //     description: "Browse all available dining halls on campus and instantly view what's being served today.",
  //     alignment: "right",
  //     flipImages: [false, true],
  //   },
  //   {
  //     title: "Explore Menu Options",
  //     images: ["dining-hall-menu-options-item-left.png", "dining-hall-menu-options-portrait.png"],
  //     description: "Dive into meal categories and get complete nutritional breakdowns for every item.",
  //     alignment: "left",
  //     flipImages: [false, false],
  //   },
  //   {
  //     title: "Log Your Meals",
  //     images: ["flipped/dining-hall-menu-options-item-add-left.png"],
  //     description: "Track what you eat with custom serving sizes that automatically update your daily totals.",
  //     alignment: "right",
  //     flipImages: [true],
  //   },
  //   {
  //     title: "Search & Scan",
  //     images: ["search-left.png", "search-result-from-barcode-scanner-portrait.png"],
  //     description: "Find any food instantly with search or scan barcodes for quick nutrition information.",
  //     alignment: "left",
  //     flipImages: [false, false],
  //   },
  //   {
  //     title: "Add Custom Foods",
  //     images: ["flipped/search-backup-add-food-if-not-available-left.png"],
  //     description: "Can't find what you're looking for? Create your own custom food entries with full nutrition data.",
  //     alignment: "right",
  //     flipImages: [true],
  //   },
  //   {
  //     title: "AI-Powered Guidance",
  //     images: ["ai-assistance-portrait.png"],
  //     description: "Get personalized nutrition advice, meal suggestions, and answers to your health questions.",
  //     alignment: "left",
  //     flipImages: [false],
  //   },
  //   {
  //     title: "Personalize Your Experience",
  //     images: ["flipped/settings-left.png"],
  //     description: "Set your goals, dietary preferences, and customize the app to match your lifestyle.",
  //     alignment: "right",
  //     flipImages: [true],
  //   },
  // ];

  const secondaryJourneySteps = [
    {
      title: "Welcome to Your Dashboard",
      images: ["home-left.png"],
      description:
        "Start your day with a clear, personalized overview of your nutrition goals, daily macro targets, and real time progress. Your dashboard brings together everything that matters; recent meals, remaining macros, and upcoming meal plans, so you always know exactly where you stand without digging through menus.",
      alignment: "left",
      flipImages: [false],
    },
    {
      title: "Discover Campus Dining",
      images: ["dining-hall-menu-portrait.png", "flipped/dining-halls-left.png"],
      description:
        "Explore all available dining halls across campus in one place and instantly see what’s being served today. Menus update dynamically, making it easy to compare options, plan ahead, and choose meals that fit your nutrition goals before you even step inside.",
      alignment: "right",
      flipImages: [false, true],
    },
    {
      title: "Explore Menu Options",
      images: ["dining-hall-menu-options-item-left.png", "dining-hall-menu-options-portrait.png"],
      description:
        "Dive deeper into each dining hall menu by browsing structured meal categories and individual items. Every option includes a complete nutritional breakdown; calories, macros, and key nutrients; so you can make informed choices without guessing or estimating.",
      alignment: "left",
      flipImages: [false, false],
    },
    {
      title: "Log Your Meals",
      images: ["flipped/dining-hall-menu-options-item-add-left.png"],
      description:
        "Log what you eat in seconds using flexible, custom serving sizes that reflect how you actually eat. As you add foods, your daily totals update automatically, giving you immediate feedback on how each meal impacts your goals.",
      alignment: "right",
      flipImages: [true],
    },
    {
      title: "Search & Scan",
      images: ["search-left.png", "search-result-from-barcode-scanner-portrait.png"],
      description:
        "Quickly find any food using powerful search or scan barcodes for instant nutrition details. Whether it’s a packaged snack, drink, or supplement, you’ll get accurate information fast no manual entry required.",
      alignment: "left",
      flipImages: [false, false],
    },
    {
      title: "Add Custom Foods",
      images: ["flipped/search-backup-add-food-if-not-available-left.png"],
      description:
        "If a food isn’t already in the database, you’re never stuck. Create custom food entries with full nutrition data, save them for future use, and track meals your way; perfect for homemade meals, local options, or specialty items.",
      alignment: "right",
      flipImages: [true],
    },
    {
      title: "AI-Powered Guidance",
      images: ["ai-assistance-portrait.png"],
      description:
        "Access built in AI support that adapts to your goals and habits. Get personalized nutrition insights, smarter meal suggestions, and clear answers to your health questions, all designed to help you stay consistent and confident in your choices.",
      alignment: "left",
      flipImages: [false],
    },
    {
      title: "Personalize Your Experience",
      images: ["flipped/settings-left.png"],
      description:
        "Fine tune the app to match your lifestyle by setting goals, dietary preferences, and tracking rules that work for you. From macro targets to food restrictions, everything is customizable so the experience feels personal, not generic.",
      alignment: "right",
      flipImages: [true],
    },
  ];

  return (
    <div className="demo-page page">
      <div className="demo-hero">
        <h1 className="special-font bolded solid">Your Nutrition Journey</h1>
        <p>Follow along as we explore how MacroUni transforms your campus dining experience</p>
      </div>

      <div className="journey-timeline">
        {secondaryJourneySteps.map((step, index) => (
          <div key={index} className={`journey-step ${step.alignment}`}>
            <div
              className={clsx("step-content", {
                "step-content-two-images": step.images.length === 2,
              })}
            >
              <div className="step-text">
                <div className="step-label">Step {index + 1}</div>
                <h2 className="semi-bolded">{step.title}</h2>
                <p>{step.description}</p>
              </div>
              <div className="step-images">
                {step.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`/images/${image}`}
                    alt={`${step.title} - ${imgIndex + 1}`}
                    loading="lazy"
                    className={`${step.flipImages[imgIndex] ? "flipped" : ""} ${step.images[imgIndex].includes("left") ? "tilted" : ""}`}
                    onClick={() => setPreviewImage({ src: `/images/${image}`, alt: `${step.title} - ${imgIndex + 1}`, flipped: step.flipImages[imgIndex] })}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {previewImage && (
        <div className="image-preview-overlay" onClick={() => setPreviewImage(null)}>
          <div className="image-preview-container">
            <img className={previewImage.flipped ? "flipped" : ""} src={previewImage.src} alt={previewImage.alt} />
            <button className="preview-close" onClick={() => setPreviewImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
