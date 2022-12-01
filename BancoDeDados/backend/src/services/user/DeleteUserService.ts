import prismaClient from '../../prisma';


interface UserRequest {
    id:number;
}
class DeleteUserService {
    async execute({ id}: UserRequest) {
        //vamos verificar se enviou Usename
        if (!id) {
            throw new Error("ID do usuario deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                idUser:id
            }
        })
        if (!userAlreadyExists){
            throw new Error("usuario nao existe no DB User")
        }
        else{
            await prismaClient.user.delete({
                where: {
                    idUser:id
                }
            })

            return { "Usuário": "Deletado" };
        }

    }
}
export { DeleteUserService }