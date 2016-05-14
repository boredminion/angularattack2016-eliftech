import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {NG2_UI_AUTH_PROVIDERS, JwtHttp} from 'ng2-ui-auth';

const GOOGLE_CLIENT_ID = '616075536950-pauau0e7u0c980llqh99ftvg3sd32c61.apps.googleusercontent.com';
const GITHUB_CLIENT_ID = '54c368d51bca18a17397';

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({
        providers: {
            google: {clientId: GOOGLE_CLIENT_ID},
            github: {clientId: GITHUB_CLIENT_ID}
        }
    }),
]);
