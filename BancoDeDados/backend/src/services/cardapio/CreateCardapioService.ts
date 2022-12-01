import prismaClient from '../../prisma';


interface UserRequest {
    nomePrato: string;
}
class CreateCardapioService {
    async execute({ nomePrato}: UserRequest) {
        //vamos verificar se enviou Usename
        if (!nomePrato) {
            throw new Error("Nome do usuario deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.cardapio.findFirst({
            where: {
                nomePrato:nomePrato
            }
        })
        if (userAlreadyExists){
            throw new Error("usuario já existe no DB User")
        }
        const user = await prismaClient.cardapio.create({
            data:{
               nomePrato:nomePrato
            }
        })
        return user;
    }
}
export { CreateCardapioService }