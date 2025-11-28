/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SessionController = () => import('#controllers/session_controller')
const HealthController = () => import('#controllers/health_controller')
const RegisteredUsersController = () => import('#controllers/registered_users_controller')
const HomeController = () => import('#controllers/home_controller')
const ContactsController = () => import('#controllers/contacts_controller')
const AdminDashboardController = () => import('#controllers/admin/dashboard_controller')
const AdminServicesController = () => import('#controllers/admin/services_controller')
const AdminPageContentsController = () => import('#controllers/admin/page_contents_controller')
const AdminMessagesController = () => import('#controllers/admin/messages_controller')
const AdminFooterSettingsController = () => import('#controllers/admin/footer_settings_controller')
const AdminTestimonialsController = () => import('#controllers/admin/testimonials_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

// Public landing page
router.get('/', [HomeController, 'index']).as('home')

// Public contact form
router.post('/contact', [ContactsController, 'store']).as('contact.store')

// Admin authentication routes
router.group(() => {
  router.get('/login', [SessionController, 'create']).as('admin.login')
}).prefix('/admin')

// Admin protected routes
router
  .group(() => {
    // Dashboard
    router.get('/dashboard', [AdminDashboardController, 'index']).as('admin.dashboard')

    // Services management
    router.get('/services', [AdminServicesController, 'index']).as('admin.services.index')
    router.get('/services/create', [AdminServicesController, 'create']).as('admin.services.create')
    router.post('/services', [AdminServicesController, 'store']).as('admin.services.store')
    router.get('/services/:id/edit', [AdminServicesController, 'edit']).as('admin.services.edit')
    router.put('/services/:id', [AdminServicesController, 'update']).as('admin.services.update')
    router.post('/services/:id', [AdminServicesController, 'update']).as('admin.services.update.post')
    router.delete('/services/:id', [AdminServicesController, 'destroy']).as('admin.services.destroy')

    // Page content management
    router.get('/pages', [AdminPageContentsController, 'index']).as('admin.pages.index')
    router.get('/pages/:section/edit', [AdminPageContentsController, 'edit']).as('admin.pages.edit')
    router.put('/pages/:section', [AdminPageContentsController, 'update']).as('admin.pages.update')

    // Contact messages management
    router.get('/messages', [AdminMessagesController, 'index']).as('admin.messages.index')
    router.get('/messages/:id', [AdminMessagesController, 'show']).as('admin.messages.show')
    router.delete('/messages/:id', [AdminMessagesController, 'destroy']).as('admin.messages.destroy')

    // Footer settings management
    router.get('/footer', [AdminFooterSettingsController, 'index']).as('admin.footer.index')
    router.put('/footer', [AdminFooterSettingsController, 'update']).as('admin.footer.update')

    // Testimonials management
    router.get('/testimonials', [AdminTestimonialsController, 'index']).as('admin.testimonials.index')
    router.get('/testimonials/create', [AdminTestimonialsController, 'create']).as('admin.testimonials.create')
    router.post('/testimonials', [AdminTestimonialsController, 'store']).as('admin.testimonials.store')
    router.get('/testimonials/:id/edit', [AdminTestimonialsController, 'edit']).as('admin.testimonials.edit')
    router.put('/testimonials/:id', [AdminTestimonialsController, 'update']).as('admin.testimonials.update')
    router.post('/testimonials/:id', [AdminTestimonialsController, 'update']).as('admin.testimonials.update.post')
    router.delete('/testimonials/:id', [AdminTestimonialsController, 'destroy']).as('admin.testimonials.destroy')
  })
  .prefix('/admin')
  .use([middleware.admin()])

// These starter kit routes are kept for reference but can be removed if not needed
// router.group(() => {
//   router.get('/login', [SessionController, 'create']).as('login')
//   router.get('/register', [RegisteredUsersController, 'create']).as('register')
// })

// router
//   .group(() => {
//     router.on('/dashboard').renderInertia('dashboard').as('dashboard')
//   })
//   .use([middleware.auth()])

// router
//   .group(() => {
//     router.on('/settings').redirect('/settings/profile')
//     router.on('/settings/profile').renderInertia('settings/profile').as('settings.profile')
//     router.on('/settings/security').renderInertia('settings/security').as('settings.security')
//     router.on('/settings/appearance').renderInertia('settings/appearance').as('settings.appearance')
//   })
//   .use([middleware.auth()])

// API routes
// router.any('/api/*', [TrpcController, 'handle']).as('api')

router.get('/health', [HealthController, 'index']).prefix('api')

router
  .group(() => {
    router.post('/login', [SessionController, 'store']).as('login')
    router.post('/register', [RegisteredUsersController, 'store']).as('register_user')
  })
  .use([middleware.guest()])
  .as('auth-routes')
  .prefix('api/auth')

router
  .group(() => {
    router.post('/logout', [SessionController, 'destroy']).as('logout')
  })
  .use([middleware.auth()])
