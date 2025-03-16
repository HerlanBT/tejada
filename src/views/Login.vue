<template>
    <div id="app">
        <Header />
        <main class="container">
            <section class="login">
                <h2>🔐 Iniciar sesión</h2>
                <form @submit.prevent="login">
                    <div class="input-group">
                        <label for="email">📧 Correo electrónico</label>
                        <input type="email" id="email" v-model="email" required placeholder="Ingresa tu correo">
                    </div>

                    <div class="input-group">
                        <label for="password">🔑 Contraseña</label>
                        <input type="password" id="password" v-model="password" required
                            placeholder="Ingresa tu contraseña">
                    </div>

                    <button type="submit">Iniciar sesión</button>
                </form>

                <p v-if="error" class="error">{{ error }}</p>
            </section>
        </main>
        <Footer />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
    // Validación local (por ahora)
    if (email.value === 'admin@root.com' && password.value === '1234') {
        error.value = '⚠️ Todos los campos son obligatorios';
        router.push('/admin-home');
        return;
    }

    try {
        // URL de la API (para futuro)
        const response = await fetch('http://localhost:3000/login', {  // Cambia la URL según tu backend
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login exitoso ✅');
            router.push('/admin-home');
        } else {
            error.value = data.message || 'Correo o contraseña incorrectos';
        }
    } catch (err) {
        error.value = 'Error de conexión con el servidor';
    }
};
</script>
<style scoped>
/* Estilos generales */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ece9e6, #ffffff);
}

.login {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

/* Título */
h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

/* Inputs */
.input-group {
    text-align: left;
    margin-bottom: 15px;
}

label {
    font-size: 14px;
    font-weight: bold;
    color: #555;
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border 0.3s;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

/* Botón */
button {
    background: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #0056b3;
}

/* Error */
.error {
    color: red;
    font-weight: bold;
    margin-top: 10px;
}
</style>