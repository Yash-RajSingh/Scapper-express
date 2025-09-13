
# Internship Scraper API

A TypeScript-based web scraper that fetches internship listings from Internshala across various categories.

## Project Structure

```
src/
├── controllers/        # Request handlers
│   └── internshipController.ts
├── services/          # Business logic
│   └── scraper.ts
├── routes/           # Route definitions
│   └── internshipRoutes.ts
├── types/            # TypeScript interfaces
│   └── internship.ts
├── config/           # Configuration files
│   └── urls.ts
└── index.ts          # Application entry point
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Yash-RajSingh/Scapper-express.git
cd Scapper-express-master
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Welcome message |
| `GET /openings/web_development` | Web development internships |
| `GET /openings/graphic_design` | Graphic design internships |
| `GET /openings/campus_ambassador` | Campus ambassador internships |
| `GET /openings/content_writing` | Content writing internships |
| `GET /openings/software_engineering` | Software engineering internships |
| `GET /openings/legal` | Legal internships |
| `GET /openings/business_development` | Business development internships |
| `GET /openings/data_analytics` | Data analytics internships |
| `GET /openings/human_resource` | Human resource internships |
| `GET /openings/app_development` | App development internships |

## Response Format

```json
[
  {
    "role": "Frontend Developer Intern",
    "company": "Tech Company",
    "location": "Remote",
    "stipend": "₹15,000 /month",
    "apply_by": "31 Dec' 24",
    "link": "/internship/detail/123456",
    "logo": "https://internshala.com/logo.png",
    "skills": ["React", "JavaScript", "CSS"]
  }
]
```
## License

ISC License
## Disclaimer

This scraper is for educational purposes only. Please respect Internshala's robots.txt and terms of service when using this tool.
