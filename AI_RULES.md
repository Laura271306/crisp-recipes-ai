# AI Rules for AirFryer Perfecta App

## Tech Stack

- **React 18** with TypeScript for the frontend framework
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with custom design system colors
- **shadcn/ui** component library built on Radix UI primitives
- **React Router** for client-side routing
- **React Query** for server state management
- **Lucide React** for icons throughout the application
- **React Hook Form** with Zod for form validation
- **Sonner** for toast notifications

## Library Usage Rules

### UI Components
- **ALWAYS** use shadcn/ui components when available (Button, Card, Badge, Accordion, etc.)
- **NEVER** create custom UI components that duplicate existing shadcn/ui functionality
- **USE** Radix UI primitives only when extending shadcn/ui components
- **PREFER** using existing component variants over custom styling

### Styling
- **ALWAYS** use Tailwind CSS classes for styling
- **USE** custom CSS variables defined in `src/index.css` for colors
- **NEVER** write inline styles or CSS-in-JS
- **FOLLOW** the existing color system (cta-primary, success, warning, value, etc.)
- **USE** responsive design patterns with Tailwind breakpoints

### Forms & Validation
- **ALWAYS** use React Hook Form for form management
- **USE** Zod schemas for validation
- **LEVERAGE** shadcn/ui form components (Input, Label, etc.)

### State Management
- **USE** React Query for server state and API calls
- **USE** React useState/useReducer for local component state
- **AVOID** external state management libraries unless absolutely necessary

### Icons
- **ALWAYS** use Lucide React icons
- **NEVER** add other icon libraries
- **IMPORT** only the specific icons needed for each component

### Routing
- **KEEP** all routes in `src/App.tsx`
- **USE** React Router's `<Routes>` and `<Route>` components
- **PLACE** page components in `src/pages/` directory

### File Organization
- **CREATE** new components in `src/components/` with descriptive names
- **KEEP** components under 100 lines of code
- **SEPARATE** sales-specific components in `src/components/sales/`
- **USE** TypeScript for all new files

### Performance
- **USE** lazy loading for images with `loading="lazy"`
- **OPTIMIZE** image imports and include width/height attributes
- **LEVERAGE** Vite's built-in optimizations
- **AVOID** unnecessary re-renders with proper React patterns

### Accessibility
- **FOLLOW** ARIA guidelines for interactive elements
- **USE** semantic HTML elements
- **ENSURE** keyboard navigation works
- **PROVIDE** alt text for all images
- **MAINTAIN** focus states for interactive elements

## Development Guidelines

- **WRITE** clear, concise component names in PascalCase
- **EXPORT** components as default exports
- **USE** TypeScript interfaces for props
- **COMMENT** complex logic but keep code self-documenting
- **FOLLOW** existing code patterns and conventions
- **TEST** components visually before committing
- **KEEP** the sales page focus on conversion and user experience