import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import {
  GroupCategoryModel,
  GroupCategorySchema,
} from "./group-category-schema";

class GroupCategoryController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, GroupCategoryModel, GroupCategorySchema);
  }
}

export default GroupCategoryController;
