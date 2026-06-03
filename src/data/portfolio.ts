export interface AppData {
  title: string;
  description: string;
  link: string;
  image: string;
  badge?: string;
}

export const zeroServerApps: AppData[] = [
  {
    title: "Its My Merge",
    description: "A simple, powerful PDF merger for everyone. Merge, customize, and organize your PDF files with ease.",
    link: "https://its-my-merge.web.app/",
    image: "/images/its_my_merge.png",
    badge: "FREE"
  },
  {
    title: "Its My Idea",
    description: "Securely store your ideas with PIN encryption directly in your browser. Works offline.",
    link: "https://its-my-idea-1950e.web.app/",
    image: "/images/its_my_idea_logo.png",
    badge: "FREE"
  },
  {
    title: "Work Pics",
    description: "Keep your work and personal photos separate. Saves images into a dedicated folder away from your Gallery.",
    link: "https://firebasestorage.googleapis.com/v0/b/its-my-app-platform.firebasestorage.app/o/downloads%2FWork_Photo.apk?alt=media",
    image: "/images/WorkPhotoApp.png",
    badge: "FREE"
  },
  {
    title: "Its My QR Code",
    description: "The Zero-Backend QR Generator. Create stunning, branded QR codes in seconds.",
    link: "https://its-my-qr.vercel.app/",
    image: "/images/its-my-qr-logo.png",
    badge: "FREE"
  },
  {
    title: "Sync Banana",
    description: "The Zero-Cloud Photo Organizer. Automatically sort site visit photos by GPS, convert HEIC, and prevent duplicates.",
    link: "https://firebasestorage.googleapis.com/v0/b/its-my-app-platform.firebasestorage.app/o/downloads%2Fsync_banana.exe?alt=media&token=0e575a97-2888-4c4d-a671-1f5f617fba9f",
    image: "/images/Sync_banana.png",
    badge: "FREE"
  }
];

export const fullStackApps: AppData[] = [
  {
    title: "Packit Trackit",
    description: "Digital X-Ray Vision for your boxes. Snap a photo, let AI catalog the contents, and instantly search inventory.",
    link: "https://itsmyapp.co.uk/apps/packit-trackit",
    image: "/images/Packit_Trackit.png"
  },
  {
    title: "Time Track Invoice",
    description: "Effortless Time Tracking, Professional Invoicing. Designed for freelancers and contract workers.",
    link: "https://itsmyapp.co.uk/apps/time-track-invoice",
    image: "/images/timetrackinvoice.png"
  },
  {
    title: "Bar GP",
    description: "The definitive tool for calculating Gross Profit percentages and optimizing your bar's profitability.",
    link: "https://itsmyapp.co.uk/apps/bar-gp",
    image: "/images/BarGP_Logo.png"
  },
  {
    title: "Its My Keys",
    description: "The Digital Replacement for Your Physical Key Log. Track keys, assets, and equipment in real-time.",
    link: "https://itsmyapp.co.uk/apps/its-my-keys",
    image: "/images/its-my-keys-logo.png"
  },
  {
    title: "Its My Keybox",
    description: "The simple, secure solution for property managers and hosts to manage and share access codes.",
    link: "https://itsmyapp.co.uk/apps/its-my-keybox",
    image: "/images/Its-My-Keybox.png"
  },
  {
    title: "Its My Subs",
    description: "Track your recurring payments, from Netflix to car tax, and take back control of your finances.",
    link: "https://itsmyapp.co.uk/apps/its-my-subs",
    image: "/images/its-my-subs-logo.png"
  },
  {
    title: "Its My Banking",
    description: "A comprehensive banking dashboard to manage your accounts, reconcile transactions, and track finances.",
    link: "https://itsmyapp.co.uk/apps/its-my-banking",
    image: "/images/its-my-banking-logo.png"
  },
  {
    title: "Its My Arcade",
    description: "A retro gaming experience bringing back the 80s arcade vibe. Features classic gameplay and neon aesthetics.",
    link: "https://itsmyapp.co.uk/apps/its-my-arcade",
    image: "/images/its-my-arcade-logo.png"
  },
  {
    title: "Pool Mate",
    description: "Your in-pocket pool game assistant. Flip a coin, assign colours, and manage fouls.",
    link: "https://itsmyapp.co.uk/apps/pool-mate",
    image: "/images/Pool_Mate.webp"
  },
  {
    title: "Killer Pool",
    description: "The Deck of Doom. A card-based pool eliminator game for 2–13 players.",
    link: "https://itsmyapp.co.uk/apps/killer-pool",
    image: "/images/Killer_Pool.webp"
  },
  {
    title: "Its My Paint",
    description: "The professional-grade mobile tool for decorating contractors. Manage jobs and generate reports.",
    link: "https://itsmyapp.co.uk/apps/its-my-paint",
    image: "/images/its-my-paint.png"
  },
  {
    title: "It's My Cutlist",
    description: "A cloud-connected parametric design and 2D material optimization dashboard for custom cabinetry.",
    link: "https://itsmyapp.co.uk/apps/its-my-cutlist",
    image: "/images/cutlist-logo.png"
  },
  {
    title: "3D Furniture Modeler",
    description: "An interactive, rotatable 3D cabinet design tool. Configure wardrobes and export lists.",
    link: "https://itsmyapp.co.uk/apps/3d-furniture-modeler",
    image: "/images/modeler-logo.png"
  }
];

export const websites: AppData[] = [
  {
    title: "CoastAI",
    description: "AI Solutions for Small Business. Custom AI agents to handle daily operations.",
    link: "https://coastalai.co.uk/",
    image: "/images/itsmyapp_logo.png"
  },
  {
    title: "The Residence",
    description: "A stunningly refurbished property redefining shared living with private accommodation and a vibrant community.",
    link: "https://theresidencedartmouth.co.uk/",
    image: "/images/the_residence_small.png"
  },
  {
    title: "Whole Hospitality",
    description: "The only hospitality platform that starts with an on-site audit to plug leaks in GP, stock, and operations.",
    link: "https://wholehospitality.co.uk/",
    image: "/images/whole_hospitality_logo.png"
  }
];

export const websiteAdditions: AppData[] = [
  {
    title: "Calendly Booking Widget",
    description: "Seamless scheduling integration—perfect for service-based businesses and consultants.",
    link: "https://itsmyapp.co.uk/calendly-demo",
    image: "/images/calendly_demo.png"
  },
  {
    title: "Digital Brochure",
    description: "Interactive digital brochure featuring a Ken Burns hero slideshow and animated feature cards.",
    link: "https://itsmyapp.co.uk/packit-trackit-brochure",
    image: "/images/Screenshot 2026-05-31 105400.png"
  },
  {
    title: "Animated Logo",
    description: "A stunning branded animated logo combining looping video, pulsing glow, and branded audio.",
    link: "https://itsmyapp.co.uk/packit-trackit-logo",
    image: "/images/Packit_Trackit.png"
  },
  {
    title: "ItsMyApp Voice",
    description: "Your 24/7 AI Receptionist and Digital Brochure. Instant, intelligent answers for your customers.",
    link: "https://itsmyapp.co.uk/voice-ai",
    image: "/images/its-myapp-voice-logo.webp"
  }
];
