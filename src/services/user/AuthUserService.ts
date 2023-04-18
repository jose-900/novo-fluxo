import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserService{
  async execute({ email, password }: AuthRequest){

    const user = await prismaClient.user.findFirst({
      where:{
        email: email,
      }
    })

    if(!user){
      throw new Error("Email/Password incorret")
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email/Password incorret")
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id 
      }
    )

    return{
      id: user.id,
      name: user.name,
      token: token
    }

  }
}

export { AuthUserService };