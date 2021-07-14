// EMPLOYMENT TYPES
const EmploymentTypesData = {
    ON_ROLL: 'On-Roll',
    CONSULTANT: 'Consultant',
    CLIENT: 'Client',
};

export const EMPLOYMENT_TYPES = {};

export const EMPLOYMENT_TYPES_LIST = Object.keys(EmploymentTypesData).map((key) => {
    EMPLOYMENT_TYPES[key] = key;

    return {
        value: key,
        label: EmploymentTypesData[key],
    };
});

// USER TYPES
const UserTypesData = {
    SUPER_ADMIN: 'Super Admin',
    ADMIN: 'Admin',
    MANAGER_INTERNAL: 'Manager – Internal',
    ASSISTANT_MANAGER_INTERNAL: 'Assistant Manager – Internal',
    TEAM_LEADER: 'Team Leader',
    FIELD_SUPERVISOR: 'Field Supervisor',
    FIELD_EXECUTIVE: 'Field Executive',
    MIS_BACK_OFFICE: 'MIS Back Office',
    AUDIT_EXECUTIVE: 'Audit Executive',
    CONSULTANT: 'Consultant',
    CLIENT_REPRESENTATIVE: 'Client Representative',
};

export const USER_TYPES = {};

export const USER_TYPES_LIST = Object.keys(UserTypesData).map((key) => {
    USER_TYPES[key] = key;

    return {
        value: key,
        label: UserTypesData[key],
    };
});

// DESIGNATION
export const DesignationTypesData = {
    SR_MANAGER: 'Sr. Manager',
    MANAGER: 'Manager',
    EXECUTIVE: 'Executive',
};

export const DESIGNATION_TYPES = {};

export const DESIGNATION_TYPES_LIST = Object.keys(DesignationTypesData).map((key) => {
    DESIGNATION_TYPES[key] = key;

    return {
        value: key,
        label: DesignationTypesData[key],
    };
});

// FIRM TYPE
export const firmTypesData = {
    PROPRIETARY: 'Proprietary',
    PARTNER_SHIP: 'Partner Ship',
    PVT_LTD: 'Pvt. Ltd.',
};

export const FIRM_TYPES = {};

export const FIRM_TYPES_LIST = Object.keys(firmTypesData).map((key) => {
    FIRM_TYPES[key] = key;

    return {
        value: key,
        label: firmTypesData[key],
    };
});

export default {
    EMPLOYMENT_TYPES,
    EMPLOYMENT_TYPES_LIST,
    USER_TYPES,
    USER_TYPES_LIST,
    FIRM_TYPES,
    FIRM_TYPES_LIST,
};
