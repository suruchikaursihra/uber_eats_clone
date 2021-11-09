import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://www.wallpapertip.com/wmimgs/233-2339017_restaurant-food-architecture-interior-design-room-wallpaper.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
    {
        name: "Framhouse Kitchen Thai Cuisine",
        image_url:
            "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHRydWNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 900,
        rating: 4.4,
    },
];

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {localRestaurants.map((restaurant, index) => (
                <View key={index} style={{ marginTop: 10, borderRadius: 6, margin: 3, padding: 15, backgroundColor: 'white' }}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            url: props.image,
        }}
            style={{ width: '100%', height: 200 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>

    </>
);

const RestaurantInfo = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ color: 'gray', fontSize: 13 }}>30-40 • min</Text>
        </View>
        <View style={{ backgroundColor: '#eee', justifyContent: 'center', height: 30, width: 30, alignItems: 'center', borderRadius: 15 }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);