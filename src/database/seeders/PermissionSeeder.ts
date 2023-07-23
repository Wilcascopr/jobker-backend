import Permission from '../../models/Permission';

const permissions = [
    {
        name: 'Crear usuarios',
        machineName: 'users.create',
    },
    {
        name: 'Actualizar usuarios',
        machineName: 'users.update',
    },
    {
        name: 'Eliminar usuarios',
        machineName: 'users.delete',
    },
    {
        name: 'Ver usuarios',
        machineName: 'users.view',
    },
    {
        name: 'Crear roles',
        machineName: 'roles.create',
    },
    {
        name: 'Actualizar roles',
        machineName: 'roles.update',
    },
    {
        name: 'Eliminar roles',
        machineName: 'roles.delete',
    },
    {
        name: 'Ver roles',
        machineName: 'roles.view',
    },
    {
        name: 'Crear permisos',
        machineName: 'permissions.create',
    },
    {
        name: 'Actualizar permisos',
        machineName: 'permissions.update',
    },
    {
        name: 'Eliminar permisos',
        machineName: 'permissions.delete',
    },
    {
        name: 'Ver permisos',
        machineName: 'permissions.view',
    },
    {
        name: 'Crear publicaciones',
        machineName: 'posts..create',
    },
    {
        name: 'Actualizar publicaciones',
        machineName: 'posts.management.update',
    },
    {
        name: 'Eliminar publicaciones',
        machineName: 'posts.management.delete',
    },
    {
        name: 'Ver publicaciones',
        machineName: 'posts.management.view',
    },
];

const seedPermissions = async () => {
    for (const permission of permissions) {
        try {
            await Permission.findOrCreate({
                where: {
                    name: permission.name,
                    machineName: permission.machineName
                }
            });
        } catch (error: any) {
            console.log(error.message);
            break;
        }
    }
}

export default seedPermissions;
