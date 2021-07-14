import { Connection } from "mongoose";
import { jwtSign } from "src/helpers/jwt-helper";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import FileController from "../files/file-controller";
import { UserModel, UserSchema } from "./user-schema";

class UserController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, UserModel, UserSchema);
  }

  async validate({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) {
    if (!password || !identifier) {
      throw "Credentials not provided";
    }

    const {
      data: [user],
    }: any = await this.search({
      where: {
        userId: {
          $regex: identifier,
          $options: "i",
        },
        password,
      },
    });

    // found
    if (user) {
      const { userType, _id, personalInfo } = user;

      // fetch profile pic
      const fileController = new FileController(this.connection);
      const { data: userPics }: any = await fileController.search({
        where: {
          refId: _id,
          source: "users",
        },
      });

      const profilePicUrl = userPics && userPics[userPics.length - 1]?.url;

      return {
        token: jwtSign({
          userType,
          userId: _id,
          personalInfo,
          profilePicUrl,
        }),
      };
    }

    throw "Invalid Auth Credentials";
  }
}

export default UserController;
