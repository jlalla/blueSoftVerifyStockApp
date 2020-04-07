import { AsyncStorage } from "react-native";

export async function getConfig()  {
    var company, user, password;
    try {        
        company = await AsyncStorage.getItem('company');
        if (company !== null) {
            // Our data is fetched successfully
            console.log(company);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        user = await AsyncStorage.getItem('user');
        if (user !== null) {
            // Our data is fetched successfully
            console.log(user);            
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        password = await AsyncStorage.getItem('password');
        if (password !== null) {
            // Our data is fetched successfully
            console.log(password);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return { company, user, password };
}

export async function saveConfig({company, user, password}){
    try {
        await AsyncStorage.setItem('company', company);
    } catch (error) {
        // Error saving data
        console.log(error);
    } 
    try {
        await AsyncStorage.setItem('user', user);
    } catch (error) {
        // Error saving data
        console.log(error);
    } 
    try {
        await AsyncStorage.setItem('password', password);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
}