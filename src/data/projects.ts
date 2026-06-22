import bajrangViharImg from "@/assets/project_images/bajrang-vihar.png";
import daduDayalNagarImg from "@/assets/project_images/dadu-dayal-nagar.webp";
import gyanViharImg from "@/assets/project_images/gyan-vihar.webp";
import kapishEnclaveImg from "@/assets/project_images/kapish-enclave.png";
import kapishResidencyImg from "@/assets/project_images/kapish-residency.png";
import kapishViharImg from "@/assets/project_images/kapish-vihar.png";
import krgGreensImg from "@/assets/project_images/krg-greens.png";
import krishnaNagarVistarImg from "@/assets/project_images/krishna-nagar-vistar.png";
import pancholiViharImg from "@/assets/project_images/pancholi-vihar.png";
import parwatiAashiyanaImg from "@/assets/project_images/parwati-aashiyana.png";
import radhaGovindVillaImg from "@/assets/project_images/radha-govind-villa.png";
import radhaVillaImg from "@/assets/project_images/radha-villa.png";
import royalCityImg from "@/assets/project_images/royal-city.png";
import shivamResidencyImg from "@/assets/project_images/shivam-residency.png";
import shriKrishnaViharImg from "@/assets/project_images/shri-krishna-vihar.png";
import shriRamEnclaveImg from "@/assets/project_images/shri-ram-enclave.png";
import shriShyamViharImg from "@/assets/project_images/shri-shyam-vihar.png";
import shyamSarovarImg from "@/assets/project_images/shyam-sarovar.webp";
import urmilaEnclaveImg from "@/assets/project_images/urmila-enclave.webp";
import vasudevDharoharImg from "@/assets/project_images/vasudev-dharohar.webp";
import vatsalyaEnclaveImg from "@/assets/project_images/vatsalya-enclave.png";
import yashViharImg from "@/assets/project_images/yash-vihar.png";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  location: string;
  area: "Residential Plots" | "Investment Plots" | "Farmhouse Land" | "Commercial Plots";
  type: string;
  status: "Completed" | "Ongoing";
  approved: string; // E.g. "JDA Approved", "Society Approved", "Government Approved", "JDA and RERA Approved"
  description: string;
};

