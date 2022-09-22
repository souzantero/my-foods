import { RefreshUserEmailConfirmationCodeRepository } from '../repositories/refresh-user-email-confirmation-code-repository'

export class RefreshUserEmailConfirmationCodeService {
  constructor(
    private readonly repository: RefreshUserEmailConfirmationCodeRepository
  ) {}

  async refresh(email: string): Promise<void> {
    return this.repository.refreshUserEmailConfirmationCode(email)
  }
}
