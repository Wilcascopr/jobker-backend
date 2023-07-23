import Role from '../../models/Role';
import Permission from '../../models/Permission';

const seedRolePermissions = async () => {
    
    const adminRole = await Role.findOne({
        where: {
            machineName: 'administrator'
        }
    });

    const adminPermissions = await Permission.findAll()

    adminRole?.addPermissions(adminPermissions);
}

export default seedRolePermissions;


