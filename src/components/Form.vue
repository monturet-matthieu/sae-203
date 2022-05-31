<template>
    <form @submit.prevent="onCnx()">
        <div>            
            <div>
                <button>Email :</button>
            </div>
            <input type="text" v-model="user.email" required />
        </div>
        
        <div>
            <div>
                <button>Mot de passe :</button>
            </div>
            <input type="password" v-model="user.password" required />
        </div>
        
        <div v-if="message!=null" >
            {{ message }}
        </div>
        
        <div>
            <button @click="onDcnx()">
                Connexion
            </button>
            <button type="submit">
                Déconnexion
            </button>
        </div>
    </form>
</template>