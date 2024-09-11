<template>
  <div class="main-wrapper">
    <Header />

    <Sidebar />

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Bienvenue {{ name }}!</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item active">Tableau de bord</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-solid fa-cubes"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>{{ dashboardData.total_products }}</h3>
                  <span>Produits</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-solid fa-dollar-sign"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>{{ dashboardData.total_customers }}</h3>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-regular fa-gem"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>{{ dashboardData.total_suppliers }}</h3>
                  <span>Fournisseurs</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-solid fa-user"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>{{ dashboardData.total_orders }}</h3>
                  <span>Commandes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          
          <div class="col-md-6">
            <Bar :data="chartDonnees" />
          </div>
        </div>

     
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
import AppStorage from "../db/AppStorage";
import Header from "../layout/Header.vue";
import Sidebar from "../layout/Sidebar.vue";
import { apiUrl } from "../utils/constants/apiUrl";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "dashboard",
  data() {
    return {
      name: AppStorage.getUser(),
      dashboardData: {},
      chartDonnees: {
        labels: [""],
        datasets: [
          {
            label: "Nombre de produit par fournisseur",
            backgroundColor: "#f87979",
            data: [0],
          },
        ],
      },
    };
  },
  created() {
    this.fetchDashboardData();
    this.getData(); // Appel à la méthode getData ici
  },
  methods: {
    async fetchDashboardData() {
      try {
        const response = await axios.get(apiUrl.getdashboard);
        this.dashboardData = response.data;
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    },
    async getData() {
      try {
        const response = await axios.get(apiUrl.getdashboard);

        this.graphs = response.data.suppliers;
        console.log(response);

        const label = response.data.suppliers.map((supplier) => supplier.name);
        const donnees = response.data.suppliers.map((supplier) => supplier.y);

        this.chartDonnees = {
          labels: label,
          datasets: [
            {
              label: "Nombre de produit par fournisseur",
              backgroundColor: [
                "#123E6B",
                "#97B0C4",
                "#A5C8ED",
                "#F26D85",
                "#4CAF50",
                "#FFC107",
                "#9C27B0",
                "#FF5722",
                "#795548",
                "#009688",
              ],
              data: donnees,
            },
          ],
        };
      } catch (error) {
        console.error("Error fetching data for chart", error);
      }
    },
  },
  components: { Header, Sidebar, Bar },
};
</script>
