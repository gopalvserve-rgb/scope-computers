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
    title: 'How an Interior Designer Course Can Help You Start a Career',
    tagline: 'Interior Design',
    intro:
      'Building a successful career in interior designing requires structured expertise, practical exposure, and professional credibility. A well-curated interior designer course provides the technical foundation, design discipline, and industry alignment necessary to transition confidently into professional practice.',
    sections: [
      {
        heading: 'Why an Interior Design Course Builds Professional Readiness',
        body: [
          'An interior design course establishes a systematic approach to learning that aligns with industry expectations. Students think strategically about space utilization, user experience, and visual harmony. The curriculum introduces design fundamentals alongside real-world applications.',
          'Through structured modules, students master spatial planning, color coordination, lighting design, and furniture layouts. This disciplined learning process eliminates guesswork and allows them to execute projects with clarity and confidence.',
        ],
      },
      {
        heading: 'Skill Development Through an Interior Designer Course',
        body: [
          'Design Conceptualization and Visualization — transform abstract ideas into cohesive design concepts using sketches, mood boards, and digital visualization tools.',
          'Technical Drafting and Software Proficiency — industry-standard software such as AutoCAD, 3D modeling tools, and rendering platforms to produce detailed drawings, layouts, and realistic visual presentations.',
          'Material Selection and Specification — balance durability, sustainability, aesthetics, and budget while specifying materials for diverse project requirements.',
        ],
      },
      {
        heading: 'Career Opportunities After an Interior Designing Course',
        body: [
          'Residential Interior Design — design personalized living environments that reflect client lifestyles while maintaining functional efficiency and visual coherence.',
          'Commercial and Corporate Interiors — office spaces, retail outlets, and hospitality environments require strategic planning and brand integration.',
          'Freelance and Consultancy Practice — with project management and client-handling skills embedded in the curriculum, students are prepared to operate independently.',
        ],
      },
      {
        heading: 'Practical Training and Portfolio Excellence',
        body: [
          'Hands-on learning forms the backbone of a strong interior designer course. Studio projects, live assignments, and site exposure allow students to apply theoretical knowledge in practical settings.',
          'Graduates leave with a professionally curated portfolio showcasing concept development, technical drawings, and visual renders — a decisive asset when securing employment or clients.',
        ],
      },
    ],
    faqs: [
      { q: 'Is an interior designer course essential?', a: 'While not mandatory, a course provides structured training, industry exposure, and credibility that significantly improves career prospects.' },
      { q: 'What skills will I gain?', a: 'Design visualization, technical drafting, material knowledge, space planning, and project management skills aligned with industry needs.' },
      { q: 'Can I freelance after completion?', a: 'Yes — most courses include business and practical training that prepare students for freelance and consultancy roles.' },
      { q: 'Does it include real-world experience?', a: 'Comprehensive courses include studio projects, site visits, internships, and live assignments.' },
      { q: 'How long does the course take?', a: 'Duration varies from short-term certifications to comprehensive diploma courses.' },
    ],
  },
  {
    slug: 'interior-designer-course-jodhpur',
    title: 'Interior Designer Course in Jodhpur — Shaping Creative Careers',
    tagline: 'Jodhpur',
    intro:
      "Jodhpur, known for its regal architecture and evolving urban lifestyle, has emerged as a promising destination for aspiring interior designers. We present a comprehensive guide that highlights how an interior designer course in Jodhpur empowers learners with industry-ready skills and creative confidence.",
    sections: [
      {
        heading: 'A Gateway to a Thriving Industry',
        body: [
          "An interior design course in Jodhpur offers structured education aligned with modern design standards while drawing inspiration from the city's rich cultural aesthetics. Students gain in-depth knowledge of space planning, color theory, materials, lighting design, and sustainable practices.",
        ],
      },
      {
        heading: 'Local Learning with Global Perspective',
        body: [
          'Choosing an interior design course near you in Jodhpur provides accessibility without compromising quality. Local institutes combine hands-on studio learning with real-world exposure through site visits, workshops, and live projects.',
        ],
      },
      {
        heading: 'Why My Scope Computers Is the Ideal Choice',
        body: [
          'Scope stands out as an ideal destination for interior design education in Jodhpur due to its strong academic foundation, industry-oriented training approach, and focus on practical learning. Scope integrates essential modules such as furniture design, product design, graphic designing, surveying, and business fundamentals.',
        ],
      },
    ],
    faqs: [
      { q: 'Who can enroll?', a: 'Students after 10th/12th, graduates from any stream, working professionals, entrepreneurs, and homemakers who want a professional skill.' },
      { q: 'What skills are developed?', a: 'Design conceptualization, technical drafting, software proficiency, material knowledge, and client communication skills.' },
      { q: 'Is practical training included?', a: 'Yes — projects, site visits, and workshops are integral to our program.' },
      { q: 'What career options exist after?', a: 'Interior designer, design consultant, project coordinator, space planner, or start your own practice.' },
      { q: 'How long is the course?', a: 'Varies from short-term certifications to comprehensive diplomas.' },
    ],
  },
  {
    slug: 'tally-course-details',
    title: 'Tally Course — Curriculum, Certification, and Updated Fees',
    tagline: 'Tally + GST',
    intro:
      'Accounting and financial management remain central to every business operation. As organizations increasingly rely on digital accounting systems, professionals trained in Tally continue to be in strong demand. A well-structured Tally course equips you with practical accounting expertise, compliance knowledge, and software proficiency.',
    sections: [
      {
        heading: 'Professional Relevance of a Tally Course',
        body: [
          'Tally is widely adopted across small enterprises, large corporations, and accounting firms. Its practical application extends to bookkeeping, taxation, payroll, inventory control, and financial reporting.',
        ],
      },
      {
        heading: 'Curriculum Highlights',
        body: [
          'Core accounting principles, voucher entries, and ledger management.',
          'GST compliance, tax computation, invoicing, and return filing.',
          'Inventory management, stock valuation, and reorder planning.',
          'Payroll setup, statutory compliance, and salary processing.',
          'MIS reports and financial statement generation.',
        ],
      },
      {
        heading: 'Certification and Career Outcomes',
        body: [
          'Graduates of our Tally course earn recognized certification and are prepared for roles including Accounts Executive, Tax Assistant, Payroll Executive, and Junior Auditor. Many also start their own bookkeeping practices serving small businesses.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need prior accounting knowledge?', a: 'No — the course starts from fundamentals and builds up to advanced GST and payroll modules.' },
      { q: 'How long is the course?', a: 'Typically 2-4 months depending on the track (basic vs. professional).' },
      { q: 'Is GST included?', a: 'Yes — complete GST configuration, filing, and reconciliation are covered.' },
      { q: 'Will I get placement help?', a: 'Yes — our placement cell connects Tally graduates with accounting firms and businesses.' },
    ],
  },
  {
    slug: 'graphic-designing-course',
    title: 'Graphic Designing Course — Fix Common Visual Mistakes',
    tagline: 'Graphic Design',
    intro:
      'A great design grabs attention, communicates clearly, and drives action. Our graphic designing course helps you master the tools and the principles — from typography and color theory to layout, branding, and digital production — so your work stands out in a crowded market.',
    sections: [
      {
        heading: 'What You Will Learn',
        body: [
          'Adobe Photoshop, Illustrator, CorelDRAW, and InDesign — the industry toolset.',
          'Typography, color theory, visual hierarchy, and composition.',
          'Logo design, branding systems, packaging, and print collateral.',
          'Digital design: social media creatives, ads, web banners, and motion.',
        ],
      },
      {
        heading: 'Why Scope Computers',
        body: [
          'Sushil Joshi Sir brings 25+ years of real-world design experience. Our in-house advertising agency means you work on actual client briefs — not just classroom projects. You graduate with a portfolio that wins interviews.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need a design background?', a: 'No — we start with fundamentals and build up to professional production work.' },
      { q: 'Which software is taught?', a: 'Photoshop, Illustrator, CorelDRAW, InDesign, After Effects, Premiere Pro.' },
      { q: 'Is the course project-based?', a: 'Yes — you work on live client briefs from our in-house agency.' },
    ],
  },
  {
    slug: 'land-survey-course',
    title: 'Is a Land Survey Course the Right Choice?',
    tagline: 'Surveying',
    intro:
      'Land surveying is a foundation skill for civil engineering, construction, infrastructure, real estate, and GIS. A dedicated land survey course equips you with the instruments, techniques, and documentation discipline needed to deliver precise, reliable surveys in the field.',
    sections: [
      {
        heading: 'What You Will Master',
        body: [
          'Total Station operation — setup, observation, traverse, and data download.',
          'GPS / DGPS — base-rover setup, static and kinematic modes, post-processing.',
          'Auto Level — differential leveling, benchmarks, and profile/cross-sections.',
          'Drone mapping basics — flight planning, ground control, and orthomosaic generation.',
          'Survey drafting — AutoCAD for survey plans, contours, and plot layouts.',
        ],
      },
      {
        heading: 'Career Paths',
        body: [
          'Site surveyor, GIS technician, construction surveyor, town planning assistant, drone pilot, and independent survey consultant.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need engineering background?', a: 'Not required — diploma and 12th pass students regularly succeed in this course.' },
      { q: 'Is field training included?', a: 'Yes — we train on actual Total Stations, GPS units, and Auto Levels at real sites.' },
      { q: 'What about software?', a: 'AutoCAD for drafting, plus hands-on with Total Station and GPS software.' },
    ],
  },
  {
    slug: 'furniture-design-course',
    title: 'Why a Furniture Design Course Helps You Create Market-Ready Products',
    tagline: 'Furniture Design',
    intro:
      'Furniture design sits at the intersection of form, function, and manufacturing. A well-structured course trains you to move confidently from a concept sketch to production-ready drawings — accounting for materials, joinery, ergonomics, and cost.',
    sections: [
      {
        heading: 'Course Highlights',
        body: [
          'Furniture principles — ergonomics, proportions, anthropometry, and user flow.',
          'Material science — wood species, engineered boards, metal, upholstery, and finishes.',
          'Joinery and construction — dowel, biscuit, mortise-tenon, knockdown fittings.',
          'CAD &amp; 3D — AutoCAD, SketchUp, and rendering for presentations.',
          'Production documentation — exploded views, BOM, and fabrication drawings.',
        ],
      },
      {
        heading: 'Industry Outcomes',
        body: [
          'Graduates go on to design for residential clients, contract furniture makers, interior firms, and modular factories — or launch their own studios producing market-ready SKUs.',
        ],
      },
    ],
    faqs: [
      { q: 'Who is this course for?', a: 'Interior designers, architects, carpenters, and product design enthusiasts looking to specialize.' },
      { q: 'Do I need drawing skills?', a: 'Basic sketching helps but we cover fundamentals — CAD tools do the heavy lifting.' },
      { q: 'Is there hands-on work?', a: 'Yes — material samples, fittings, and visits to production units are included.' },
    ],
  },
  {
    slug: 'artcam-cnc-design',
    title: 'ArtCAM / CNC Design Course — Practical Skills That Work',
    tagline: 'ArtCAM & CNC',
    intro:
      'CNC production environments demand accuracy, efficiency, and repeatability. A structured CNC design course built around professional ArtCAM classes delivers the practical control required to produce dependable, production-ready results.',
    sections: [
      {
        heading: 'Production-Focused Learning',
        body: [
          'A professional CNC design course establishes disciplined workflows that align digital design with real machining behavior. We develop a clear understanding of how vectors, relief depths, and cutting strategies influence final output.',
        ],
      },
      {
        heading: 'Practical Skill Development in ArtCAM',
        body: [
          'Clean vector construction that translates into smooth toolpaths and accurate cuts.',
          'Relief modeling for detailed textures, carvings, and layered designs.',
          'Advanced toolpath control — roughing, finishing, depths, and step-over optimization.',
          'Simulation-based validation to catch errors before machining.',
          'Material-aware design for wood, MDF, acrylic, and composites.',
        ],
      },
      {
        heading: 'Career-Driven Outcomes',
        body: [
          'Manufacturing units, signage firms, furniture workshops, and CNC service providers value professionals with proven ArtCAM expertise. Strong technical foundations also allow you to manage freelance projects and small-scale CNC operations with minimal operational risk.',
        ],
      },
    ],
    faqs: [
      { q: 'Who should enroll?', a: 'CNC operators, designers, fabricators, woodworkers, and digital-fabrication professionals.' },
      { q: 'Is prior experience required?', a: 'No — the course accommodates both beginners and experienced professionals.' },
      { q: 'What skills are gained?', a: 'Vector creation, relief modeling, toolpath optimization, simulation, and production-ready file preparation.' },
      { q: 'Are there hands-on projects?', a: 'Yes — live projects simulate production conditions with real CNC routers.' },
    ],
  },
];

export function findArticle(slug: string) {
  return courseArticles.find((a) => a.slug === slug);
}
