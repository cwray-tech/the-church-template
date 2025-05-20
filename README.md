# The Church Template

The Church Template is a website and mobile app template that local churches can use to build a custom mobile app or website.
This project seeks to make it simple for churches to spin up a website and app for their local church, while offering deep customization features.

## Technologies

- Payload for the content management.
- NextJS for the website frontend.
- Expo/ReactNative for the mobile app. (Future)

## Prerequisites

- Node.js (v18.20.2 or >=20.9.0)
- pnpm (>=10.3.0)

## Installation

**Note: If running on Windows, Make sure to install this in WSL. Running on the windows filesystem will result in a very slow experience. This is an issue with NextJS, and the best way I've found to fix this is to just use WSL.**

1. Clone the repository:
```bash
git clone https://github.com/cwray-tech/the-church-template.git
cd the-church-template
```

2. Install dependencies:
```bash
pnpm install
```

## Development

To start the development server:

```bash
pnpm -r dev
```

The application will be available at `http://localhost:3000`

## Building for Production

To build the application for production:

```bash
pnpm -r build
```

### Starting the Production Server

```bash
pnpm -r start
```

## Docker Support

The project includes Docker support for containerized deployment, but I haven't used it so I can't guarantee it works. (Came default with the project starter from PayloadCMS)

```bash
cd web
# Build and start containers
docker-compose up -d

# Stop containers
docker-compose down
```

## In active development

This project is in its earliest stages. At this time, it is not feature complete, but it is usable.
