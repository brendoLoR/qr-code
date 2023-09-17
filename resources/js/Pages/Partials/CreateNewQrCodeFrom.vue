<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Gerador de QRCode</h2>

            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Insira o text abaixo.
            </p>
        </header>

        <form @submit.prevent="generateQrCode" class="mt-6 space-y-6">
            <div>
                <InputLabel for="text" value="Link"/>

                <TextInput
                    id="text"
                    ref="text"
                    v-model="text"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete=""
                />

            </div>
            <div>
                <InputLabel for="version" value="Versão"/>

                <Select
                    id="version"
                    ref="version"
                    v-model="version"
                    :options="versions"
                    class="mt-1 block w-full"
                    autocomplete=""
                />
            </div>
            <div>
                <InputLabel for="scale" value="Escala"/>

                <Select
                    id="version"
                    ref="version"
                    v-model="scale"
                    :options="scales"
                    class="mt-1 block w-full"
                    autocomplete=""
                />
            </div>


            <div class="flex items-center gap-4">
                <PrimaryButton>Gerar</PrimaryButton>
            </div>

            <div class="flex items-center">
                <div v-if="qrRedy" class="bg-white">
                    {{ qrCodeLink }}
                    <img :src="qrCodeLink" :alt="text">
                </div>
            </div>
        </form>
    </section>
</template>
<script>

import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Select from "@/Components/Select.vue";

export default {
    components: {Select, PrimaryButton, TextInput, InputLabel},
    data() {
        return {
            text: null,
            qrCodeLink: '',
            qrRedy: false,
            version: 5,
            versions: [
                {text: 'Versão 2', value: 2},
                {text: 'Versão 3', value: 3},
                {text: 'Versão 4', value: 4},
                {text: 'Versão 5', value: 5},
            ],
            scale: 5,
            scales: [
                {text: '1', value: 1},
                {text: '2', value: 2},
                {text: '3', value: 3},
                {text: '4', value: 4},
                {text: '5', value: 5},
                {text: '10', value: 10},
                {text: '15', value: 15},
                {text: '20', value: 20},
            ]
        }
    },
    methods: {
        generateQrCode() {
            axios.post(route('qrcode.generate'), {
                text: this.text,
                version: this.version,
                scale: this.scale,
            }).then(function (respose) {
                this.qrCodeLink = respose.data.file;
                this.qrRedy = true;
                console.log(this.qrRedy)
            }.bind(this));
        },
    }
}
</script>
