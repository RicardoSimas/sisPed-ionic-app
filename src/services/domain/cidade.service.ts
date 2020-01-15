import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CidadeService {

    constructor(public http : HttpClient) {

    }

    findAll(estado_id : String) : Observable<CidadeDTO[]>{
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`)
    }
}