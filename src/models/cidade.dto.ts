import { Identifiers } from "@angular/compiler";
import { EstadoDTO } from "./estado.dto";

export interface CidadeDTO {
    id : String;
    nome : String;
    estado? : EstadoDTO;
}