export const projects: Project[] = [
  // --- ONGOING PROJECTS ---
  {
    slug: "kapish-residency",
    name: "Kapish Residency",
    tagline: "A premium plotted development located at Ratalya (Diggi Road) — where peaceful surroundings meet modern living.",
    image: kapishResidencyImg,
    location: "Ratalya (Diggi Road), Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Ongoing",
    approved: "JDA and RERA Approved",
    description: "Presented by Landedge, Kapish Residency is a premium plotted development located at Ratalya (Diggi Road), Jaipur — where peaceful surroundings meet modern living and promising investment opportunities. Thoughtfully planned to offer independent plots within a secure and well-connected environment, it's the ideal place to build your dream home."
  },
  {
    slug: "vasudev-dharohar",
    name: "Vasudev Dharohar",
    tagline: "A highly strategic investment opportunity featuring modern infrastructure and excellent connectivity on 200 Feet Road.",
    image: vasudevDharoharImg,
    location: "200 Feet Road, Panwaliya, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Ongoing",
    approved: "JDA and RERA Approved",
    description: "Vasudev Dharohar is an ongoing development located in a high-growth corridor on 200 Feet Road, Panwaliya, Jaipur. Offering premium plots designed for future value appreciation, this project features wide roads, green landscapes, and quick access to essential highways, making it a stellar investment choice."
  },
  {
    slug: "krishna-nagar-vistar",
    name: "Krishna Nagar Vistar",
    tagline: "A expansive and beautifully planned gated residential society located in Sanganer's emerging growth hub.",
    image: krishnaNagarVistarImg,
    location: "300 Feet Road, Bhilwada Highway, Roopwas, Diggi Road, Sanganer, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Ongoing",
    approved: "Society Approved",
    description: "Krishna Nagar Vistar brings a well-planned residential layout to Sanganer, Jaipur. Situated along the major 300 Feet Road, this ongoing project offers spacious housing plots inside a tranquil and secure environment. Designed for families who want to build their dream homes on their own terms."
  },
  {
    slug: "shri-krishna-vihar",
    name: "Shri Krishna Vihar",
    tagline: "A prestigious JDA-approved residential township located off Ajmer Road in Mukundpura.",
    image: shriKrishnaViharImg,
    location: "100 Feet Road, Mukundpura, Ajmer Road, Bhankrota, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Ongoing",
    approved: "JDA and RERA Approved",
    description: "Shri Krishna Vihar is a beautifully designed residential development off the busy Ajmer Road. Positioned on 100 Feet Road in Mukundpura/Bhankrota, this project provides JDA-approved plots with high-quality infrastructure, drainage, and streetlights, ready for construction."
  },
  {
    slug: "yash-vihar",
    name: "Yash Vihar",
    tagline: "Unwind in nature's lap with premium farmhouse lands in the peaceful landscapes of Harsuliya.",
    image: yashViharImg,
    location: "Harsuliya, Jaipur",
    area: "Farmhouse Land",
    type: "Farmhouse",
    status: "Ongoing",
    approved: "Government Approved",
    description: "Yash Vihar is a dedicated farmhouse layout in Harsuliya, Jaipur. Featuring lush green spaces, wide pathways, and serene atmospheres, this government-approved development is perfect for building your weekend retreat, holiday farmhouse, or long-term organic farming land."
  },
  {
    slug: "kapish-enclave",
    name: "Kapish Enclave",
    tagline: "Premium farmhouse lands offering high return potential and natural beauty in Harsuliya.",
    image: kapishEnclaveImg,
    location: "Harsuliya, Jaipur",
    area: "Farmhouse Land",
    type: "Farmhouse",
    status: "Ongoing",
    approved: "Government Approved",
    description: "Kapish Enclave is an ongoing premium farmhouse land project located in Harsuliya, Jaipur. Offering spacious plots surrounded by peaceful nature, this government-approved project is designed for luxury farmhouse development, featuring electricity connections, security, and a beautiful green setting."
  },
  {
    slug: "vatsalya-enclave",
    name: "Vatsalya Enclave",
    tagline: "Secure high-value plots near Ring Road and behind Shivdaspura Railway Station.",
    image: vatsalyaEnclaveImg,
    location: "Near Ring Road, Behind Shivdaspura Railway Station, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Ongoing",
    approved: "JDA Approved",
    description: "Vatsalya Enclave is located in a high-demand development zone near Jaipur's Ring Road. Situated right behind the Shivdaspura Railway Station, this ongoing township offers JDA-approved investment plots with promising industrial and residential growth in the immediate vicinity."
  },
  {
    slug: "krg-greens",
    name: "KRG Greens",
    tagline: "A green and well-connected plotted development located in Sanganer's Roopwas area.",
    image: krgGreensImg,
    location: "Roopwas, Diggi Road, Sanganer, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Ongoing",
    approved: "JDA Approved",
    description: "KRG Greens offers premium JDA-approved plots in the fast-growing area of Roopwas, Diggi Road. Combining green surroundings with standard urban infrastructure, this ongoing project ensures high returns for investors looking to secure land in Sanganer."
  },
  {
    slug: "parwati-aashiyana",
    name: "Parwati Aashiyana",
    tagline: "A premium RERA & JDA approved plotted development offering excellent connectivity on Ajmer Road.",
    image: parwatiAashiyanaImg,
    location: "Main Jaipur-Ajmer National Highway, Dahmi Kalan, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Ongoing",
    approved: "JDA and RERA Approved",
    description: "Presented by Landedge, Parwati Aashiyana is a premium plotted development located at Main Jaipur-Ajmer National Highway, Dahmi Kalan, Jaipur — offering a perfect blend of peaceful surroundings, excellent connectivity, and strong investment potential. Carefully planned to provide residential plots in a secure and rapidly developing area, it is an ideal choice for building your dream home."
  },

  // --- COMPLETED PROJECTS ---
  {
    slug: "shree-shyam-vihar",
    name: "Shri Shyam Vihar",
    tagline: "A premium plotted development located at 200 Feet Road, Pangaliya — where peaceful surroundings meet smart investments.",
    image: shriShyamViharImg,
    location: "200 Feet, Pangaliya, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Completed",
    approved: "Society Approved",
    description: "Presented by Landedge, Shri Shyam Vihar is a completed premium plotted development located at 200 Feet Road, Pangaliya — where peaceful surroundings meet smart investment opportunities. Carefully planned to offer the perfect blend of independent plots and a secure, well-connected environment, it's the ideal place to build your dream home or grow your investment."
  },
  {
    slug: "bajrang-vihar",
    name: "Bajrang Vihar",
    tagline: "A premium plotted development located at Kishorpura, Jaipur — where peaceful surroundings meet modern living.",
    image: bajrangViharImg,
    location: "Kishorpura, Jaipur",
    area: "Farmhouse Land",
    type: "Farmhouse",
    status: "Completed",
    approved: "JDA Approved",
    description: "Presented by Landedge, Bajrang Vihar is a premium plotted development located at Kishorpura, Jaipur — where peaceful surroundings meet modern living and great investment potential. Thoughtfully designed to offer independent plots within a secure and well-connected environment, it's the perfect place to build your dream home."
  },
  {
    slug: "radha-govind-villa",
    name: "Radha Govind Villa",
    tagline: "A premium JDA approved gated township located at Pipla, Bharat Singh Road, Jaipur — where serenity meets modern living.",
    image: radhaGovindVillaImg,
    location: "Pipla, Bharat Singh Road, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Presented by Landedge, Radha Govind Villa is a premium JDA approved gated township located at Pipla, Bharat Singh Road, Jaipur — where serenity meets modern living. Designed to offer the perfect balance of independent plots and a luxurious lifestyle within a secure and well-connected environment, it's where your dream home truly takes shape."
  },
  {
    slug: "pancholi-vihar",
    name: "Pancholi Vihar",
    tagline: "A premium JDA approved plotted development located at Muhana Mod, Keshyawala, Jaipur — where peaceful surroundings meet modern lifestyle.",
    image: pancholiViharImg,
    location: "Muhana Mod, Keshyawala, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Presented by Landedge, Pancholi Vihar is a premium JDA approved plotted development located at Muhana Mod, Keshyawala, Jaipur — where peaceful surroundings meet modern lifestyle and smart investment opportunities. Thoughtfully planned to offer the perfect balance of independent plots and a secure, well-connected environment, it's the ideal destination to build your dream home."
  },
  {
    slug: "shivam-residency",
    name: "Shivam Residency",
    tagline: "A premium JDA approved plotted development located at Jaisinghpura, Roopwas, Jaipur.",
    image: shivamResidencyImg,
    location: "Jaisinghpura, Roopwas, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Presented by Landedge, Shivam Residency is a premium JDA-approved plotted development located at Jaisinghpura, Roopwas, Jaipur — where peaceful surroundings meet modern living and great investment potential. Thoughtfully designed to offer independent plots within a secure and well-connected environment, it's the perfect place to build your dream home."
  },
  {
    slug: "radha-villa",
    name: "Radha Villa",
    tagline: "A JDA approved plotted development located at Jaisinghpura, Jaipur — where peaceful surroundings meet modern living.",
    image: radhaVillaImg,
    location: "Jaisinghpura, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Completed",
    approved: "JDA Approved",
    description: "Presented by Landedge, Radha Villa is a premium JDA approved plotted development located at Jaisinghpura, Jaipur — where peaceful surroundings meet modern living. Carefully planned to offer the perfect balance of independent plots and a secure, well-connected environment, it's the ideal place to build your dream home or make a smart investment."
  },
  {
    slug: "kapish-vihar",
    name: "Kapish Vihar",
    tagline: "A premium JDA approved plotted development located at 200 Feet Road, Lakhna — where peaceful surroundings meet modern living.",
    image: kapishViharImg,
    location: "200 Feet Road, Lakhna, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Presented by Landedge, Kapish Vihar is a premium plotted development located at 200 Feet Road, Lakhna — where peaceful surroundings meet modern living and great investment opportunities. Thoughtfully planned to offer independent plots within a secure and well-connected environment, it's the perfect place to build your dream home."
  },
  {
    slug: "shyam-sarovar",
    name: "Shyam Sarovar",
    tagline: "Premium investment plots inside a fully completed JDA approved township in Roopwas.",
    image: shyamSarovarImg,
    location: "Roopwas, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Completed",
    approved: "JDA Approved",
    description: "Shyam Sarovar is a completed plotted development located in Roopwas, Jaipur. Offering prime JDA-approved investment plots with complete road setups, green borders, electricity connections, and water storage, it provides a hassle-free investment environment."
  },
  {
    slug: "dadudayal-nagar",
    name: "Dadudayal Nagar",
    tagline: "A secure and serene completed residential plot project in Pangaliya, Jaipur.",
    image: daduDayalNagarImg,
    location: "Pangaliya, Jaipur",
    area: "Investment Plots",
    type: "Investment",
    status: "Completed",
    approved: "Society Approved",
    description: "Dadudayal Nagar is a fully completed society-approved development in Pangaliya, Jaipur. Designed with peaceful living in mind, this project features wide internal roads, clean surrounding air, and easy access to local markets and transit hubs."
  },
  {
    slug: "shri-ram-enclave",
    name: "Shri Ram Enclave",
    tagline: "Premium residential plots with quick highway access in Roopwas, Jaipur.",
    image: shriRamEnclaveImg,
    location: "Roopwas, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Shri Ram Enclave is a successfully delivered JDA-approved township in Roopwas, Jaipur. It provides standard residential plots in an established neighbourhood with electricity, paved block roads, proper drainage system, and well-maintained public parks."
  },
  {
    slug: "gyan-vihar",
    name: "Gyan Vihar",
    tagline: "A completed JDA approved gated township with modern utilities located at Muhana Mod.",
    image: gyanViharImg,
    location: "Muhana Mod, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Gyan Vihar is a beautifully developed, fully completed residential plotted development located at Muhana Mod, Jaipur. Featuring JDA approval and secure gated entrance, this project hosts modern amenities, wide asphalt roads, and clean utility connections."
  },
  {
    slug: "urmila-enclave",
    name: "Urmila Enclave",
    tagline: "Premium JDA approved residential plots located at Bhankrota, Ajmer Road, Jaipur.",
    image: urmilaEnclaveImg,
    location: "Bhankrota, Jaipur",
    area: "Residential Plots",
    type: "Residential",
    status: "Completed",
    approved: "JDA Approved",
    description: "Urmila Enclave is a completed JDA-approved residential township in Bhankrota, Jaipur. Highly accessible from Ajmer Road, the project provides family-friendly housing plots with modern infrastructure, street lighting, and a gated perimeter."
  },
  {
    slug: "royal-city",
    name: "Royal City",
    tagline: "A premium commercial plotted development in Jaysinghpura, Jaipur.",
    image: royalCityImg,
    location: "Jaisinghpura, Jaipur",
    area: "Commercial Plots",
    type: "Commercial",
    status: "Completed",
    approved: "JDA Approved",
    description: "Royal City is a premium commercial plotted development located at Jaisinghpura, Jaipur — where promising business opportunities meet high-end connectivity. Thoughtfully planned to offer independent commercial plots in a rapidly expanding sector."
  }
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
