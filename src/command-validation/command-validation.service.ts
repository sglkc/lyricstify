import { Injectable } from '@nestjs/common';
import chalk from 'chalk';
import { HorizontalAlignChoicesType } from '../transformation/types/horizontal-align-choices.type.js';

@Injectable()
export class CommandValidationService {
  validateSpotifyClientIdentity(id: string) {
    return /^[a-zA-Z0-9]{32}$/.test(id);
  }

  validateSpotifyClientIdentityOrFail(id: string, type: 'id' | 'password') {
    if (this.validateSpotifyClientIdentity(id) === false) {
      throw new Error(
        chalk.redBright(`<client-${type}> should be a valid value`),
      );
    }
  }

  validateRedirectUriPort(redirectUriPort: number) {
    return this.isPositiveNumber(redirectUriPort);
  }

  validateRedirectUriPortOrFail(redirectUriPort: number) {
    if (this.validateRedirectUriPort(redirectUriPort) === false) {
      throw new Error(
        chalk.redBright(
          '<redirect-uri-port> should be a valid positive number',
        ),
      );
    }
  }

  validateInputsCommandOrFail(inputs: string[]) {
    if (inputs.length !== 0) {
      throw new Error(
        chalk.redBright(`${inputs.join(',')} is not valid command!`),
      );
    }
  }

  validateVerticalSpacingOptionOrFail(verticalSpacing: number) {
    if (this.isPositiveNumber(verticalSpacing) === false) {
      throw new Error(
        chalk.redBright('<vertical-spacing> should be a valid positive number'),
      );
    }
  }

  validateDelayOptionOrFail(delay: number) {
    if (this.isPositiveNumber(delay) === false) {
      throw new Error(
        chalk.redBright('<delay> should be a valid positive number'),
      );
    }
  }

  validateHorizontalAlignOptionOrFail(val: string) {
    const choices = this.horizontalAlignChoices();

    if (this.isPartOfHorizontalAlignChoices(val) === false) {
      throw new Error(
        chalk.redBright(
          `<horizontal-align> should be one of the following options: ${choices.join(
            ', ',
          )}.`,
        ),
      );
    }
  }

  horizontalAlignChoices(): HorizontalAlignChoicesType[] {
    return ['center', 'left', 'right'];
  }

  private isPositiveNumber(val: number) {
    return Number.isInteger(val) === true && val > 0;
  }

  private isPartOfHorizontalAlignChoices(
    val: string,
  ): val is HorizontalAlignChoicesType {
    return this.horizontalAlignChoices().includes(
      val as HorizontalAlignChoicesType,
    );
  }
}
