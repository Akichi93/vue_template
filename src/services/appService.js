import { v4 as uuidv4 } from "uuid";
import { apiUrl } from "../utils/constants/apiUrl.js";
import axiosService from "./axiosService.js"; // Importer AxiosService
import axios, { Axios } from "axios";

class appService {
  // Customer
  async postCustomer(form) {
    const uuid = uuidv4();

    const newCustomerData = {
      firstname: form.firstname,
      lastname: form.lastname,
      phone: form.phone,
      uuidCustomer: uuid,
    };

    try {
      const updatedCustomers = await axios.post(
        apiUrl.postcustomer,
        newCustomerData
      );
      return updatedCustomers.data;
    } catch (error) {
      throw new Error("Échec de l'insertion du client");
    }
  }

  async getCustomer() {
    try {
      const response = await axiosService.get(apiUrl.getcustomer);

      return response.data;
    } catch (error) {
      return {
        success: false,
        error: "Erreur lors de la récupération des clients",
      };
    }
  }

  async getCustomerByUuid(uuid) {
    try {
      const response = await axios.get(apiUrl.seteditcustomer(uuid));
      return response.data;
    } catch (error) {
      return { success: false, error: "Erreur lors de la récupération" };
    }
  }

  async updateCustomer(customertoedit, uuidCustomerToUpdate) {
    try {
      const newData = {
        firstname: customertoedit.firstname,
        lastname: customertoedit.lastname,
        phone: customertoedit.phone,
      };

      const response = await axios.post(
        apiUrl.setupdatecustomer(uuidCustomerToUpdate),
        newData
      );
      return response.data;
    } catch (error) {
      return {
        success: false,
        error: "Erreur lors de la mise à jour du client",
      };
    }
  }
}

export default new appService();
