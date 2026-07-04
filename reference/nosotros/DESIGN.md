---
name: Kinetic Logistics
colors:
  surface: '#f8f9ff'
  surface-dim: '#cddbf2'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d6e3fb'
  on-surface: '#0f1c2d'
  on-surface-variant: '#454650'
  inverse-surface: '#243143'
  inverse-on-surface: '#eaf1ff'
  outline: '#767681'
  outline-variant: '#c6c5d2'
  surface-tint: '#4d5a9c'
  primary: '#021356'
  on-primary: '#ffffff'
  primary-container: '#1d2b6b'
  on-primary-container: '#8895db'
  inverse-primary: '#b9c3ff'
  secondary: '#bc0100'
  on-secondary: '#ffffff'
  secondary-container: '#ea0703'
  on-secondary-container: '#fffbff'
  tertiary: '#191c1f'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e3134'
  on-tertiary-container: '#96999c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#021356'
  on-primary-fixed-variant: '#354282'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#930100'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f8f9ff'
  on-background: '#0f1c2d'
  surface-variant: '#d6e3fb'
typography:
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The brand personality is grounded in reliability, speed, and precision. This design system serves a high-stakes logistics environment where clarity of data and urgency of action are paramount. The target audience includes dispatchers, fleet managers, and corporate stakeholders who require a professional, "no-nonsense" interface that feels authoritative and efficient.

The design style is **Corporate Modern**, leveraging the high-contrast palette of the logo to create a sense of institutional trust. It utilizes a structured grid, clean lines, and purposeful motion to evoke the kinetic energy of transportation. While the foundation is conservative and sturdy, the use of sharp accents and bold typography ensures the interface feels contemporary and high-performance.

## Colors

The palette is derived directly from the corporate identity to ensure immediate brand recognition. 

- **Primary (Corporate Navy):** Used for headers, primary navigation, and dominant action buttons. It represents stability and the established nature of the organization.
- **Secondary (Accent Red):** Reserved for critical alerts, primary call-to-actions, and status indicators that require immediate attention (e.g., "Urgent," "Delayed," or "Stop").
- **Neutral / Surface:** A range of cool grays and off-whites provides a clean canvas for data-heavy tables and dashboards, reducing cognitive load.
- **Success/Warning/Info:** Standardized utility colors are tinted to harmonize with the navy primary rather than competing with the accent red.

## Typography

This design system utilizes **Montserrat** across all levels to maintain a cohesive, geometric, and professional aesthetic. 

Headlines use bold weights and tighter letter-spacing to command authority and mimic the "heavy" presence of the logo. Body text is set with generous line heights to ensure readability during fast-paced operational tasks. Labels are consistently uppercase with slight tracking (letter-spacing) to differentiate them from interactive text and body content, functioning as clear signposts in complex data environments.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum width container for desktop to prevent line lengths from becoming unreadable. 

- **Grid:** A 12-column system is used for desktop, transitioning to a 4-column system for mobile.
- **Rhythm:** An 8px base unit (linear scaling) governs all padding and margins to ensure mathematical harmony.
- **Density:** The design favors a "High-Density" approach for data tables and "Standard Density" for administrative forms. In logistics dashboards, gutters are kept at 24px to provide clear separation between disparate data modules.
- **Responsiveness:** Components reflow vertically on mobile. Sidebars on desktop collapse into bottom-bar navigation or "hamburger" menus on smaller screens to maximize the operational viewport.

## Elevation & Depth

Hierarchy is established primarily through **Tonal Layers** and crisp, low-opacity shadows. 

1. **Base:** The background uses a very light gray (#F9FAFB) to reduce eye strain.
2. **Surface:** White cards (#FFFFFF) house the content, using a 1px border (#E4E7EC) to define boundaries without heavy shadows.
3. **Elevated:** Interactive elements (modals, dropdowns) use a "Soft Ambient Shadow"—a subtle, multi-layered shadow with a slight navy tint in the hex code to ground it in the primary palette. 
4. **Interaction:** Hover states on cards use a slightly deeper shadow and a 2px left-accent border in Red to indicate focus.

## Shapes

The shape language is **Soft (0.25rem)**. While the logistics industry often defaults to sharp corners, a slight radius is applied to modernise the feel and improve visual scanning.

- **Standard Elements:** Buttons, input fields, and checkboxes use a 4px (0.25rem) radius.
- **Containers:** Large dashboard cards use 8px (0.5rem) to create a clear container-to-content relationship.
- **Icons:** Should be housed in square or slightly rounded enclosures, avoiding circular "pill" shapes unless used for status tags (Chips).

## Components

- **Buttons:** 
    - *Primary:* Solid Navy background, White text. Bold weight.
    - *Destructive:* Solid Red background.
    - *Secondary:* Navy 1px border, Navy text.
- **Input Fields:** Use a 1px neutral border that turns Navy on focus. Labels are always "Label-MD" (uppercase) and placed above the field.
- **Chips/Status:** 
    - *Active:* Light Blue tint with Navy text.
    - *Alert/Delay:* Light Red tint with Red text.
- **Cards:** White background, 1px neutral border, 4px corner radius. Used to group related shipment data or vehicle metrics.
- **Data Tables:** High-density, utilizing subtle zebra-striping. Header rows use a Navy background with White text for maximum contrast and "fixed" positioning during scroll.
- **Logistics Specifics:** Map pins use the Red accent for target destinations and Navy for current fleet positions. Progress bars (for tracking) use Navy for completed stages and Red for "Estimated" or "Delayed" portions.