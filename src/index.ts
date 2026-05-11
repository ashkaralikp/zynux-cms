/**
 * SonicJS Starter Application
 *
 * Entry point for your SonicJS headless CMS application
 */

import { createSonicJSApp, registerCollections } from '@sonicjs-cms/core'
import type { SonicJSConfig } from '@sonicjs-cms/core'

// Import your collection configurations
// Add new collections here after creating them in src/collections/
import contactCollection from './collections/contact.collection'
import coursesCollection from './collections/courses.collection'
import footerCollection from './collections/footer.collection'
import heroCollection from './collections/hero.collection'
import navbarCollection from './collections/navbar.collection'
import placementSuccessCollection from './collections/placement-success.collection'
import programsCollection from './collections/programs.collection'
import testimonialsCollection from './collections/testimonials.collection'
import trustCollection from './collections/trust.collection'

// Register collections BEFORE creating the app
// This ensures they are synced to the database on startup
registerCollections([
  contactCollection,
  coursesCollection,
  footerCollection,
  heroCollection,
  navbarCollection,
  placementSuccessCollection,
  programsCollection,
  testimonialsCollection,
  trustCollection,
])

// Application configuration
const config: SonicJSConfig = {
  collections: {
    autoSync: true
  },
  plugins: {
    directory: './src/plugins',
    autoLoad: false  // Set to true to auto-load custom plugins
  }
}

// Create and export the application
export default createSonicJSApp(config)
