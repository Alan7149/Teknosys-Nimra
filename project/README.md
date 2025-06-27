# Nimra Website 

This project is a clone of the precision.ae website, built with React for the frontend and Django for the backend.

## Frontend (React)

The frontend is built with React and uses the following technologies:

- React with TypeScript
- React Router for routing
- Tailwind CSS for styling
- Framer Motion for animations
- Swiper for sliders
- Axios for API requests
- Lucide React for icons

### Running the Frontend

```bash
# Navigate to the project root
cd /home/project

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Backend (Django)

The backend is built with Django and Django REST Framework.

### Setup the Backend

```bash
# Navigate to the Django backend directory
cd django_backend

# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create a superuser (for admin access)
python manage.py createsuperuser

# Start the development server
python manage.py runserver
```

## API Endpoints

The backend provides the following API endpoints:

- `/api/services/` - Get all services
- `/api/services/{slug}/` - Get a specific service
- `/api/projects/` - Get all projects
- `/api/projects/{slug}/` - Get a specific project
- `/api/posts/` - Get all blog posts
- `/api/posts/{slug}/` - Get a specific blog post
- `/api/team/` - Get all team members
- `/api/testimonials/` - Get all testimonials
- `/api/contact/` - Submit a contact form

## Project Structure

- `/src/components` - React components
- `/src/pages` - React pages
- `/src/assets` - Static assets
- `/django_backend` - Django backend code
- `/django_backend/precision_api` - Django REST API app

## Features

- Responsive design
- Dynamic content loaded from the Django backend
- Contact form with validation
- Services and projects showcases
- Blog/News section
- Team members section
- Testimonials
