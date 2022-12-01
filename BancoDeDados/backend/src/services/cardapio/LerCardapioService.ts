import prismaClient from '../../prisma';


interface UserRequest {
    nomePrato: string;
}
class LerCardapioService {
    async execute({nomePrato }: UserRequest) {
        //vamos verificar se enviou Usename
        if (!nomePrato) {
            throw new Error("Nome do usuario deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.cardapio.findFirst({
            where: {
                nomePrato: nomePrato

            }
        })
        if (!userAlreadyExists){
            throw new Error("prato nao existe no DB User")
        }

        const user={

            nomePrato:nomePrato
         
        }
    
        return user;
    }
}
export { LerCardapioService }