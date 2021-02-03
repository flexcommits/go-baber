import { uuid } from 'uuidv4';

import { IUserTokensRepository } from '@modules/users/repositories/interface-user-tokens-repository';

import { UserToken } from '../../infra/typeorm/entities/user-token';

export class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.userTokens.push(userToken);

    return userToken;
  }
}
