# AI Studio Project Rules

This document outlines the technical stack and specific rules for development within this project to ensure consistency, maintainability, and adherence to best practices.

## Tech Stack Summary

1.  **Framework:** React (using functional components and hooks).
2.  **Language:** TypeScript (mandatory for all new files and components).
3.  **Styling:** Tailwind CSS (utility-first approach for all styling).
4.  **UI Library:** shadcn/ui (preferred source for standard UI components like buttons, cards, etc.).
5.  **Icons:** Lucide React.
6.  **Build Tooling:** Vite.
7.  **Project Structure:** Source code is organized under `src/`. Components reside in `src/components/`.
8.  **Navigation:** Currently uses state management within `App.tsx` for view switching. If complex routing is required, React Router should be implemented.

## Library Usage Rules

| Feature | Mandatory Library/Tool | Rule |
| :--- | :--- | :--- |
| **Styling** | Tailwind CSS | All visual styling (layout, colors, responsiveness) must be implemented using Tailwind utility classes. Avoid custom CSS files. |
| **UI Components** | shadcn/ui | Utilize pre-built shadcn/ui components for common elements (e.g., Dialog, Button, Card). If a component is not available or requires significant customization, create a new component using Tailwind CSS. |
| **Icons** | Lucide React | Use icons exclusively from the `lucide-react` package. |
| **Component Structure** | React/TypeScript | Every new component or hook must be created in its own dedicated file within `src/components/` or `src/hooks/`. Keep components small and focused. |
| **Routing** | React Router | If the application requires multi-page navigation, implement React Router. Keep route definitions centralized in `App.tsx`. |