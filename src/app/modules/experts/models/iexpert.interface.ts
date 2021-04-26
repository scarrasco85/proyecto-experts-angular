import { Tag } from "../../tags/models/tag.model";

export interface IExpert {
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    statusMotive?: string;
    availability?: string;
    modality?: string;
    freelance?: boolean; // default fasle
    contactPhone: string;
    contactEmail: string;
    contactCity: string;
    contactLinkedin?: string;
    conditionsPercent?: number;
    conditionsPriceHour?: number;
    score?: string;
    nif: string;
    emailCredentials?: string;
    emailCredentialsPassword?: string;
    zoomCredentials?: string;
    zoomCredentialsPassword?: string;
    photoFile?: string;
    cvFile?: string;
    observations?: string;
    origin?: string;
    status: string; // default 'pendiente'
    tags?: Tag[];
}
