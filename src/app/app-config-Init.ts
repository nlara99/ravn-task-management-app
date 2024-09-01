import { ConfigService } from "./modules/shared/services/config.service";


export function appConfigInit(appConfig: ConfigService) {
    return () => {
        return appConfig.loadConfig();
    }
}
