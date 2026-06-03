export interface AppData {
  title: string;
  slug?: string;
  description: string;
  link?: string;
  image?: string;
  video?: string;
  badge?: string;
  heroImages?: string[];
  screenshots?: string[];
  extendedDescription?: string;
}

export const zeroServerApps: AppData[] = [
  {
    title: "Its My Merge",
    slug: "its-my-merge",
    description: "A simple, powerful PDF merger for everyone. Merge, customize, and organize your PDF files with ease.",
    link: "https://its-my-merge.web.app/",
    image: "/images/its_my_merge.png",
    badge: "FREE",
    heroImages: [
      "/images/its_my_merge.png",
      "/images/its_my_merge.png",
      "/images/its_my_merge.png"
    ],
    screenshots: [
      "/images/its_my_merge.png",
      "/images/its_my_merge.png",
      "/images/its_my_merge.png"
    ],
    extendedDescription: `
      <p class="mb-6">There are several practical reasons why merging PDFs makes life easier, whether you are managing business documents, handling personal admin, or developing digital tools. At its core, merging PDFs is about organization, presentation, and efficiency. Here is why you would want to do it:</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">1. Professional Presentation & Client Delivery</h3>
      <p class="mb-4">When sending documents to clients, investors, or stakeholders, delivering a single, cohesive file looks much more professional than forcing them to download a dozen separate attachments.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-400">
        <li><strong class="text-white">Business Proposals:</strong> Combining a cover letter, a cost breakdown, technical specifications, and terms of service into one continuous document.</li>
        <li><strong class="text-white">Portfolios:</strong> Merging separate design samples, case studies, and a CV into a single showcase file.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">2. Streamlining Admin & Bookkeeping</h3>
      <p class="mb-4">Managing paperwork becomes significantly easier when related items are housed together.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-400">
        <li><strong class="text-white">Expense Reporting:</strong> Merging individual digital receipts, invoices, and bank statements into a single PDF for an accountant or tax submission.</li>
        <li><strong class="text-white">Archiving Projects:</strong> Combining all contracts, design iterations, and sign-off sheets for a completed project into one master archive file.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">3. Seamless Printing and Sharing</h3>
      <p class="mb-4">Dealing with multiple files can lead to errors and unnecessary friction when printing or distributing materials.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-400">
        <li><strong class="text-white">Batch Printing:</strong> Sending one 50-page document to a printer is far more reliable than sending 10 separate 5-page documents, which can easily get mixed up in the printer queue or print in the wrong order.</li>
        <li><strong class="text-white">Avoiding Email Limits:</strong> Email servers often restrict the number of attachments or total file size. Merging documents (and compressing them) ensures everything arrives in one go.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">4. Better User Experience (UX)</h3>
      <p class="mb-4">From a digital perspective, scrolling through a single, well-structured document is a much better user experience than opening and closing multiple tabs.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-400">
        <li><strong class="text-white">E-Books & Manuals:</strong> Combining individual chapters or standard compliance sections (like Privacy Policies, Terms of Service, and Cookie Policies) into a single downloadable user guide.</li>
      </ul>

      <h3 class="text-2xl font-bold text-neon-cyan mt-12 mb-4">The Developer's Perspective: Smart Merging</h3>
      <p class="mb-4">If you are looking at this from a development or automation angle, merging isn't just about sticking files together end-to-end. Modern "Zero-Server" web tools allow users to handle this entirely in the browser to maintain absolute data privacy, while offering advanced features like:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-400">
        <li><strong class="text-white">Selective Merging:</strong> Extracting only specific pages from Document A and combining them with Document B.</li>
        <li><strong class="text-white">Reordering:</strong> Dragging and dropping pages visually before finalizing the compilation.</li>
      </ul>
      <p class="mt-8 text-lg font-mono text-neon-cyan border-l-2 border-neon-cyan pl-4">Whether you're organizing personal files or building a streamlined utility tool, merging PDFs is all about cutting out digital clutter and making information easier to digest.</p>
    `
  },
  {
    title: "Its My Idea",
    slug: "its-my-idea",
    description: "Securely store your ideas with PIN encryption directly in your browser. Works offline.",
    link: "https://its-my-idea-1950e.web.app/",
    image: "/images/its_my_idea_logo.png",
    badge: "FREE"
  },
  {
    title: "Work Pics",
    slug: "work-pics",
    description: "Keep your work and personal photos separate. Saves images into a dedicated folder away from your Gallery.",
    link: "https://firebasestorage.googleapis.com/v0/b/its-my-app-platform.firebasestorage.app/o/downloads%2FWork_Photo.apk?alt=media",
    image: "/images/WorkPhotoApp.png",
    badge: "FREE"
  },
  {
    title: "Its My QR Code",
    slug: "its-my-qr-code",
    description: "The Zero-Backend QR Generator. Create stunning, branded QR codes in seconds.",
    link: "https://its-my-qr.vercel.app/",
    image: "/images/its-my-qr-logo.png",
    badge: "FREE"
  },
  {
    title: "Sync Banana",
    slug: "sync-banana",
    description: "The Zero-Cloud Photo Organizer. Automatically sort site visit photos by GPS, convert HEIC, and prevent duplicates.",
    link: "https://firebasestorage.googleapis.com/v0/b/its-my-app-platform.firebasestorage.app/o/downloads%2Fsync_banana.exe?alt=media&token=0e575a97-2888-4c4d-a671-1f5f617fba9f",
    image: "/images/Sync_banana.png",
    badge: "FREE"
  }
];

