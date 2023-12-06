<script setup>
    const route = useRoute()

    const name = route.query.name;
    const nik = route.query.nik;
    const nokk = route.query.nokk;
    const age = route.query.age;
    const gender = route.query.gender;
    const address = route.query.address;
    const postalcode = route.query.postalcode;
    const province = route.query.province;
    const city = route.query.city;
    const district = route.query.district;
    const village = route.query.village;
    const rt = route.query.rt;
    const rw = route.query.rw;
    const salarybefore = route.query.salarybefore;
    const salaryafter = route.query.salaryafter;
    const reason = route.query.reason;


    const isLoading = ref(true);
    const selectedProvince = ref({});
    const selectedCity = ref({});
    const selectedDistrict = ref({});
    const selectedVillages = ref({});



    const fetchProvince = async () => {
        try {
            const response = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
            const data = await response.json();

            selectedProvince.value = data.find(item => item.id === province);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            isLoading.value = false;
        }
    };

    const fetchCity = async () => {
        try {
            const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province}.json`);
            const data = await response.json();

            selectedCity.value = data.find(item => item.id === city);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            isLoading.value = false;
        }
    };

    const fetchDistrict = async () => {
        try {
            const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${city}.json`);
            const data = await response.json();

            selectedDistrict.value = data.find(item => item.id === district);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            isLoading.value = false;
        }
    };

    const fetchVillages = async () => {
        try {
            const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${district}.json`);
            const data = await response.json();

            selectedVillages.value = data.find(item => item.id === village);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(async () => {
        await Promise.all([fetchProvince(), fetchCity(), fetchDistrict(), fetchVillages() ]);
    });
    
 </script>


<template>
 <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="space-y-12 sm:space-y-16">
            <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Data - data yang sudah isi sebelumnya</p>

                <div class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Nama</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ name }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">NIK</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ nik }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">NO KK</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ nokk }}</label>
                        </div>
                    </div>
                     <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Usia</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ age }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Jenis Kelamin</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ gender }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Provinsi</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ selectedProvince.name }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Kota</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ selectedCity.name }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Kecamatan</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{  selectedDistrict.name }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Kelurahan</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ selectedVillages.name }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Alamat</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ address }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Kode Pos</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ postalcode }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">RT & RW</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">RT{{ rt }} RW {{ rw }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Gaji sebelum pandemi</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ salarybefore }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Gaji sesudah pandemi</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ salaryafter }}</label>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900 sm:pt-1.5">Alasan</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <label for="first-name" class="block text-sm  leading-6 text-gray-900 sm:pt-1.5">{{ reason }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
