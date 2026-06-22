import parwati from "@/assets/project-parwati.png";
import kapishResidency from "@/assets/project-kapish-residency.png";
import kapishEnclave from "@/assets/project-kapish-enclave.png";
import parvatiVideo from "@/assets/parvati aashyiana Blog.mp4";

export type BlogSection = {
  title: string;
  content: string;
  icon: "investment" | "home" | "map" | "shield" | "ownership";
  checklist?: string[];
};

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  video?: string; // optional: replaces the inline image showcase with a video player
  date: string;
  welcomeTitle: string;
  welcomeText: string;
  sections: BlogSection[];
};

export const blogs: Blog[] = [
  {
    slug: "rera-jda-approved-plots",
    title: "Invest with Confidence in Fully Approved Plots",
    excerpt: "Invest with confidence in fully approved plots by RERA and JDA, ensuring transparency, legal security, and a safe investment for your future.",
    image: parwati,
    video: parvatiVideo,
    date: "March 15, 2026",
    welcomeTitle: "Welcome to Parvati Aashiyana by Landedge",
    welcomeText: "Parvati Aashiyana is a premium plotted development project by Landedge, designed for modern living and smart investment. Offering well-planned residential plots in a prime and fast-developing location, this project is perfect for those looking to build their dream home or secure a high-growth asset. With JDA approval and RERA registration, Parvati Aashiyana ensures complete transparency, legal security, and peace of mind for every buyer.",
    sections: [
      {
        title: "Lower Investment, Higher Future Returns",
        content: "Parvati Aashiyana offers affordable plot options, making it easier for investors to enter the real estate market. Compared to constructed properties, plots come with a lower initial investment while offering excellent appreciation potential. As the area continues to develop, land value is expected to rise, making this project a strong opportunity for long-term returns and wealth creation.",
        icon: "investment"
      },
      {
        title: "Freedom to Build Your Dream",
        content: "Owning a plot at Parvati Aashiyana gives you complete freedom to design and build your home according to your vision. Whether you want a modern villa or a compact home, the choice is entirely yours. This flexibility makes plotted developments more attractive than ready-built properties.",
        icon: "home"
      },
      {
        title: "Prime Location with High Growth Potential",
        content: "Parvati Aashiyana is strategically located in a rapidly developing area with excellent connectivity and upcoming infrastructure. The project is surrounded by essential facilities, making it ideal for both living and investment. With increasing demand in the region, property values are expected to grow steadily over time.",
        icon: "map"
      },
      {
        title: "Safe & Secure Investment",
        content: "With Landedge, you can invest confidently knowing your property is legally secure and future-ready.",
        icon: "shield",
        checklist: [
          "JDA Approved Project",
          "RERA Registered",
          "Clear Legal Documentation",
          "Transparent Buying Process"
        ]
      },
      {
        title: "Hassle-Free Ownership",
        content: "Plots at Parvati Aashiyana require minimal maintenance and come with no construction pressure. You can hold your investment and benefit from long-term appreciation without ongoing costs or complications.",
        icon: "ownership"
      },
      {
        title: "Book Your Plot Today",
        content: "Invest in Parvati Aashiyana and secure your future with Landedge. Contact us today to know more about available plots and exclusive offers.",
        icon: "investment"
      }
    ]
  },
  {
    slug: "rera-jda-peace-of-mind",
    title: "Officially Approved by RERA and JDA",
    excerpt: "Our plots are officially approved by RERA and JDA, giving you complete peace of mind, legal clarity, and a secure real estate investment.",
    image: kapishResidency,
    date: "March 02, 2026",
    welcomeTitle: "Welcome to Kapish Residency by Landedge",
    welcomeText: "Kapish Residency is an exclusive plotted development project by Landedge, thoughtfully designed for modern living and smart investment. Offering well-planned residential plots in a fast-growing location, this project is ideal for those who want to build their dream home or invest in a high-potential asset. With JDA approval and RERA registration, Kapish Residency ensures complete transparency, legal security, and a stress-free buying experience.",
    sections: [
      {
        title: "Smart Investment with High Returns",
        content: "Kapish Residency provides affordable plot options, making it easier to enter the real estate market. Compared to constructed properties, plots require lower initial investment while offering excellent appreciation potential. As the surrounding area continues to develop, land value is expected to rise significantly—making it a perfect opportunity for long-term investment and wealth creation.",
        icon: "investment"
      },
      {
        title: "Design Your Dream Home",
        content: "Owning a plot in Kapish Residency gives you the freedom to build your home exactly the way you want. Whether you dream of a luxury villa or a comfortable modern house, the choice is entirely yours. This flexibility makes plotted developments a more attractive and personalized option compared to ready-built homes.",
        icon: "home"
      },
      {
        title: "Prime Location Advantage",
        content: "Kapish Residency is strategically located in a rapidly developing area with strong connectivity and upcoming infrastructure.",
        icon: "map",
        checklist: [
          "Easy access to main roads and city areas",
          "Nearby schools, hospitals & daily essentials",
          "Growing neighborhood with high demand"
        ]
      },
      {
        title: "Safe & Secure Investment",
        content: "With Landedge, your investment is completely safe, secure, and future-ready.",
        icon: "shield",
        checklist: [
          "JDA Approved Project",
          "RERA Registered",
          "Clear Legal Documentation",
          "100% Transparent Process"
        ]
      },
      {
        title: "Hassle-Free Ownership",
        content: "Plots at Kapish Residency come with minimal maintenance and no pressure to build immediately. You can invest now and build later while enjoying steady appreciation in value.",
        icon: "ownership"
      },
      {
        title: "Book Your Plot Today",
        content: "Don’t miss the opportunity to own a premium plot in Kapish Residency. Secure your future with a smart investment today.",
        icon: "investment"
      }
    ]
  },
  {
    slug: "government-approved-plots",
    title: "Fully Government-Approved Plots",
    excerpt: "Fully government-approved plots ensuring safe, transparent, and reliable investment.",
    image: kapishEnclave,
    date: "February 20, 2026",
    welcomeTitle: "Welcome to Kapish Enclave by Landedge",
    welcomeText: "Kapish Enclave is a premium plotted development project by Landedge, offering an excellent opportunity for both home buyers and smart investors. Designed with modern planning and located in a fast-developing area, this project is perfect for building your dream home or securing a valuable asset for the future. Being a Government Approved Project, Kapish Enclave ensures complete trust, safety, and peace of mind for every buyer.",
    sections: [
      {
        title: "Affordable Investment, Strong Future Growth",
        content: "Kapish Enclave offers budget-friendly plot options, making it easy to invest in real estate with low initial cost. Compared to constructed properties, plots provide better flexibility and higher appreciation potential. With rapid development in the surrounding area, property values are expected to increase steadily—making it a smart long-term investment.",
        icon: "investment"
      },
      {
        title: "Freedom to Build Your Dream Home",
        content: "At Kapish Enclave, you get the complete freedom to design and build your home as per your needs and lifestyle.",
        icon: "home",
        checklist: [
          "Build at your own pace",
          "Choose your own design",
          "No construction pressure"
        ]
      },
      {
        title: "Prime Location Benefits",
        content: "Kapish Enclave is strategically located in a developing area with growing infrastructure and good connectivity.",
        icon: "map",
        checklist: [
          "Easy access to main roads",
          "Nearby schools, markets & daily essentials",
          "Peaceful environment with future growth potential"
        ]
      },
      {
        title: "Safe & Secure Investment",
        content: "Invest with confidence knowing your property is secure and legally verified.",
        icon: "shield",
        checklist: [
          "Government Approved Project",
          "Clear Legal Documentation",
          "Transparent Deal Process",
          "Reliable Developer – Landedge"
        ]
      },
      {
        title: "Easy & Hassle-Free Ownership",
        content: "Owning a plot in Kapish Enclave is simple and stress-free. With low maintenance and no urgency to build, you can hold your property and benefit from long-term appreciation.",
        icon: "ownership"
      },
      {
        title: "Book Your Plot Today",
        content: "Take the first step towards your dream property with Kapish Enclave.",
        icon: "investment"
      }
    ]
  }
];

export const findBlog = (slug: string) => blogs.find((b) => b.slug === slug);
