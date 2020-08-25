export const validatePassword = (values: {
    masterPassword: string;
    repeatMasterPassword: string;
    hint: string;
}) => {
    const errors = {};

    if (!values.masterPassword) {
        Object.assign(errors, {
            masterPassword: 'passwordRequired',
        });

        return errors;
    }

    if (!values.repeatMasterPassword) {
        Object.assign(errors, {
            repeatMasterPassword: 'passwordRequired',
        });

        return errors;
    }

    // Al menos una mayúscula, una minúscula y un número,
    // entre 8 y 24 caracteres y sin caracteres especiales
    const passwordRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/
    );

    if (values.masterPassword.length < 8 || values.masterPassword.length > 24) {
        Object.assign(errors, { masterPassword: 'passwordBetween8and24' });
    }

    if (values.masterPassword !== values.repeatMasterPassword) {
        Object.assign(errors, { repeatMasterPassword: 'passwordsDoNotMatch' });
    }

    if (!passwordRegex.test(values.masterPassword)) {
        Object.assign(errors, { masterPassword: 'invalidPassword' });
    }

    return errors;
};
