# Jheel's Personal Greeter

## Overview

This is a personalized greeting website built for Jheel that displays time-based greeting messages with a romantic, modern design. The application uses a full-stack TypeScript setup with React frontend and Express backend, featuring a beautiful frosted glass design with romantic background imagery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Styling**: Custom CSS variables with pink/romantic theme
- **State Management**: React hooks for local state, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for bundling
- **Storage**: In-memory storage with interface for future database integration

### Key Design Decisions

1. **Monorepo Structure**: Organized into `client/`, `server/`, and `shared/` directories for clear separation of concerns
2. **Shared Types**: Database schemas and types in `shared/` directory for type safety across frontend and backend
3. **Time-Based Logic**: Frontend-only time detection and message selection for instant response
4. **Mobile-First Design**: Optimized for mobile devices with responsive layouts and touch-friendly interactions
5. **Dynamic Backgrounds**: Random background selection from romantic image collection on each page load
6. **Romantic Theme**: Frosted glass effects with beautiful romantic backgrounds for personalized experience

## Key Components

### Frontend Components
- **Home Page**: Main greeting display with time-based message logic
- **UI Components**: Complete shadcn/ui component library for consistent design
- **Frosted Glass Effect**: CSS-based glass morphism design
- **Time Logic**: JavaScript Date API for time-based greeting selection

### Backend Components
- **Express Server**: RESTful API structure ready for future features
- **Storage Interface**: Abstracted storage layer supporting in-memory and database implementations
- **User Management**: Basic user schema and CRUD operations (not currently used)
- **Route Registration**: Organized route structure for API endpoints

## Data Flow

1. **Client Load**: User visits the site, React app loads
2. **Time Detection**: Frontend JavaScript gets current time from user's system
3. **Message Selection**: Time-based logic selects appropriate greeting message
4. **Display**: Greeting renders in frosted glass container over romantic background
5. **Real-time Updates**: Effect hook updates time display every minute

### Greeting Time Ranges
- **Morning (4:00 AM - 11:59 AM)**: Includes current date in message
- **Afternoon (12:00 PM - 4:49 PM)**: Supportive and caring message
- **Evening (5:00 PM - 10:59 PM)**: Relaxing and encouraging message
- **Night (11:00 PM - 3:59 AM)**: Sweet dreams and rest message

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: date-fns for date formatting, lucide-react for icons

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL adapter (Neon Database)
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session**: connect-pg-simple for PostgreSQL session storage

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Cartographer and runtime error overlay plugins

## Deployment Strategy

### Development
- **Hot Reload**: Vite dev server with React Fast Refresh
- **TypeScript**: Real-time type checking and compilation
- **Database**: Drizzle push for schema synchronization
- **Environment**: NODE_ENV=development with debugging enabled

### Production
- **Build Process**: Vite builds client to `dist/public/`, esbuild bundles server to `dist/`
- **Server**: Node.js serves static files and API endpoints
- **Database**: PostgreSQL with connection pooling via Neon Database
- **Environment**: NODE_ENV=production with optimizations enabled

### Database Configuration
- **ORM**: Drizzle configured for PostgreSQL dialect
- **Connection**: Environment variable `DATABASE_URL` required
- **Migrations**: Generated in `./migrations/` directory
- **Schema**: Defined in `./shared/schema.ts` for type safety

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.