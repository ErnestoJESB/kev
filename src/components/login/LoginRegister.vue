<template>
    <div class="form">
        <div class="subtitle">Crea una cuenta</div>
        <div class="input-container ic1">
            <input id="firstname" class="input" type="text" placeholder="">
            <div class="cut"></div>
            <label for="firstname" class="placeholder">Nombre</label>
        </div>
        <div class="input-container ic2">
            <input id="lastname" class="input" type="text" placeholder="">
            <div class="cut"></div>
            <label for="lastname" class="placeholder">Apellido</label>
        </div>
        <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder="">
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Correo
            </label>
        </div>
        <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder="">
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Contraseña
            </label>
        </div>
        <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder="">
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Confirmar contraseña
            </label>
        </div>
        
        <button class="submit">Crear</button>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>