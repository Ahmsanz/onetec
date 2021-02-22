import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { MetaService } from '../service/meta.service';


@Controller('meta')
export class MetaController {

    private metaResponse: string = process.env.npm_package_version as string;
    private variable: string = process.env.NODE_ENV as string;

    constructor(private readonly metaService: MetaService){}

    @Get('/')
    getMeta(
        @Res() res: Response
    ): void {
        res.status(HttpStatus.OK).json({version: this.metaResponse, NODE_ENV: this.variable});
    }
}
