export interface Source {
    type: string;
    id: string;
}

export interface Metadata {
    primary: boolean;
    source: Source;
}

export interface Name {
    metadata: Metadata;
    displayName: string;
    familyName: string;
    givenName: string;
    displayNameLastFirst: string;
    unstructuredName: string;
}

export interface Source2 {
    type: string;
    id: string;
}

export interface Metadata2 {
    primary: boolean;
    verified: boolean;
    source: Source2;
}

export interface EmailAddress {
    metadata: Metadata2;
    value: string;
}

export interface IGoogleLoginResponse {
    resourceName: string;
    etag: string;
    names: Name[];
    emailAddresses: EmailAddress[];
}
