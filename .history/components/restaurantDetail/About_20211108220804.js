import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    image: "https://cdn.homedit.com/wp-content/uploads/2016/06/Reds-True-Barbecue-building.jpg",
    name: "Farmhouse Kitchen Thai Cuisine",
    price: '$$',
    reviews: 1244,
    rating: 4.5,
    categories: [{ title: 'Thai' }, { title: 'Vegetarian' }, { title: 'Vegan' }]
}

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formatCategories = (categories).map((cat) => cat.title).join(' · ');
const description = `${formatCategories} ${price ? " · " + price : ''} · 🎫 · ${rating} ⭐️ (${reviews}+)`;

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => {
    return <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
}

const RestaurantTitle = (props) => {
    return <Text style={{ fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15 }}>{props.title}</Text>
}

const RestaurantDescription = (props) => {
    return <Text style={{ fontSize: 15.5, fontWeight: '400', marginTop: 10, marginHorizontal: 15 }}>{props.description}</Text>
}