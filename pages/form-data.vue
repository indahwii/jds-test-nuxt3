<script setup>
import { ref } from 'vue'
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const { pending, data: data } = useFetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
const provinces = data._rawValue
const ages = 100

const cityData = ref(null);
const districtData = ref(null);
const villageData = ref(null);





const name = ref('');
const nik = ref('');
const nokk = ref('');
const age = ref('');
const gender = ref('');
const address = ref('');
const postalcode = ref('');
const rt = ref('');
const rw = ref('');
const salarybefore = ref('');
const salaryafter = ref('');
const reason = ref('');
const selectProvince = ref('');
const selectDistrict = ref('');
const selectVillages = ref('');
const selectRegency = ref('');


 
const generateRandomValue = () => {
  return Math.random();
};


const router = useRouter()

const handleSubmit = async () => {

    // const personalData = ({
    //     name: name.value,
    //     nik: nik.value,
    //     nokk: nokk.value,
    //     age: age.value,
    //     gender: gender.value,
    //     address: address.value,
    //     province: selectProvince.value,
    //     city: selectRegency.value,
    //     district: selectDistrict.value,
    //     village: selectVillages.value,
    //     postalcode: postalcode.value,
    //     rt: rt.value,
    //     rw: rw.value,
    //     salarybefore: salarybefore.value,
    //     salaryafter: salaryafter.value,
    //     reason: reason.value
    // });

    // console.log(personalData)

    const randomValue = generateRandomValue();
    const successThreshold = 0.8;
    const isSuccess = randomValue <= successThreshold;
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isSuccess) {
        alert("Delivery Successful")
         router.push({
            name: 'result',
            query: {
                name: name.value,
                nik: nik.value,
                nokk: nokk.value,
                age: age.value,
                gender: gender.value,
                province: selectProvince.value,
                city: selectRegency.value,
                district: selectDistrict.value,
                village: selectVillages.value,
                address: address.value,
                postalcode: postalcode.value,
                rt: rt.value,
                rw: rw.value,
                salarybefore: salarybefore.value,
                salaryafter: salaryafter.value,
                reason: reason.value,
            }
        });
    } else {
        console.log('Delivery Failed');
    }

};



const changeSelectProvince = async () => {
  try {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectProvince.value}.json`);
    const data = await response.json();
    cityData.value = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const changeSelectRegency = async () => {
    try {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectRegency.value}.json`);
        const data = await response.json();
        districtData.value = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const changeSelectDistrict = async () => {
    try {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectDistrict.value}.json`);
        const data = await response.json();
        villageData.value = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



</script>

<template>
 <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div class="px-4 sm:px-0">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Lakukan pengisian data diri.</p>
            </div>

            <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" @submit.prevent="handleSubmit">
                <div class="px-4 py-6 sm:p-8">
                    <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
                            <div class="mt-2">
                                <input type="text" v-model="name" required autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">NIK</label>
                            <div class="mt-2">
                                <input type="text" v-model="nik" required class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">No KK</label>
                            <div class="mt-2">
                                <input type="text" v-model="nokk" required class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Umur</label>
                            <div class="mt-2">
                                <select v-model="age" required class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option v-for="age in ages" :key="age" :value="age">{{ age }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</label>
                            <div class="mt-2">
                                <select id="gender" required v-model="gender" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="street-address" required class="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
                            <div class="mt-2">
                                <textarea type="text" v-model="address" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Provinsi</label>
                            <div class="mt-2">
                                <select v-model="selectProvince" required @change="changeSelectProvince" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-12">
                                    <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Kota</label>
                            <div class="mt-2">
                                <select v-model="selectRegency" required @change="changeSelectRegency" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-12">
                                    <option v-for="city in cityData" :key="city.id" :value="city.id">{{ city.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Kecamatan</label>
                            <div class="mt-2">
                                <select v-model="selectDistrict" required @change="changeSelectDistrict" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-12">
                                    <option v-for="district in districtData" :key="district.id" :value="district.id">{{ district.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Kelurahan</label>
                            <div class="mt-2">
                                <select v-model="selectVillages" required class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-12">
                                    <option v-for="village in villageData" :key="village.id" :value="village.id">{{ village.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-2 sm:col-start-1">
                            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                            <div class="mt-2">
                                <input type="text" v-model="postalcode" required name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">RT</label>
                            <div class="mt-2">
                                <input type="text" v-model="rt" required name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">RW</label>
                            <div class="mt-2">
                                <input type="text" v-model="rw" required name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Penghasilan sebelum pandemi</label>
                            <div class="mt-2">
                                <input type="text" v-model="salarybefore" required name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Penghasilan setelah pandemi</label>
                            <div class="mt-2">
                                <input type="text" v-model="salaryafter" required name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                            <div class="col-span-full">
                            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Alasan membutuhkan bantuan</label>
                            <div class="mt-2">
                                <textarea type="text" v-model="reason" required name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            <div class="mt-2">
                                <ul class="list-disc">
                                    <li>Kehilangan pekerjaan </li>
                                    <li>Kepala keluarga terdampak atau korban Covid-19</li>
                                    <li>Tergolong fakir/miskin semenjak sebelum Covid-19, atau </li>
                                    <li>Lainnya: … (bisa diisi sendiri)</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <div class="relative flex items-start">
                                <div class="flex h-6 items-center">
                                <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                </div>
                                <div class="ml-3 text-sm leading-6">
                                    <span id="comments-description" class="text-gray-500">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    </div>
 </div>
</template>