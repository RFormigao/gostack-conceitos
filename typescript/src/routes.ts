import { Request, Response } from "express";
import createUser from './services/CreateUser'

export function helloWorld(request: Request , response: Response) {
  const user = createUser({
    email: 'rformigao.gomes@gmail.com',
    password: '#123456',
    name: 'Robson Formigão',
    techs: ['Node JS', 'React', 'React Native', { title: 'Top', experience: 458 }]
  });

  console.log(user.name)

  return response.json({ message: 'Hello World' })
}