import { useEffect, useState } from "react"
import { Alert,  View, FlatList } from "react-native"
import listData from "./listData"
import Spinner from "./Spinner"

export default function Data({cord}){
    const [isLoading, setIsLoading] = useState(true)
    const [dataSet, setDataSet] = useState([])

    // const detailUrl = "http://www.7timer.info/bin/api.pl?lon=46.9&lat=7.4&product=civillight&output=json"
    const detailUrl = `http://www.7timer.info/bin/api.pl?${cord}&product=civillight&output=json`
    console.log(detailUrl)

    useEffect(() => {
        if (!detailUrl) {
            return
        }
        const loadDataSet = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(detailUrl, {    
                    method: 'GET',
                    headers: {
                        contentType: "application/json"
                    }
                })
    
                if (!response.ok) {
                    Alert.alert("Error", `The Server responded with ${response.status} ${response.statusText}`)
                }
    
                const meteoData = await response.json()

                setDataSet(meteoData.dataseries)
                
            } catch (error) {
                console.log(error)
                Alert.alert("An Error occurred", error.message)
            } finally {
                setIsLoading(false)
            }
        }
    
        loadDataSet()
    }, [])

    return(
        <View>
            {
                isLoading ?
                    <Spinner/>
                    :
                    <View>
                        <FlatList
                            data={dataSet}
                            renderItem={listData}
                        />
                    </View>
            }
        </View>
    )
}