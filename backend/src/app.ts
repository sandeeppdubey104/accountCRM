// Jai Mata Di

import express from "express";
import bodyParser from "body-parser";
import CommonRoutes from "src/routes/common-routes";
import cors from "cors";
import HealthRoutes from "./routes/health";
import { initMongoConnection } from "./keepers/mongo-connection-keeper";
import UserRoutes from "./modules/user/user-routes";
import RemarkRoutes from "./modules/remark/remark-routes";
import CityRoutes from "./modules/city/city-routes";
import StateRoutes from "./modules/state/state-routes";
import AuthMiddleware from "./middlewares/auth-middleware";
import ProductRoutes from "./modules/product/product-routes";
import TaxRoutes from "./modules/tax/tax-routes";
import LeadRoutes from "./modules/lead/lead-routes";
import ActivityRoutes from "./modules/activity/activity-routes";
import FileRoutes from "./modules/files/file-routes";
import CompanyRoutes from "./modules/company/company-routes";
import CompanyBranchRoutes from "./modules/company-branch/company-branch-routes";
import ClientRoutes from "./modules/client/client-routes";
import ClientBranchRoutes from "./modules/client-branch/client-branch-routes";
import CaseRoutes from "./modules/case/case-routes";
import PermissionsRoutes from "./modules/permissions/permissions-routes";
import PermissionsRolesRoutes from "./modules/permissions-roles/permissions-roles-routes";
import PermissionsUserRoutes from "./modules/permissions-user/permissions-user-routes";
//====New router by san
import TransporterRoutes from "./modules/transporter/transporter-routes";
import StationRoutes from "./modules/station/station-routes";

import CustomerRoutes from "./modules/customer/customer-routes";
import GroupCategoryRoutes from "./modules/group-category/group-category-routes";
import UomRoutes from "./modules/uom/uom-routes";
import SourceRoutes from "./modules/source/source-routes";
import EnquiryRoutes from "./modules/enquiry/enquiry-routes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // allow cors
    this.app.use(cors());
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  init() {
    // public routes
    const publicAppRoutes = [UserRoutes];
    publicAppRoutes.map((R) => new R("/api/", this.app)?.publicRoute());

    // middlewares
    this.app.use(AuthMiddleware);

    // authenticated app routes
    const appRoutes = [
      CaseRoutes,
      UserRoutes,
      RemarkRoutes,
      CityRoutes,
      StateRoutes,
      ProductRoutes,
      TaxRoutes,
      LeadRoutes,
      ActivityRoutes,
      FileRoutes,
      CompanyRoutes,
      CompanyBranchRoutes,
      ClientRoutes,
      ClientBranchRoutes,
      PermissionsRoutes,
      PermissionsRolesRoutes,
      PermissionsUserRoutes,
      TransporterRoutes,
      StationRoutes,
      CustomerRoutes,
      GroupCategoryRoutes,
      UomRoutes,
      EnquiryRoutes,
      SourceRoutes,
    ];
    appRoutes.map((R) => new R("/api/", this.app).route());

    // routes
    HealthRoutes(this.app);
    CommonRoutes.route(this.app);

    // init data base
    initMongoConnection(process.env.MONGO_URL);

    return this.app;
  }
}
export default App;
