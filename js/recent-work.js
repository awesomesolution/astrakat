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

  if (filters) {
    filters.innerHTML = ['All', ...Object.keys(categories)]
      .map(name => `<button class="rw-filter${name === 'All' ? ' is-active' : ''}" type="button">${name}</button>`)
      .join('');

    filters.addEventListener('click', e => {
      const button = e.target.closest('button');
      if (!button) return;
      document.querySelectorAll('.rw-filter').forEach(item => {
        item.classList.toggle('is-active', item === button);
      });
      render(button.textContent.trim());
    });
  }

  render('All');
})();
