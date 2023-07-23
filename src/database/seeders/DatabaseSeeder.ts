import seedRoles from "./RoleSeeder";
import seedPermissions from "./PermissionSeeder";
import seedRolePermissions from "./RolePermissionSeeder";

const seedDB = async () => {
    try {
        await seedRoles();
        await seedPermissions();
        await seedRolePermissions();
        console.log("Database seeded");
    } catch (error) {
        console.error(error);
    }
}

export default seedDB;