import {
  Post,
  Controller,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import {
  GetCurrentUserId,
  GetCurrentUser,
  Public,
} from '../common/decorators/';
import { RtGuard } from 'src/common/guards';
import { AtGuard } from 'src/common/guards/at.guard';
@Controller('')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/me')
  getMe() {
    return { message: 'Authenticated' };
  }

  @Public()
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Public()
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: number) {
    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUser('refreshToken') refreshTokens: string,
    @GetCurrentUserId() userId: number,
  ) {
    return this.authService.refreshTokens(userId, refreshTokens);
  }
}
