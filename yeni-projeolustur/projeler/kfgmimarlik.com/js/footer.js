export class Footer {
  constructor(dil = 'tr') {
    this.dil = dil;
  }

  render() {
    const footerEl = document.getElementById('footer');
    if (!footerEl) return;
    footerEl.innerHTML = `
      <div class="footer-wrap">
        <div class="site-info">&copy; 2026 KFG Mimarlık</div>
      </div>
    `;
  }
}
