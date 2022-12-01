import prismaClient from '../../prisma';


interface UserRequest {
    nmuser: string;
    id:number;
}
class LerUserService {
    async execute({ nmuser,id}: UserRequest) {
        //vamos verificar se enviou Usename
        if (!nmuser) {
            throw new Error("Nome do usuario deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                nomeUser: nmuser,
                idUser:id
            }
        })
        if (!userAlreadyExists){
            throw new Error("usuario nao existe no DB User")
        }

        const user={

            nomeU:nmuser,
            ID:id
        }
    
        return user;
    }
}
export { LerUserService }