import { ITag } from './itag.interface';

export class Tag implements ITag{
    id: number;
    name: string;
    creator: string;
    createdAt: Date;
    updatedAt?: Date;

    constructor(id: number, name: string, creator: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
