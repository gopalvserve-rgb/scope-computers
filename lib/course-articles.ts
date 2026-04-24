export type CourseArticle = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faqs: { q: string; a: string }[];
};

export const courseArticles: CourseArticle[] = [
  {
    slug: 'interior-designer-course',
    title: 'Start a Career in Interior Design — A Practical Path',
    tagline: 'Interior Design',
    intro:
      'Launching an interior design career takes more than creative flair. It takes structured training, disciplined workflows, and a portfolio that wins interviews. The right course combines design theory, software proficiency, and studio practice — so you leave ready to work on real client projects from day one.',
    sections: [
      {
        heading: 'Why Formal Training Accelerates Your Career',
        body: [
          "A proper interior design program replaces guesswork with a method. You'll think systematically about how people use space, how light shapes mood, and how materials carry a brand or a home's identity. That mindset is what separates a decorator from a designer.",
          'Structured modules cover spatial planning, color theory, lighting, furniture layouts, and budgeting. Each builds on the last, so by the time you tackle real projects you already have a repeatable process to lean on.',
        ],
      },
      {
        heading: 'The Core Skills You Walk Away With',
        body: [
          'Concept development and visualization — translate briefs into mood boards, sketches, and renders that sell your ideas clearly to clients.',
          'Industry software — AutoCAD for drafting, 3ds Max and SketchUp for modeling, and rendering tools like V-Ray or Lumion for photorealistic presentations.',
          'Materials literacy — knowing which finishes hold up, which feel premium on a budget, and which suppliers to call for what. This knowledge makes you immediately useful on a job site.',
        ],
      },
      {
        heading: 'Where the Jobs Are',
        body: [
          'Residential design — working with families on homes, apartments, and renovations. Steady, referral-driven, and easy to scale into a practice of your own.',
          'Commercial and hospitality — offices, retail, hotels, restaurants. Higher budgets, strict timelines, and closer integration with architects and brand teams.',
          'Freelance and consulting — with the right portfolio and a handful of finished projects, you can go independent inside two to three years.',
        ],
      },
      {
        heading: 'Studio Work and Portfolio Output',
        body: [
          "Classroom theory doesn't get you hired; finished projects do. That's why live briefs, site visits, and internships are built into every well-designed course.",
          'Graduates leave with a presentable portfolio — concept decks, technical drawings, and renders — which is what hiring managers and clients actually look at when deciding whom to trust.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I actually need a formal course?', a: "Not mandatory, but it shortens your learning curve by years and gives you a portfolio you can point to. Employers and clients respond to structured credentials — it's a shortcut to being taken seriously." },
      { q: 'What skills will I gain?', a: 'Concept visualization, CAD drafting, material knowledge, lighting fundamentals, space planning, and enough project management to run your own work.' },
      { q: 'Can I freelance after completing the course?', a: 'Yes. Modules on client handling, budgeting, and vendor coordination are designed specifically for students who want to go independent.' },
      { q: 'Is real-world practice included?', a: 'Yes — studio projects, site visits, internships, and live assignments are part of the syllabus, not bolt-ons.' },
      { q: 'How does the course support long-term growth?', a: 'You leave with a foundation you can keep building on — specialize in hospitality, furniture, or sustainable design as your career develops.' },
    ],
  },
  {
    slug: 'interior-designer-course-jodhpur',
    title: 'Interior Design Training in Jodhpur — A Local Advantage',
    tagline: 'Jodhpur',
    intro:
      'Jodhpur has become a surprisingly strong market for interior design talent. Demand from heritage restorations, new luxury housing, hospitality projects, and the growing Marwari business community has created real, paying work for trained designers. A good course in the city gives you both global best-practices and a feel for local aesthetics.',
    sections: [
      {
        heading: 'Why Jodhpur Makes Sense for This Career',
        body: [
          "The city's blend of regal architecture, heritage homes, and modern residential builds gives students a rare working laboratory. You study the same design principles taught anywhere else, but you also pick up sensitivity to materials and proportions that only come from being near centuries of real design work.",
          'Faculty in Jodhpur tend to be working professionals — designers, architects, and contractors who juggle live projects alongside teaching. That keeps the curriculum honest and current.',
        ],
      },
      {
        heading: 'What a Strong Local Program Offers',
        body: [
          'Hands-on studio learning paired with site exposure. Real workshops, not just lectures. Access to suppliers, fabricators, and tradespeople you can build relationships with.',
          'Coverage of space planning, color theory, lighting, material selection, and the software you actually need — AutoCAD, 3ds Max, SketchUp, V-Ray, and Lumion.',
          'Training that covers the business side too: how to price work, manage client expectations, and handle vendor coordination. In smaller cities like Jodhpur, running lean is non-negotiable.',
        ],
      },
      {
        heading: 'Why Our Institute',
        body: [
          'Our program is built around three things: practical skill-building, live-project exposure, and industry-ready output. Students handle briefs that match real client scope — residential, commercial, and hospitality — rather than abstract classroom problems.',
          'Beyond the core interior design track, we weave in adjacent skills: furniture design, graphic design for presentations, basic site surveying, and business fundamentals. Graduates leave with a well-rounded profile that opens more doors.',
        ],
      },
      {
        heading: 'What the Career Path Looks Like After Graduation',
        body: [
          'Most graduates start as junior designers at established firms or begin taking small residential projects on the side within their first year. Commercial and hospitality work typically follows after a portfolio of two to three finished residential projects.',
          "Others specialize — furniture design, set design, visual merchandising, or sustainable interiors. The field is wide enough that you don't have to commit to one path right out of the gate.",
        ],
      },
    ],
    faqs: [
      { q: 'Who can enroll?', a: "Anyone serious about design — students after 10th or 12th, graduates switching careers, working professionals adding a skill, even homemakers building toward freelance work. There's no single required background." },
      { q: 'What do students actually learn?', a: 'Concept development, CAD drafting, software proficiency, material and lighting knowledge, and client communication. All of it is taught through real work, not just lectures.' },
      { q: 'Is practical training included?', a: 'Yes — workshops, site visits, and live projects are core to the program, not optional extras.' },
      { q: 'What are the career options afterward?', a: 'Junior designer, design consultant, project coordinator, space planner, or your own freelance practice. The path you pick depends on how you want to work.' },
      { q: 'How long is the course?', a: 'Ranges from short certifications (a few months) to full diploma programs (up to a year). Choice depends on your goals and starting point.' },
    ],
  },
  {
    slug: 'tally-course-details',
    title: 'Tally Course — Curriculum, Certification, and What You Should Expect to Pay',
    tagline: 'Tally + GST',
    intro:
      "Every business that moves money needs accounting software. Tally has been the default choice across Indian small businesses and enterprises for decades, and that isn't changing. A structured Tally course gives you practical, employable skills — bookkeeping, GST compliance, payroll, and reporting — that translate directly into jobs or a bookkeeping practice of your own.",
    sections: [
      {
        heading: 'Why Tally Skills Still Carry Weight',
        body: [
          'Tally runs the books at small shops, mid-sized factories, and large enterprises. When a business hires for an accounting role, they assume Tally fluency. Not knowing it puts you out of the running before you start.',
          'The software covers the full accounting lifecycle — vouchers, ledgers, taxation, inventory, payroll, and financial reporting — so one tool takes you from basic bookkeeping to monthly MIS. That breadth is what makes it a reliable career investment.',
        ],
      },
      {
        heading: 'What the Curriculum Covers',
        body: [
          'Foundation accounting — voucher entries, ledger management, trial balance, and final statements.',
          'GST — full configuration, invoicing, return filing, reconciliation, and error resolution.',
          'Inventory — stock valuation, reorder levels, godown tracking, batch and expiry management.',
          'Payroll — salary structures, statutory deductions, attendance integration, and payslip generation.',
          'Reporting and MIS — balance sheet, P&L, cash flow, and the custom reports leadership actually asks for.',
        ],
      },
      {
        heading: 'Certification and Career Paths',
        body: [
          'Graduates earn a recognized certification that directly qualifies them for roles like Accounts Executive, Junior Accountant, Payroll Executive, Tax Assistant, and GST Practitioner.',
          'Many also use the certification to start a small bookkeeping practice — serving traders, shopkeepers, and small firms who need monthly accounting support but can\'t afford a full-time accountant.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need prior accounting knowledge?', a: "No. The course starts from accounting fundamentals, so a fresh graduate or someone switching from another field can keep up. What you do need is patience — Tally rewards people who learn it systematically rather than in a rush." },
      { q: 'How long does the course take?', a: 'Typically two to four months, depending on whether you choose the basic track or the full professional track that includes GST and payroll.' },
      { q: 'Is GST included?', a: 'Yes. Full GST setup, filing, and reconciliation are covered — this is the most requested skill from employers right now.' },
      { q: 'Do you help with placement?', a: 'Yes. Our placement cell connects Tally graduates with accounting firms, small businesses, and CA offices actively hiring.' },
    ],
  },
  {
    slug: 'graphic-designing-course',
    title: 'Graphic Design Training That Fixes the Mistakes Most Beginners Make',
    tagline: 'Graphic Design',
    intro:
      "Good design gets noticed. Great design gets remembered and acted on. The gap between those two usually isn't talent — it's training. Our graphic design course covers both the craft (tools, typography, color, composition) and the thinking (briefs, brand systems, how to argue for your choices) that separates amateur work from designs that actually perform.",
    sections: [
      {
        heading: 'What You Will Learn',
        body: [
          'The industry toolset — Adobe Photoshop, Illustrator, CorelDRAW, and InDesign. You get enough fluency to execute confidently, not just click through tutorials.',
          'The fundamentals that everything else rests on — typography, color theory, visual hierarchy, grid systems, and composition. Skip these and your work will always feel slightly off.',
          'Applied design work — logos, brand identity systems, packaging, print collateral, social media creatives, and web banners. You practice on real formats, not just exercises.',
          "Motion basics — short-form video, animated social creatives, and simple After Effects work. Most roles now expect you to move beyond static design, so we don't leave it out.",
        ],
      },
      {
        heading: 'Why Learn With Us',
        body: [
          "Our graphic design lead has more than 25 years of working experience — not just teaching. That matters, because most mistakes students make aren't software bugs; they're judgment calls you only learn by having your work critiqued by someone who ships.",
          "We also run an in-house advertising operation. That means you work on actual client briefs, not contrived classroom problems. You leave with a portfolio of real production work — the kind that gets you hired.",
        ],
      },
    ],
    faqs: [
      { q: 'Do I need a design background to start?', a: "No. We start with the fundamentals and build up. Most of our best students started with zero formal training — they just had curiosity and were willing to redo work until it clicked." },
      { q: 'Which software do you cover?', a: 'Photoshop, Illustrator, CorelDRAW, and InDesign as the core. After Effects and Premiere Pro for motion work. All industry-standard, nothing niche.' },
      { q: 'Is the course project-based?', a: "Yes. You work on live briefs from our in-house agency throughout the course — the same briefs paid clients are receiving. That's how you build a portfolio that wins interviews." },
    ],
  },
  {
    slug: 'land-survey-course',
    title: 'Is a Land Survey Course Worth It? A Straight Answer',
    tagline: 'Surveying',
    intro:
      'Land surveying is one of those careers that quietly pays well, has steady demand, and almost no oversupply of trained professionals. Construction, infrastructure, real estate, and GIS all need surveyors, and the tools keep getting more sophisticated — which rewards people who actually learn them properly.',
    sections: [
      {
        heading: 'What You Will Actually Master',
        body: [
          'Total Station — instrument setup, observation techniques, traversing, and data download. The workhorse tool for most modern site surveys.',
          'GPS and DGPS — base-rover setup, static and kinematic modes, post-processing for accurate geodetic output.',
          'Auto Level — differential leveling, benchmarking, and profile or cross-section work that construction projects depend on.',
          'Drone mapping basics — flight planning, ground control points, and orthomosaic generation. The fastest-growing part of the field.',
          'Survey drafting — AutoCAD for plans, contour maps, and plot layouts. The output everyone else on the project actually uses.',
        ],
      },
      {
        heading: 'Where This Leads Career-Wise',
        body: [
          'Site surveyor on construction projects, highways, and infrastructure builds — the default starting point and reliable work.',
          'GIS technician or analyst — for government bodies, mapping agencies, utility companies, and planning departments.',
          'Construction surveyor on larger builds — tower layouts, road alignments, dam and bridge projects.',
          'Drone pilot and independent consultant — scoping, mapping, and reporting work that pays well once you have the skill and the equipment.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need an engineering background?', a: "No. Diploma holders, 12th-pass students, and people switching careers all succeed in this field. What matters is being comfortable with field work and willing to learn the instruments properly." },
      { q: 'Is field training included?', a: 'Yes. We train on actual Total Stations, GPS units, and Auto Levels at real sites. Classroom theory only goes so far in this field.' },
      { q: 'What about software?', a: 'AutoCAD for drafting output, plus hands-on practice with the software that ships with the instruments themselves.' },
    ],
  },
  {
    slug: 'furniture-design-course',
    title: 'Why a Furniture Design Course Pays Off — Practical, Marketable Skills',
    tagline: 'Furniture Design',
    intro:
      "Furniture design sits at the intersection of art, engineering, and manufacturing. A good course doesn't just teach you to draw pretty pieces — it trains you to move a concept from a sketch to a production-ready spec that a workshop can actually build. That workflow is the real skill.",
    sections: [
      {
        heading: 'What the Course Covers',
        body: [
          'Design principles — ergonomics, anthropometry, proportion, and the human factors that decide whether a chair is comfortable or a table is too tall.',
          'Materials — wood species, engineered boards, metals, upholstery, finishes, and how each behaves over time under real use.',
          'Joinery and construction — dowel, biscuit, mortise-and-tenon, knockdown fittings. The mechanics that decide whether something falls apart in two years or lasts a lifetime.',
          'CAD and 3D work — AutoCAD for plans, SketchUp for quick modeling, and rendering for presentations that close clients.',
          'Production documentation — exploded views, bill of materials, and fabrication drawings that a workshop can actually follow.',
        ],
      },
      {
        heading: 'Where Graduates Go',
        body: [
          'Residential furniture design — bespoke pieces for interior firms and direct clients.',
          'Contract furniture — designing ranges for modular factories, offices, hotels, and restaurants.',
          'Independent studios — launching your own line of market-ready pieces once you have the portfolio and a small production network.',
        ],
      },
    ],
    faqs: [
      { q: 'Who is this course for?', a: 'Interior designers who want to specialize, architects adding a technical skill, carpenters wanting to move into design, and product design enthusiasts. Anyone comfortable with spatial thinking can do well here.' },
      { q: 'Do I need drawing skills?', a: "Basic sketching helps, but CAD tools do the heavy lifting. We teach you enough freehand skill to communicate ideas — you don't need to be a fine artist." },
      { q: 'Is there hands-on work?', a: 'Yes. You work with real materials, fittings, and samples. Visits to production units and workshops are part of the program.' },
    ],
  },
  {
    slug: 'artcam-cnc-design',
    title: 'ArtCAM and CNC Design — Skills That Actually Transfer to the Machine',
    tagline: 'ArtCAM & CNC',
    intro:
      "CNC work is unforgiving. A bad design file means wasted material, ruined tools, and machine downtime you can't bill for. A structured CNC design course teaches you the workflow that gets clean, production-ready output the first time — which is the only version that actually pays.",
    sections: [
      {
        heading: 'What Production-Focused Training Looks Like',
        body: [
          "A proper course teaches the full digital-to-physical workflow. You learn how vector construction, relief depths, and cutting strategies shape the final product — so every design decision is made with the machine's behavior in mind, not separate from it.",
          "Instead of experimenting mid-production, you arrive at the job with a tested file. That's the difference between a hobbyist and someone who gets hired.",
        ],
      },
      {
        heading: 'ArtCAM Skills You Build',
        body: [
          'Clean vector construction that translates into smooth toolpaths — the foundation of every successful cut.',
          'Relief modeling for textures, carvings, and layered depth work — the pieces clients pay premium rates for.',
          'Advanced toolpath control — roughing, finishing, depth strategies, and step-over optimization. The levers that decide whether a job takes two hours or six.',
          'Simulation-based validation — catching errors on screen before the machine ever spins up. This one habit saves more money than any other skill in the course.',
          'Material-aware design — tuning your approach for wood, MDF, acrylic, or composites. Each behaves differently, and your file needs to reflect that.',
        ],
      },
      {
        heading: 'Where Graduates Work',
        body: [
          'Manufacturing units, signage workshops, furniture factories, and CNC service bureaus all pay premium rates for operators who design as well as they cut.',
          'Freelance CNC work is also a strong path. With modest equipment and proven skills, you can run small-scale operations — signage, decor panels, furniture prototypes — with manageable risk and good margins.',
        ],
      },
    ],
    faqs: [
      { q: 'Who should enroll?', a: 'CNC operators looking to upskill into design, fabricators, woodworkers, signage professionals, and anyone involved in digital fabrication. The course pays for itself in saved material costs alone.' },
      { q: 'Is prior experience required?', a: "No. The course works for beginners and experienced professionals alike — you start at your level and build up." },
      { q: 'What specific skills are gained?', a: 'Vector creation, relief modeling, toolpath optimization, simulation, and production-ready file preparation. Each is taught with the machine in mind, not as an abstract exercise.' },
      { q: 'Are there hands-on projects?', a: 'Yes. Live projects simulate real production conditions, with actual CNC routers and real materials.' },
    ],
  },
];

export function findArticle(slug: string) {
  return courseArticles.find((a) => a.slug === slug);
}
