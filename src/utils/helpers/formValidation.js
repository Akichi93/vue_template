export function validateCustomerForm(form) {
    const errors = {};

    if (!form.firstname) {
        errors.firstname = 'Le nom du client est requis.';
    } else if (form.firstname.length < 3) {
        errors.firstname = 'Le nom du client doit avoir au moins 3 caractères.';
    }

    if (!form.lastname) {
        errors.lastname = 'Le prénom du client est requis.';
    } else if (form.lastname.length < 3) {
        errors.lastname = 'Le prénom du client doit avoir au moins 3 caractères.';
    }

    if (!form.phone) {
        errors.phone = 'Le contact du client est requis.';
    } else if (!/^\d{10}$/g.test(form.phone)) {
        errors.phone = 'Le numéro de téléphone doit comporter 10 chiffres.';
    }

    return errors;
}

export function validateSupplierForm(form) {
    const errors = {};

    if (!form.name) {
        errors.name = 'Le nom du fournisseur est requis.';
    } else if (form.name.length < 3) {
        errors.name = 'Le nom du fournisseur doit avoir au moins 3 caractères.';
    }

    if (!form.phone) {
        errors.phone = 'Le contact du fournisseur est requis.';
    } else if (!/^\d{10}$/g.test(form.phone)) {
        errors.phone = 'Le numéro de téléphone doit comporter 10 chiffres.';
    }

    if (!form.email) {
        errors.email = 'L\'email du fournisseur est requis.';
    } else if (!/\S+@\S+\.\S+/g.test(form.email)) {
        errors.email = 'L\'email du fournissur  n\'est pas valide.';
    }

    return errors;
}

export function validateProductForm(form) {
    const errors = {};


    if (!form.supplier_reference) {
        errors.supplier_reference = 'La référence du fournisseur est requise.';
    } else if (form.supplier_reference.length < 3) {
        errors.supplier_reference = 'Le nom du fournisseur doit avoir au moins 3 caractères.';
    }


    if (!form.barcode) {
        errors.barcode = 'Le code bar du fournisseur est requis.';
    } else if (form.barcode.length < 3) {
        errors.barcode = 'Le code doit avoir au moins 3 caractères.';
    }


    if (!form.designation) {
        errors.designation = 'La désignation est requise.';
    } else if (form.designation.length < 3) {
        errors.designation = 'La désignation doit avoir au moins 3 caractères.';
    }

    if (!form.quantity && form.quantity !== 0) {
        errors.quantity = 'La quantité est requise.';
    } else if (form.quantity <= 0) {
        errors.quantity = 'La quantité doit être un nombre positif.';
    }


    if (!form.amount && form.amount !== 0) {
        errors.amount = 'Le montant est requis.';
    } else if (form.amount <= 0) {
        errors.amount = 'Le montant doit être un nombre positif.';
    }

    if (!form.supplier_id) {
        errors.supplier_id = 'Veuillez choisir un fournisseur.';
    }


    return errors;
}

export function validateOrderForm(form) {
    const errors = {};


    if (!form.customer_id) {
        errors.customer_id = 'Veuillez selectionnez le client.';
    } 

    if (!form.payment) {
        errors.payment = 'Veuillez selectionnez la méthode paiement.';
    } 


    


    return errors;
}
