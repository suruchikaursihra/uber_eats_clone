import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = 'jgfZ_4ZpCjEkl9gtIXYlpvMxzU_HNdhgIfDfLueIG6whDdpYjKIjGF5pczbXNKv8c9nEMNUWlMd9pAIaw3BQKpkHqTCqupAjNevd72XflBDouqqNtH9a9FcJ0c2IYXYx';

export default function Home() {

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const url = 'https://api.yelp.com/v3/businesses/search?location=san-francisco';
        fetch(url, {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setRestaurantData(data.businesses);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1, }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}
