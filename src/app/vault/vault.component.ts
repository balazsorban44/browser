import * as template from './vault.component.html';

import {
    Component,
    OnInit,
} from '@angular/core';

import { CipherService } from 'jslib/abstractions/cipher.service';

@Component({
    selector: 'app-vault',
    template: template,
})
export class VaultComponent implements OnInit {
    ciphers: any[];

    constructor(private cipherService: CipherService) {

    }

    async ngOnInit() {
        this.ciphers = await this.cipherService.getAllDecrypted();
    }
}