import UserRepository from '../repositories/user.repository';

class UserService {
    public async getUserByIdPassword(username: string, password: string) {
        return UserRepository.findUser(username,password);
    }
}

export default new UserService();