<script setup>
    const router = useRouter()

</script>

<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="space-y-12 sm:space-y-16">
                <p>Kementrian Sosial (Kemensos) Republik Indonesia di saat era pandemi Covid-19 harus segera memberikan bantuan kepada masyarakat Indonesia yang terdampak oleh pandemi Covid-19, oleh karena itu Kemensos memberikan arahan kepada setiap Kepala Daerah untuk mengusulkan nama-nama penerima Bantuan Sosial (Bansos).

                Kepala Daerah setempat membutuhkan sebuah aplikasi yang dapat digunakan untuk menginput data-data warganya yang membutuhkan bantuan sosial diera pandemi Covid-19. Aplikasi yang dibutuhkan dapat diakses menggunakan smartphone maupun laptop oleh setiap staf Kepala Daerah.

                Guna memastikan bantuan tersalurkan kepada orang yang tepat, proses verifikasi dapat dilakukan dengan mudah, dan data yang masuk bersifat valid, dibutuhkan sejumlah data berikut.</p>
            </div>
            <div class="flex items-center justify-center">
                <nuxt-link to="/form-data" class="bg-blue-500 text-white py-2 px-4 mt-8 rounded-md hover:bg-blue-600 ">
                Isi Form
                </nuxt-link>
            </div>
        </div>
    </div>
</template>