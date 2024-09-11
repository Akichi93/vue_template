const base_url = import.meta.env.VITE_API_BASE_URL;

// Fonction utilitaire pour créer les URL d'API avec le préfixe '/api/auth/'
function createApiUrl(endpoint) {
    return `${base_url}/api/auth/${endpoint}`;
}

// Objet contenant toutes les URLs d'API
const apiUrl = {
    authentification: createApiUrl('login'),
    getcustomer: createApiUrl('getcustomer'),
    postcustomer: createApiUrl('postcustomer'),
    seteditcustomer: (uuidCustomer) => `${base_url}/api/auth/editcustomer/${uuidCustomer}`,
    setupdatecustomer: (uuidCustomer) => `${base_url}/api/auth/updatecustomer/${uuidCustomer}`,

    getsupplier: createApiUrl('getsupplier'),
    postsupplier: createApiUrl('postsupplier'),
    seteditsupplier: (uuidSupplier) => `${base_url}/api/auth/editsupplier/${uuidSupplier}`,
    setupdatesupplier: (uuidSupplier) => `${base_url}/api/auth/updatesupplier/${uuidSupplier}`,

    getproduct: createApiUrl('getproduct'),
    postproduct: createApiUrl('postproduct'),
    seteditproduct: (uuidProduct) => `${base_url}/api/auth/editproduct/${uuidProduct}`,
    setupdateproduct: (uuidProduct) => `${base_url}/api/auth/updateproduct/${uuidProduct}`,
    setupdatequantity: (uuidProduct) => `${base_url}/api/auth/updatequantity/${uuidProduct}`,
    setupdatequantity: (uuidProduct) => `${base_url}/api/auth/updatequantity/${uuidProduct}`,
    getproductprice: (uuidProduct) => `${base_url}/api/auth/getproductprice/${uuidProduct}`,
    getproductquantity: (uuidProduct) => `${base_url}/api/auth/getproductquantity/${uuidProduct}`,

    getorder: createApiUrl('getorder'),
    postorder: createApiUrl('postorder'),
    seteditorder: (uuidOrder) => `${base_url}/api/auth/editorder/${uuidOrder}`,

    getdashboard: createApiUrl('dashboard'),
   

};



// Export des fonctions et données
export { createApiUrl, apiUrl };
