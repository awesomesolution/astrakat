(() => {
  const root = 'New Pages/';
  const detailLinks = {
    'wardrobe and walkin closet.png': 'walk-in-closet.html',
    'Utility room.png': 'utility-room.html',
    'Understairs storage.png': 'understairs-storage.html',
    'study table.png': 'study-table.html',
    'Sliding door wardrobe.png': 'sliding-door-wardrobe.html',
    'Media Wall.png': 'media-wall.html',
    'Kitchen.png': 'kitchen.html',
    'Fitted wardrobes.png': 'fitted-wardrobes.html',
    'Dressing table.png': 'dressing-table.html',
    'Bed & Headboard.png': 'bed-and-headboard.html',
    'Bar Unit.png': 'bar-unit.html'
  };
  const pageData = {
    services: {
      title: 'Made for Your Space. Designed Around You.', kicker: 'Bespoke Furniture',
      intro: 'End-to-end design and development services tailored to your lifestyle, space and vision.',
      folder: 'Service Page', images: ['Background Image 1.png', 'Image 2.png', 'wardrobe and walkin closet.png', 'Utility room.png', 'Understairs storage.png', 'study table.png', 'Sliding door wardrobe.png', 'Media Wall.png', 'Kitchen.png', 'Fitted wardrobes.png', 'Dressing table.png', 'Bed & Headboard.png', 'Bar Unit.png', 'Second last image.png', 'Bottom Image.png']
    },
    bespoke: {
      title: 'Made for Your Space. Designed Around You.', kicker: 'Bespoke Furniture',
      intro: 'Made-to-measure furniture and joinery designed around the way you live.',
      folder: 'Service Page', images: ['Background Image 1.png', 'Image 2.png', 'wardrobe and walkin closet.png', 'Utility room.png', 'Understairs storage.png', 'study table.png', 'Sliding door wardrobe.png', 'Media Wall.png', 'Kitchen.png', 'Fitted wardrobes.png', 'Dressing table.png', 'Bed & Headboard.png', 'Bar Unit.png', 'Second last image.png', 'Bottom Image.png']
    },
    interior: {
      title: 'Interiors Designed Around Life.', kicker: 'Interior Design Services',
      intro: 'Thoughtful interiors that balance beauty, comfort and everyday function.',
      folder: 'Interior Design', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', 'Last Image.png']
    },
    architectural: {
      title: 'Ideas Today. Exceptional Spaces Tomorrow.', kicker: 'Architectural Development',
      intro: 'Practical, inspiring and buildable spaces delivered with precision.',
      folder: 'Architectural Development', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', 'Last Image.png']
    },
    projects: {
      title: 'Spaces That Tell Real Stories.', kicker: 'Our Work',
      intro: 'Explore a selection of bespoke furniture, interior design and architectural work created with clarity, craft and care.',
      folder: 'Our Work Page to be linked to View all Projects', assetFolder: 'projects', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', 'Last Image.png']
    },
    careers: {
      title: 'Build a Career in Beautiful Spaces', kicker: 'Careers at AstraKAT',
      intro: 'Join a thoughtful, ambitious team creating exceptional furniture, interiors and architecture.',
      folder: 'Career Page', images: ['BAckground image.png', 'Second last image.png', 'Last Image.png']
    },
    'walk-in-closet': { title: 'Your Own Space to Dress, Organise & Unwind.', kicker: 'Walk-in Closets', intro: 'Bespoke walk-in closets designed around your lifestyle. Combining beautiful storage, considered lighting and timeless design to create a space that feels uniquely yours.', folder: 'Wardrobes and walk-in Closet', images: ['Background Image.png', 'Bottom Image.png', 'Dressing Area.png', 'Hanging Space.png', 'Drawers & Organisers.png', 'Shoe & Accessary storage.png', 'Second Image.png', 'Second last image.png'] },
    'utility-room': { title: 'Beautifully Practical Spaces. Designed for Real Life.', kicker: 'Utility Room', intro: 'Bespoke utility rooms designed to keep your home organised, clutter-free and effortlessly functional.', folder: 'Utility Room', images: ['Background Image.png', 'Coats & Everyday Essentials.png', 'Laundry & Appliance Storage.png', 'Multi-Functional Utility Rooms.png', 'Storage & Organisation.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png'] },
    'understairs-storage': { title: 'Make Every Inch Count.', kicker: 'Understairs Storage', intro: 'Bespoke understairs storage designed to turn unused space into something extraordinary. Smart, stylish and tailored to your home.', folder: 'Understairs Storage Unit', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png'] },
    'study-table': { title: 'Focus Spaces. Brighter Ideas.', kicker: 'Study Tables & Home Offices', intro: 'Bespoke study tables designed to create a calm, organised and inspiring space for work, study or creativity.', folder: 'Study table', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png'] },
    'sliding-door-wardrobe': { title: 'Sleek. Space-Saving. Beautifully Bespoke.', kicker: 'Sliding Door Wardrobes', intro: 'Our sliding door wardrobes combine elegant design with practical storage, giving you maximum space without compromising on style.', folder: 'Sliding door wardrobe', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Last Image.png'] },
    'media-wall': { title: 'Statement Spaces. Designed Around You.', kicker: 'Media Walls & Living Units', intro: 'Bespoke media walls and living units designed to bring your space together. From sleek, contemporary designs to warm, textured finishes.', folder: 'Media Wall', images: ['Background Image.png', 'Contemporary Media Wall.png', 'Media Wall with Fireplace.png', 'Media wall with Shelving.png', 'Media Wall with Storage.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png'] },
    kitchen: { title: 'Beautiful Kitchens. Designed for Modern Living.', kicker: 'Bespoke Kitchens', intro: 'Bespoke kitchens designed around your space, your style and the way you live. We create beautiful, functional spaces tailored to your home.', folder: 'Kitchen', images: ['Background Image.png', 'Handleless Kitchens.png', 'Painted door Kitchens.png', 'Profile Kitchens.png', 'Shaker style Kitchens.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png', 'Last Image(1).png'] },
    'dressing-table': { title: 'Your Space. Your Style. Everyday Luxury.', kicker: 'Dressing Tables', intro: 'Bespoke dressing tables designed to bring beauty, functionality and a touch of luxury to your home.', folder: 'Dressing table', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Last Image.png'] },
    'bar-unit': { title: 'Raise the Everyday.', kicker: 'Bespoke Bar Units', intro: 'Beautifully designed bar units that bring style, functionality and a touch of luxury to your home.', folder: 'Bar Unit', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Last Image.png'] },
    'bed-and-headboard': { title: 'Sleep Beautifully. Live Better.', kicker: 'Beds & Headboards', intro: 'Bespoke beds and headboards designed to bring comfort, style and luxury to your bedroom.', folder: 'Bed and Headboard', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png'] },
    'fitted-wardrobes': { title: 'Bespoke Wardrobes for a More Organised Life.', kicker: 'Fitted Wardrobes', intro: 'Designed around your space, your style and your lifestyle. Our fitted wardrobes combine smart storage with beautiful finishes.', folder: 'Fitted Wardrobes', images: ['Background Image.png', '1.png', '2.png', '3.png', '4.png', 'Second Image.png', 'Second last image.png', 'Third last image.png', 'Last Image.png'] }
  };

  const escapeHtml = value => value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const resolveAsset = path => new URL(path, document.baseURI).href;
  const imageLabels = {
    interior: ['Hero', 'Living Rooms', 'Dining Spaces', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Home Offices', 'Hallways & Entrances', 'Complete Home Design', 'Final Detail'],
    architectural: ['Hero', 'Architectural Plans', 'Concept Design', 'Extensions', 'New Builds', 'Loft Conversions', 'Sustainable Development', 'Final Detail'],
    projects: ['Hero', 'Wimbledon House', 'Iver House', 'East Putney Mansion', 'Hampstead Residence', 'Richmond Townhouse', 'Surrey Garden House', 'Fulham Kitchen', 'Chiswick Dressing Suite', 'Clapham Media Wall', 'Esher Extension', 'Final Detail'],
    'understairs-storage': ['Hero', 'Integrated Storage', 'Drawer Storage', 'Open Shelving', 'Hidden Capacity', 'Main Detail', 'Second Detail', 'Third Detail', 'Final Detail'],
    'study-table': ['Hero', 'Dedicated Workspace', 'Desk Storage', 'Shelving', 'Made-to-Measure Detail', 'Main Detail', 'Second Detail', 'Third Detail', 'Final Detail'],
    'sliding-door-wardrobe': ['Hero', 'Sliding Door System', 'Organised Interior', 'Wardrobe Detail', 'Refined Finish', 'Main Detail', 'Second Detail', 'Third Detail', 'Final Detail'],
    'dressing-table': ['Hero', 'Tailored Layout', 'Mirror & Lighting', 'Integrated Storage', 'Dressing Detail', 'Main Detail', 'Second Detail', 'Final Detail'],
    'bar-unit': ['Hero', 'Home Bar Detail', 'Display Storage', 'Lighting Detail', 'Entertaining Space', 'Main Detail', 'Second Detail', 'Final Detail'],
    'bed-and-headboard': ['Hero', 'Statement Headboard', 'Integrated Bed Wall', 'Bedroom Storage', 'Bedroom Detail', 'Main Detail', 'Second Detail', 'Third Detail', 'Final Detail'],
    'fitted-wardrobes': ['Hero', 'Made-to-Measure Storage', 'Beautiful Finishes', 'Practical Interiors', 'Wardrobe Detail', 'Main Detail', 'Second Detail', 'Third Detail', 'Final Detail']
  };
  const narratives = {
    interior: { label: 'Our Interior Design Services', heading: 'Thoughtful Design for Every Space.', body: 'From elegant living rooms to serene bedrooms, inspiring workspaces and beyond, we create cohesive interiors that reflect your lifestyle - with beauty in every detail.', detailHeading: 'Spaces with Meaning.', detailBody: 'From statement lighting and bespoke furniture to curated accessories, artwork and finishes, we bring together every element to create interiors that feel complete.', process: ['Consultation', 'Concept & Moodboard', 'Detailed Development', 'Procurement & Planning', 'Installation & Styling'] },
    architectural: { label: 'More Than Plans', heading: 'Architecture with Purpose.', body: 'We combine creativity, technical expertise and a deep understanding of how people live to design spaces that are practical, sustainable and inspiring.', detailHeading: 'Design the Space You Deserve.', detailBody: 'Every project balances planning, functionality, sustainability, aesthetics and long-term value.', process: ['Initial Consultation', 'Concept Design', 'Detailed Design', 'Planning & Approvals', 'Ready to Build'] },
    projects: { label: 'Selected Projects', heading: 'Thoughtful Spaces. Considered Details.', body: 'Every project is shaped around the people who use it, from the first conversation through to the final installation.', detailHeading: 'Work made for real life.', detailBody: 'Explore residential interiors, bespoke furniture and architectural development delivered with clarity, craft and care.', process: ['Brief', 'Design', 'Development', 'Delivery', 'Completion'] }
  };
  const getImageLabel = (key, image, index) => {
    const labels = imageLabels[key];
    if (labels && labels[index]) return labels[index];
    return image.replace(/\.(png|webp)$/i, '').replace(/\b\w/g, letter => letter.toUpperCase());
  };

  const subcategoryPages = [
    'walk-in-closet',
    'utility-room',
    'understairs-storage',
    'study-table',
    'sliding-door-wardrobe',
    'media-wall',
    'kitchen',
    'dressing-table',
    'bar-unit',
    'bed-and-headboard',
    'fitted-wardrobes'
  ];

  const siteHeader = (active) => {
    const currentKey = document.body ? document.body.dataset.newPage : '';
    if (!active) {
      if (currentKey === 'projects' || subcategoryPages.indexOf(currentKey) !== -1) {
        active = 'projects';
      } else if (currentKey === 'careers') {
        active = 'careers';
      } else if (currentKey === 'about') {
        active = 'about';
      } else if (currentKey === 'contact') {
        active = 'contact';
      } else if (currentKey === 'home') {
        active = 'home';
      } else {
        try {
          var sp = new URLSearchParams(window.location.search);
          if (sp.get('from') === 'projects') {
            active = 'projects';
          } else {
            active = 'services';
          }
        } catch (e) {
          active = 'services';
        }
      }
    }
    const isHome = active === 'home';
    const isAbout = active === 'about';
    const isServices = active === 'services';
    const isProjects = active === 'projects';
    const isCareers = active === 'careers';
    const isContact = active === 'contact';
    return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header" id="siteHeader"><nav class="nav container"><a href="index.html" class="brand"><span class="brand__name">AstraKAT</span><span class="brand__sub">D E S I G N S</span></a><ul class="nav__links" id="navLinks"><li><a href="index.html"${isHome ? ' class="active" aria-current="page"' : ''}>HOME</a></li><li><a href="about.html"${isAbout ? ' class="active" aria-current="page"' : ''}>ABOUT</a></li><li><a href="services.html"${isServices ? ' class="active" aria-current="page"' : ''}>SERVICES</a></li><li><a href="projects.html"${isProjects ? ' class="active" aria-current="page"' : ''}>PROJECTS</a></li><li><a href="careers.html"${isCareers ? ' class="active" aria-current="page"' : ''}>CAREERS</a></li><li><a href="contact.html"${isContact ? ' class="active" aria-current="page"' : ''}>CONTACT</a></li></ul><div class="nav__right"><a href="contact.html#schedule" class="btn btn--gold btn--sm">SEND AN ENQUIRY</a><a href="https://wa.me/447344337970" class="nav__wa" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.519 5.26l-.999 3.648 3.97-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a><button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false" aria-controls="navLinks"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button></div></nav></header>`;
  };
  const siteFooter = () => `<footer class="footer" id="contact"><div class="container footer__grid footer__grid--home"><div class="footer__brand"><span class="brand__name">AstraKAT</span><span class="brand__sub">D E S I G N S</span><p>AstraKAT brings your dream spaces to life through bespoke design, craftsmanship and architecture excellence.</p></div><div class="footer__col"><h5>QUICK LINKS</h5><ul><li><a href="about.html">About Us</a></li><li><a href="services.html">Services</a></li><li><a href="projects.html">Projects</a></li><li><a href="careers.html">Careers</a></li><li><a href="contact.html">Contact Us</a></li></ul></div><div class="footer__col"><h5>SERVICES</h5><ul><li><a href="bespoke-furniture.html">Bespoke Furniture</a></li><li><a href="interior-design.html">Interior Design</a></li><li><a href="architectural-development.html">Architectural Development</a></li></ul></div><div class="footer__col"><h5>AREAS WE COVER</h5><ul><li>London</li><li>Surrey</li><li>Hertfordshire</li><li>Berkshire</li><li>&amp; Surrounding Areas</li></ul></div><div class="footer__cta footer__cta--home"><h4>Ready to Transform Your Space?</h4><p>Send an enquiry to our design experts today.</p><a href="contact.html#schedule" class="btn btn--gold btn--block">SEND AN ENQUIRY</a><a href="https://wa.me/447344337970" class="btn btn--gold-outline btn--block" target="_blank" rel="noopener">CHAT ON WHATSAPP</a></div></div><div class="footer__bar"><div class="container footer__bar-inner"><span>&copy; 2025 AstraKAT Designs Limited. All Rights Reserved.</span><div class="footer__legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Conditions</a></div></div></div></footer>`;

  const refreshSiteHeader = () => {
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!header || !toggle || !links) return;
    const setScrolled = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', event => {
      if (event.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  function render() {
    const key = document.body.dataset.newPage;
    const page = pageData[key];
    if (!page) return;
    document.body.classList.add('new-page');
    if (key === 'careers') {
      renderCareers();
      refreshSiteHeader();
      return;
    }
    if (key === 'bespoke') {
      renderBespokeFurniture();
      refreshSiteHeader();
      return;
    }
    if (key === 'interior') {
      renderInteriorDesign();
      refreshSiteHeader();
      return;
    }
    if (key === 'walk-in-closet') {
      renderWalkInCloset();
      refreshSiteHeader();
      return;
    }
    if (key === 'kitchen') {
      renderKitchen();
      refreshSiteHeader();
      return;
    }
    if (key === 'media-wall') {
      renderMediaWall();
      refreshSiteHeader();
      return;
    }
    if (key === 'utility-room') {
      renderUtilityRoom();
      refreshSiteHeader();
      return;
    }
    if (key === 'understairs-storage') {
      renderUnderstairsStorage();
      refreshSiteHeader();
      return;
    }
    if (key === 'sliding-door-wardrobe') {
      renderSlidingDoorWardrobe();
      refreshSiteHeader();
      return;
    }
    if (key === 'study-table') {
      renderStudyTable();
      refreshSiteHeader();
      return;
    }
    if (key === 'fitted-wardrobes') {
      renderFittedWardrobes();
      refreshSiteHeader();
      return;
    }
    if (key === 'dressing-table') {
      renderDressingTable();
      refreshSiteHeader();
      return;
    }
    if (key === 'bed-and-headboard') {
      renderBedAndHeadboard();
      refreshSiteHeader();
      return;
    }
    if (key === 'bar-unit') {
      renderBarUnit();
      refreshSiteHeader();
      return;
    }
    const imagePath = image => {
      const convertedName = image.replace(/\.png$/i, '.webp');
      if (page.assetFolder === 'projects') return resolveAsset(`assets/projects/${convertedName}`);
      if (key === 'careers') {
        const careerAssets = {
          'BAckground image.png': 'assets/careers/career-background.webp',
          'Second last image.png': 'assets/careers/career-detail.webp',
          'Last Image.png': 'assets/careers/career-cta.webp'
        };
        return resolveAsset(careerAssets[image]);
      }
      return resolveAsset(`assets/services/${page.folder}/${convertedName}`);
    };
    const images = page.images.map((image, index) => ({ image, index }));
    const hero = images[0];
    const gallery = images.slice(1);
    const narrative = narratives[key] || {
      label: page.kicker,
      heading: `Beautifully considered ${page.title.toLowerCase()}.`,
      body: page.intro,
      detailHeading: 'Designed around the way you live.',
      detailBody: 'Every detail is considered from the first conversation through to the final installation, bringing together practical function, refined materials and lasting craftsmanship.',
      process: ['Consultation', 'Design', 'Development', 'Installation', 'Completion']
    };
    const processMarkup = narrative.process.map((step, index) => `<article class="np-process-card"><b>${String(index + 1).padStart(2, '0')}</b><h3>${escapeHtml(step)}</h3><p>${escapeHtml(index === 0 ? 'We understand your space, needs and aspirations.' : index === 1 ? 'We develop a clear, tailored design direction.' : index === 2 ? 'We refine materials, details and practical requirements.' : index === 3 ? 'We coordinate the details that bring the design to life.' : 'A finished space made to feel entirely yours.')}</p></article>`).join('');
    const contentMarkup = `<section class="np-purpose"><div><span class="np-eyebrow">${escapeHtml(narrative.label)}</span><h2>${escapeHtml(narrative.heading)}</h2><p>${escapeHtml(narrative.body)}</p><a class="np-button" href="contact.html">DISCUSS YOUR PROJECT <span>&rarr;</span></a></div><div class="np-purpose__detail"><span class="np-eyebrow">It is in the details</span><h2>${escapeHtml(narrative.detailHeading)}</h2><p>${escapeHtml(narrative.detailBody)}</p><ul><li>Thoughtful planning</li><li>Premium materials</li><li>Practical functionality</li><li>Timeless finishes</li></ul></div></section><section class="np-process"><span class="np-eyebrow">Our design process</span><h2>From first idea to final detail.</h2><div class="np-process-grid">${processMarkup}</div></section>`;
    document.body.innerHTML = `
      ${siteHeader(key === 'projects' || subcategoryPages.indexOf(key) !== -1 ? 'projects' : key === 'careers' ? 'careers' : (new URLSearchParams(window.location.search).get('from') === 'projects' ? 'projects' : 'services'))}
      <section class="np-hero" style="--hero-image:url('${imagePath(hero.image)}');--cta-image:url('${imagePath(images[images.length - 1].image)}')"><div class="np-hero__content"><span class="np-kicker">${escapeHtml(page.kicker)}</span><h1>${escapeHtml(page.title)}</h1><p>${escapeHtml(page.intro)}</p><a class="np-button" href="contact.html">BOOK A CONSULTATION</a></div></section>
      <main><section class="np-section"><div class="np-intro"><img src="${imagePath(gallery[0].image)}" alt="${escapeHtml(page.title)}"><div><span class="np-eyebrow">AstraKAT Designs</span><h2>${escapeHtml(narrative.heading)}</h2><p class="np-lead">${escapeHtml(narrative.body)}</p></div></div></section>${contentMarkup}<section class="np-section np-section--alt"><div class="np-section__inner"><span class="np-eyebrow">The complete project</span><h2>Considered details from top to bottom.</h2><div class="np-gallery">${gallery.slice(1).map(({ image, index }) => { const caption = escapeHtml(getImageLabel(key, image, index + 1)); const card = `<figure><img src="${imagePath(image)}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`; return detailLinks[image] && key === 'services' ? `<a href="${detailLinks[image]}">${card}</a>` : card; }).join('')}</div></div></section></main><section class="np-cta" style="--cta-image:url('${imagePath(images[images.length - 1].image)}')"><h2>Ready to create something exceptional?</h2><p>Tell us about your space and we will help you take the next step.</p><a class="np-button" href="contact.html">START YOUR PROJECT</a></section>${siteFooter()}`;
    refreshSiteHeader();
  }

  function renderBespokeFurniture() {
    const asset = name => resolveAsset(`assets/services/Service Page/${name}`);
    const categories = [
      ['wardrobe and walkin closet.webp', 'Wardrobes & Walk-in Closets', 'Made-to-measure storage designed beautifully around you.'],
      ['Kitchen.webp', 'Kitchens', 'Bespoke kitchens balancing everyday function with considered design.'],
      ['Media Wall.webp', 'Media Walls & Living Units', 'Statement media walls designed to bring the room together.'],
      ['Utility room.webp', 'Utility Room', 'Beautiful organisation for one of the hardest-working rooms.'],
      ['Understairs storage.webp', 'Understairs Storage', 'Transform overlooked spaces into intelligent storage.'],
      ['Sliding door wardrobe.webp', 'Sliding Door Wardrobes', 'Space-saving wardrobes tailored precisely to your room.'],
      ['study table.webp', 'Study Table', 'Workspace designed for focus, comfort and your interior.'],
      ['Fitted wardrobes.webp', 'Fitted Wardrobes', 'Seamless floor-to-ceiling storage made for your space.'],
      ['Dressing table.webp', 'Dressing Table', 'Bespoke dressing areas combining storage and style.'],
      ['Bed & Headboard.webp', 'Bed & Headboard', 'Statement bedroom furniture designed as part of the room.'],
      ['Bar Unit.webp', 'Bar Unit', 'Bespoke home bars made for entertaining beautifully.']
    ];
    const cardMarkup = categories.map(([image, title, copy]) => {
      const detailPage = detailLinks[image.replace('.webp', '.png')];
      return `<a class="bf-category bf-category-link" href="${detailPage || 'contact.html'}"><img src="${asset(image)}" alt="${escapeHtml(title)}" loading="lazy"><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></div></a>`;
    }).join('');
    document.body.innerHTML = `
      ${siteHeader()}
      <section class="bf-hero" style="--bf-image:url('${asset('Background Image 1.webp')}')"><div class="bf-hero__content"><span class="np-kicker">Bespoke Furniture</span><h1>Made for Your Space.<br>Designed Around You.</h1><p>From beautifully fitted wardrobes and walk-in closets to media walls, home offices and clever storage solutions, we create bespoke furniture designed around your home, your style and the way you live.</p><div class="bf-actions"><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><a class="bf-outline-button" href="#categories">EXPLORE OUR BESPOKE FURNITURE</a></div><small>Bespoke fitted furniture · London &amp; across England.</small></div></section>
      <main><section class="bf-intro"><div class="bf-intro__image"><img src="${asset('Image 2.webp')}" alt="Bespoke media wall and living unit" loading="lazy"></div><div class="bf-intro__copy"><span class="np-eyebrow">Bespoke, down to the last detail</span><h2>Furniture That Belongs<br>in Your Home.</h2><p>No two homes are exactly alike - and we don't believe their furniture should be either.</p><p>At AstraKAT Designs, we design and create bespoke fitted furniture tailored to your space. Every detail is considered, from proportions and internal storage to finishes, lighting and the way each piece integrates with the surrounding interior.</p><p>Whether you're transforming an awkward corner, creating a floor-to-ceiling wardrobe or designing an entire room, our approach brings together thoughtful design, practical storage and refined craftsmanship.</p></div></section>
      <section class="bf-categories" id="categories"><span class="np-eyebrow">Explore our bespoke furniture</span><h2>Tailored for Every Room. Designed for Real Life.</h2><div class="bf-category-grid">${cardMarkup}<article class="bf-category bf-category--dark"><div><h3>Have Something Else in Mind?</h3><p>Tell us what you have in mind and we'll design it around you.</p><a href="contact.html">START A CONVERSATION <span>&rarr;</span></a></div></article></div></section>
      <section class="bf-process"><span class="np-eyebrow">Designed around you</span><h2>From an Idea to a Beautifully Fitted Space.</h2><div class="bf-process-grid"><article><b>01</b><h3>Consultation</h3><p>We begin by understanding your space, requirements, style and how you want to use it.</p></article><article><b>02</b><h3>Design</h3><p>Our designers develop a bespoke solution tailored to your room, including materials, finishes and carefully considered details.</p></article><article><b>03</b><h3>Made for You</h3><p>Your furniture is produced to the agreed design and dimensions rather than selected from standard sizes.</p></article><article><b>04</b><h3>Installation</h3><p>Our fitting team brings everything together in your home with care and attention to detail.</p></article></div></section>
      <section class="bf-benefits"><span class="np-eyebrow">Why bespoke?</span><h2>Make Every Corner Count.</h2><div class="bf-benefit-grid"><article><b>01</b><h3>Made to Measure</h3><p>Designed around the exact dimensions and characteristics of your space.</p></article><article><b>02</b><h3>Storage Without Compromise</h3><p>From awkward alcoves to sloping ceilings, we make better use of otherwise wasted space.</p></article><article><b>03</b><h3>Designed as Part of Your Interior</h3><p>Colours, finishes, lighting and proportions are considered alongside the rest of your home.</p></article><article><b>04</b><h3>Made for the Way You Live</h3><p>Configured around your lifestyle with the right mix of hanging space, shelves, drawers and display areas.</p></article><article><b>05</b><h3>One Design Language</h3><p>Create a connected thread through wardrobes, media units, dressing areas and study spaces.</p></article></div></section>
      <section class="bf-feature"><img src="${asset('Second last image.webp')}" alt="Bespoke bedroom furniture" loading="lazy"><div><span class="np-eyebrow">Bespoke furniture in London &amp; across England</span><h2>Bespoke Fitted Furniture for Beautifully Considered Homes.</h2><p>AstraKAT Designs provides bespoke furniture and interior solutions for homes across London and beyond.</p><p>From a single fitted wardrobe to multiple rooms within a complete home, we work with homeowners to create furniture that makes better use of their space while becoming part of the architecture and character of the interior.</p><p>Our bespoke furniture includes fitted wardrobes, walk-in wardrobes, sliding wardrobes, media walls, TV units, home offices, study tables, dressing tables, understairs storage, utility rooms, bespoke kitchens, beds, headboards and home bar units.</p></div></section></main>
      <section class="bf-cta" style="--bf-image:url('${asset('Bottom Image.webp')}')"><div><h2>Have a Space in Mind?</h2><p>Let's create something that fits your home - and your life - beautifully.</p><p>Share your ideas with our design team and arrange a free, no-obligation design consultation.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderInteriorDesign() {
    const asset = name => resolveAsset(`assets/services/Interior Design/${name}`);
    const rooms = [
      ['1.webp', 'Living Rooms', 'Welcoming. Warm. Timeless.'],
      ['2.webp', 'Dining Spaces', 'Designed for togetherness.'],
      ['3.webp', 'Bedrooms', 'Your personal retreat.'],
      ['4.webp', 'Kitchens', 'Functional. Beautiful. Bespoke.'],
      ['5.webp', 'Bathrooms', 'Everyday luxury.'],
      ['6.webp', 'Home Offices', 'Productive. Stylish. Yours.'],
      ['7.webp', 'Hallways & Entrances', 'A lasting first impression.'],
      ['8.webp', 'Complete Home Design', 'A seamless, cohesive vision.']
    ];
    const roomCards = rooms.map(([image, title, copy]) => `<article class="id-room"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const features = [
      ['Bespoke Design', 'Tailored to your lifestyle, taste and needs.', '<path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M4 11h16a1 1 0 0 1 1 1v4H3v-4a1 1 0 0 1 1-1Z"/>'],
      ['Premium Quality', 'Carefully sourced materials and expert craftsmanship.', '<path d="m12 3 2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>'],
      ['End-to-End Service', 'From concept to completion, we handle every detail.', '<path d="M4 21V8l6-4v4l6-3v16"/><path d="M3 21h18"/>'],
      ['A More Beautiful You', 'Interiors that inspire a happier, brighter everyday.', '<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/><path d="m9 12 2 2 4-4"/>']
    ].map(([title, copy, icon]) => `<article class="id-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">${icon}</svg><h3>${title}</h3><p>${copy}</p></article>`).join('');
    const steps = ['Consultation', 'Concept & Moodboard', 'Detailed Development', 'Procurement & Planning', 'Installation & Styling'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We understand your space, needs and lifestyle.', 'Tailored ideas, layouts and material selections.', 'Detailed plans, 3D visuals and refined selections.', 'We source, coordinate and manage everything.', 'A flawless finish, ready for you to enjoy.'][index]}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader()}
      <section class="id-hero" style="--id-image:url('${asset('Background Image.webp')}')"><div class="id-hero__content"><span class="np-kicker">Interior Design Services</span><h1>Interiors<br>Designed Around<br>Life.</h1><p>Thoughtful, timeless and personal interiors that bring beauty, comfort and purpose to every corner of your home. We design spaces that don’t just look extraordinary - they feel like you.</p><a class="np-button" href="contact.html">BOOK A FREE CONSULTATION <span>&rarr;</span></a><small>LIVE &nbsp; | &nbsp; DINE &nbsp; | &nbsp; RELAX &nbsp; | &nbsp; WORK &nbsp; | &nbsp; BELONG</small></div><div class="id-hero__aside">SPACES<br>THAT TELL<br>YOUR STORY</div></section>
      <main><section class="id-features">${features}</section><section class="id-rooms"><div class="id-rooms__intro"><span class="np-eyebrow">Our Interior Design Services</span><h2>Thoughtful<br>Design for<br>Every Space.</h2><span class="id-rule"></span><p>From elegant living rooms to serene bedrooms, inspiring workspaces and beyond, we create cohesive interiors that reflect your lifestyle - with beauty in every detail.</p><a class="np-button" href="services.html">EXPLORE OUR SERVICES <span>&rarr;</span></a></div><div class="id-room-grid">${roomCards}</div></section><section class="id-meaning"><img src="${asset('5.webp')}" alt="Interior styling detail" loading="lazy"><div><span class="np-eyebrow">It's in the details</span><h2>Spaces with<br>Meaning.</h2><p>From statement lighting and bespoke furniture to curated accessories, artwork and finishes, we bring together every element to create interiors that feel complete.</p><a class="np-button" href="contact.html">VIEW OUR DESIGN ELEMENTS <span>&rarr;</span></a><ul><li>Lighting</li><li>Furniture</li><li>Textiles &amp; Rugs</li><li>Wall Finishes</li><li>Artwork &amp; Decor</li><li>Plants &amp; Styling</li></ul></div></section><section class="id-process"><span class="np-eyebrow">Our Design Process</span><div class="id-process-grid">${stepMarkup}</div></section><section class="id-proof"><div class="id-quote"><span>“</span><p>A truly professional and creative team. They understood our lifestyle and transformed our house into a home we love.</p><strong>R. SHARMA, LONDON</strong></div><img src="${asset('6.webp')}" alt="Interior design detail" loading="lazy"><div class="id-script">Good<br>Design<br>Brings<br>Good Days</div></section></main><section class="id-cta" style="--id-image:url('${asset('Last Image.webp')}')"><div><h2>Let’s Create a Home Around Your Life.</h2><p>Book a free design consultation and take the first step towards a more beautiful everyday.</p><a class="np-button" href="contact.html">BOOK A FREE CONSULTATION <span>&rarr;</span></a></div><aside>INTERIORS<br>PEOPLE LOVE<br>LIVES WELL LIVED</aside></section>${siteFooter()}`;
  }

  function renderWalkInCloset() {
    const asset = name => resolveAsset(`assets/services/Wardrobes and walk-in Closet/${name}`);
    const cards = [
      ['Hanging Space.webp', 'Hanging Space', 'Single and double hanging options to keep your wardrobe organised and accessible.'],
      ['Shoe & Accessary storage.webp', 'Shoe & Accessory Storage', 'Dedicated shelving and pull-out storage for shoes, bags and accessories.'],
      ['Drawers & Organisers.webp', 'Drawers & Organisers', 'Custom drawer configurations for clothes, jewellery and everyday essentials.'],
      ['Dressing Area.webp', 'Dressing Areas', 'Integrated dressing tables, mirrors and seating to complete your space.']
    ].map(([image, title, copy]) => `<article class="wd-card"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, storage requirements and preferred style.', 'Our designers develop a bespoke concept around your needs and dimensions.', 'Your design can be developed into detailed visuals so you can see how your finished space will look.', 'Your furniture is produced to the agreed design, dimensions, materials and finishes.', 'Our fitting team installs your walk-in closet with care and brings the final design together.'][index]}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="wd-hero" style="--wd-image:url('${asset('Background Image.webp')}')"><div class="wd-hero__content"><span class="np-kicker">Walk-in Closets</span><h1>Your Own Space<br>to Dress, Organise<br>&amp; Unwind.</h1><p>Bespoke walk-in closets designed around your lifestyle. Combining beautiful storage, considered lighting and timeless design to create a space that feels uniquely yours.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Walk-in closets &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="wd-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke walk-in closet" loading="lazy"><div><span class="np-eyebrow">Designed around you</span><h2>A Walk-in Closet<br>That Works for You.</h2><p>A walk-in closet should be more than just storage - it should be a space that makes everyday life easier and more enjoyable.</p><p>At AstraKAT Designs, we create bespoke walk-in closets tailored to your space, style and storage needs. Every detail is considered, from the layout and lighting to the internal storage, finishes and the way the space flows.</p><p>Whether you have a dedicated dressing room or an adjoining space, we design walk-in closets that are both practical and beautiful, giving you a calm, organised space to start and end your day.</p></div></section><section class="wd-options"><span class="np-eyebrow">Tailored to your lifestyle</span><h2>Walk-in Closets Designed for the Way You Live.</h2><div class="wd-card-grid">${cards}</div></section><section class="wd-detail"><div><span class="np-eyebrow">A space that feels like you</span><h2>Beautifully Considered<br>in Every Detail.</h2><p>From layout and lighting to finishes and accessories, every element of your walk-in closet can be tailored to your needs.</p><p>Choose from a range of colours, textures and finishes to create a space that complements your home. Add integrated LED lighting, mirrors, glass displays and bespoke storage solutions to make your walk-in closet both functional and beautiful.</p><p>Our designers will work with you to create a space that feels coherent, considered and uniquely yours.</p></div><img src="${asset('Second last image.webp')}" alt="Walk-in closet detail" loading="lazy"></section><section class="wd-dark"><img src="${asset('Bottom Image.webp')}" alt="Walk-in closet interior" loading="lazy"><div><span class="np-eyebrow">Make it yours</span><h2>From Contemporary<br>to Classic.</h2><p>Whether you prefer a sleek, modern look or a more classic and detailed design, we can create a walk-in closet that reflects your style.</p><p>Your designer will guide you through finish options, door styles, lighting and accessories to bring your vision to life.</p><a class="wd-outline" href="projects.html">EXPLORE OUR PORTFOLIO <span>&rarr;</span></a></div></section><section class="wd-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Fit.</h2><div class="wd-process-grid">${stepMarkup}</div></section></main><section class="wd-cta" style="--wd-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Walk-in Closet?</h2><p>Let's design a space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderKitchen() {
    const asset = name => resolveAsset(`assets/services/Kitchen/${name}`);
    const styles = [
      ['Handleless Kitchens.webp', 'Handleless Kitchens', 'Clean lines and a contemporary look, with options including integrated handles and top profiles.'],
      ['Profile Kitchens.webp', 'Profile Kitchens', 'A sleek, modern finish with aluminium profile handles in a range of styles and finishes.'],
      ['Shaker style Kitchens.webp', 'Shaker Kitchens', 'Timeless shaker designs for a classic and elegant look that suits both traditional and modern homes.'],
      ['Painted door Kitchens.webp', 'Painted Door Kitchens', 'Beautiful painted doors in a wide range of colours, offering a sophisticated and personalised finish.']
    ].map(([image, title, copy]) => `<article class="kt-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, requirements, style and how you use your kitchen.', 'Our designers develop a bespoke kitchen concept including layout, materials, finishes and carefully considered details.', 'Your design can be developed into detailed visuals so you can see how your new kitchen will look.', 'Your kitchen is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your kitchen with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Made to Measure', 'Designed to fit your space perfectly, with no wasted areas.'], ['Smarter Storage', 'Practical solutions tailored to your cooking, dining and lifestyle needs.'], ['A Style for Every Home', 'From modern handleless and profile kitchens to classic Shaker and painted doors.'], ['Quality & Craftsmanship', 'High-quality materials and a precise, professional finish.'], ['A Complete Service', 'Design, manufacturing and installation, all managed for you.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="kt-hero" style="--kt-image:url('${asset('Background Image.webp')}')"><div class="kt-hero__content"><span class="np-kicker">Bespoke Kitchens</span><h1>Beautiful Kitchens.<br>Designed for<br>Modern Living.</h1><p>Bespoke kitchens designed around your space, your style and the way you live. From contemporary handleless designs to classic painted kitchens, we create beautiful, functional spaces tailored to your home.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Bespoke kitchens &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="kt-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke kitchen" loading="lazy"><div><span class="np-eyebrow">Kitchens designed around you</span><h2>A Kitchen That Works<br>Beautifully for You.</h2><p>A well-designed kitchen is the heart of the home. At AstraKAT Designs, we create bespoke kitchens that balance everyday function with considered design.</p><p>Every kitchen is tailored to your space, style and requirements - whether you prefer a sleek, contemporary look or a more classic, timeless feel. We carefully consider the layout, storage, finishes and appliances to create a kitchen that looks beautiful and works perfectly for the way you live.</p><p>From open-plan kitchens and kitchen-diners to compact spaces, we bring together thoughtful design, quality materials and expert installation to create a space you’ll love for years to come.</p></div></section><section class="kt-styles"><span class="np-eyebrow">Find your style</span><h2>Kitchens Designed Your Way.</h2><div class="kt-style-grid">${styles}</div></section><section class="kt-materials"><div><span class="np-eyebrow">Quality in every detail</span><h2>Premium Materials.<br>Exceptional Craftsmanship.</h2><p>We use high-quality materials and accessories to ensure your kitchen is not only beautiful but also built to last.</p><p>Choose from a wide range of finishes, worktops, handles, storage solutions and appliances. Every element is carefully selected to complement your design and suit your lifestyle.</p><p>Our kitchens are manufactured to precise measurements and installed with care, ensuring a seamless finish and a space that feels considered in every detail.</p></div><img src="${asset('Third last image.webp')}" alt="Kitchen drawer storage" loading="lazy"></section><section class="kt-life"><img src="${asset('Last Image.webp')}" alt="Completed bespoke kitchen" loading="lazy"><div><span class="np-eyebrow">A kitchen for real life</span><h2>Functional. Beautiful.<br>A Joy to Live In.</h2><p>Whether you love to cook, entertain or simply need a practical family kitchen, we design spaces that make everyday life easier and more enjoyable.</p><p>From intelligent storage and clever layouts to beautiful finishes and integrated appliances, our bespoke kitchens are designed to work for you - now and for years to come.</p><a class="kt-outline" href="projects.html">VIEW OUR KITCHEN PROJECTS <span>&rarr;</span></a></div></section><section class="kt-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Kitchen.</h2><div class="kt-process-grid">${stepMarkup}</div></section><section class="kt-benefits"><span class="np-eyebrow">Why choose a bespoke kitchen?</span><h2>Designed Around the Way You Live.</h2><div class="kt-benefit-grid">${benefits}</div></section></main><section class="kt-cta" style="--kt-image:url('${asset('Last Image(1).webp')}')"><div><h2>Ready to Design Your Dream Kitchen?</h2><p>Let's create a kitchen that fits your home - and your life - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderMediaWall() {
    const asset = name => resolveAsset(`assets/services/Media Wall/${name}`);
    const styles = [
      ['Contemporary Media Wall.webp', 'Contemporary Media Walls', 'Clean lines and modern finishes for a sleek, sophisticated look.'],
      ['Media Wall with Storage.webp', 'Media Walls with Storage', 'Beautiful living spaces with integrated cabinets, shelves and closed storage.'],
      ['Media wall with Shelving.webp', 'Media Walls with Shelving', 'Display your favourite pieces with open shelving, lighting and bespoke details.'],
      ['Media Wall with Fireplace.webp', 'Media Walls with Fireplace', 'Create a stunning focal point with an integrated electric fireplace.']
    ].map(([image, title, copy]) => `<article class="mw-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, requirements and preferred style.', 'Our designers develop a bespoke media wall concept around your space and lifestyle.', 'Your design can be developed into detailed visuals so you can see how your new media wall will look.', 'Your media wall is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your media wall with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['A Statement Feature', 'Transforms your living space and becomes the focal point of the room.'], ['Made to Measure', 'Designed around your exact space, with no wasted areas.'], ['Smart Storage', 'Keep your space organised with integrated shelving and cabinets.'], ['Integrated Lighting', 'Create the perfect ambience with recessed and feature lighting options.'], ['A Complete Service', 'From design to installation, we manage the entire process for you.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="mw-hero" style="--mw-image:url('${asset('Background Image.webp')}')"><div class="mw-hero__content"><span class="np-kicker">Media Walls &amp; Living Units</span><h1>Statement Spaces.<br>Designed Around<br>You.</h1><p>Bespoke media walls and living units designed to bring your space together. From sleek, contemporary designs to warm, textured finishes, we create media walls that combine style, storage and technology in perfect harmony.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Media walls &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="mw-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke media wall" loading="lazy"><div><span class="np-eyebrow">Bespoke media walls</span><h2>More Than a TV Unit.<br>A Focal Point for Your Home.</h2><p>A media wall is more than a place for your television - it’s an opportunity to create a statement feature that brings the whole room together.</p><p>At AstraKAT Designs, we design and build bespoke media walls tailored to your space, style and lifestyle. Whether you want a sleek, minimal look, a warm and textured finish, or integrated shelving and storage, every detail is designed around you.</p><p>Our media walls are made to measure, allowing us to maximise your space, hide cables and create a clean, considered finish that feels like a natural part of your home.</p></div></section><section class="mw-styles"><span class="np-eyebrow">Explore our styles</span><h2>Media Walls Designed Your Way.</h2><div class="mw-style-grid">${styles}</div></section><section class="mw-detail"><div><span class="np-eyebrow">Tailored to your space</span><h2>Designed with Detail.<br>Built for Everyday Living.</h2><p>Every media wall is designed around the way you live. We consider your room size, viewing distances, storage needs and style preferences to create a solution that looks beautiful and works perfectly in daily life.</p><p>From cable management and media devices to lighting, shelving and hidden storage, every element is carefully planned to keep your space organised and clutter-free.</p><p>The result is a bespoke media wall that not only enhances your home, but also makes everyday living more enjoyable.</p></div><img src="${asset('Third last image.webp')}" alt="Media wall detail" loading="lazy"></section><section class="mw-life"><img src="${asset('Last Image.webp')}" alt="Completed media wall" loading="lazy"><div><span class="np-eyebrow">A style for every home</span><h2>From Minimal<br>to Striking.</h2><p>Whether you prefer a minimal design with clean lines or a bold feature with textured panels and integrated lighting, we can create a media wall that complements your interior.</p><p>Choose from a range of finishes including wood effects, matte colours, textured panels and stone-look finishes, with options for open shelving, closed storage, feature lighting and electric fireplaces.</p><a class="mw-outline" href="projects.html">VIEW OUR MEDIA WALL PROJECTS <span>&rarr;</span></a></div></section><section class="mw-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Media Wall.</h2><div class="mw-process-grid">${stepMarkup}</div></section><section class="mw-benefits"><span class="np-eyebrow">Why choose a bespoke media wall?</span><h2>Designed for Style. Built for Life.</h2><div class="mw-benefit-grid">${benefits}</div></section></main><section class="mw-cta" style="--mw-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Dream Media Wall?</h2><p>Let’s design a space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderUtilityRoom() {
    const asset = name => resolveAsset(`assets/services/Utility Room/${name}`);
    const options = [
      ['Laundry & Appliance Storage.webp', 'Laundry & Appliance Storage', 'Space for washing machines, tumble dryers and essentials, neatly integrated into your design.'],
      ['Storage & Organisation.webp', 'Storage & Organisation', 'Shelving, tall cabinets and drawers to keep your home clean, tidy and clutter-free.'],
      ['Coats & Everyday Essentials.webp', 'Coats & Everyday Essentials', 'Built-in storage for coats, shoes, bags and more, keeping everything in one place.'],
      ['Multi-Functional Utility Rooms.webp', 'Multi-Functional Utility Rooms', 'Combine laundry, storage and household functionality in a space tailored to your lifestyle.']
    ].map(([image, title, copy]) => `<article class="ur-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, requirements and how you use it.', 'Our designers develop a bespoke utility room concept around your needs and dimensions.', 'Your design can be developed into detailed visuals so you can see how your new utility room will look.', 'Your furniture is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your utility room with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Made to Measure', 'Designed to fit your space perfectly, with no wasted areas.'], ['Smarter Storage', 'Keep your home organised with intelligent storage solutions.'], ['Durable & Functional', 'High-quality materials designed for everyday use.'], ['Designed for Your Home', 'A style and finish that complements the rest of your interior.'], ['A Complete Service', 'From design to installation, we manage the entire process for you.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="ur-hero" style="--ur-image:url('${asset('Background Image.webp')}')"><div class="ur-hero__content"><span class="np-kicker">Utility Room</span><h1>Beautifully Practical Spaces.<br>Designed for Real Life.</h1><p>Bespoke utility rooms designed to keep your home organised, clutter-free and effortlessly functional. We create beautifully fitted utility spaces tailored to your home, your routine and the way you live.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Utility room &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="ur-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke utility room" loading="lazy"><div><span class="np-eyebrow">Made for your home</span><h2>A Utility Room<br>That Works for You.</h2><p>A well-designed utility room makes everyday life easier. At AstraKAT Designs, we create bespoke utility rooms that combine smart storage, durable finishes and a clean, contemporary look.</p><p>Whether you need space for laundry, cleaning essentials, coats, shoes or household appliances, we design every detail around your requirements and the available space.</p><p>From compact utility areas to larger multipurpose rooms, we bring together practical storage and considered design to create a space that works hard - and looks beautiful too.</p></div></section><section class="ur-styles"><span class="np-eyebrow">Explore the possibilities</span><h2>Utility Rooms Designed Your Way.</h2><div class="ur-style-grid">${options}</div></section><section class="ur-detail"><div><span class="np-eyebrow">Thoughtful details</span><h2>Designed for Everyday<br>Functionality.</h2><p>Every utility room is designed around the way you live. We consider your storage needs, appliance requirements and daily routine to create a space that is both practical and visually appealing.</p><p>Choose from a range of finishes, worktops, handles and storage solutions, with options for tall larders, pull-out shelves, integrated bins, hanging rails and more.</p><p>Our designers will help you make the most of your space so your utility room feels organised, efficient and seamlessly connected to your home.</p></div><img src="${asset('Third last image.webp')}" alt="Utility room storage detail" loading="lazy"></section><section class="ur-life"><img src="${asset('Last Image.webp')}" alt="Completed utility room" loading="lazy"><div><span class="np-eyebrow">A calmer, more organised home</span><h2>A Space That<br>Makes Life Easier.</h2><p>A well-planned utility room helps keep your home running smoothly by giving everything a place.</p><p>From laundry and cleaning essentials to coats and household storage, we create spaces that are functional, durable and designed to complement the rest of your home.</p><a class="ur-outline" href="projects.html">VIEW OUR UTILITY ROOM PROJECTS <span>&rarr;</span></a></div></section><section class="ur-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Utility Room.</h2><div class="ur-process-grid">${stepMarkup}</div></section><section class="ur-benefits"><span class="np-eyebrow">Why choose a bespoke utility room?</span><h2>Practical Spaces. Beautifully Designed.</h2><div class="ur-benefit-grid">${benefits}</div></section></main><section class="ur-cta" style="--ur-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Design Your Utility Room?</h2><p>Let's create a practical space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderUnderstairsStorage() {
    const asset = name => resolveAsset(`assets/services/Understairs Storage Unit/${name}`);
    const options = [
      ['1.webp', 'Coat & Shoe Storage', 'Keep everyday essentials neatly organised and easily accessible.'],
      ['2.webp', 'Cleaning & Household Storage', 'Practical storage for vacuum cleaners, cleaning products and household items.'],
      ['3.webp', 'Drawers & Pull-Out Storage', 'Bespoke drawers and pull-out shelves to make the most of every inch.'],
      ['4.webp', 'Bespoke & Multi-Functional', 'From display shelving to hidden storage, we create solutions tailored to your home.']
    ].map(([image, title, copy]) => `<article class="us-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, requirements and preferred style.', 'Our designers develop a bespoke concept tailored to your space and needs.', 'Your design can be developed into detailed visuals so you can see how it will look.', 'Your furniture is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your storage with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Made to Measure', 'Designed to fit your space perfectly, with no wasted areas.'], ['Maximised Space', 'Turn an unused area into valuable, functional storage.'], ['Quality Craftsmanship', 'Built to last with high-quality materials and finishes.'], ['Designed for Your Home', 'A style and finish that complements your interior.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="us-hero" style="--us-image:url('${asset('Background Image.webp')}')"><div class="us-hero__content"><span class="np-kicker">Understairs Storage</span><h1>Make Every<br>Inch Count.</h1><p>Bespoke understairs storage designed to turn unused space into something extraordinary. Smart, stylish and tailored to your home.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Understairs storage &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="us-intro"><img src="${asset('Second Image.webp')}" alt="Understairs storage" loading="lazy"><div><span class="np-eyebrow">A smarter use of space</span><h2>Stylish Storage<br>for Modern Living.</h2><p>The space under your stairs offers huge potential. At AstraKAT Designs, we create bespoke understairs storage that transforms this often-overlooked area into a practical and beautiful feature of your home.</p><p>Whether you need space for coats and shoes, household essentials, cleaning equipment or a fully customised solution, we design every detail around your lifestyle and the layout of your home.</p><p>From clean, minimalist designs to statement storage with integrated lighting, our understairs solutions are made to measure and finished to the highest standard.</p></div></section><section class="us-styles"><span class="np-eyebrow">Explore the possibilities</span><h2>Understairs Storage Designed Your Way.</h2><div class="us-style-grid">${options}</div></section><section class="us-detail"><div><span class="np-eyebrow">Tailored to your home</span><h2>Practical. Beautiful.<br>Completely Bespoke.</h2><p>No two homes are the same, and neither are our designs. We carefully consider your space, storage needs and interior style to create an understairs solution that looks seamless and works perfectly for your everyday life.</p><p>Choose from a range of finishes, internal configurations, handle styles and lighting options to complement the rest of your home.</p><p>The result is a clever, clutter-free space that feels like a natural part of your interior.</p></div><img src="${asset('Third last image.webp')}" alt="Understairs storage detail" loading="lazy"></section><section class="us-life"><img src="${asset('Last Image.webp')}" alt="Completed understairs storage" loading="lazy"><div><span class="np-eyebrow">Add style to everyday spaces</span><h2>Designed to Fit.<br>Built to Last.</h2><p>Our understairs storage is crafted using high-quality materials and expert workmanship, ensuring a durable and long-lasting finish.</p><p>Whether you prefer a contemporary handleless look or a more classic style with panelled doors, we’ll help you create a design that enhances your home and makes the most of your space.</p><a class="us-outline" href="projects.html">VIEW OUR PROJECTS <span>&rarr;</span></a></div></section><section class="us-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Fit.</h2><div class="us-process-grid">${stepMarkup}</div></section><section class="us-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>Smarter Storage. A More Beautiful Home.</h2><div class="us-benefit-grid">${benefits}</div></section></main><section class="us-cta" style="--us-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Transform Your Space?</h2><p>Let's create an understairs storage solution that works for your home - and your lifestyle.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderSlidingDoorWardrobe() {
    const asset = name => resolveAsset(`assets/services/Sliding door wardrobe/${name}`);
    const options = [
      ['1.webp', 'Mirrored Sliding Doors', 'Enhance light and create a sense of space with elegant mirror finishes.'],
      ['2.webp', 'Matte & Gloss Finishes', 'A sleek, modern look in a range of contemporary colours and textures.'],
      ['3.webp', 'Glass Sliding Doors', 'A sophisticated option that adds depth and a luxurious feel.'],
      ['4.webp', 'Wood-Effect Finishes', 'Bring warmth and texture with a selection of natural wood designs.']
    ].map(([image, title, copy]) => `<article class="sw-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, style and storage requirements.', 'Our designers create a bespoke concept tailored to your needs and dimensions.', 'Your design can be developed into detailed visuals so you can see how it will look.', 'Your wardrobe is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your wardrobe with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Made to Measure', 'Designed to fit your space perfectly, with no wasted areas.'], ['Space Saving', 'A practical solution ideal for modern homes.'], ['Quality & Durability', 'High-quality materials and smooth, reliable sliding systems.'], ['A Style for Every Home', 'A wide range of finishes and designs to suit your interior.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="sw-hero" style="--sw-image:url('${asset('Background Image.webp')}')"><div class="sw-hero__content"><span class="np-kicker">Sliding Door Wardrobes</span><h1>Sleek. Space-Saving.<br>Beautifully Bespoke.</h1><p>Our sliding door wardrobes combine elegant design with practical storage, giving you maximum space without compromising on style.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Sliding door wardrobes &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="sw-intro"><img src="${asset('Second Image.webp')}" alt="Sliding door wardrobe" loading="lazy"><div><span class="np-eyebrow">Designed around you</span><h2>A Smarter Solution<br>for Modern Homes.</h2><p>Sliding door wardrobes are ideal for contemporary living, especially where space is at a premium. With doors that glide smoothly, there’s no need for extra room to open them, making them perfect for bedrooms of all sizes.</p><p>At AstraKAT Designs, every sliding wardrobe is made to measure, ensuring a seamless fit and a design that complements your home. From clean, minimalist styles to bold statement finishes, we create wardrobes that are as practical as they are beautiful.</p></div></section><section class="sw-styles"><span class="np-eyebrow">Explore our styles</span><h2>Sliding Door Wardrobes Designed Your Way.</h2><div class="sw-style-grid">${options}</div></section><section class="sw-detail"><div><span class="np-eyebrow">Beauty inside and out</span><h2>Designed for the<br>Way You Live.</h2><p>Your sliding wardrobe can be tailored inside and out. Choose from custom interior layouts to suit your storage needs - including hanging rails, shelving, drawers, pull-out accessories and more.</p><p>Every element is designed to keep your space organised, clutter-free and effortlessly stylish.</p><p>With soft-close systems and high-quality materials, our sliding door wardrobes are built for everyday use and made to last.</p></div><img src="${asset('Third last image.webp')}" alt="Sliding wardrobe interior" loading="lazy"></section><section class="sw-life"><img src="${asset('Last Image.webp')}" alt="Sliding door wardrobe bedroom" loading="lazy"><div><span class="np-eyebrow">A style for every home</span><h2>From Minimal<br>to Statement.</h2><p>Whether you prefer a clean, understated design or a striking feature with glass, mirrors or textured panels, our sliding door wardrobes can be customised to suit your interior.</p><p>Our designers will help you choose the right combination of finishes, profiles and colours to create a wardrobe that feels perfectly at home in your space.</p><a class="sw-outline" href="projects.html">VIEW OUR SLIDING DOOR PROJECTS <span>&rarr;</span></a></div></section><section class="sw-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Fit.</h2><div class="sw-process-grid">${stepMarkup}</div></section><section class="sw-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>More Than Storage. A Better Everyday.</h2><div class="sw-benefit-grid">${benefits}</div></section></main><section class="sw-cta" style="--sw-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Perfect Sliding Wardrobe?</h2><p>Let's design a space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderStudyTable() {
    const asset = name => resolveAsset(`assets/services/Study table/${name}`);
    const options = [
      ['1.webp', 'Compact Study Tables', 'Perfect for smaller spaces without compromising on style or storage.'],
      ['2.webp', 'Study Tables with Storage', 'Drawers, shelves and cabinets to keep your workspace tidy and organised.'],
      ['3.webp', 'Dual Study Stations', 'Ideal for siblings, shared spaces or anyone who needs extra workspace.'],
      ['4.webp', 'Floating Study Tables', 'A clean, modern look with a space-saving design.']
    ].map(([image, title, copy]) => `<article class="st-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, requirements and preferred style.', 'Our designers create a bespoke concept tailored to your needs and dimensions.', 'Your design can be developed into detailed visuals so you can see how it will look.', 'Your furniture is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your study table with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Made to Measure', 'Designed to fit your space perfectly, with no wasted areas.'], ['Smart Storage', 'Keep your workspace organised and clutter-free.'], ['Quality & Durability', 'High-quality materials and expert craftsmanship built to last.'], ['Designed for Your Home', 'A style and finish that complements your interior.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="st-hero" style="--st-image:url('${asset('Background Image.webp')}')"><div class="st-hero__content"><span class="np-kicker">Study Tables &amp; Home Offices</span><h1>Focus Spaces.<br>Brighter Ideas.</h1><p>Bespoke study tables designed to create a calm, organised and inspiring space for work, study or creativity. We create tailored solutions that combine functionality with beautiful design.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Study tables &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="st-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke study table" loading="lazy"><div><span class="np-eyebrow">Made for productive living</span><h2>A Study Space<br>That Works for You.</h2><p>Whether you need a compact study table, a full home office setup or a stylish homework station, we design and build bespoke solutions that combine functionality with beautiful design.</p><p>At AstraKAT Designs, we consider your space, storage requirements, lighting and style preferences to create a study area that helps you stay organised and focused.</p><p>From minimalist floating desks to fully fitted study units with shelving and cabinets, our designs are tailored to suit modern living and made to last.</p></div></section><section class="st-styles"><span class="np-eyebrow">Explore the options</span><h2>Study Tables Designed Your Way.</h2><div class="st-style-grid">${options}</div></section><section class="st-detail"><div><span class="np-eyebrow">Designed around you</span><h2>Style. Storage.<br>Productivity.</h2><p>Our study tables are fully customisable, with a range of finishes, handles, shelving options and integrated lighting to match your home and needs.</p><p>We design each space to be practical, comfortable and visually appealing - helping you create an environment where you can focus and be productive.</p><p>Whether it’s for work, study or creative projects, we’ll help you design a space that feels just right.</p></div><img src="${asset('Third last image.webp')}" alt="Study table storage" loading="lazy"></section><section class="st-life"><img src="${asset('Last Image.webp')}" alt="Completed study table" loading="lazy"><div><span class="np-eyebrow">Tailored to every home</span><h2>Work, Study,<br>Create, Achieve.</h2><p>A well-designed study space can make a big difference. Our bespoke study tables are crafted to fit your space perfectly, with thoughtful storage and a design that complements your home.</p><p>Let us help you create a study area that inspires focus and feels like a natural part of your home.</p><a class="st-outline" href="projects.html">VIEW OUR STUDY TABLE PROJECTS <span>&rarr;</span></a></div></section><section class="st-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Study Space.</h2><div class="st-process-grid">${stepMarkup}</div></section><section class="st-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>Beautiful Spaces for Brighter Futures.</h2><div class="st-benefit-grid">${benefits}</div></section></main><section class="st-cta" style="--st-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Ideal Study Space?</h2><p>Let's design a space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderFittedWardrobes() {
    const asset = name => resolveAsset(`assets/services/Fitted Wardrobes/${name}`);
    const options = [
      ['1.webp', 'Modern Matte Finish', 'A clean, contemporary look that suits any bedroom.'],
      ['2.webp', 'Mirrored Doors', 'Add light, space and a touch of luxury to your home.'],
      ['3.webp', 'Shaker Style', 'A timeless design that blends classic and modern.'],
      ['4.webp', 'Wood-Effect Finish', 'Bring warmth and natural texture to your space.']
    ].map(([image, title, copy]) => `<article class="fw-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We visit your home to understand your space, style and storage requirements.', 'Our designers create a bespoke concept tailored to your needs and dimensions.', 'Your design can be developed into detailed visuals so you can see how it will look.', 'Your wardrobe is manufactured to the agreed design, dimensions and finishes.', 'Our expert fitting team installs your wardrobe with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Bespoke Design', 'Tailored to your space, style and needs.'], ['Quality & Durability', 'High-quality materials built to last.'], ['Maximises Space', 'Smart storage for every home.'], ['Designed for Your Home', 'A style and finish that complements your interior.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="fw-hero" style="--fw-image:url('${asset('Background Image.webp')}')"><div class="fw-hero__content"><span class="np-kicker">Fitted Wardrobes</span><h1>Bespoke Wardrobes<br>for a More Organised<br>Life.</h1><p>Designed around your space, your style and your lifestyle. Our fitted wardrobes combine smart storage with beautiful finishes to create a seamless look that feels like a natural part of your home.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Fitted wardrobes &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="fw-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke fitted wardrobes" loading="lazy"><div><span class="np-eyebrow">Tailored to your home</span><h2>Made to Measure.<br>Made for You.</h2><p>At AstraKAT Designs, we create fitted wardrobes that maximise your space and enhance your home. Every design is tailor-made, from internal storage to door styles and finishes, ensuring the perfect balance of functionality and style.</p><p>Whether you prefer sleek modern designs, timeless shaker finishes or luxurious mirrored doors, we bring your vision to life with precision and care.</p><p>Our fitted wardrobes are designed to fit beautifully, make the most of every inch and keep your space organised for everyday living.</p></div></section><section class="fw-styles"><span class="np-eyebrow">Explore our styles</span><h2>Fitted Wardrobes Designed Your Way.</h2><div class="fw-style-grid">${options}</div></section><section class="fw-detail"><div><span class="np-eyebrow">Smart storage solutions</span><h2>Beautiful Inside<br>and Out.</h2><p>Our fitted wardrobes are designed with intelligent storage solutions to keep your home clutter-free. Choose from hanging rails, shelves, drawers, pull-out accessories, shoe storage and more - all tailored to your needs.</p><p>With a range of finishes, handles and internal layouts, we create wardrobes that are as practical as they are beautiful.</p></div><img src="${asset('Third last image.webp')}" alt="Fitted wardrobe interior" loading="lazy"></section><section class="fw-life"><img src="${asset('Last Image.webp')}" alt="Fitted wardrobe bedroom" loading="lazy"><div><span class="np-eyebrow">A more organised home</span><h2>Designed for<br>Everyday Living.</h2><p>From compact bedrooms to spacious master suites, our fitted wardrobes are designed to suit your space and lifestyle.</p><p>With high-quality materials, expert craftsmanship and attention to detail, we create storage that works for you - and looks stunning too.</p><a class="fw-outline" href="projects.html">VIEW OUR WARDROBE PROJECTS <span>&rarr;</span></a></div></section><section class="fw-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Wardrobe.</h2><div class="fw-process-grid">${stepMarkup}</div></section><section class="fw-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>Storage. Style. A Better You.</h2><div class="fw-benefit-grid">${benefits}</div></section></main><section class="fw-cta" style="--fw-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Dream Wardrobe?</h2><p>Let's design a space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderDressingTable() {
    const asset = name => resolveAsset(`assets/services/Dressing table/${name}`);
    const options = [
      ['1.webp', 'Minimal & Modern', 'Clean lines and sleek finishes for a contemporary look.'],
      ['2.webp', 'With Integrated Lighting', 'LED mirrors and subtle lighting to create the perfect ambience.'],
      ['3.webp', 'With Storage', 'Drawers, shelves and hidden compartments to keep your essentials organised.'],
      ['4.webp', 'Part of a Bedroom Set', 'Seamlessly designed with wardrobes and other furniture for a cohesive look.']
    ].map(([image, title, copy]) => `<article class="dt-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We discuss your space, requirements and preferred style.', 'Our designers create a bespoke concept tailored to your needs.', 'Detailed visuals show you exactly how your dressing table will look.', 'Your furniture is manufactured to the highest standard.', 'Our expert team installs your furniture with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Bespoke Design', 'Tailored to your space, style and needs.'], ['Quality Craftsmanship', 'High-quality materials built to last.'], ['Designed for Your Home', 'A style and finish that complements your interior.'], ['Practical & Beautiful', 'Smart storage with elegant design.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="dt-hero" style="--dt-image:url('${asset('Background Image.webp')}')"><div class="dt-hero__content"><span class="np-kicker">Dressing Tables</span><h1>Your Space.<br>Your Style.<br>Everyday Luxury.</h1><p>Bespoke dressing tables designed to bring beauty, functionality and a touch of luxury to your home. Tailored to your space, storage needs and personal style.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Dressing tables &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="dt-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke dressing table" loading="lazy"><div><span class="np-eyebrow">Designed for you</span><h2>A Dressing Table<br>That Completes Your Space.</h2><p>Whether you want a compact vanity for your bedroom or a statement dressing table with integrated storage and lighting, we design solutions that are both practical and beautiful.</p><p>At AstraKAT Designs, every dressing table is made to measure, with a choice of finishes, mirror styles and storage configurations to suit your home.</p><p>From sleek, modern designs to timeless classics, we create bespoke dressing tables that make your daily routine feel special.</p></div></section><section class="dt-styles"><span class="np-eyebrow">Explore the options</span><h2>Dressing Tables Designed Your Way.</h2><div class="dt-style-grid">${options}</div></section><section class="dt-detail"><div><span class="np-eyebrow">Thoughtful details</span><h2>Designed for<br>Your Everyday Routine.</h2><p>From jewellery trays and soft-close drawers to integrated mirrors and lighting, our dressing tables are designed around the way you live.</p><p>We combine smart storage with elegant finishes to create a space that feels calm, organised and unique to you.</p><p>Because it’s not just a dressing table - it’s your space to get ready, feel confident and start the day your way.</p></div><img src="${asset('Second last image.webp')}" alt="Dressing table detail" loading="lazy"></section><section class="dt-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Finish.</h2><div class="dt-process-grid">${stepMarkup}</div></section><section class="dt-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>More Than Furniture. A Better Everyday.</h2><div class="dt-benefit-grid">${benefits}</div></section></main><section class="dt-cta" style="--dt-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Perfect Dressing Space?</h2><p>Let’s design a dressing table that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderBedAndHeadboard() {
    const asset = name => resolveAsset(`assets/services/Bed and Headboard/${name}`);
    const options = [
      ['1.webp', 'Panelled Headboards', 'Timeless designs that add texture and elegance to your space.'],
      ['2.webp', 'Upholstered Bed Frames', 'Stylish and sturdy bed frames tailored to your size and fabric choice.'],
      ['3.webp', 'Buttoned & Tufted Designs', 'Add a touch of classic luxury with detailed upholstery.'],
      ['4.webp', 'Storage Beds', 'Practical solutions with hidden storage to keep your bedroom clutter-free.']
    ].map(([image, title, copy]) => `<article class="bh-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We discuss your space, requirements and preferred style.', 'Our designers create a bespoke concept tailored to your needs.', 'Detailed visuals show you exactly how your bed or headboard will look.', 'Your furniture is manufactured to the highest standard.', 'Our expert team installs your furniture with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Bespoke Design', 'Tailored to your space, style and needs.'], ['Quality & Durability', 'High-quality materials built to last.'], ['Designed for Your Home', 'A style and finish that complements your interior.'], ['Comfort & Functionality', 'Stylish designs with practical storage options.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="bh-hero" style="--bh-image:url('${asset('Background Image.webp')}')"><div class="bh-hero__content"><span class="np-kicker">Beds &amp; Headboards</span><h1>Sleep Beautifully.<br>Live Better.</h1><p>Bespoke beds and headboards designed to bring comfort, style and luxury to your bedroom. Tailored to your space, lifestyle and taste, with quality craftsmanship built to last.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Beds &amp; headboards &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="bh-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke bed and headboard" loading="lazy"><div><span class="np-eyebrow">Tailored to you</span><h2>Bespoke Beds &amp;<br>Headboards for Every Home.</h2><p>Whether you prefer a bold statement headboard, a minimalist design or a fully upholstered bed frame with storage, we create bespoke solutions that combine comfort with contemporary style.</p><p>At AstraKAT Designs, every bed and headboard is made to measure, with a choice of fabrics, finishes and detailing to complement your bedroom.</p><p>From luxurious floor-to-ceiling headboards to elegant bed frames with integrated storage, we design pieces that make your bedroom a true retreat.</p></div></section><section class="bh-styles"><span class="np-eyebrow">Explore the options</span><h2>Beds &amp; Headboards Designed Your Way.</h2><div class="bh-style-grid">${options}</div></section><section class="bh-detail"><div><span class="np-eyebrow">Style meets function</span><h2>More Than Just a Bed.<br>A Better Bedroom.</h2><p>Our bespoke beds and headboards are designed with both beauty and practicality in mind. Choose from a wide range of fabrics, colours and finishes to create a bed that suits your style and space.</p><p>From statement headboards to space-saving storage beds, we help you design a bedroom that feels comfortable, organised and uniquely yours.</p></div><img src="${asset('Second last image.webp')}" alt="Bedroom detail" loading="lazy"></section><section class="bh-life"><img src="${asset('Last Image.webp')}" alt="Completed bed and headboard" loading="lazy"><div><span class="np-eyebrow">A look that lasts</span><h2>Crafted for Comfort.<br>Designed for You.</h2><p>With high-quality materials, expert craftsmanship and attention to detail, our beds and headboards are made to last.</p><p>Whether you want a modern, classic or contemporary look, we create designs that perfectly complement your home.</p><a class="bh-outline" href="projects.html">VIEW OUR BED &amp; HEADBOARD PROJECTS <span>&rarr;</span></a></div></section><section class="bh-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Bedroom.</h2><div class="bh-process-grid">${stepMarkup}</div></section><section class="bh-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>Beautiful Bedrooms. Happier Homes.</h2><div class="bh-benefit-grid">${benefits}</div></section></main><section class="bh-cta" style="--bh-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Design Your Perfect Bed?</h2><p>Let's create a bedroom that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderBarUnit() {
    const asset = name => resolveAsset(`assets/services/Bar Unit/${name}`);
    const options = [
      ['1.webp', 'Modern & Minimal', 'Clean lines and sleek finishes for a contemporary look.'],
      ['2.webp', 'Glass Display Units', 'Showcase your bottles and glassware with elegant glass doors and lighting.'],
      ['3.webp', 'Open Shelving', 'A stylish and practical option for easy access and display.'],
      ['4.webp', 'Compact Bar Units', 'Perfect for smaller spaces without compromising on style or storage.']
    ].map(([image, title, copy]) => `<article class="bu-style"><img src="${asset(image)}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    const steps = ['Consultation', 'Design', 'Visualise', 'Made for You', 'Installation'];
    const stepMarkup = steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${step}</h3><p>${['We discuss your space, style and storage needs.', 'Our designers create a bespoke concept tailored to your home.', 'Detailed visuals show you exactly how your bar unit will look.', 'Your bar unit is manufactured to the highest standard.', 'Our expert team installs your bar unit with care and attention to detail.'][index]}</p></article>`).join('');
    const benefits = [['Bespoke Design', 'Tailored to your space, style and needs.'], ['Quality & Durability', 'High-quality materials built to last.'], ['Designed for Your Home', 'A style and finish that complements your interior.'], ['Practical & Functional', 'Smart storage for bottles, glassware and more.'], ['A Complete Service', 'From design to installation, we manage the entire process.']].map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${title}</h3><p>${copy}</p></article>`).join('');
    document.body.innerHTML = `
      ${siteHeader('projects')}
      <section class="bu-hero" style="--bu-image:url('${asset('Background Image.webp')}')"><div class="bu-hero__content"><span class="np-kicker">Bespoke Bar Units</span><h1>Raise the<br>Everyday.</h1><p>Beautifully designed bar units that bring style, functionality and a touch of luxury to your home. Tailored to your space, lifestyle and entertaining needs.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a><small>Bar units &nbsp;·&nbsp; Made to measure &nbsp;·&nbsp; London &amp; across England</small></div></section>
      <main><section class="bu-intro"><img src="${asset('Second Image.webp')}" alt="Bespoke bar unit" loading="lazy"><div><span class="np-eyebrow">Tailored to your home</span><h2>Bespoke Bar Units<br>for Modern Living.</h2><p>Whether you love entertaining guests or simply enjoy a quiet drink at home, a bespoke bar unit adds sophistication and convenience to your space.</p><p>At AstraKAT Designs, we create bar units that are tailored to your style, space and storage needs. From sleek minimalist designs to bold statement pieces, we combine practical storage with beautiful finishes.</p><p>Every bar unit is made to measure, ensuring a seamless fit and a design that complements your home.</p></div></section><section class="bu-styles"><span class="np-eyebrow">Explore the styles</span><h2>Bar Units Designed Your Way.</h2><div class="bu-style-grid">${options}</div></section><section class="bu-detail"><div><span class="np-eyebrow">More than just storage</span><h2>A Space to Unwind.<br>A Space to Impress.</h2><p>Our bespoke bar units are designed to bring people together, creating a stylish focal point for your dining area, living room or entertainment space.</p><p>Choose from a range of finishes, worktops, lighting options and storage features - including wine racks, glass holders, drawers and integrated fridges.</p><p>Let us help you create a bar unit that’s as functional as it is beautiful.</p></div><img src="${asset('Second last image.webp')}" alt="Bar unit detail" loading="lazy"></section><section class="bu-process"><span class="np-eyebrow">Our process</span><h2>From Your Ideas to the Perfect Bar Unit.</h2><div class="bu-process-grid">${stepMarkup}</div></section><section class="bu-benefits"><span class="np-eyebrow">Why choose AstraKAT Designs?</span><h2>Stylish Spaces for Better Living.</h2><div class="bu-benefit-grid">${benefits}</div></section></main><section class="bu-cta" style="--bu-image:url('${asset('Last Image.webp')}')"><div><h2>Ready to Create Your Perfect Bar Unit?</h2><p>Let's design a space that fits your home - and your lifestyle - beautifully.</p><a class="np-button" href="contact.html">BOOK A FREE DESIGN CONSULTATION <span>&rarr;</span></a></div></section>${siteFooter()}`;
  }

  function renderCareers() {
    const bgHero = resolveAsset('assets/careers/career-background.webp');
    const imgDetail = resolveAsset('assets/careers/career-detail.webp');
    const bgCta = resolveAsset('assets/careers/career-cta.webp');

    document.body.innerHTML = `
      ${siteHeader('careers')}
      <section class="cr-hero" style="--cr-hero-image:url('${bgHero}')">
        <div class="cr-hero__content">
          <span class="np-kicker">CAREERS AT ASTRAKAT</span>
          <h1>Build a Career<br>in Beautiful Spaces</h1>
          <p>Join a passionate team that designs, creates and installs bespoke interiors, helping people transform their homes.</p>
          <a class="np-button" href="#opportunities">EXPLORE OPPORTUNITIES <span>&rarr;</span></a>
        </div>
      </section>

      <section class="cr-perks-strip">
        <div class="cr-perks-container">
          <div class="cr-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>A SUPPORTIVE<br>TEAM CULTURE</span>
          </div>
          <div class="cr-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 18h6"/>
              <path d="M10 22h4"/>
              <path d="M12 2v1"/>
              <path d="M12 7a5 5 0 0 0-3.54 8.54c.46.46.74 1.09.74 1.74v.72h5.6v-.72c0-.65.28-1.28.74-1.74A5 5 0 0 0 12 7z"/>
              <path d="M4.93 4.93l.7.7"/>
              <path d="M18.36 5.64l.71-.71"/>
            </svg>
            <span>OPPORTUNITIES<br>TO GROW</span>
          </div>
          <div class="cr-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
              <path d="M2 9h20"/>
              <path d="M10 3l2 6 2-6"/>
            </svg>
            <span>WORK ON UNIQUE<br>PROJECTS</span>
          </div>
          <div class="cr-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span>MAKE A REAL<br>DIFFERENCE</span>
          </div>
        </div>
      </section>

      <main id="main">
        <section class="cr-workplace">
          <div class="cr-workplace__copy">
            <span class="np-eyebrow">OUR PEOPLE, OUR STRENGTH</span>
            <h2>More Than a Workplace</h2>
            <p>At AstraKAT Designs, we're a close-knit team with a shared passion for design, quality and great customer experiences. We value creativity, reliability and a positive attitude, and we believe in supporting each other to grow.</p>
            <p>Whether you're on site, in the design studio or behind the scenes, you'll be part of a team that takes pride in turning ideas into beautifully crafted spaces.</p>
            <a class="cr-outline-btn" href="about.html">OUR CULTURE <span>&rarr;</span></a>
          </div>
          <div class="cr-workplace__media">
            <img src="${imgDetail}" alt="AstraKAT Designs culture and studio details" loading="lazy">
          </div>
        </section>

        <section class="cr-opportunities" id="opportunities">
          <div class="cr-opportunities__inner">
            <span class="np-eyebrow">JOIN OUR TEAM</span>
            <h2>Current Opportunity</h2>
            <div class="cr-jobs-grid">
              <article class="cr-job-card">
                <h3>Business Development Manager</h3>
                <div class="cr-job-meta">
                  <span class="cr-job-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v.01"/></svg>
                    Full-time
                  </span>
                  <span class="cr-job-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/></svg>
                    London (On-site)
                  </span>
                </div>
                <p>Help us grow by building relationships, generating new business and supporting our expanding projects.</p>
                <a class="cr-outline-btn" href="mailto:careers@astrakatdesigns.com?subject=Application%20for%20Business%20Development%20Manager%20-%20AstraKAT%20Designs">APPLY NOW <span>&rarr;</span></a>
              </article>
            </div>
          </div>
        </section>

        <section class="cr-why">
          <div class="cr-why__inner">
            <div class="cr-why__lead">
              <span class="np-eyebrow" style="color:#d4a66f;">WHY JOIN ASTRAKAT</span>
              <h2>A Place to Grow</h2>
              <p>We offer a friendly and collaborative environment where your ideas are valued, your skills are nurtured and your work makes a real impact in people's homes across the UK.</p>
            </div>
            <div class="cr-why__benefits">
              <article class="cr-benefit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
                <span>Competitive<br>Salary</span>
              </article>
              <article class="cr-benefit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/><path d="m14 9 5-1-1 5"/></svg>
                <span>Training &amp;<br>Development</span>
              </article>
              <article class="cr-benefit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Flexible<br>Working</span>
              </article>
              <article class="cr-benefit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>Supportive<br>Team</span>
              </article>
              <article class="cr-benefit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>Be Part of a<br>Growing Brand</span>
              </article>
            </div>
          </div>
        </section>
      </main>

      <section class="cr-cta" style="--cr-cta-image:url('${bgCta}')">
        <div class="cr-cta__inner">
          <span class="np-kicker">READY FOR A NEW CHAPTER?</span>
          <h2>Let's Create Amazing Spaces Together</h2>
          <a class="np-button" href="mailto:careers@astrakatdesigns.com?subject=Job%20Application%20-%20AstraKAT%20Designs">APPLY NOW <span>&rarr;</span></a>
        </div>
      </section>

      ${siteFooter()}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
