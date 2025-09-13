import { Request, Response } from 'express';
import { ScraperService } from '../services/scraper';
import { INTERNSHALA_URLS } from '../config/urls';

export class InternshipController {
  public static async getWebDevelopmentInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.WEB_DEVELOPMENT, true);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getGraphicDesignInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.GRAPHIC_DESIGN);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getCampusAmbassadorInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.CAMPUS_AMBASSADOR);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getContentWritingInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.CONTENT_WRITING);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getSoftwareEngineeringInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.SOFTWARE_ENGINEERING);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getLegalInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.LEGAL);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getBusinessDevelopmentInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.BUSINESS_DEVELOPMENT);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getDataAnalyticsInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.DATA_ANALYTICS);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getHumanResourceInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.HUMAN_RESOURCE);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static async getAppDevelopmentInternships(req: Request, res: Response): Promise<void> {
    const result = await ScraperService.scrapeInternships(INTERNSHALA_URLS.APP_DEVELOPMENT);
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  }

  public static getWelcomeMessage(req: Request, res: Response): void {
    res.send("Well Well Well, if it ain't the unlucky unemployed bub. Welcome to the internship scraper.");
  }
} 