import { Request, Response } from "express";
import {
  errorResponser,
  successResponser,
} from "src/lib/response-util/responser";
import AbstractRoutes from "src/lib/routing-util/abstract-routes";
import { getMongoConnection } from "src/keepers/mongo-connection-keeper";
import StateController from "./state-controller";

const PATH_PREFIX: string = "/state";

export default class StateRoutes extends AbstractRoutes {
  public route() {
    this.router.post(
      `${PATH_PREFIX}/search`,
      async (req: Request, res: Response) => {
        try {
          const controller = new StateController(getMongoConnection());

          const data = await controller.search({
            ...req.body,
          });

          successResponser({
            data,
            res,
          });
        } catch (err) {
          console.error(err);

          errorResponser({
            data: err,
            res,
          });
        }
      }
    );
  }
}
