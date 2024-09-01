// components/listData.js
import { View, FlatList, Text, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function listData({ item }){
    // const [watWeather, setWatWeather] = useState(item.weather)
    // if (watWeather.includes("pcloudy")){
    //             watWeather = "TiWeatherPartlySunny"
    //     }
    const watWeather = item.weather

    return(
        <View style={styles.overall}>
            <Text>Datum: {item.date}</Text>
            <View style={styles.FlexLeft}>
                <Ionicons
                        size={60}
                        style={{ marginBottom: -3 }}
                        name={watWeather == "pcloudy" ? "partly-sunny" :
                            watWeather == "mcloudy" ? "partly-sunny" :
                            watWeather == "ts" ? "partly-sunny" :
                            watWeather == "clear" ? "sunny" :
                            watWeather == "lightrain" ? "umbrella" :
                            watWeather == "oshower" ? "umbrella" : watWeather}
                    />
                <Text>{item.weather}</Text>
            </View><View style={styles.FlexRight}>
                <Text style={styles.Large}>{item.temp2m.min}C° </Text>
                <Text style={styles.Large}>{item.temp2m.max}C°</Text>
                <Text>Wind: {item.wind10m_max}KM/H</Text>
            </View>
            
        </View>
    ) 
}
const styles = StyleSheet.create({
    Large: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    FlexLeft: {
        margin: 17,
        flex: 0,
        alignSelf: 'flex-start',
        
    },
    FlexRight: {
        flex: 1, 
        alignSelf: 'flex-end',
        margin: 20
    },
    overall:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 10
    },
    box: {
        width: 50,
        height: 80,
      },
})