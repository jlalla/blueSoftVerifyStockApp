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
        password = await AsyncStorage.getItem('password');
        if (password !== null) {
            // Our data is fetched successfully
            console.log(password);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        variants = JSON.parse(await AsyncStorage.getItem('variants'));
        if (variants !== null) {
            // Our data is fetched successfully            
            console.log(variants);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }

    return { company, password, variants };
}

export async function saveConfig({company, password, variants}){    
    try {
        await AsyncStorage.setItem('company', company);
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
    try {
        await AsyncStorage.setItem('variants', JSON.stringify(variants));
    } catch (error) {
        // Error saving data
        console.log(error);
    }
}