<template>
    <div class="job-card">
        <Card v-if="jobData">
            <template #header>
                <img :src="jobData.company_logo" alt="Company Logo" />
            </template>
            <template #title> {{ jobData.title }} </template>
            <template #subtitle>
                <p>{{ jobData.company_name }}</p>
                <p>{{ jobData.category }}</p>
                <p>{{ jobData.salary }}</p>
                <p>{{ jobData.publication_date }}</p>
            </template>
            <template #footer>
                <div v-html="jobData.description"></div>
            </template>
        </Card>
    </div>
</template>
<script>
import Card from 'primevue/card';
import axios from 'axios';
import { UserApiService } from "@/services/user-api.service";
export default {
    name: "Card-information-component",
    props: {
        apiUrl: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            jobData: null,
        };
    },
    components: {
        Card,
    },
    mounted() {
        const userApiService = new UserApiService();

        userApiService.getAll()
            .then((response) => {
                if (response.data && response.data.jobs && response.data.jobs.length > 0) {
                    this.jobData = response.data.jobs[0];
                } else {
                    console.error('No se encontraron datos de la convocatoria.');
                }
            })
            .catch((error) => {
                console.error('Error al obtener los datos de la convocatoria:', error);
            });
    },
};
</script>

<style scoped>
.job-card {
    text-align: center;
    margin: 20px;
}
</style>