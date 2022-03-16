import { FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidators {
    static restrictedEmails(control: FormControl): {restrictedEmail: boolean} | null { //можно также более универсално написать {[key: string]: boolean}
        if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }
        return null;
    }

    // различия в версиях Angular для асинхронных валидаторов, в более ранних тип control - FormControl, в 12-ой версии AbstractControl
    static uniqEmails(control: AbstractControl): Promise<{unicEmail: boolean} | null> | Observable<{unicEmail: boolean} | null> {
        return new Promise( resolve => {
            setTimeout(() => {
                if ( control.value === 'async@mail.ru') {
                    resolve({unicEmail: true})
                } else { // обязательно нужно прописать все варианты и выполнить resolve
                    resolve(null)// иначе состояние поля или самой формы так и останется pending
                }
            }, 3000)
        })
    }
}