export const fullStackApps: AppData[] = [
  {
    title: "Packit Trackit",
    slug: "packit-trackit",
    description: "Digital X-Ray Vision for your boxes. Snap a photo, let AI catalog the contents, and instantly search inventory.",
    link: "https://itsmyapp.co.uk/apps/packit-trackit",
    image: "/images/Packit_Trackit.png"
  },
  {
    title: "Time Track Invoice",
    slug: "time-track-invoice",
    description: "Effortless Time Tracking, Professional Invoicing. Designed for freelancers and contract workers.",
    link: "https://itsmyapp.co.uk/apps/time-track-invoice",
    image: "/images/timetrackinvoice.png"
  },
  {
    title: "Bar GP",
    slug: "bar-gp",
    description: "The definitive tool for calculating Gross Profit percentages and optimizing your bar's profitability.",
    link: "https://itsmyapp.co.uk/apps/bar-gp",
    image: "/images/BarGP_Logo.png"
  },
  {
    title: "Its My Keys",
    slug: "its-my-keys",
    description: "The Digital Replacement for Your Physical Key Log. Track keys, assets, and equipment in real-time.",
    link: "https://itsmyapp.co.uk/apps/its-my-keys",
    image: "/images/its-my-keys-logo.png"
  },
  {
    title: "Its My Keybox",
    slug: "its-my-keybox",
    description: "The simple, secure solution for property managers and hosts to manage and share access codes.",
    link: "https://itsmyapp.co.uk/apps/its-my-keybox",
    image: "/images/Its-My-Keybox.png"
  },
  {
    title: "Its My Subs",
    slug: "its-my-subs",
    description: "Track your recurring payments, from Netflix to car tax, and take back control of your finances.",
    link: "https://itsmyapp.co.uk/apps/its-my-subs",
    image: "/images/its-my-subs-logo.png"
  },
  {
    title: "Its My Banking",
    slug: "its-my-banking",
    description: "A comprehensive banking dashboard to manage your accounts, reconcile transactions, and track finances.",
    link: "https://itsmyapp.co.uk/apps/its-my-banking",
    image: "/images/its-my-banking-logo.png"
  },
  {
    title: "Its My Arcade",
    slug: "its-my-arcade",
    description: "A retro gaming experience bringing back the 80s arcade vibe. Features classic gameplay and neon aesthetics.",
    link: "https://itsmyapp.co.uk/apps/its-my-arcade",
    image: "/images/its-my-arcade-logo.png"
  },
  {
    title: "Pool Mate",
    slug: "pool-mate",
    description: "Your in-pocket pool game assistant. Flip a coin, assign colours, and manage fouls.",
    link: "https://itsmyapp.co.uk/apps/pool-mate",
    image: "/images/Pool_Mate.webp"
  },
  {
    title: "Killer Pool",
    slug: "killer-pool",
    description: "The Deck of Doom. A card-based pool eliminator game for 2–13 players.",
    link: "https://itsmyapp.co.uk/apps/killer-pool",
    image: "/images/Killer_Pool.webp"
  },
  {
    title: "Its My Paint",
    slug: "its-my-paint",
    description: "The professional-grade mobile tool for decorating contractors. Manage jobs and generate reports.",
    link: "https://itsmyapp.co.uk/apps/its-my-paint",
    image: "/images/its-my-paint.png"
  },
  {
    title: "It's My Cutlist",
    slug: "its-my-cutlist",
    description: "A cloud-connected parametric design and 2D material optimization dashboard for custom cabinetry.",
    link: "https://itsmyapp.co.uk/apps/its-my-cutlist",
    image: "/images/cutlist-logo.png"
  },
  {
    title: "3D Furniture Modeler",
    slug: "3d-furniture-modeler",
    description: "An interactive, rotatable 3D cabinet design tool. Configure wardrobes and export lists.",
    link: "https://itsmyapp.co.uk/apps/3d-furniture-modeler",
    image: "/images/modeler-logo.png"
  }
];

export const websites: AppData[] = [
  {
    title: "The Residence",
    slug: "the-residence",
    description: "A stunningly refurbished property redefining shared living with private accommodation and a vibrant community.",
    link: "https://theresidencedartmouth.co.uk/",
    image: "/images/the_residence_small.png"
  },
  {
    title: "Whole Hospitality",
    slug: "whole-hospitality",
    description: "The only hospitality platform that starts with an on-site audit to plug leaks in GP, stock, and operations.",
    link: "https://wholehospitality.co.uk/",
    image: "/images/whole_hospitality_logo.png"
  }
];

export const websiteAdditions: AppData[] = [
  {
    title: "Calendly Booking Widget",
    slug: "calendly-booking-widget",
    description: "Seamless scheduling integration—perfect for service-based businesses and consultants.",
    link: "https://itsmyapp.co.uk/calendly-demo",
    image: "/images/calendly_demo.png"
  },
  {
    title: "Animated Logo",
    description: "A stunning branded animated logo combining looping video, pulsing glow, and branded audio.",
    video: "/videos/PackitTrackit_Logo.mp4"
  },
  {
    title: "ItsMyApp Voice",
    slug: "itsmyapp-voice",
    description: "Your 24/7 AI Receptionist and Digital Brochure. Instant, intelligent answers for your customers.",
    link: "https://itsmyapp.co.uk/voice-ai",
    image: "/images/its-myapp-voice-logo.webp"
  }
];

export const allApps = [...zeroServerApps, ...fullStackApps, ...websites, ...websiteAdditions];
