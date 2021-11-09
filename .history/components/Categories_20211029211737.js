import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

export default function Categories() {

    const items = [
        {
            image: require("../assets/images/shopping-bag.png"),
            text: "Pick-up",
        },
        {
            image: require("../assets/images/soft-drink.png"),
            text: "Soft Drinks",
        },
        {
            image: require("../assets/images/bread.png"),
            text: "Bakery Items",
        },
        {
            image: require("../assets/images/fast-food.png"),
            text: "Fast Foods",
        },
        {
            image: require("../assets/images/deals.png"),
            text: "Deals",
        },
        {
            image: require("../assets/images/coffee.png"),
            text: "Coffee & Tea",
        },
        {
            image: require("../assets/images/desserts.png"),
            text: "Desserts",
        },
    ];

    return (
        <View style={{backgroundColor: '#fff',paddingVertical:5 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                <View key={index} style={{ alignItems: "center", marginRight: 30, marginLeft: 5 }}>
                    <Image source={item.image}
                        style={{
                            height: 40,
                            width: 50,
                            resizeMode: 'contain',
                        }} />
                    <Text style={{ fontSize: 13, fontWeight: '800' }}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
        </View >
    )
}