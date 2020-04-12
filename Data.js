import { AsyncStorage } from "react-native";

export async function getConfig()  {
    let company, password, variants, talleColorAnchoFijo, 
    talleColorCaracter, talleColorSegundoCaracter, talleColorTercerCaracter,
    ordenProductoColorTalle, talleColorProductoDesde, talleColorProductoCantidadDeCaracteres;
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
    try {
        talleColorAnchoFijo = JSON.parse(await AsyncStorage.getItem('talleColorAnchoFijo'));
        if (talleColorAnchoFijo !== null) {
            // Our data is fetched successfully            
            console.log(talleColorAnchoFijo);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        talleColorCaracter = await AsyncStorage.getItem('talleColorCaracter');
        if (talleColorCaracter !== null) {
            // Our data is fetched successfully
            console.log(talleColorCaracter);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        talleColorSegundoCaracter = await AsyncStorage.getItem('talleColorSegundoCaracter');
        if (talleColorSegundoCaracter !== null) {
            // Our data is fetched successfully
            console.log(talleColorSegundoCaracter);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        talleColorTercerCaracter = await AsyncStorage.getItem('talleColorTercerCaracter');
        if (talleColorTercerCaracter !== null) {
            // Our data is fetched successfully
            console.log(talleColorTercerCaracter);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        ordenProductoColorTalle = JSON.parse(await AsyncStorage.getItem('ordenProductoColorTalle'));
        if (ordenProductoColorTalle !== null) {
            // Our data is fetched successfully            
            console.log(ordenProductoColorTalle);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        talleColorProductoDesde = JSON.parse(await AsyncStorage.getItem('talleColorProductoDesde'));
        if (talleColorProductoDesde !== null) {
            // Our data is fetched successfully            
            console.log(talleColorProductoDesde);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    try {
        talleColorAnchoFijo = JSON.parse(await AsyncStorage.getItem('talleColorProductoCantidadDeCaracteres'));
        if (talleColorProductoCantidadDeCaracteres !== null) {
            // Our data is fetched successfully            
            console.log(talleColorProductoCantidadDeCaracteres);
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }

    return { company, password, variants, talleColorAnchoFijo, 
        talleColorCaracter, talleColorSegundoCaracter, talleColorTercerCaracter,
        ordenProductoColorTalle, talleColorProductoDesde, talleColorProductoCantidadDeCaracteres };
}

export async function saveConfig({company, password, 
    variants, talleColorAnchoFijo, 
    talleColorCaracter, talleColorSegundoCaracter, talleColorTercerCaracter,
    ordenProductoColorTalle, talleColorProductoDesde, talleColorProductoCantidadDeCaracteres}){        
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
        await AsyncStorage.setItem('variants', variants);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('talleColorAnchoFijo', talleColorAnchoFijo);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('talleColorCaracter', talleColorCaracter);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('talleColorSegundoCaracter', talleColorSegundoCaracter);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('talleColorTercerCaracter', talleColorTercerCaracter);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('ordenProductoColorTalle', ordenProductoColorTalle);
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('talleColorProductoDesde', JSON.stringify(talleColorProductoDesde));
    } catch (error) {
        // Error saving data
        console.log(error);
    }
    try {
        await AsyncStorage.setItem('talleColorProductoCantidadDeCaracteres', JSON.stringify(talleColorProductoCantidadDeCaracteres));
    } catch (error) {
        // Error saving data
        console.log(error);
    }
}