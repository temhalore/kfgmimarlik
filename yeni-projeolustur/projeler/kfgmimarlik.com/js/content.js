import { veriGetir } from './utils.js';

export class Content {
  constructor(sayfa = 'ana-sayfa', dil = 'tr') {
    this.sayfa = sayfa;
    this.dil = dil;
  }

  async yukle() {
    const data = await veriGetir(`data/${this.sayfa}.json`);
    this.render(data);
  }

  render(data) {
    const contentEl = document.getElementById('content');
    if (!contentEl) return;
    contentEl.innerHTML = data.icerik;
  }
}
