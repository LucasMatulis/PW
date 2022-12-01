import prismaClient from '../../prisma';


interface UserRequest {
    numeroMesa: number;
    pedido: string;
    idUser:number;
}
class CreateComandaService {
    async execute({ numeroMesa, pedido,idUser}: UserRequest) {



        //vamos verificar se enviou Usename
        if (!numeroMesa) {
            throw new Error("Numero da mesa deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.comanda.findFirst({
            where: {
                numeroMesa: numeroMesa
            }
        })
        if (userAlreadyExists){
            throw new Error("Mesa já tem uma comanda")
        }
        const comanda = await prismaClient.comanda.create({
            data:{
                numeroMesa:numeroMesa,
                pedido:pedido,
                idUser:idUser
            }

        })

        return comanda;
    }
}
export { CreateComandaService }