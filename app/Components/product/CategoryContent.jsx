"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const CategoryContent = ({ selectedCategory }) => {
  const getCategoryContent = (category) => {
    switch (category) {
      case "Prepared plates media 90 MM":
        return {
          title: "Prepared Plate Media - 90mm Mono Petri Dishes",
          description: "Looking for high-quality Prepared Plate Media in 90mm mono Petri dishes? At Microbiano, we offer a wide range of sterile, ready-to-use culture media designed for consistent and reliable microbiological testing across clinical, food, pharma, and research labs.",
          sections: [
            {
              title: "What is 90mm Mono Prepared Plate Media?",
              content: "90mm mono Petri plates are standard single-compartment agar plates used to culture and isolate microorganisms. Each plate comes pre-filled with a specific growth medium, offering convenience, sterility, and repeatability in lab procedures."
            },
            {
              title: "Popular 90mm Agar Plates We Offer",
              content: "We stock a full range of agar media types, including both selective and non-selective varieties. Here are some of our top-performing prepared media plates:",
              subsections: [
                {
                  title: "General Purpose Media",
                  items: [
                    "Nutrient Agar – Ideal for general microbial growth",
                    "Tryptic Soy Agar (TSA) – Broad spectrum growth medium",
                    "Brain Heart Infusion (BHI) Agar – Supports fastidious organisms"
                  ]
                },
                {
                  title: "Selective & Differential Media",
                  items: [
                    "MacConkey Agar – For Gram-negative bacteria",
                    "Mannitol Salt Agar – Selective for Staphylococcus spp.",
                    "CLED Agar – For urinary tract pathogens",
                    "Chromogenic Agars – For rapid identification of resistant strains:",
                    "Chrom MRSA",
                    "Chrom UTI",
                    "Chrom ESBL",
                    "Chrom Salmonella Plus",
                    "Chrom Candida Plus"
                  ]
                },
                {
                  title: "Fungal & Yeast Media",
                  items: [
                    "Sabouraud Dextrose Agar (SDA) – Supports fungi and yeasts",
                    "Potato Dextrose Agar – Used for mold and yeast growth",
                    "Malt Extract Agar with Chloramphenicol – Inhibits bacterial growth for better fungal isolation"
                  ]
                },
                {
                  title: "Clinical Diagnostic Media",
                  items: [
                    "Chocolate Agar – For Haemophilus and Neisseria species",
                    "Sheep Blood Agar – Supports fastidious organisms and hemolysis observation",
                    "Hektoen Enteric Agar – Differentiates Salmonella and Shigella",
                    "Bile Esculin Agar – Detects Group D streptococci"
                  ]
                }
              ]
            },
            {
              title: "Why Labs Choose Microbiano",
              content: "✔ Accredited Quality & Compliance",
              items: [
                "ISO 9001:2015 – Certified Quality Management System for consistent product excellence",
                "ISO 13485:2016 – Compliance with international standards for culture media manufacturing",
                "CE Marked – European conformity for health, safety, and environmental protection",
                "GMP Certified – Good Manufacturing Practice certification by the Ministry of Health – UAE",
                "MOH License – Official approval from the UAE Ministry of Health & Prevention"
              ],
              footer: "🧪 Trusted by diagnostic labs, pharmaceutical QC teams, and academic research institutions across the UAE and GCC."
            },
            {
              title: "🛒 Buy 90mm Prepared Media Plates Online",
              content: "Browse and shop 90mm mono-prepared agar plates by application, organism, or media type. Whether you're culturing E. coli, Staph aureus, Salmonella, or fungi – we have the right media plate for your lab.",
              cta: "🧪 Shop 90mm Mono Plates Now!"
            },
            {
              title: "Custom Media or Bulk Orders?",
              content: "Need a special formulation or high-volume supply? Contact our lab team for custom media plates or large-quantity quotes.",
              contact: "📧 Email: info@microbiano.com"
            },
            {
              title: "Explore Our Microbiological Media Range",
              content: "At Microbiano, we offer a comprehensive selection of ready-to-use culture media for all your lab needs. From routine testing to advanced applications, our products ensure reliable results every time:",
              items: [
                <Link key="90mm-mono" href="https://microbiano.com/category/prepared-plate-media-90mm-mono" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Mono</Link>,
                <Link key="90mm-bio" href="https://microbiano.com/category/prepared-plate-media-90mm-bio" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Bio</Link>,
                <Link key="150mm" href="https://microbiano.com/category/prepared-plate-media-150mm" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 150mm</Link>,
                <Link key="tube" href="https://microbiano.com/category/prepared-tube-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Tube Media</Link>,
                <Link key="bottle" href="https://microbiano.com/category/prepared-bottle-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Bottle Media</Link>
              ],
              footer: "Each product is designed for accuracy and quality, supporting your microbiological needs with ease."
            }
          ]
        };
      
      case "Prepared plates media 150 MM":
        return {
          title: "Prepared Plate Media – 150mm Petri Dishes",
          description: "Looking for high-quality 150mm prepared agar plates? Microbiano offers an expanded range of large-diameter, sterile, ready-to-use plates tailored for clinical, pharma, food safety, and microbiology research labs.",
          sections: [
            {
              title: "What Are 150mm Prepared Media Plates?",
              content: "150mm agar plates offer a larger surface area, ideal for antimicrobial susceptibility testing (AST), environmental monitoring, and bulk culturing. These plates are pre-filled, pre-sterilized, and validated under ISO standards."
            },
            {
              title: "Popular 150mm Agar Plates We Offer:",
              content: "",
              items: [
                "Simmons Citrate Agar Slants - Used for differentiating enteric bacteria based on citrate utilization. Recommended for Enterobacteriaceae identification.",
                "MacConkey Agar with Crystal Violet - Selective media for Gram-negative bacteria, especially Enterobacteriaceae, enhanced with crystal violet to inhibit Gram-positive organisms.",
                "Haemophilus Test Agar - Specialized media for isolating and growing Haemophilus influenzae and other fastidious respiratory pathogens."
              ]
            },
            {
              title: "Why Labs Choose Microbiano",
              content: "✔ Accredited Quality & Compliance",
              items: [
                "ISO 9001:2015 – Certified Quality Management System for consistent product excellence",
                "ISO 13485:2016 – Compliance with international standards for culture media manufacturing",
                "CE Marked – European conformity for health, safety, and environmental protection",
                "GMP Certified – Good Manufacturing Practice certification by the Ministry of Health – UAE",
                "MOH License – Official approval from the UAE Ministry of Health & Prevention"
              ],
              footer: "🧪 Trusted by diagnostic labs, pharmaceutical QC teams, and academic research institutions across the UAE and GCC."
            },
            {
              title: "🛒 Shop 150mm Prepared Agar Plates Online",
              content: "From selective media like MacConkey to specialized formulations like Simmons Citrate and Haemophilus Test Agar, Microbiano has the 150mm format to match your lab's needs.",
              cta: "🧪 Shop 150mm Plates Now!"
            },
            {
              title: "Custom Media or Bulk Orders?",
              content: "Need a special formulation or high-volume supply? Contact our lab team for custom media plates or large-quantity quotes.",
              contact: "📧 Email: info@microbiano.com"
            },
            {
              title: "Explore Our Microbiological Media Range",
              content: "At Microbiano, we offer a comprehensive selection of ready-to-use culture media for all your lab needs. From routine testing to advanced applications, our products ensure reliable results every time:",
              items: [
                <Link key="90mm-mono" href="https://microbiano.com/category/prepared-plate-media-90mm-mono" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Mono</Link>,
                <Link key="90mm-bio" href="https://microbiano.com/category/prepared-plate-media-90mm-bio" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Bio</Link>,
                <Link key="150mm" href="https://microbiano.com/category/prepared-plate-media-150mm" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 150mm</Link>,
                <Link key="tube" href="https://microbiano.com/category/prepared-tube-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Tube Media</Link>,
                <Link key="bottle" href="https://microbiano.com/category/prepared-bottle-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Bottle Media</Link>
              ],
              footer: "Each product is designed for accuracy and quality, supporting your microbiological needs with ease."
            }
          ]
        };
      
      case "Prepared bioplates media 90 MM":
        return {
          title: "Prepared Plate Media - 90mm Bio Petri Dishes",
          description: "Looking for high-performance prepared plate media in 90mm bio Petri dishes? Microbiano offers sterile, ready-to-use 90mm agar plates formulated for diagnostic precision in clinical microbiology, food testing, pharmaceuticals, and academic research.",
          sections: [
            {
              title: "What is 90mm Bio Prepared Plate Media?",
              content: "90mm bio plates typically contain enriched or selective media tailored for isolating fastidious organisms. These plates are ideal for diagnostic applications where sensitivity, sterility, and media performance are critical."
            },
            {
              title: "Popular 90mm Bio Agar Plates Available",
              content: "We manufacture and stock a focused range of bio-prepared agar media plates to meet lab-specific microbial testing requirements.",
              subsections: [
                {
                  title: "Enriched & Diagnostic Media",
                  items: [
                    "Chocolate Agar – Supports growth of fastidious organisms like Haemophilus influenzae and Neisseria spp.",
                    "Sheep Blood Agar – Ideal for observing hemolytic reactions and cultivating a wide range of bacteria."
                  ]
                },
                {
                  title: "Selective & Differential Media",
                  items: [
                    "CLED Agar – Used in urinary tract infection (UTI) diagnosis; supports differential colony morphology of urinary pathogens.",
                    "MacConkey Agar (without Crystal Violet) – Enables growth of Gram-negative bacteria while suppressing Gram-positive flora."
                  ]
                },
                {
                  title: "Antibiotic Sensitivity Testing",
                  items: [
                    "Mueller Hinton Agar – Standard medium for disk diffusion (antibiotic susceptibility testing)."
                  ]
                },
                {
                  title: "Gram-Selective Blood Media",
                  items: [
                    "Columbia CNA Blood Agar – Inhibits Gram-negative bacteria while enhancing Gram-positive detection.",
                    "Mueller Hinton Blood Agar – For fastidious organism growth and reliable antibiotic testing."
                  ]
                }
              ]
            },
            {
              title: "Why Labs Choose Microbiano",
              content: "✔ Accredited Quality & Compliance",
              items: [
                "ISO 9001:2015 – Certified Quality Management System for consistent product excellence",
                "ISO 13485:2016 – Compliance with international standards for culture media manufacturing",
                "CE Marked – European conformity for health, safety, and environmental protection",
                "GMP Certified – Good Manufacturing Practice certification by the Ministry of Health – UAE",
                "MOH License – Official approval from the UAE Ministry of Health & Prevention"
              ],
              footer: "🧪 Trusted by diagnostic labs, pharmaceutical QC teams, and academic research institutions across the UAE and GCC."
            },
            {
              title: "🛒 Shop 90mm Bio Media Plates Online",
              content: "Get reliable, high-quality 90mm bio-prepared media plates delivered to your lab. Whether you're identifying pathogens or testing antimicrobial resistance, Microbiano provides dependable media for accurate results.",
              cta: "👉 Explore 90mm Bio Prepared Plate Media Now!"
            },
            {
              title: "Need Custom Media or Bulk Orders?",
              content: "Looking for large-volume supply or a custom agar blend? Our in-house lab can prepare bespoke media solutions tailored to your research or clinical application.",
              contact: "📧 Email: info@microbiano.com"
            },
            {
              title: "Explore Our Microbiological Media Range",
              content: "At Microbiano, we offer a comprehensive selection of ready-to-use culture media for all your lab needs. From routine testing to advanced applications, our products ensure reliable results every time:",
              items: [
                <Link key="90mm-mono" href="https://microbiano.com/category/prepared-plate-media-90mm-mono" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Mono</Link>,
                <Link key="90mm-bio" href="https://microbiano.com/category/prepared-plate-media-90mm-bio" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Bio</Link>,
                <Link key="150mm" href="https://microbiano.com/category/prepared-plate-media-150mm" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 150mm</Link>,
                <Link key="tube" href="https://microbiano.com/category/prepared-tube-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Tube Media</Link>,
                <Link key="bottle" href="https://microbiano.com/category/prepared-bottle-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Bottle Media</Link>
              ],
              footer: "Each product is designed for accuracy and quality, supporting your microbiological needs with ease."
            }
          ]
        };
      
      case "Prepared tube media":
        return {
          title: "Prepared Tube Media (Slants & Broths)",
          description: "At Microbiano, we offer a wide selection of ready-to-use prepared tube media in slant or broth form. Ideal for clinical microbiology, food testing, and pharma QC labs, our slants are sterile, ISO-certified, and packed under strict quality protocols.",
          sections: [
            {
              title: "What is Prepared Tube Media?",
              content: "Prepared tube media consists of culture media dispensed into sterile test tubes, often in a slant format. These are used for cultivating, isolating, and identifying microorganisms, especially for biochemical tests."
            },
            {
              title: "Popular Prepared Tube Media Available:",
              content: "",
              items: [
                "Triple Sugar Iron (TSI) Agar Slant - Used to differentiate enteric bacteria based on glucose, lactose, sucrose fermentation & H₂S production. A key test in Enterobacteriaceae identification.",
                "Kligler Iron Agar Slant - Similar to TSI but lacks sucrose. Helps in identifying Salmonella, Shigella, and Proteus species.",
                "Brain Heart Infusion (BHI) Agar Slant - Rich nutrient medium for culturing fastidious organisms like Streptococcus spp. and Neisseria spp.",
                "Nutrient Agar Slants - General-purpose slant used for maintenance and subculturing of a wide variety of microbes.",
                "Sabouraud Dextrose Agar (SDA) Slant - Selective for fungi and yeasts, often used in mycology and dermatology labs.",
                "Urea Agar Slants - For detection of urease-producing bacteria like Proteus, Helicobacter, or Klebsiella species."
              ]
            },
            {
              title: "Why Labs Choose Microbiano",
              content: "✔ Accredited Quality & Compliance",
              items: [
                "ISO 9001:2015 – Certified Quality Management System for consistent product excellence",
                "ISO 13485:2016 – Compliance with international standards for culture media manufacturing",
                "CE Marked – European conformity for health, safety, and environmental protection",
                "GMP Certified – Good Manufacturing Practice certification by the Ministry of Health – UAE",
                "MOH License – Official approval from the UAE Ministry of Health & Prevention"
              ],
              footer: "🧪 Trusted by diagnostic labs, pharmaceutical QC teams, and academic research institutions across the UAE and GCC."
            },
            {
              title: "🛒 Order Ready-to-Use Tube Media Online",
              content: "Explore our full range of agar slants and broths. Perfect for clinical, pharmaceutical, food, and academic laboratories.",
              cta: "🧪 Shop prepared tube media (slants & broths) Now!"
            },
            {
              title: "Custom Media or Bulk Orders?",
              content: "Need a special formulation or high-volume supply? Contact our lab team for custom-prepared tube media (slants & broths) or large-quantity quotes.",
              contact: "📧 Email: info@microbiano.com"
            },
            {
              title: "Explore Our Microbiological Media Range",
              content: "At Microbiano, we offer a comprehensive selection of ready-to-use culture media for all your lab needs. From routine testing to advanced applications, our products ensure reliable results every time:",
              items: [
                <Link key="90mm-mono" href="https://microbiano.com/category/prepared-plate-media-90mm-mono" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Mono</Link>,
                <Link key="90mm-bio" href="https://microbiano.com/category/prepared-plate-media-90mm-bio" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Bio</Link>,
                <Link key="150mm" href="https://microbiano.com/category/prepared-plate-media-150mm" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 150mm</Link>,
                <Link key="tube" href="https://microbiano.com/category/prepared-tube-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Tube Media</Link>,
                <Link key="bottle" href="https://microbiano.com/category/prepared-bottle-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Bottle Media</Link>
              ],
              footer: "Each product is designed for accuracy and quality, supporting your microbiological needs with ease."
            }
          ]
        };
      
      case "Prepared media in Bottles":
        return {
          title: "Prepared Bottle Media",
          description: "Microbiano offers a full range of sterile prepared bottle media for microbiological analysis, food safety, and pharmaceutical quality control. Our media are pre-filled, sterilized, and compliant with ISO and pharmacopoeia standards.",
          sections: [
            {
              title: "What is Prepared Bottle Media?",
              content: "Prepared bottle media refers to microbiological culture media that is pre-dispensed in sterile bottles, ideal for sample enrichment, pre-enrichment, or plate pour tests in lab workflows. Bottled media ensure convenience, sterility, and batch consistency."
            },
            {
              title: "Popular Bottle Media We Offer:",
              content: "",
              items: [
                "Buffered Peptone Water (BPW) - Used as a pre-enrichment medium for Salmonella spp. in food and environmental samples. Required by ISO 6579.",
                "Plate Count Agar (PCA) - General-purpose media for total viable count (TVC) of aerobic bacteria in food, water, and dairy products.",
                "Orange Serum Agar - Formulated for the detection of acid-tolerant spoilage organisms, particularly in fruit juices and soft drinks.",
                "One Broth Salmonella - Rapid selective enrichment broth for Salmonella spp. detection—used in conjunction with PCR or immunoassays.",
                "Violet Red Bile Agar (VRBA) - Selective for coliform bacteria, ideal for water and dairy microbiology."
              ]
            },
            {
              title: "Why Labs Choose Microbiano",
              content: "✔ Accredited Quality & Compliance",
              items: [
                "ISO 9001:2015 – Certified Quality Management System for consistent product excellence",
                "ISO 13485:2016 – Compliance with international standards for culture media manufacturing",
                "CE Marked – European conformity for health, safety, and environmental protection",
                "GMP Certified – Good Manufacturing Practice certification by the Ministry of Health – UAE",
                "MOH License – Official approval from the UAE Ministry of Health & Prevention"
              ],
              footer: "🧪 Trusted by diagnostic labs, pharmaceutical QC teams, and academic research institutions across the UAE and GCC."
            },
            {
              title: "🛒 Order Prepared Bottle Media Online",
              content: "Explore our catalogue of prepared bottle media - designed to support accurate microbial testing in food, beverage, water, and pharma industries.",
              cta: "🧪 Shop Prepared Bottle Media Now!"
            },
            {
              title: "Custom Media or Bulk Orders?",
              content: "Need a special formulation or high-volume supply? Contact our lab team for custom Prepared Bottle Media or large-quantity quotes.",
              contact: "📧 Email: info@microbiano.com"
            },
            {
              title: "Explore Our Microbiological Media Range",
              content: "At Microbiano, we offer a comprehensive selection of ready-to-use culture media for all your lab needs. From routine testing to advanced applications, our products ensure reliable results every time:",
              items: [
                <Link key="90mm-mono" href="https://microbiano.com/category/prepared-plate-media-90mm-mono" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Mono</Link>,
                <Link key="90mm-bio" href="https://microbiano.com/category/prepared-plate-media-90mm-bio" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 90mm Bio</Link>,
                <Link key="150mm" href="https://microbiano.com/category/prepared-plate-media-150mm" className="text-blue-600 hover:text-blue-800 underline">Prepared Plate Media – 150mm</Link>,
                <Link key="tube" href="https://microbiano.com/category/prepared-tube-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Tube Media</Link>,
                <Link key="bottle" href="https://microbiano.com/category/prepared-bottle-media" className="text-blue-600 hover:text-blue-800 underline">Prepared Bottle Media</Link>
              ],
              footer: "Each product is designed for accuracy and quality, supporting your microbiological needs with ease."
            }
          ]
        };
      
      default:
        return null;
    }
  };

  const content = getCategoryContent(selectedCategory);

  if (!content) {
    return null;
  }

  return (
    <motion.div
      className="mt-12 py-8 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 md:px-0">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-divi-gray mb-4 font-nohemi leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.title}
        </motion.h2>
        
        <motion.p
          className="text-neutral-light-gray text-base md:text-lg leading-relaxed mb-8 font-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {content.description}
        </motion.p>

        {content.sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-divi-gray mb-4 font-arial leading-tight">
              {section.title}
            </h2>
            
            {section.content && (
              <p className="text-neutral-light-gray leading-relaxed mb-4 font-secondary text-sm md:text-base">
                {section.content}
              </p>
            )}

            {section.items && (
              <ul className="list-disc list-inside space-y-2 text-neutral-light-gray font-secondary ml-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.subsections && (
              <div className="space-y-6">
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h3 className="text-lg md:text-xl font-medium text-secondary mb-3 font-arial">
                      {subsection.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-neutral-light-gray font-secondary ml-2 md:ml-4 text-sm md:text-base">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.footer && (
              <p className="text-secondary font-medium mt-4 font-secondary text-sm md:text-base">
                {section.footer}
              </p>
            )}

            {section.cta && (
              <div className="mt-4">
                <button className="bg-secondary text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-secondary/90 transition-colors duration-200 font-arial text-sm md:text-base w-full md:w-auto">
                  {section.cta}
                </button>
              </div>
            )}

            {section.contact && (
              <p className="text-secondary font-medium mt-4 font-secondary text-sm md:text-base break-words">
                {section.contact}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryContent;
