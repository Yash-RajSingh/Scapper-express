export const INTERNSHALA_URLS = {
  WEB_DEVELOPMENT: "https://internshala.com/internships/keywords-web%20development/",
  GRAPHIC_DESIGN: "https://internshala.com/internships/keywords-graphic%20design/",
  CAMPUS_AMBASSADOR: "https://internshala.com/internships/keywords-Campus%20Ambassador/",
  CONTENT_WRITING: "https://internshala.com/internships/keywords-content%20writing/",
  SOFTWARE_ENGINEERING: "https://internshala.com/internships/keywords-software%20engineering/",
  LEGAL: "https://internshala.com/internships/keywords-law/",
  BUSINESS_DEVELOPMENT: "https://internshala.com/internships/keywords-business/",
  DATA_ANALYTICS: "https://internshala.com/internships/keywords-data%20analytics/",
  HUMAN_RESOURCE: "https://internshala.com/internships/keywords-human%20resource/",
  APP_DEVELOPMENT: "https://internshala.com/internships/keywords-app%20development/"
} as const;

export type InternshipCategory = keyof typeof INTERNSHALA_URLS; 