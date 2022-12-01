import prismaClient from '../../prisma';


interface UserRequest {
    nmuser: string;
    senha: string;
    perfil: number;
}
class ValidarUserService {
    async execute({ nmuser, senha, perfil }: UserRequest) {
        //vamos verificar se enviou Usename
        if (!nmuser && !senha && !perfil) {
            throw new Error("Algum requisito não foi informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                nomeUser: nmuser,
                senha:senha,
                perfilUser:perfil
            }
        })
        if (userAlreadyExists){
            return userAlreadyExists;
        }
    }
}
export { ValidarUserService }