tree src/
src/
├── app
│   ├── (admin)
│   │   └── admin
│   │       ├── (routes)
│   │       │   ├── dashboard
│   │       │   │   └── page.tsx
│   │       │   ├── documents
│   │       │   │   ├── [id]
│   │       │   │   │   ├── edit
│   │       │   │   │   │   └── page.tsx
│   │       │   │   │   └── page.tsx
│   │       │   │   ├── new
│   │       │   │   │   └── page.tsx
│   │       │   │   └── page.tsx
│   │       │   ├── generations
│   │       │   │   ├── [id]
│   │       │   │   │   ├── edit
│   │       │   │   │   │   └── page.tsx
│   │       │   │   │   └── page.tsx
│   │       │   │   ├── new
│   │       │   │   │   └── page.tsx
│   │       │   │   └── page.tsx
│   │       │   ├── presentations
│   │       │   │   ├── [id]
│   │       │   │   │   ├── edit
│   │       │   │   │   │   └── page.tsx
│   │       │   │   │   └── page.tsx
│   │       │   │   ├── new
│   │       │   │   │   └── page.tsx
│   │       │   │   └── page.tsx
│   │       │   └── users
│   │       │       ├── [id]
│   │       │       │   ├── edit
│   │       │       │   │   └── page.tsx
│   │       │       │   └── page.tsx
│   │       │       ├── new
│   │       │       │   └── page.tsx
│   │       │       └── page.tsx
│   │       └── layout.tsx
│   ├── (app)
│   │   └── app
│   │       ├── (routes)
│   │       │   ├── documents
│   │       │   │   └── page.tsx
│   │       │   ├── generate
│   │       │   │   └── [id]
│   │       │   │       └── page.tsx
│   │       │   ├── page.tsx
│   │       │   └── presentations
│   │       │       └── [id]
│   │       │           └── page.tsx
│   │       └── layout.tsx
│   ├── (auth)
│   │   └── auth
│   │       ├── (routes)
│   │       │   ├── forgot-password
│   │       │   │   └── page.tsx
│   │       │   ├── reset-password
│   │       │   │   └── page.tsx
│   │       │   ├── sign-in
│   │       │   │   └── page.tsx
│   │       │   └── sign-up
│   │       │       └── page.tsx
│   │       └── layout.tsx
│   ├── (docs)
│   │   └── docs
│   │       ├── (routes)
│   │       │   └── page.tsx
│   │       └── layout.tsx
│   ├── (home)
│   │   ├── (routes)
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (terms)
│   │   └── terms
│   │       ├── (routes)
│   │       │   └── page.tsx
│   │       └── layout.tsx
│   ├── api
│   │   └── v1
│   │       ├── dashboard
│   │       │   └── route.ts
│   │       ├── documents
│   │       │   └── route.ts
│   │       ├── generations
│   │       │   └── route.ts
│   │       ├── presentations
│   │       │   └── route.ts
│   │       └── users
│   │           └── route.ts
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── not-found.tsx
├── components
│   ├── adapters
│   │   ├── breadcrumb.tsx
│   │   └── index.ts
│   ├── base
│   │   ├── container.tsx
│   │   ├── index.ts
│   │   ├── logo.tsx
│   │   └── section.tsx
│   ├── layouts
│   │   ├── app.tsx
│   │   ├── aside.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── index.ts
│   │   └── main.tsx
│   ├── pages
│   │   ├── admin
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard-documents-summary-section.tsx
│   │   │   │   ├── dashboard-generations-summary-section.tsx
│   │   │   │   ├── dashboard-header.tsx
│   │   │   │   ├── dashboard-presentations-summary-section.tsx
│   │   │   │   ├── dashboard-recent-activity-section.tsx
│   │   │   │   ├── dashboard-stats-section.tsx
│   │   │   │   ├── dashboard-user-summary-section.tsx
│   │   │   │   └── index.ts
│   │   │   ├── documents
│   │   │   │   ├── documents-details.tsx
│   │   │   │   ├── documents-form.tsx
│   │   │   │   ├── documents-header.tsx
│   │   │   │   ├── documents-list-section.tsx
│   │   │   │   ├── documents-stats-section.tsx
│   │   │   │   └── index.ts
│   │   │   ├── generate
│   │   │   │   ├── generate-details.tsx
│   │   │   │   ├── generate-form.tsx
│   │   │   │   ├── generate-header.tsx
│   │   │   │   ├── generate-list-section.tsx
│   │   │   │   ├── generate-stats-section.tsx
│   │   │   │   └── index.ts
│   │   │   ├── presentations
│   │   │   │   ├── index.ts
│   │   │   │   ├── presentations-Form.tsx
│   │   │   │   ├── presentations-details.tsx
│   │   │   │   ├── presentations-header.tsx
│   │   │   │   ├── presentations-list-section.tsx
│   │   │   │   └── presentations-stats-section.tsx
│   │   │   ├── root
│   │   │   │   ├── admin-layout-aside.tsx
│   │   │   │   ├── admin-layout-footer.tsx
│   │   │   │   ├── admin-layout-header.tsx
│   │   │   │   └── index.ts
│   │   │   └── users
│   │   │       ├── index.ts
│   │   │       ├── users-Form.tsx
│   │   │       ├── users-details.tsx
│   │   │       ├── users-header.tsx
│   │   │       ├── users-list-section.tsx
│   │   │       └── users-stats-section.tsx
│   │   ├── app
│   │   │   ├── documents
│   │   │   │   ├── documents-header.tsx
│   │   │   │   ├── documents-item.tsx
│   │   │   │   ├── documents-list.tsx
│   │   │   │   ├── documents-toolbar.tsx
│   │   │   │   └── index.ts
│   │   │   ├── generate
│   │   │   │   ├── generate-header.tsx
│   │   │   │   ├── generate-outline-panel.tsx
│   │   │   │   ├── generate-settings-panel.tsx
│   │   │   │   └── index.ts
│   │   │   ├── presentations
│   │   │   │   ├── index.ts
│   │   │   │   ├── presentations-header.tsx
│   │   │   │   ├── presentations-sidebar.tsx
│   │   │   │   ├── presentations-tools.tsx
│   │   │   │   └── presentations-workspace.tsx
│   │   │   └── root
│   │   │       ├── app-form-controls.tsx
│   │   │       ├── app-form-header.tsx
│   │   │       ├── app-form-input.tsx
│   │   │       ├── app-form-mode.tsx
│   │   │       ├── app-form.tsx
│   │   │       ├── app-header.tsx
│   │   │       ├── app-layout-aside.tsx
│   │   │       ├── app-layout-footer.tsx
│   │   │       ├── app-layout-header.tsx
│   │   │       ├── app-recents.tsx
│   │   │       ├── app-suggestions.tsx
│   │   │       └── index.ts
│   │   ├── auth
│   │   │   └── root
│   │   │       ├── forgot-password-form.tsx
│   │   │       ├── index.ts
│   │   │       ├── reset-password-form.tsx
│   │   │       ├── sign-in-form.tsx
│   │   │       └── sign-up-form.tsx
│   │   ├── docs
│   │   │   └── root
│   │   │       ├── docs-content.tsx
│   │   │       ├── docs-layout-header.tsx
│   │   │       ├── docs-layout-sidebar.tsx
│   │   │       └── index.ts
│   │   ├── error
│   │   │   └── root
│   │   │       └── index.ts
│   │   ├── home
│   │   │   └── root
│   │   │       ├── home-faq-section.tsx
│   │   │       ├── home-features-section.tsx
│   │   │       ├── home-hero-section.tsx
│   │   │       ├── home-layout-footer.tsx
│   │   │       ├── home-layout-header.tsx
│   │   │       ├── home-pricing-section.tsx
│   │   │       ├── home-testimonials-section.tsx
│   │   │       └── index.ts
│   │   ├── loading
│   │   │   └── root
│   │   │       └── index.ts
│   │   ├── not-found
│   │   │   └── root
│   │   │       └── index.ts
│   │   └── terms
│   │       └── root
│   │           ├── index.ts
│   │           ├── terms-content.tsx
│   │           └── terms-header.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── index.ts
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
├── config
│   ├── ai.ts
│   ├── api.ts
│   ├── envs.ts
│   ├── index.ts
│   └── prisma.ts
├── hooks
│   ├── index.ts
│   ├── use-documents.ts
│   ├── use-generation.ts
│   ├── use-mobile.ts
│   ├── use-presentations.ts
│   └── use-users.ts
├── lib
│   ├── gemini
│   │   ├── classification.agent.ts
│   │   └── generator.agent.ts
│   ├── mastra
│   │   ├── agents.ts
│   │   ├── client.ts
│   │   ├── prompts.ts
│   │   ├── tools.ts
│   │   └── workflows.ts
│   ├── utils
│   │   ├── endpoints.ts
│   │   ├── icons.ts
│   │   ├── index.ts
│   │   ├── messages.ts
│   │   ├── routes.ts
│   │   ├── ui.ts
│   │   └── utils.ts
│   └── zod
│       ├── document-schema.ts
│       ├── generation-schema.ts
│       ├── index.ts
│       ├── presentation-schema.ts
│       └── user-schema.ts
├── middleware
│   └── index.ts
├── providers
│   ├── admin
│   │   ├── admin-dashboard-provider.tsx
│   │   ├── admin-documents-provider.tsx
│   │   ├── admin-generations-provider.tsx
│   │   ├── admin-presentations-provider.tsx
│   │   ├── admin-users-provider.tsx
│   │   └── index.ts
│   ├── app
│   │   ├── app-documents-provider.tsx
│   │   ├── app-generate-provider.tsx
│   │   ├── app-presentations-provider.tsx
│   │   ├── app-provider.tsx
│   │   └── index.ts
│   ├── auth
│   │   ├── auth-provider.tsx
│   │   └── index.ts
│   ├── docs
│   │   ├── docs-provider.tsx
│   │   └── index.ts
│   ├── home
│   │   ├── home-provider.tsx
│   │   └── index.ts
│   ├── index.tsx
│   ├── next
│   │   ├── index.ts
│   │   └── theme-provider.tsx
│   └── terms
│       ├── index.ts
│       └── terms-provider.tsx
├── server
│   └── v1
│       ├── api
│       ├── repositories
│       └── services
├── store
│   └── actions
│       ├── document-actions.ts
│       ├── example-actions.ts
│       ├── generation-actions.ts
│       ├── index.ts
│       ├── presentation-actions.ts
│       └── user-actions.ts
└── types
    ├── document.d.ts
    ├── generation.d.ts
    ├── presentation.d.ts
    └── user.d.ts

108 directories, 252 files