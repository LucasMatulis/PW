import prismaClient from '../../prisma';


interface UserRequest {
    idComanda:number;
}
class DeleteComandaService {
    async execute({ idComanda}: UserRequest) {
        //vamos verificar se enviou Usename
        if (!idComanda) {
            throw new Error("ID da comanda deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.comanda.findFirst({
            where: {
                idComanda:idComanda
            }
        })
        if (!userAlreadyExists){
            throw new Error("Comanda nao existe no DB User")
        }
        else{
            await prismaClient.comanda.delete({
                where: {
                    idComanda:idComanda
                }
            })

            return { "Comanda": "Deletada" };
        }

    }
}
export { DeleteComandaService }