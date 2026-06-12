# Laxmi Toyota Growth Platform

## Project Goal

Build a production-ready Toyota dealership growth platform focused on:

* Vehicle bookings
* Test drive bookings
* Service bookings
* Finance inquiries
* Exchange inquiries
* Branch-wise lead generation
* SEO lead generation
* Google Ads lead generation
* Meta Ads lead generation

This platform will replace a traditional WordPress dealership website.

---

# Current Project Status

## Infrastructure

Completed:

* Hostinger KVM 2 VPS
* Ubuntu 24.04
* Node.js
* NPM
* PM2
* PostgreSQL
* Nginx
* UFW Firewall
* Domain connected
* SSL certificate installed
* HTTPS working

Production Domain:

https://laxmitoyota.co.in

---

# Development Workflow

Always follow:

Antigravity
→ Local Project
→ GitHub
→ VPS Deployment

Never:

* Edit code directly on VPS
* Create application files directly on VPS
* Modify database manually unless instructed
* Use VPS as source of truth

GitHub is the source of truth.

---

# Technology Stack

## Frontend

* Next.js 15 App Router
* TypeScript
* Tailwind CSS
* Shadcn UI

## Backend

* Next.js Server Actions
* API Routes

## Database

* PostgreSQL

## ORM

* Prisma

## Authentication

* Better Auth

## Deployment

* PM2
* Nginx

---

# Current Sprint

Authentication System

Required:

* Login
* Logout
* Admin Dashboard
* Session Persistence
* Middleware Protection
* Prisma Migrations
* Seed Admin User

Do not build dealership modules until authentication is complete.

---

# Future Build Order

Sprint 1
Authentication

Sprint 2
Admin Dashboard

Sprint 3
Vehicle CMS

Sprint 4
Branch CMS

Sprint 5
Offers CMS

Sprint 6
Vehicle Detail Pages

Sprint 7
Test Drive Booking

Sprint 8
Service Booking

Sprint 9
Lead CRM

Sprint 10
Razorpay Integration

Sprint 11
Analytics Dashboard

Sprint 12
SEO Automation

---

# Vehicle CMS Structure

Vehicle

* Name
* Slug
* Brand
* Model
* Variant
* Fuel Type
* Transmission
* Ex Showroom Price
* Features
* Colors
* Images
* Brochure PDF
* Status

Status Values:

* Active
* Inactive
* Upcoming

---

# Branch CMS Structure

Branch

* Name
* Slug
* Address
* Phone
* Email
* Google Maps URL
* Working Hours
* Manager Name
* Inventory Assignment

---

# Coding Rules

Always:

* Use TypeScript
* Use Prisma
* Use Better Auth
* Use App Router
* Use Server Components where possible
* Use Server Actions where appropriate
* Use strong typing
* Follow production standards

Never:

* Use Firebase
* Use Supabase
* Use MongoDB
* Use local JSON files as databases
* Use temporary mock authentication
* Use hardcoded secrets

---

# Environment Variables

Expected Variables:

DATABASE_URL
BETTER_AUTH_SECRET
BETTER_AUTH_URL
NEXT_PUBLIC_APP_URL
ADMIN_EMAIL
ADMIN_PASSWORD

Never commit secrets.

Use .env.example only.

---

# Deployment Rules

Before every deployment:

npm install
npm run lint
npm run build

If build fails:

STOP.

Do not deploy.

---

# VPS Rules

Antigravity must never assume:

* VPS credentials
* SSH credentials
* Database passwords
* SSL private keys

Antigravity generates code only.

Deployment is handled manually.

---

# Success Criteria

Authentication complete.

Then:

Vehicle CMS
→ Branch CMS
→ Lead Forms
→ CRM
→ Payments
→ Analytics

Build one module at a time.

Avoid large multi-feature generations.
