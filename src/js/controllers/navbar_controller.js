import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['topbar', 'logo', 'navlinks']

  connect() {
    this.scrolled = false
    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  disconnect() {
    window.removeEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll() {
    const isScrolled = window.scrollY > 50

    if (isScrolled === this.scrolled) return
    this.scrolled = isScrolled

    if (isScrolled) {
      this.element.classList.add('bg-black/90')
      this.element.classList.remove('bg-black/30')
      this.logoTarget.classList.add('h-10')
      this.logoTarget.classList.remove('h-22')
      this.topbarTarget.classList.add('py-1')
      this.topbarTarget.classList.remove('py-3')
      this.navlinksTarget.classList.add('py-1')
      this.navlinksTarget.classList.remove('py-2')
    } else {
      this.element.classList.remove('bg-black/90')
      this.element.classList.add('bg-black/30')
      this.logoTarget.classList.remove('h-10')
      this.logoTarget.classList.add('h-22')
      this.topbarTarget.classList.remove('py-1')
      this.topbarTarget.classList.add('py-3')
      this.navlinksTarget.classList.remove('py-1')
      this.navlinksTarget.classList.add('py-2')
    }
  }
}
