import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import { EnquiryModel, EnquirySchema } from "./enquiry-schema";

class EnquiryController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, EnquiryModel, EnquirySchema);
  }
}

export default EnquiryController;
