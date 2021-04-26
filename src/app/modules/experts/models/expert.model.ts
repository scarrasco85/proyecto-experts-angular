import { Tag } from '../../tags/models/tag.model';
import { IExpert } from './iexpert.interface';

export class Expert implements IExpert{
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    statusMotive?: string;
    availability?: string;
    modality?: string;
    freelance?: boolean;
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
    status: string;
    tags?: Tag[];

    constructor(id: number, name: string, createdAt: Date, updatedAt: Date, statusMotive: string,
        availability: string,  modality: string, freelance: boolean,  contactPhone: string,
        contactEmail: string, contactCity: string,  contactLinkedin: string,  conditionsPercent: number,
        conditionsPriceHour: number, score: string, nif: string, emailCredentials: string, emailCredentialsPassword: string,
        zoomCredentials: string, zoomCredentialsPassword: string, photoFile: string, cvFile: string, observations: string,
        origin: string, status: string, tags: Tag[]
        ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.statusMotive = statusMotive;
        this.availability = availability;
        this.modality = modality;
        this.freelance = freelance;
        this.contactPhone = contactPhone;
        this.contactEmail = contactEmail;
        this.contactCity = contactCity;
        this.contactLinkedin = contactLinkedin;
        this.conditionsPercent = conditionsPercent;
        this.conditionsPriceHour = conditionsPriceHour;
        this.score = score;
        this.nif = nif;
        this.emailCredentials = emailCredentials;
        this.emailCredentialsPassword = emailCredentialsPassword;
        this.zoomCredentials = zoomCredentials;
        this.zoomCredentialsPassword = zoomCredentialsPassword;
        this.photoFile = photoFile;
        this.cvFile = cvFile;
        this.observations = observations;
        this.origin = origin;
        this.status = status;
        this.tags = tags;
    }
}
