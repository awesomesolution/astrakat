(() => {
  const categories = {
    'Fitted Wardrobes': ['DYegGHhjrNX','DdeyPwTjXe8','DbaR_PhtnEN','DYUXr78jXIY','DXXlGOGCKlT','DW1Udp0jAPt','DSFB3CogY7Q','Dc3IY_7jWju','DWmSaiXjMnP','DWi0YCNDAsK','DWqAnOdiMWh','DWMLFWUDFxo','DVV8JmgCDa9','DVV82AsCM5v','DUvCkN9Dnsi','Dc3JXMDjSmS'],
    Kitchens: ['DVgvN_RDMzc','DYxAkzyCJSv','DaaNaVxNXXA','DVgwvz1DsLM','DSVK4gnjPJt','DSTKapIDHaZ','DSSNbqJDJIl'],
    'Media Walls': ['DTkTRltDJLl','DTljxrnDHbd','DWv0SsbjCvm','DYw-KxtiEWk','Da2xGx-DcWj','DZI3DznCI5V','DXE45Y4DOf1'],
    'Walk-in Wardrobes': ['DYegGHhjrNX','Dcis5JLtyWs','DVQORSRCBxs','DXhWZLniKCw','DXSkas8iB9q','DSz5NZBjhVs'],
    'Study Tables': ['DWWZa_8jDl_','DWZbxtyjH6S','DXrFRhKiATo','DXXlGOGCKlT','DXOuppnCLs-','DXG0JcPDsrq','DWGwNevDsIT'],
    Bars: ['DUVLF3ljDFP','DXJnY1KiD0k','DUS_C5-CFME','DSmrGbLjd7W'],
    'Dressing Units': ['DXWAkp6CCWr','DWjf4WQjOSB','DV_ZY-ojGvd'],
    'Sliding Wardrobes': ['DXZCpaQiCK4','DSkz54sjfhW','DSTMhi7jFDf'],
    'Utility Rooms': ['DclS1_itqji','DWZebnbjCRZ','DXwcTrzDLig'],
    'Understairs Storage': ['DVD7Pq4jEpx']
  };
  const base = id => `https://www.instagram.com/${['DbaR_PhtnEN','DYUXr78jXIY','DSFB3CogY7Q','DWmSaiXjMnP','DWi0YCNDAsK','DWMLFWUDFxo','DVgvN_RDMzc','DaaNaVxNXXA','DWv0SsbjCvm','DXE45Y4DOf1','Dcis5JLtyWs','DWWZa_8jDl_','DWZbxtyjH6S','DV_ZY-ojGvd','DUVLF3ljDFP','DclS1_itqji','DWZebnbjCRZ'].includes(id) ? 'reel' : 'p'}/${id}/`;
  const filters = document.querySelector('#rwFilters'), grid = document.querySelector('#rwGrid');
  const render = selected => {
    grid.innerHTML = Object.entries(categories).filter(([name]) => selected === 'All' || name === selected).flatMap(([name, ids]) => ids.map((id, i) => `<article class="rw-card"><div class="rw-card__screen"><span>▶</span></div><div class="rw-card__body"><h3>${name}</h3><p>Recent AstraKAT Designs project video ${i + 1}</p><a class="rw-card__link" href="${base(id)}" target="_blank" rel="noopener">VIEW ON INSTAGRAM ↗</a></div></article>`)).join('');
  };
  filters.innerHTML = ['All', ...Object.keys(categories)].map(name => `<button class="rw-filter${name === 'All' ? ' is-active' : ''}" type="button">${name}</button>`).join('');
  filters.addEventListener('click', e => { const button = e.target.closest('button'); if (!button) return; document.querySelectorAll('.rw-filter').forEach(item => item.classList.toggle('is-active', item === button)); render(button.textContent); });
  render('All');
})();
