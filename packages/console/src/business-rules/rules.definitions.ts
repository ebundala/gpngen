import { Rule } from "json-rules-engine"
import { Role, State, User } from "../models/graphql"


export const onlyOwnerhasAccess = (id: string) => new Rule({
    name: "onlyOwnerhasAccess",
    event: {
        type: "isOwner",
        params: {
            message: 'Permission error Your\'e not the owner of this record'
        }
    },
    conditions: {
        all: [
            {
                fact: "uid",
                operator: 'notEqual',
                value: id,
            },
            {
                fact: "role",
                operator: 'notEqual',
                value: Role.SUPERUSER
            }
        ]
    }
})

export const isUserSensitiveInfo = (userId: string) => {
    const conditions = onlyOwnerhasAccess(userId).conditions;
    return new Rule(
        {
            name: 'isUserSesnsitiveInfo',
            priority: 10,
            event: {
                type: 'isSensitiveInfo',
                params: {
                    message: 'You dont have permission to access this user info'
                }
            },
            conditions: {
                any: [

                    {
                        all: [
                            {
                                fact: "email",
                                operator: 'equal',
                                value: true,
                                priority: 10,

                            },
                            conditions
                        ]
                    },
                    {
                        all: [
                            {
                                fact: "phoneNumber",
                                operator: 'equal',
                                value: true,
                            },
                            conditions
                        ]
                    },
                    {
                        all: [
                            {
                                fact: "orders",
                                operator: 'equal',
                                value: true,
                                path: '$.orders',
                            },
                            conditions
                        ]
                    }
                ]
            }
        });
}

export const onlyConnectOwnerSelf = (uid: string) => {
    return new Rule({
        name: "onlySelfCanConnectOwner",
        event: {
            type: "InvalidOwner",
            params: {
                message: "Invalid owner parameter must be current user"
            }
        },
        conditions: {
            all: [
                {
                    fact: "owner",
                    operator: "notEqual",
                    value: uid,
                    path: "$.connect.id"
                }
            ]
        }
    })
}

export const onlyConnectActiveOffers = (activeIds: string[]) => {
    return new Rule({
        name: "only connect active service category",
        event: {
            type: "onlyActiveServiceCategoryAllowed",
            params: {
                message: "Service category is not available"
            }
        },
        conditions: {
            all: [
                {
                    fact: "offers",
                    operator: "notIn",
                    value: activeIds,
                    path: "$.connect.0.id"
                },
                // {
                //     fact: "offers",
                //     operator: "notEqual",
                //     value: 1,
                //     path: "$.connect.length",
                //     priority: 10

                // }
            ]
        }
    })
}

export const canCreateOnlyOneOrganization = () => {
    return new Rule({
        name: "canCreateOnlyOneOrganization",
        event: {
            type: "hasOrganization",
            params: {
                message: "You already have an organization account"
            }
        },
        conditions: {
            all: [
                {
                    fact: 'organizations',
                    operator: "greaterThan",
                    value: 0,
                    path: '$.length'
                },

            ]
        }

    })
}
export const onlyServiceOfferedByOrg = (serviceId, organizationId) => {
    return new Rule({
        name: "is service offered by organization",
        event: {
            type: "serviceNotAvailable",
            params: {
                message: "Service is not available for this Organization"
            }
        },
        conditions: {
            any: [
                {
                    fact: "service",
                    operator: "notEqual",
                    value: serviceId,
                    path: "$.connect.id"
                },
                /* {
                    fact: "service",
                    operator: "notEqual",
                    value: State.APPROVED,
                    path: "$.connect.id"
                }, */
                {
                    fact: "organization",
                    operator: "notEqual",
                    value: organizationId,
                    path: "$.connect.id"
                }
            ]
        }
    })
}