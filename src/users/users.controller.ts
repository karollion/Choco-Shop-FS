import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getAll(): any {
    return this.usersService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.usersService.getById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Delete('/:id')
  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  public async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.usersService.getById(id)))
      throw new NotFoundException('404 User not found');

    await this.usersService.deleteById(id);
    return { success: true };
  }
}
