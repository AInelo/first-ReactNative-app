import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


const profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-700" >
      <Text className="text-white text-3xl">Mon profile</Text>
      <Link href="/" className='text-red-600'>Home</Link>

    </View>
  )
}

export default profile

const styles = StyleSheet.create({})