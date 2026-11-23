# Stretch Armstrong Backend Services (`stretch_armstrong_app_services`)

> **Core API & Data Persistence Services** for Team Stretch Armstrong's system development project in INFO 530.

---

## Project Overview

This repository provides the RESTful backend API and database persistence services for the Stretch Armstrong gym tracking application. 

The service layer powers the gym's transition from physical paper sheets to a digital, science-driven platform by supporting:
1. **Workout Persistence:** Ingesting and storing athlete training logs (exercise clusters, target vs. completed sets, reps, and weights).
2. **Biometric Recovery Logging:** Storing pre-workout Heart Rate Variability (HRV) and recovery scores linked to client profiles to inform workout adaptations.
3. **Owner & Trainer Analytics:** Querying historical workout sessions, volume trends, and client performance data for timely athletic guidance.

---

## Tech Stack & Architecture

In alignment with course guidance for introductory graduate development:
* **Runtime:** [Node.js](https://nodejs.org) (`v18+` or `v20+`)
* **Framework:** [Express.js](https://expressjs.com) (Routing, JSON body parsing, CORS middleware)
* **Database Driver & Pool:** `mysql` / SQL client utilizing connection pooling (`createPool`)
* **Persistence Layer:** Relational SQL database schemas with parameterized queries (`?`) to prevent SQL injection
* **Database Scripts:** Standalone `.sql` schema and seed definitions following `dump.sql` conventions

---

## Repository Consolidation Roadmap (Upcoming Iteration)

>  **Important Notice on Monorepo Migration (Sprint 2 / US-2.1):**
> 
> Currently, the backend API (`stretch_armstrong_app_services`) and frontend client (`stretch_armstrong_app_ui`) operate in separate repositories. To eliminate cross-repository branch drift, avoid merge conflicts, and streamline pull requests, **this services repository will be merged into a single consolidated project during Sprint 2**.
> 
> ### Target Project Layout
> Following consolidation, the root repository will be organized as follows:
> ```text
> stretch-armstrong-system/
> ├── client/                  # Frontend React + Tailwind application
> │   ├── index.html           # HTML entry point (references src/index.jsx)
> │   ├── package.json
> │   └── src/
> │       ├── components/      # UI components (RecoveryCheckIn, WorkoutSheet, etc.)
> │       └── index.jsx        # Root React hydration
> ├── server/                  # Backend Node / Express REST API (this code)
> │   ├── config/db.js         # MySQL pool connection module
> │   ├── routes/              # Modular route handlers (/api/workouts, /api/clients)
> │   ├── server.js            # Express server entry point & middleware config
> │   └── package.json
> └── db/                      # Standalone .sql schema definitions (dump.sql conventions)
>     ├── 01_customer_schema.sql
>     ├── 02_exercise_schema.sql
>     └── 03_biometrics_schema.sql
> ```
> *Note: Outstanding Sprint 1 service branches and PRs will be integrated prior to moving code into `/server`.*

---

## Getting Started (Local Development)

### Prerequisites
* [Node.js](https://nodejs.org) (`v18.x` or higher).
* Active local SQL database instance (e.g., MySQL or SQLite for local testing).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-org-or-username>/stretch_armstrong_app_services.git
   cd stretch_armstrong_app_services
