import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity className = {`bg-secondary rounded-xl min-h-[62px] justify-center items-center`}>
      <Text className = "text-primary font-psemibold text-lg m-2">CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton