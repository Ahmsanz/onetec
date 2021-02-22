import { Injectable } from '@nestjs/common';

@Injectable()
export class MetaService {
    constructor(){}

    metaResponse(): string {
        return 'hey you!'
    }
}
