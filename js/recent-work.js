(() => {
  const categories = {
    'Fitted Wardrobes': {
      folder: 'fitted-wardrobes',
      title: 'Fitted Wardrobe',
      subtitle: 'Bespoke fitted wardrobe tailored for modern living',
      ids: ['DYegGHhjrNX','DdeyPwTjXe8','DbaR_PhtnEN','DYUXr78jXIY','DXXlGOGCKlT','DW1Udp0jAPt','DSFB3CogY7Q','Dc3IY_7jWju','DWmSaiXjMnP','DWi0YCNDAsK','DWqAnOdiMWh','DWMLFWUDFxo','DVV8JmgCDa9','DVV82AsCM5v','DUvCkN9Dnsi','Dc3JXMDjSmS']
    },
    'Kitchens': {
      folder: 'kitchens',
      title: 'Bespoke Kitchen',
      subtitle: 'Custom kitchen design and architectural joinery',
      ids: ['DVgvN_RDMzc','DYxAkzyCJSv','DaaNaVxNXXA','DVgwvz1DsLM','DSVK4gnjPJt','DSTKapIDHaZ','DSSNbqJDJIl']
    },
    'Media Walls': {
      folder: 'media-walls',
      title: 'Media Wall',
      subtitle: 'Contemporary media unit with bespoke integrated storage',
      ids: ['DTkTRltDJLl','DTljxrnDHbd','DWv0SsbjCvm','DYw-KxtiEWk','Da2xGx-DcWj','DZI3DznCI5V','DXE45Y4DOf1']
    },
    'Walk-in Wardrobes': {
      folder: 'walk-in-wardrobes',
      title: 'Walk-in Wardrobe',
      subtitle: 'Luxury bespoke dressing room and walk-in closet',
      ids: ['DYegGHhjrNX','Dcis5JLtyWs','DVQORSRCBxs','DXhWZLniKCw','DXSkas8iB9q','DSz5NZBjhVs']
    },
    'Study Tables': {
      folder: 'study-tables',
      title: 'Study Table',
      subtitle: 'Custom home office workspace and integrated desk',
      ids: ['DWWZa_8jDl_','DWZbxtyjH6S','DXrFRhKiATo','DXXlGOGCKlT','DXOuppnCLs-','DXG0JcPDsrq','DWGwNevDsIT']
    },
    'Bars': {
      folder: 'bars',
      title: 'Home Bar',
      subtitle: 'Bespoke entertaining bar with display shelving',
      ids: ['DUVLF3ljDFP','DXJnY1KiD0k','DUS_C5-CFME','DSmrGbLjd7W']
    },
    'Dressing Units': {
      folder: 'dressing-units',
      title: 'Dressing Unit',
      subtitle: 'Made-to-measure dressing table with custom storage',
      ids: ['DXWAkp6CCWr','DWjf4WQjOSB','DV_ZY-ojGvd']
    },
    'Sliding Wardrobes': {
      folder: 'sliding-wardrobes',
      title: 'Sliding Wardrobe',
      subtitle: 'Sleek space-saving sliding door wardrobe solution',
      ids: ['DXZCpaQiCK4','DSkz54sjfhW','DSTMhi7jFDf']
    },
    'Utility Rooms': {
      folder: 'utility-rooms',
      title: 'Utility Room',
      subtitle: 'Bespoke functional utility and laundry space',
      ids: ['DclS1_itqji','DWZebnbjCRZ','DXwcTrzDLig']
    },
    'Understairs Storage': {
      folder: 'understairs-storage',
      title: 'Understairs Storage',
      subtitle: 'Clever made-to-measure understairs storage unit',
      ids: ['DVD7Pq4jEpx']
    }
  };

  const reelIds = new Set([
    'DbaR_PhtnEN','DYUXr78jXIY','DSFB3CogY7Q','DWmSaiXjMnP','DWi0YCNDAsK','DWMLFWUDFxo',
    'DVgvN_RDMzc','DaaNaVxNXXA','DWv0SsbjCvm','DXE45Y4DOf1','Dcis5JLtyWs','DWWZa_8jDl_',
    'DWZbxtyjH6S','DV_ZY-ojGvd','DUVLF3ljDFP','DclS1_itqji','DWZebnbjCRZ'
  ]);

  const base = id => `https://www.instagram.com/${reelIds.has(id) ? 'reel' : 'p'}/${id}/`;

  const filters = document.querySelector('#rwFilters');
  const grid = document.querySelector('#rwGrid');

  const render = selected => {
    if (!grid) return;
    const entries = Object.entries(categories).filter(([name]) => selected === 'All' || name === selected);

    grid.innerHTML = entries.flatMap(([catName, data]) => {
      return data.ids.map((id, index) => {
        const seq = index + 1;
        const imgPath = `assets/recent-work/${data.folder}/${seq}.webp`;
        const postUrl = base(id);

        return `<article class="rw-card">
          <a class="rw-card__screen" href="${postUrl}" target="_blank" rel="noopener" aria-label="Watch ${data.title} on Instagram">
            <img src="${imgPath}" alt="${data.title}" loading="lazy">
            <span class="rw-card__play" aria-hidden="true">▶</span>
          </a>
          <div class="rw-card__body">
            <h3>${data.title}</h3>
            <p>${data.subtitle}</p>
            <a class="rw-card__link" href="${postUrl}" target="_blank" rel="noopener">VIEW ON INSTAGRAM ↗</a>
          </div>
        </article>`;
      });
    }).join('');
  };

  const resolveCategory = input => {
    if (!input) return null;
    const clean = input.toLowerCase().trim().replace(/^#/, '').replace(/[^a-z0-9]/g, '');
    if (!clean) return null;
    if (clean === 'all') return 'All';

    // Direct match against category keys
    for (const cat of Object.keys(categories)) {
      if (cat.toLowerCase().replace(/[^a-z0-9]/g, '') === clean) {
        return cat;
      }
    }

    // Direct match against folder names
    for (const [cat, data] of Object.entries(categories)) {
      if (data.folder.toLowerCase().replace(/[^a-z0-9]/g, '') === clean) {
        return cat;
      }
    }

    // Project section aliases & common variants
    const aliasMap = {
      kitchens: 'Kitchens',
      kitchen: 'Kitchens',
      fittedwardrobes: 'Fitted Wardrobes',
      fittedwardrobe: 'Fitted Wardrobes',
      wardrobes: 'Fitted Wardrobes',
      wardrobe: 'Fitted Wardrobes',
      mediawalls: 'Media Walls',
      mediawall: 'Media Walls',
      livingspaces: 'Media Walls',
      livingspace: 'Media Walls',
      living: 'Media Walls',
      walkinwardrobes: 'Walk-in Wardrobes',
      walkinwardrobe: 'Walk-in Wardrobes',
      walkin: 'Walk-in Wardrobes',
      bedrooms: 'Walk-in Wardrobes',
      bedroom: 'Walk-in Wardrobes',
      studytables: 'Study Tables',
      studytable: 'Study Tables',
      homeoffices: 'Study Tables',
      homeoffice: 'Study Tables',
      study: 'Study Tables',
      bars: 'Bars',
      bar: 'Bars',
      barsentertainment: 'Bars',
      dressingunits: 'Dressing Units',
      dressingunit: 'Dressing Units',
      dressing: 'Dressing Units',
      slidingwardrobes: 'Sliding Wardrobes',
      slidingwardrobe: 'Sliding Wardrobes',
      sliding: 'Sliding Wardrobes',
      utilityrooms: 'Utility Rooms',
      utilityroom: 'Utility Rooms',
      utility: 'Utility Rooms',
      bathrooms: 'Utility Rooms',
      bathroom: 'Utility Rooms',
      understairsstorage: 'Understairs Storage',
      understairs: 'Understairs Storage',
      hallways: 'Understairs Storage',
      hallway: 'Understairs Storage',
      hallwaysentrances: 'Understairs Storage',
      entrance: 'Understairs Storage',
      entrances: 'Understairs Storage',
      completehomes: 'All',
      fullhome: 'All'
    };

    return aliasMap[clean] || null;
  };

  const selectCategory = (targetCat, updateUrl = false) => {
    const validCat = (targetCat && categories[targetCat]) ? targetCat : 'All';

    if (filters) {
      const buttons = filters.querySelectorAll('.rw-filter');
      buttons.forEach(btn => {
        const isActive = btn.textContent.trim().toLowerCase() === validCat.toLowerCase();
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    }

    render(validCat);

    if (updateUrl && window.history && window.history.replaceState) {
      const url = new URL(window.location);
      if (validCat === 'All') {
        url.searchParams.delete('category');
      } else {
        const slug = categories[validCat] ? categories[validCat].folder : validCat.toLowerCase().replace(/\s+/g, '-');
        url.searchParams.set('category', slug);
      }
      window.history.replaceState(null, '', url.toString());
    }
  };

  const getInitialCategory = () => {
    const params = new URLSearchParams(window.location.search);
    const paramCat = params.get('category') || params.get('tab');
    if (paramCat) {
      const resolved = resolveCategory(paramCat);
      if (resolved) return resolved;
    }

    const hash = window.location.hash ? window.location.hash.replace(/^#/, '') : '';
    if (hash && hash !== 'videos') {
      const resolved = resolveCategory(hash);
      if (resolved) return resolved;
    }

    return 'All';
  };

  if (filters) {
    filters.innerHTML = ['All', ...Object.keys(categories)]
      .map(name => `<button class="rw-filter" type="button" aria-pressed="false">${name}</button>`)
      .join('');

    filters.addEventListener('click', e => {
      const button = e.target.closest('button');
      if (!button) return;
      selectCategory(button.textContent.trim(), true);
    });
  }

  const initialCat = getInitialCategory();
  selectCategory(initialCat);

  // Auto-scroll to videos section if category param or #videos anchor was supplied
  const urlParams = new URLSearchParams(window.location.search);
  const hasCategoryParam = Boolean(urlParams.get('category') || urlParams.get('tab'));
  const hasVideosHash = window.location.hash === '#videos';

  if (hasCategoryParam || hasVideosHash) {
    setTimeout(() => {
      const videosSection = document.getElementById('videos');
      if (videosSection) {
        videosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }

  window.addEventListener('popstate', () => {
    selectCategory(getInitialCategory(), false);
  });
})();
