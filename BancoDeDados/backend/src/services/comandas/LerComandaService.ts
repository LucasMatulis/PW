import prismaClient from '../../prisma';


interface UserRequest {
    numeroMesa: number;
    pedido:string;
    idUser:number;
}
class LerComandaService {
    async execute({ numeroMesa,pedido,idUser}: UserRequest) {
        //vamos verificar se enviou Usename
        if (!numeroMesa) {
            throw new Error("Nome do usuario deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.comanda.findFirst({
            where: {
                numeroMesa: numeroMesa,
                idUser:idUser,
                pedido:pedido

            }
        })
        if (!userAlreadyExists){
            throw new Error("mesa nao existe no DB User")
        }

        const user={

            nomeU:numeroMesa,
            ID:idUser,
            Pedido:pedido
        }
    
        return user;
    }
}
export { LerComandaService }