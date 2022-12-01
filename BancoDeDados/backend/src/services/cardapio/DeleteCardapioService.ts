import prismaClient from '../../prisma';


interface UserRequest {
    idPrato:number;
}
class DeleteCardapioService {
    async execute({ idPrato}: UserRequest) {
        //vamos verificar se enviou Usename
        if (!idPrato) {
            throw new Error("ID do item deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.cardapio.findFirst({
            where: {
                idPrato:idPrato
            }
        })
        if (!userAlreadyExists){
            throw new Error("item nao existe no DB User")
        }
        else{
            await prismaClient.cardapio.delete({
                where: {
                    idPrato:idPrato
                }
            })

            return { "Item": "Deletado" };
        }

    }
}
export { DeleteCardapioService }