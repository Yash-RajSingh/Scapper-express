import { Router } from 'express';
import { InternshipController } from '../controllers/internshipController';

const router = Router();

router.get('/', InternshipController.getWelcomeMessage);
router.get('/openings/web_development', InternshipController.getWebDevelopmentInternships);
router.get('/openings/graphic_design', InternshipController.getGraphicDesignInternships);
router.get('/openings/campus_ambassador', InternshipController.getCampusAmbassadorInternships);
router.get('/openings/content_writing', InternshipController.getContentWritingInternships);
router.get('/openings/software_engineering', InternshipController.getSoftwareEngineeringInternships);
router.get('/openings/legal', InternshipController.getLegalInternships);
router.get('/openings/business_development', InternshipController.getBusinessDevelopmentInternships);
router.get('/openings/data_analytics', InternshipController.getDataAnalyticsInternships);
router.get('/openings/human_resource', InternshipController.getHumanResourceInternships);
router.get('/openings/app_development', InternshipController.getAppDevelopmentInternships);

export default router; 