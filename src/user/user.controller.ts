import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserSchema } from './user.interface';
import { UserService } from './user.service';


@Controller('users')
export class UserController {

  constructor(private userService: UserService){

  }
  @Post()
  @HttpCode(201)
  public async criaUser(@Body() user) {
  
      UserSchema.parse(user);
      const res = await this.userService.postToDb(user)
      return res;
      
    
   
      
    
  }
  
  @Get()
  public getAllUsers() {
    return this.userService.getAll()
    
  }
  
  @Get("buscar")
  public getUsersForName(@Query("userName") userName) {
    return this.userService.UsersForName(userName)
   
  }


  
}
