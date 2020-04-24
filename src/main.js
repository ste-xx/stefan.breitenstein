// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faRss } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWikipediaW, faLinkedin, faTwitter, faRedditSquare, faYCombinator, faCodepen} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'typeface-montserrat';

[
  faExternalLinkAlt,
  faRss,

  faGithub,
  faLinkedin,
  faWikipediaW,
  faTwitter,
  faRedditSquare,
  faYCombinator,
  faCodepen
].forEach((e) => library.add(e))
// external-link-alt
config.autoAddCss = false;

export default function (Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
