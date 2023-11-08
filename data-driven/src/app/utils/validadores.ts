import { AbstractControl } from "@angular/forms";

export class Validadores {

    static validarEmail(control: AbstractControl) {
        const email = control.value as string;
        if (email.length == 0) {
            return { vazio: true };
        }
        let usuario = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@") + 1, email.length);
        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return { valido: true };
        }
        return { valido: false };
    }

    static validarNome(control: AbstractControl) {
        const nome = control.value as string;
        if (nome.length == 0) {
            return { vazio: true };
        }

        if (nome.length >= 3) {
            return { valido: true };
        }
        return { valido: false };
    }

    static validarDataNascimento(control: AbstractControl) {
        if ((control.value as string).length == 0) {
            return { vazio: true };
        }
        const data = new Date(control.value as string);
        if (data.getTime() < new Date().getTime()) {
            return { valido: true };
        }
        return { valido: false };
    }

    static validarCpf(control: AbstractControl) {
        const cpf = control.value as string;
        if (cpf.length == 0) {
            return { vazio: true };
        }

        let numbers, digits, sum, i, result, equalDigits;

        equalDigits = 1;

        if (cpf.length < 11) {
            return { valido: false };
        }

        numbers = cpf.substring(0, 9);
        digits = cpf.substring(9);
        sum = 0;

        for (i = 10; i > 1; i--) {
            sum += (numbers.charAt(10 - i) as unknown as number) * i;
        }

        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        if (result !== Number(digits.charAt(0))) {
            return { valido: false };
        }

        numbers = cpf.substring(0, 10);
        sum = 0;

        for (i = 11; i > 1; i--) {
            sum += (numbers.charAt(11 - i) as unknown as number) * i;
        }

        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        if (result !== Number(digits.charAt(1))) {
            return { valido: false };
        }

        return { valido: true };
    }

}

