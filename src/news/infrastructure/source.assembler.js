import { LogoDevApi } from "../../shared/infrastructure/logo-dev-api.js";
import { Source } from "../domain/model/source.entity.js";

const logoApi = new LogoDevApi();

export class SourceAssembler {
    static toEntityFromResource(resource) {
        let source = new Source({...resource});
        source.urlToLogo = source.url !== '' ? logoApi.getUrlToLogo(source.url) : '';
        return source;
    }

    static toEntitiesFromResources(resources) {
    }
}