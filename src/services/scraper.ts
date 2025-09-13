import axios from 'axios';
import * as cheerio from 'cheerio';
import { Internship, ScrapingResult } from '../types/internship';

export class ScraperService {
  private static cleanText(text: string): string {
    return text.trim();
  }

  private static extractSkills($: cheerio.Root, element: cheerio.Element): string[] {
    return $(element)
      .find('.job_skills .job_skill')
      .map((_: number, el: cheerio.Element) => $(el).text().trim())
      .get();
  }

  private static parseInternshipData($: cheerio.Root, element: cheerio.Element, includeSkills = false): Internship {
    const roleSelector = includeSkills ? '.job-title-href' : '.profile';
    const locationSelector = includeSkills ? '.locations > span > a' : '.location_link';
    const applyBySelector = includeSkills ? '.ic-16-calendar ~ span' : '.apply_by > .item_body';

    const role = this.cleanText($(element).find(roleSelector).text());
    const company = this.cleanText(
      $(element)
        .find(".company_name")
        .text()
        .trimStart()
        .trimEnd()
    );
    const location = this.cleanText($(element).find(locationSelector).text());
    const stipend = this.cleanText($(element).find('.stipend').text());
    const apply_by = this.cleanText($(element).find(applyBySelector).text());
    const logo = $(element).find('.internship_logo > img').attr('src') || '';
    const link = $(element).find('a').attr('href') || '';

    const internship: Internship = {
      role,
      company,
      location,
      stipend,
      apply_by,
      link,
      logo
    };

    if (includeSkills) {
      internship.skills = this.extractSkills($, element);
    }

    return internship;
  }

  public static async scrapeInternships(url: string, includeSkills = false): Promise<ScrapingResult> {
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const internships: Internship[] = [];

      $('.internship_meta', html).each((_index: number, element: cheerio.Element) => {
        const internship = this.parseInternshipData($, element, includeSkills);
        internships.push(internship);
      });

      return {
        success: true,
        data: internships
      };
    } catch (error) {
      console.error('Scraping error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
} 