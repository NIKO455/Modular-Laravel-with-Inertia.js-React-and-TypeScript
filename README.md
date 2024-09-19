# Modular Laravel with Inertia.js, React, and TypeScript

## Overview
This project combines Laravel, Inertia.js, React, and TypeScript to create a modular web application. It provides a robust architecture for building scalable and maintainable applications.

## Features
- **Modular Architecture**: Easily add and manage modules.
- **Inertia.js**: Enables single-page application (SPA) experience.
- **React**: Modern UI development.
- **TypeScript**: Type safety for better code quality.

## Prerequisites
- PHP >= 8.0
- Composer
- Node.js >= 14
- npm or Yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install JavaScript dependencies:
   ```bash
   npm install
   ```

4. Set up your environment:
   - Copy the `.env.example` to `.env` and configure your database and other settings.

5. Generate an application key:
   ```bash
   php artisan key:generate
   ```

6. Run migrations:
   ```bash
   php artisan migrate
   ```

7. Start the development server:
   ```bash
   php artisan serve
   ```

   And for the frontend:
   ```bash
   npm run dev
   ```

## Creating a Module

To create a new module in Laravel, you can use the following command (assuming you're using a package like `nwidart/laravel-modules`):

```bash
php artisan module:make ModuleName
```

Replace `ModuleName` with the desired name for your module. For more commands and details on managing modules, explore the [Laravel Modules Documentation](https://laravelmodules.com/docs/v11/introduction).
