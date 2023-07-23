import Role from '../../models/Role';;

const roles = [
    {
        name: 'Administrador',
        machineName: 'administrator',
    },
    {
        name: 'Moderador de Contenido',
        machineName: 'moderator',
    },
    {
        name: 'Usuario',
        machineName: 'user',
    }
];

const seedRoles = async () => {
    for (const role of roles) {
        try {
            await Role.findOrCreate({
                where: {
                    name: role.name,
                    machineName: role.machineName
                }
            });
        } catch (error: any) {
            console.log(error.message);
            break;
        }
    }
}

export default seedRoles;
