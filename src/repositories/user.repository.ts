import User from '../models/userModel';

class UserRepository {
  async findUser(username: string, password: string) {
    //Note: password should have been matched by using bcrypt
    return User.findOne({where: {username, password}});
  }

}

export default new UserRepository();

