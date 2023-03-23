import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  postToDb(user) {
    return prisma.user.create({
      data: user,
    });
  }

  getAll(){
    return prisma.user.findMany()
  }

  UsersForName(name: string){
    return prisma.user.findMany({
        where:{
            name: name

        }
    })

  }


}
